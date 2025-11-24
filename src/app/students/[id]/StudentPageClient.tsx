"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Page from "@/components/layout/Page/Page";
import Student from "@/components/Student/Student";
import { getStudentByIdApi } from "@/api/studentsApi";
import type StudentInterface from "@/types/StudentInterface";

interface StudentPageClientProps {
  params: {
    id: string;
  };
}

const StudentPageClient = ({
  params,
}: StudentPageClientProps): React.ReactNode => {
  console.log("StudentPageClient rendered with params:", params);

  const [student, setStudent] = useState<StudentInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const urlParams = useParams();

  useEffect(() => {
    const fetchStudent = async () => {
      const id = params?.id || urlParams?.id;

      if (!id) {
        setError("ID студента не найден");
        setLoading(false);
        return;
      }

      const studentId = parseInt(id as string);
      console.log("studentId", studentId);

      if (isNaN(studentId)) {
        setError("Неверный ID студента");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const studentData = await getStudentByIdApi(studentId);

        if (!studentData) {
          setError("Студент не найден");
        } else {
          setStudent(studentData);
        }
      } catch (err) {
        console.error("Error fetching student:", err);
        setError("Ошибка при загрузке данных студента");
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [params.id]);

  if (loading) {
    return (
      <Page>
        <div>Загрузка...</div>
      </Page>
    );
  }

  if (error) {
    return (
      <Page>
        <div>
          <h1>Ошибка</h1>
          <p>{error}</p>
          <button onClick={() => router.push("/students")}>
            Вернуться к списку студентов
          </button>
        </div>
      </Page>
    );
  }

  if (!student) {
    return (
      <Page>
        <div>
          <h1>Студент не найден</h1>
          <button onClick={() => router.push("/students")}>
            Вернуться к списку студентов
          </button>
        </div>
      </Page>
    );
  }

  return (
    <Page>
      <Student student={student} />
    </Page>
  );
};

export default StudentPageClient;

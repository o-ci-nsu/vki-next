"use client";

import styles from "./Students.module.scss";
import StudentInterface from "@/types/StudentInterface";
import useStudents from "@/hooks/useStudents";
import Student from "./Student/Student";
import { AddStudentForm } from "./AddStudentForm/AddStudentForm";
import CreateStudentDto from "@/dto/CreateStudentDto";

const Students = (): React.ReactElement => {
  const { students, deleteStudentMutate, createStudentMutate } = useStudents();

  /**
   * Удаление студента - обработчик события нажатия "удалить"
   * @param studentId Ид студента
   */
  const onDeleteHandler = (studentId: number): void => {
    if (confirm("Удалить студента?")) {
      console.log("onDeleteHandler", studentId);
      debugger;

      deleteStudentMutate(studentId);
    }
  };

  /**
   * Добавления студента - обработчик события нажатия "добавить"
   * @param studentFormField Форма студента
   */
  const onAddHandler = (dto: CreateStudentDto): void => {
    console.log("Добавление студента", dto);
    debugger;

    createStudentMutate(dto);
  };

  return (
    <div className={styles.Groups}>
      <div className={styles.mainContent}>
        <AddStudentForm createStudentMutate={onAddHandler} />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.studentsContainer}>
          {students.map((student: StudentInterface, i: number) => (
            <Student key={i} student={student} onDelete={onDeleteHandler} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Students;

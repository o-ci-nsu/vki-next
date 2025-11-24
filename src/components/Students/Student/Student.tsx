import type StudentInterface from "@/types/StudentInterface";
import styles from "./Student.module.scss";
import Link from "next/link";

interface Props {
  student: StudentInterface;
  onDelete: (id: number) => void;
}

const Student = ({ student, onDelete }: Props): React.ReactElement => {
  const onDeleteHandler = (): void => {
    onDelete(student.id);
  };

  return (
    <div
      className={`${styles.Student} ${
        student.isDeleted ? styles["--isDeleted"] : ""
      } ${student.isCreating ? styles["--isCreating"] : ""} `}
    >
      <div className={styles.studentInfo}>
        <Link href={`/students/${student.id}`} className={styles.studentLink}>
          {`${student.isCreating ? "" : `${student.id} - `}${student.lastName} ${
            student.firstName
          } ${student.middleName}`}
        </Link>
        {student.group && (
          <div className={styles.groupInfo}>
            Группа: {student.group.name}
          </div>
        )}
      </div>
      <button onClick={onDeleteHandler} className={styles.deleteButton}>
        Удалить
      </button>
    </div>
  );
};

export default Student;

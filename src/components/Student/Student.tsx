import type StudentInterface from '@/types/StudentInterface';
import styles from './Student.module.scss';
import BackNavigation from '@/components/common/BackNavigation/BackNavigation';

interface Props {
  student: StudentInterface;
}

const Student = ({ student }: Props): React.ReactElement => (
  <div className={`${styles.Student}`}>
    <BackNavigation href="/students" text="список студентов" />

    <h1>{`${student.lastName} ${student.firstName} ${student.middleName}`}</h1>

    <div className={styles.row}>
      <div>ИД:</div>
      <div>{student.id}</div>
    </div>
    <div className={styles.row}>
      <div>Группа:</div>
      <div>{student?.group?.name}</div>
    </div>
    <div className={styles.row}>
      <div>Фамилия:</div>
      <div>{student?.lastName}</div>
    </div>
    <div className={styles.row}>
      <div>Имя:</div>
      <div>{student?.firstName}</div>
    </div>
    <div className={styles.row}>
      <div>Отчество:</div>
      <div>{student?.middleName}</div>
    </div>

  </div>
);

export default Student;

import type StudentInterface from '@/types/StudentInterface';
import styles from './Student.module.scss';
import BackNavigation from '@/components/common/BackNavigation/BackNavigation';

interface Props {
  student: StudentInterface;
}

const Student = ({ student }: Props): React.ReactElement => (
  <div className={styles.Student}>
    <BackNavigation href="/students" text="список студентов" />

    <div className={styles.profileHeader}>
      <div className={styles.avatar}>👤</div>
      <h1>{`${student.lastName} ${student.firstName} ${student.middleName}`}</h1>
    </div>

    <div className={styles.studentCard}>
      <div className={styles.row}>
        <div className={styles.label}>ИД:</div>
        <div className={styles.value}>{student.id}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>Группа:</div>
        <div className={styles.value}>{student?.group?.name || 'Не указана'}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>Фамилия:</div>
        <div className={styles.value}>{student?.lastName}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>Имя:</div>
        <div className={styles.value}>{student?.firstName}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>Отчество:</div>
        <div className={styles.value}>{student?.middleName}</div>
      </div>
      {student?.contacts && (
        <div className={styles.row}>
          <div className={styles.label}>Контакты:</div>
          <div className={styles.value}>{student.contacts}</div>
        </div>
      )}
    </div>
  </div>
);

export default Student;

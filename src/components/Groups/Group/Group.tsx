import type GroupInterface from '@/types/GroupInterface';
import type StudentInterface from '@/types/StudentInterface';
import Link from 'next/link';
import styles from './Group.module.scss';

interface GroupProps {
  group: GroupInterface;
}

const Group = ({ group }: GroupProps): React.ReactElement => (
  <div className={styles.Group}>
    <h2 className={styles.groupName}>{group.name}</h2>
    <div className={styles.groupInfo}>
      <div className={styles.contacts}>
        <strong>Контакты:</strong> {group.contacts}
      </div>
    </div>
    
    {group.students && group.students.length > 0 && (
      <div className={styles.studentsSection}>
        <h3>Студенты группы ({group.students.length}):</h3>
        <div className={styles.studentsList}>
          {group.students.map((student: StudentInterface) => (
            <Link 
              key={student.id} 
              href={`/students/${student.id}`}
              className={styles.studentLink}
            >
              {student.lastName} {student.firstName} {student.middleName}
            </Link>
          ))}
        </div>
      </div>
    )}
    
    {(!group.students || group.students.length === 0) && (
      <div className={styles.noStudents}>
        В группе пока нет студентов
      </div>
    )}
  </div>
);

export default Group;

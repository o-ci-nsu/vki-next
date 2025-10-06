'use client';

import styles from './Students.module.scss';
import StudentInterface from '@/types/StudentInterface';
import useStudents from '@/hooks/useStudents';
import Student from './Student/Student';

const Students = (): React.ReactElement => {
  const { students, deleteStudentMutate } = useStudents();

  return (
    <div className={styles.Groups}>
      {students.map((student: StudentInterface, i:number) => (
        <Student key={i} student={student} onDelete={deleteStudentMutate}/>
      ))}
    </div>
  );
};

export default Students;

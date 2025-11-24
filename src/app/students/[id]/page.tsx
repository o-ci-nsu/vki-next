import StudentPageClient from './StudentPageClient';
import { type Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Студент - Вэб разработка ВКИ - Next.js шаблон',
  description: 'Информация о студенте',
};

interface StudentPageProps {
  params: {
    id: string;
  };
}

const StudentPage = ({ params }: StudentPageProps): React.ReactNode => {
  return <StudentPageClient params={params} />;
};

export default StudentPage;

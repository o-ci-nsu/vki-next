import Link from 'next/link';
import styles from './BackNavigation.module.scss';

interface BackNavigationProps {
  href: string;
  text: string;
}

const BackNavigation = ({ href, text }: BackNavigationProps): React.ReactElement => (
  <Link href={href} className={styles.BackNavigation}>
    {'<< '}
    {text}
  </Link>
);

export default BackNavigation;

import Page from '@/components/layout/Page/Page';
import styles from './page.module.scss';

const HomePage = (): React.ReactNode => {
  return (
    <Page>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Система управления студентами ВКИ
          </h1>
          <p className={styles.heroSubtitle}>
            Современная платформа для управления студентами и группами с интуитивным интерфейсом
          </p>
          <div className={styles.heroButtons}>
            <a href="/students" className={styles.primaryButton}>
              Просмотреть студентов
            </a>
            <a href="/groups" className={styles.secondaryButton}>
              Управление группами
            </a>
          </div>
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Возможности системы</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👥</div>
              <h3>Управление студентами</h3>
              <p>
                Добавляйте, редактируйте и удаляйте информацию о студентах. 
                Просматривайте подробную информацию о каждом студенте.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎓</div>
              <h3>Организация групп</h3>
              <p>
                Создавайте и управляйте учебными группами. 
                Отслеживайте состав групп и связи между студентами и группами.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3>Удобная навигация</h3>
              <p>
                Интуитивный интерфейс позволяет быстро находить нужную информацию 
                и выполнять операции с данными.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔗</div>
              <h3>Связи и отношения</h3>
              <p>
                Система автоматически отслеживает связи между студентами и группами, 
                обеспечивая целостность данных.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutContent}>
            <h2 className={styles.sectionTitle}>О системе</h2>
            <p className={styles.aboutText}>
              Данная система разработана для Военно-космической академии имени А.Ф. Можайского 
              в рамках изучения современных веб-технологий. Система построена с использованием 
              Next.js, React, TypeScript и современных подходов к разработке пользовательских интерфейсов.
            </p>
            <p className={styles.aboutText}>
              Дизайн вдохновлен принципами Material Design от Google и Human Interface Guidelines 
              от Apple, что обеспечивает знакомый и удобный пользовательский опыт.
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default HomePage;

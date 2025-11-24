'use client';

import useGroups from '@/hooks/useGroups';
import type GroupInterface from '@/types/GroupInterface';
import Group from './Group/Group';
import styles from './Groups.module.scss';

const Groups = (): React.ReactElement => {
  const { groups } = useGroups();

  return (
    <div className={styles.Groups}>
      <div className={styles.groupsGrid}>
        {groups.map((group: GroupInterface) => (
          <Group key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default Groups;

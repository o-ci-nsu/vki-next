import type ChildrenType from "@/types/ChildrenType";

import styles from "./Page.module.scss";

interface Props {
  children?: ChildrenType;
}

const Page = ({ children }: Props): React.ReactElement => (
  <div className={styles.mainComponent}>{children}</div>
);

export default Page;

import styles from "./staff-manage.module.css";
import { ReactNode } from "react";

interface StaffManageProps {
  children: ReactNode;
}

export default function StaffManage({ children }: StaffManageProps) {
  return <section className={styles.manage_staff}>{children}</section>;
}

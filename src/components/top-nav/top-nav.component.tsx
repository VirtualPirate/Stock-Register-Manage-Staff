import styles from "./top-nav.module.css";

import { useContext } from "react";
import { AddStaffDialogContext } from "../../context/add-staff-dialog.context";

export default function TopNav() {
  const { setModalState } = useContext(AddStaffDialogContext);

  return (
    <section className={styles.top_section}>
      <h1 className="text-xl font-bold"> Manage Staff </h1>
      <button
        className={styles.add_staff_button}
        onClick={() => setModalState(true)}
      >
        Add Staff
      </button>
    </section>
  );
}

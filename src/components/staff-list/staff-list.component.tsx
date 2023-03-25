import styles from "./staff.list.module.css";

import { MouseEventHandler, useContext } from "react";
import { StaffsContext } from "../../context/staffs.context";

import { EditStaffContext } from "../../context/edit-staff.context";
import { StaffType } from "../../utils/staff-requests";

import { EditStaffDialogContext } from "../../context/edit-staff-dialog.context";

export default function StaffList() {
  const { staffs, deleteStaff_ } = useContext(StaffsContext);
  const { modalState, setModalState } = useContext(EditStaffDialogContext);

  const {
    name,
    setName,
    countryCode,
    setCountryCode,
    mobileNumber,
    setMobileNumber,
    role,
    setRole,
    staffId,
    setStaffId,
  } = useContext(EditStaffContext);

  function editStaff(staff: StaffType) {
    return (e: any) => {
      console.log("Edit Dialog", modalState);
      e.preventDefault();

      setName(staff.name);
      setCountryCode(staff.mobile.substring(0, 3));
      setMobileNumber(staff.mobile.substring(3));
      setStaffId(staff.staffId);

      setModalState(true);
    };
  }

  return (
    <div className={styles.list_box}>
      <div className={styles.staff_table}>
        <span>Staff</span>
        <span>Mobile Number</span>
        <span>Role</span>
      </div>

      {staffs?.map((staff, index) => (
        <div className={styles.staff_values} key={index}>
          <span>{staff.name}</span>
          <span>{staff.mobile}</span>
          <span>Sales Operator</span>

          <div className={styles.action_buttons}>
            <button>Change Role</button>
            <button>Remove Permission</button>
            <button onClick={editStaff(staff)}>Rename Staff</button>
            <button
              onClick={() => deleteStaff_(staff.staffId)}
              className={styles.delete_button}
            >
              Delete Staff
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

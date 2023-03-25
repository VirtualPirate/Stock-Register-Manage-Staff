import { useContext, useRef, MouseEvent, useEffect } from "react";
import { EditStaffDialogContext } from "../../context/edit-staff-dialog.context";
import EditStaff from "../edit-staff/edit-staff.component";

import styles from "./edit-staff-modal.module.css";

export default function EditStaffModal() {
  const { modalState, setModalState } = useContext(EditStaffDialogContext);
  const galleryDialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    setModalState(false);
  }, []);

  useEffect(() => {
    if (modalState && !galleryDialog.current?.open)
      // if modal is open
      galleryDialog.current?.showModal();
    else {
      galleryDialog.current?.close();
    }
  }, [modalState]);

  function openModal() {
    setModalState(true);
    // galleryDialog.current?.showModal();
  }

  function closeModal() {
    setModalState(false);
    // galleryDialog.current?.close();
  }

  function dialogClickEvent(event: MouseEvent<HTMLDialogElement>) {
    const rect = galleryDialog.current?.getBoundingClientRect();

    const clickedInDialog =
      rect!.top <= event.clientY &&
      event.clientY <= rect!.top + rect!.height &&
      rect!.left <= event.clientX &&
      event.clientX <= rect!.left + rect!.width;

    if (clickedInDialog === false) closeModal();
  }

  return (
    <dialog
      ref={galleryDialog}
      className={styles.edit_staff_dialog}
      onClick={dialogClickEvent}
    >
      <EditStaff />
    </dialog>
  );
}

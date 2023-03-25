import { useContext, useRef, MouseEvent, useEffect } from "react";
import { AddStaffDialogContext } from "../../context/add-staff-dialog.context";
import AddStaff from "../add-staff/add-staff.component";

import styles from "./add-staff-modal.module.css";

export default function AddStaffModal() {
  const { modalState, setModalState } = useContext(AddStaffDialogContext);
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
      className={styles.add_staff_dialog}
      onClick={dialogClickEvent}
    >
      <AddStaff />
    </dialog>
  );
}

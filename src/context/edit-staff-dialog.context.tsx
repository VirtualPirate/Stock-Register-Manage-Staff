import { createContext, useState, ReactNode } from "react";

export type EditStaffDialogContextType = {
  modalState: boolean;
  setModalState: (arg: boolean) => void;
  toggleModalState: () => void;
};

export const EditStaffDialogContext = createContext<EditStaffDialogContextType>(
  {
    modalState: false,
    setModalState: (arg: boolean) => {},
    toggleModalState: () => {},
  }
);

type EditStaffDialogContextProviderType = {
  children: ReactNode;
};

export const EditStaffDialogContextProvider = ({
  children,
}: EditStaffDialogContextProviderType) => {
  const [modalState, setModalState] = useState<boolean>(false);

  function toggleModalState() {
    setModalState(!modalState);
  }

  return (
    <EditStaffDialogContext.Provider
      value={{ modalState, setModalState, toggleModalState }}
    >
      {children}
    </EditStaffDialogContext.Provider>
  );
};

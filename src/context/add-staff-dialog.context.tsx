import { createContext, useState, ReactNode } from "react";

export type AddStaffDialogContextType = {
  modalState: boolean;
  setModalState: (arg: boolean) => void;
  toggleModalState: () => void;
};

export const AddStaffDialogContext = createContext<AddStaffDialogContextType>({
  modalState: false,
  setModalState: (arg: boolean) => {},
  toggleModalState: () => {},
});

type AddStaffDialogContextProviderType = {
  children: ReactNode;
};

export const AddStaffDialogContextProvider = ({
  children,
}: AddStaffDialogContextProviderType) => {
  const [modalState, setModalState] = useState<boolean>(false);

  function toggleModalState() {
    setModalState(!modalState);
  }

  return (
    <AddStaffDialogContext.Provider
      value={{ modalState, setModalState, toggleModalState }}
    >
      {children}
    </AddStaffDialogContext.Provider>
  );
};

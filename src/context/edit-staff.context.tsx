import { createContext, useState, ReactNode } from "react";

export type EditStaffContextType = {
  name: string;
  setName: (arg: string) => void;
  countryCode: string;
  setCountryCode: (arg: string) => void;
  mobileNumber: string;
  setMobileNumber: (arg: string) => void;

  role: string;
  setRole: (arg: string) => void;

  staffId: string;
  setStaffId: (arg: string) => void;
};

export const EditStaffContext = createContext<EditStaffContextType>({
  name: "",
  setName: () => {},
  countryCode: "",
  setCountryCode: () => {},
  mobileNumber: "",
  setMobileNumber: () => {},

  role: "",
  setRole: () => {},

  staffId: "",
  setStaffId: () => {},
});

type EditStaffContextProviderType = {
  children: ReactNode;
};

export const EditStaffContextProvider = ({
  children,
}: EditStaffContextProviderType) => {
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const [role, setRole] = useState<string>("admin");

  const [staffId, setStaffId] = useState("");

  return (
    <EditStaffContext.Provider
      value={{
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
      }}
    >
      {children}
    </EditStaffContext.Provider>
  );
};

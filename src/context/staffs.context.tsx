import { createContext, useState, ReactNode, useEffect } from "react";
import {
  StaffType,
  AddStaffType,
  UpdateStaffType,
  addStaff,
  getAllStaffs,
  updateStaff,
  deleteStaff,
} from "../utils/staff-requests";

export type StaffsContextType = {
  staffs: Array<StaffType> | undefined;
  setStaffs: (arg: Array<StaffType>) => void;

  addStaff_: (data: AddStaffType) => void;
  updateStaff_: (data: UpdateStaffType) => void;
  deleteStaff_: (staffId: string) => void;
};

export const StaffsContext = createContext<StaffsContextType>({
  staffs: undefined,
  setStaffs: () => {},

  addStaff_: () => {},
  updateStaff_: () => {},
  deleteStaff_: () => {},
});

type StaffsContextProviderType = {
  children: ReactNode;
};

export const StaffsContextProvider = ({
  children,
}: StaffsContextProviderType) => {
  const [staffs, setStaffs] = useState<Array<StaffType> | undefined>(undefined);

  useEffect(() => {
    getAllStaffs_().then((data) => setStaffs(data));
  }, []);

  async function getAllStaffs_() {
    const staffs = (await getAllStaffs()).data.response;
    return staffs;
  }

  async function addStaff_(data: AddStaffType) {
    await addStaff(data);
    const staffs = (await getAllStaffs()).data.response;
    setStaffs(staffs);
  }

  async function updateStaff_(data: UpdateStaffType) {
    await updateStaff(data);
    const staffs = (await getAllStaffs()).data.response;
    setStaffs(staffs);
  }

  async function deleteStaff_(staffId: string) {
    await deleteStaff(staffId);
    const staffs = (await getAllStaffs()).data.response;
    setStaffs(staffs);
  }

  return (
    <StaffsContext.Provider
      value={{ staffs, setStaffs, addStaff_, updateStaff_, deleteStaff_ }}
    >
      {children}
    </StaffsContext.Provider>
  );
};

import { useContext, useEffect, useState } from "react";
import { StaffsContext } from "../../context/staffs.context";
import { EditStaffContext } from "../../context/edit-staff.context";

import { businessId } from "../../utils/staff-requests";

import permissions from "../../models/permissions.model";

import { EditStaffDialogContext } from "../../context/edit-staff-dialog.context";

export default function EditStaff() {
  const { modalState, setModalState } = useContext(EditStaffDialogContext);
  const { updateStaff_ } = useContext(StaffsContext);

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
  //   const [countryCode, setCountryCode] = useContext(EditStaffContext);
  //   const [mobileNumber, setMobileNumber] = useContext(EditStaffContext);

  //   const [role, setRole] = useContext<string>("admin");

  const [roleTitle, setRoleTitle] = useState<string | undefined>("");
  const [permissionList, setPermissionList] = useState<
    Array<string> | undefined
  >();

  useEffect(() => {
    const roleData = permissions.find((data) => data.name === role);
    setRoleTitle(roleData?.title);
    setPermissionList(roleData?.permission_list);
  }, [role]);

  return (
    <div className="w-[800px] rounded-[10px] border border-[#ddd] bg-[#f9f9ff]">
      <div className="flex justify-between p-2 bg-white rounded-t-[10px]">
        <div className="mx-2">Edit Staff</div>
        <button onClick={() => setModalState(false)}>
          <img src="/cross.svg" className="w-3 mx-4" alt="" />
        </button>
      </div>
      <form className="my-4 p-4">
        <div className="grid grid-cols-[_1fr_1fr] gap-4">
          <div className="flex flex-col">
            <label>Staff Name</label>
            <input
              className="p-4 rounded-[4px] border border-[#ddd]"
              placeholder="Enter Here"
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>

          <div className="grid grid-cols-[_1fr_4fr] gap-2">
            <div className="flex flex-col">
              <label>Code</label>
              <input
                className="p-4 w-20 rounded-[4px] border border-[#ddd]"
                type="text"
                value={countryCode}
                onChange={(event) => {
                  setCountryCode(event.target.value);
                }}
              />
            </div>
            <div className="flex flex-col">
              <label>Mobile Number</label>
              <input
                className="p-4 rounded-[4px] border border-[#ddd]"
                placeholder="Enter Here"
                type="text"
                value={mobileNumber}
                onChange={(event) => {
                  setMobileNumber(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label> Select Store </label>
            <select
              name="platform"
              className="p-4 rounded-[4px] border border-[#ddd]"
            >
              <option value="store_a">Store A</option>
              <option value="store_b">Store B</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label> Select Role </label>
            <select
              name="platform"
              className="p-4 rounded-[4px] border border-[#ddd]"
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option value="admin">Store Admin</option>
              <option value="operator">Store Operator</option>
              <option value="purchase_operator">Sales Purchase Operator</option>
            </select>
          </div>
        </div>
      </form>

      <div className="m-4 p-4 bg-white">
        <h1 className="font-medium">{roleTitle}</h1>

        <ul className="text-gray-500 list-disc list-inside">
          {permissionList?.map((permission, index) => (
            <li className="list-disc" key={index}>
              {permission}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-row-reverse m-4 gap-4">
        <button
          className="w-48 rounded-[5px] px-8 py-4 border border-[#1602FF] bg-[#1602FF] text-white"
          onClick={(e) => {
            e.preventDefault();
            updateStaff_({
              businessId,
              name,
              phone: countryCode + mobileNumber,
              staffId,
            });

            setModalState(false);
          }}
        >
          Save
        </button>
        <button
          className="w-48 rounded-[5px] px-8 py-4 border border-[#1602FF] text-[#1602FF]"
          onClick={() => setModalState(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

import axios from "axios";

const API_URL = "http://stock.staging.digitalregister.in:8080";
export const businessId = "kbktbFmdvENXoEriN0UD7VboJET2";
const headers = {
  "Content-Type": "application/json",
};

export type StaffType = {
  staffId: string;
  businessId: string;
  name: string;
  mobile: string;
  createdAt: string;
  isSignedUp: boolean;
};

export type AddStaffType = {
  businessId: string;
  name: string;
  phone: string;
  staffId: "";
};

export type DeleteStaffType = {
  staffId: string;
};

export type UpdateStaffType = {
  businessId: string;
  name: string;
  phone: string;
  staffId: string;
};

export type StaffsType = Array<StaffType>;

export async function getAllStaffs() {
  const data = {
    businessIds: [businessId],
  };

  return await axios.post(`${API_URL}/api/v1/staff/get`, data, { headers });
}

export async function addStaff(data: AddStaffType) {
  return await axios.post(`${API_URL}/api/v1/staff/add`, data, { headers });
}

export async function updateStaff(data: UpdateStaffType) {
  return await axios.post(`${API_URL}/api/v1/staff/update`, data, { headers });
}

export async function deleteStaff(staffId: string) {
  return await axios.delete(`${API_URL}/api/v1/staff/delete/${staffId}`, {
    headers,
  });
}

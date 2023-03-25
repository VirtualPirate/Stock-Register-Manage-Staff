import { Routes, Route } from "react-router-dom";

import SideMenu from "./components/side-menu/side-menu.component";
import TopNav from "./components/top-nav/top-nav.component";
import StaffList from "./components/staff-list/staff-list.component";
import StaffManage from "./components/staff-manage/staff-manage.component";

import AddStaff from "./components/add-staff/add-staff.component";
import AddStaffModal from "./components/add-staff-modal/add-staff-modal.component";
import EditStaffModal from "./components/edit-staff-modal/edit-staff-modal.component";

function App() {
  return (
    <>
      <AddStaffModal />
      <EditStaffModal />
      <SideMenu />
      <TopNav />
      <StaffManage>
        <StaffList />
        {/* <AddStaff /> */}
      </StaffManage>
    </>
  );
}

export default App;

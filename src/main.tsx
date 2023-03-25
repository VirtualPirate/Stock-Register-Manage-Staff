import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { AddStaffDialogContextProvider } from "./context/add-staff-dialog.context";
import { StaffsContextProvider } from "./context/staffs.context";
import { EditStaffContextProvider } from "./context/edit-staff.context";
import { EditStaffDialogContextProvider } from "./context/edit-staff-dialog.context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StaffsContextProvider>
      <AddStaffDialogContextProvider>
        <EditStaffDialogContextProvider>
          <EditStaffContextProvider>
            <App />
          </EditStaffContextProvider>
        </EditStaffDialogContextProvider>
      </AddStaffDialogContextProvider>
    </StaffsContextProvider>
  </React.StrictMode>
);

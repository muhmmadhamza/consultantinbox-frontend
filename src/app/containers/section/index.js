import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardForm from "./dashboard/forms/DashboardForm";
import Kanban from "./dashboard/kanban/Kanban";
import Form1 from "./dashboard/forms/Form1";
import Form2 from "./dashboard/forms/Form2";
import Form3 from "./dashboard/forms/Form3";
import Form4 from "./dashboard/forms/Form4";
import Form5 from "./dashboard/forms/Form5";
import Form6 from "./dashboard/forms/Form6";
import Form7 from "./dashboard/forms/Form7";
import Form8 from "./dashboard/forms/Form8";
import Form9 from "./dashboard/forms/Form9";
import Form10 from "./dashboard/forms/Form10";
import Form11 from "./dashboard/forms/Form11";
import Form12 from "./dashboard/forms/Form12";
import Form13 from "./dashboard/forms/Form13";
import Form14 from "./dashboard/forms/Form14";
import Form15 from "./dashboard/forms/Form15";
import Form16 from "./dashboard/forms/Form16";
import Form17 from "./dashboard/forms/Form17";
import Form18 from "./dashboard/forms/Form18";
import Form19 from "./dashboard/forms/Form19";

// import MaintainShedule from './dashboard/forms/MaintainShedule'
import CreateProject from "./dashboard/projects/CreateProject";
import Projects from "./dashboard/projects/Projects";
import EditProject from "./dashboard/projects/EditProject";
import ViewProfile from "../../pages/ViewProfile";
import ChatUI from "./dashboard/chatbot/ChatUI";
import Preview from "./dashboard/formbuilder/Preview";
import Calendar from "../../pages/Calendar";
import Map from "../../pages/Map/Map";
import FormBuilder from "./dashboard/formbuilder/FormBuilder";
import EditFormBuilder from "./dashboard/formbuilder/EditFromBuilder";
import CustomForms from "./dashboard/forms/CustomForms";
import FormDetail from "./dashboard/forms/FormDetail";
import { ProtectedRoute } from "../../routes/routes";
import { useSelector } from "react-redux";
import DashboardLayout from "./dashboard/DashboardLayout";
import SingleForms from "./dashboard/forms/SingleForms";
import EditSingleTempBuilder from "./dashboard/formbuilder/EditSingleTem";
import FormDetailTemplate from "./dashboard/forms/FormDetailTemplate";
import CompanyMaps from "../../pages/Map/CompanyMaps";
const Dashboard = () => {
  const {
    isAuthenticated = false,
    permissions = [],
    companyId = null,
  } = useSelector((state) => state.login);

  if (companyId === null) {
    return (
      <>
        <div className="dashboard-content">
          <Routes>
            <Route
              path=""
              element={<Navigate to={"/dashboard/chatbotUi"} replace={true} />}
            />
            <Route
              path="chatbotUi"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  permissions={permissions}
                  modulePermissionName={"view"}
                  moduleName={"chatbot"}
                >
                  <DashboardLayout>
                    <ChatUI />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="viewprofile"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  permissions={permissions}
                  modulePermissionName={"view"}
                  moduleName={"users"}
                >
                  <DashboardLayout>
                    <ViewProfile />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="dashboard-content">
        <Routes>
          <Route
            path=""
            element={<Navigate to={"/dashboard/chatbotUi"} replace={true} />}
          />
          <Route
            path="chatbotUi"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"chatbot"}
              >
                <DashboardLayout>
                  <ChatUI />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="viewprofile"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"users"}
              >
                <DashboardLayout>
                  <ViewProfile />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="forms"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <DashboardForm />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          {/* <Route path="adminstate" element={<AdminStateDashboard />} /> */}
          <Route
            path="projects"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"projects"}
              >
                <DashboardLayout>
                  <Projects />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="createprojects"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"add"}
                moduleName={"projects"}
              >
                <DashboardLayout>
                  <CreateProject />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="editproject/:id"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"edit"}
                moduleName={"projects"}
              >
                <DashboardLayout>
                  <EditProject />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="kanban/:id/:type"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"kanban"}
              >
                <DashboardLayout>
                  <Kanban />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="formbuilder"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <FormBuilder />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="schedulingPage"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"calendar"}
              >
                <DashboardLayout>
                  <Calendar />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="map"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"map"}
              >
                <DashboardLayout>
                  <Map />
                </DashboardLayout>
              </ProtectedRoute>
            }
          /> */}
          <Route
            path="map"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"map"}
              >
                <DashboardLayout>
                  <CompanyMaps />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="projects-Forms"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <CustomForms />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="custom-template-Form"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <SingleForms />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="formDetail"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"add"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <FormDetail />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="formDetailTemplate"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"add"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <FormDetailTemplate />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="edit-formbuilder"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"edit"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <EditFormBuilder />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="edittemplate-formbuilder"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"edit"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <EditSingleTempBuilder />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="Preview"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <Preview />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="form_1"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <Form1 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="form_2"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <Form2 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="form_3"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <Form3 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="form_4"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <Form4 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="form_5"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <Form5 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="form_6"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <Form6 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="form_7"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <Form7 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="form_8"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <Form8 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="form_9"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <Form9 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="form_10"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <Form10 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="form_11"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <Form11 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="form_12"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <Form12 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="form_13"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <Form13 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="form_14"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <Form14 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="form_15"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <Form15 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="form_16"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <Form16 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="form_17"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <Form17 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="form_18"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <Form18 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="form_19"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"forms"}
              >
                <DashboardLayout>
                  <Form19 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          {/* <Route path="maintain" element={<MaintainShedule />} /> */}
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
    </>
  );
};

export default Dashboard;

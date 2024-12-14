import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UserPage from "../../pages/UserPage";
import AdminList from "../../pages/AdminList";
import CreateUser from "../../pages/CreateUser";
import EditUser from "../../pages/EditUser";
import AddRoles from "./dashboard/roles&permissions/AddRoles";
import AllRoles from "./dashboard/roles&permissions/AllRoles";
import PermissionsAssign from "./dashboard/roles&permissions/PermissionsAssign";
import EditRole from "./dashboard/roles&permissions/EditRole";
import ViewUser from "../../pages/ViewUser";
import AdminStateDashboard from "./dashboard/userstate/AdminStateDashboard";
import TermsOfUse from "./dashboard/Terms&Conditions/TermsOfUse";
import PrivacyPolicy from "./dashboard/Terms&Conditions/PrivacyPolicy";
import { useSelector } from "react-redux";
import AdminDashboardLayout from "./dashboard/AdminDashboardLayout";
import { AdminRoute } from "../../routes/routes";
import AdminEditUser from "../../pages/AdminEditUser";
import AdminViewUser from "../../pages/AdminViewUser";
import AdminCreateUser from "../../pages/AdminCreateUser";
import ComplianceTaskCreate from "./dashboard/Compliance/ComplianceTaskCreate";

const AdminDashboard = () => {
  const {
    isAuthenticated = false,
    permissions = [],
    companyId = null,
  } = useSelector((state) => state.login);

  if (companyId === null) {
    return (
      <>
        <div className="adimin-content">
          <Routes>
            <Route path="" element={<Navigate to="/admin/adminlist" />} />
            <Route
              path="adminlist"
              element={
                <AdminRoute
                  isAuthenticated={isAuthenticated}
                  permissions={permissions}
                  modulePermissionName={"view"}
                  moduleName={"adminlist"}
                >
                  <AdminDashboardLayout>
                    <AdminList />
                  </AdminDashboardLayout>
                </AdminRoute>
              }
            />
            <Route
              path="createadminuser"
              element={
                <AdminRoute
                  isAuthenticated={isAuthenticated}
                  permissions={permissions}
                  modulePermissionName={"add"}
                  moduleName={"adminlist"}
                >
                  <AdminDashboardLayout>
                    <AdminCreateUser />
                  </AdminDashboardLayout>
                </AdminRoute>
              }
            />
            <Route
              path="editadminuser/:id"
              element={
                <AdminRoute
                  isAuthenticated={isAuthenticated}
                  permissions={permissions}
                  modulePermissionName={"edit"}
                  moduleName={"adminlist"}
                >
                  <AdminDashboardLayout>
                    <AdminEditUser />
                  </AdminDashboardLayout>
                </AdminRoute>
              }
            />

            <Route
              path="viewadminuser/:id"
              element={
                <AdminRoute
                  isAuthenticated={isAuthenticated}
                  permissions={permissions}
                  modulePermissionName={"view"}
                  moduleName={"adminlist"}
                >
                  <AdminDashboardLayout>
                    <AdminViewUser />
                  </AdminDashboardLayout>
                </AdminRoute>
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
      <div className="adimin-content">
        <Routes>
          <Route
            path=""
            element={<Navigate to={"/admin/adminstate"} replace={true} />}
          />

          <Route
            path="user"
            element={
              <AdminRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"userslist"}
              >
                <AdminDashboardLayout>
                  <UserPage />
                </AdminDashboardLayout>
              </AdminRoute>
            }
          />

          <Route
            path="adminlist"
            element={
              <AdminRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"adminlist"}
              >
                <AdminDashboardLayout>
                  <AdminList />
                </AdminDashboardLayout>
              </AdminRoute>
            }
          />
          <Route
            path="createadminuser"
            element={
              <AdminRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"add"}
                moduleName={"adminlist"}
              >
                <AdminDashboardLayout>
                  <AdminCreateUser />
                </AdminDashboardLayout>
              </AdminRoute>
            }
          />

          <Route
            path="editadminuser/:id"
            element={
              <AdminRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"edit"}
                moduleName={"adminlist"}
              >
                <AdminDashboardLayout>
                  <AdminEditUser />
                </AdminDashboardLayout>
              </AdminRoute>
            }
          />

          <Route
            path="viewadminuser/:id"
            element={
              <AdminRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"adminlist"}
              >
                <AdminDashboardLayout>
                  <AdminViewUser />
                </AdminDashboardLayout>
              </AdminRoute>
            }
          />

          <Route
            path="adminstate"
            element={
              <AdminRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"dashboard"}
              >
                <AdminDashboardLayout>
                  <AdminStateDashboard />
                </AdminDashboardLayout>
              </AdminRoute>
            }
          />

          <Route
            path="createuser"
            element={
              <AdminRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"add"}
                moduleName={"userslist"}
              >
                <AdminDashboardLayout>
                  <CreateUser />
                </AdminDashboardLayout>
              </AdminRoute>
            }
          />

          <Route
            path="viewuser/:id"
            element={
              <AdminRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"userslist"}
              >
                <AdminDashboardLayout>
                  <ViewUser />
                </AdminDashboardLayout>
              </AdminRoute>
            }
          />

          <Route
            path="edituser/:id"
            element={
              <AdminRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"edit"}
                moduleName={"userslist"}
              >
                <AdminDashboardLayout>
                  <EditUser />
                </AdminDashboardLayout>
              </AdminRoute>
            }
          />

          <Route
            path="createrole"
            element={
              <AdminRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"add"}
                moduleName={"roles"}
              >
                <AdminDashboardLayout>
                  <AddRoles />
                </AdminDashboardLayout>
              </AdminRoute>
            }
          />

          <Route
            path="roles"
            element={
              <AdminRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"roles"}
              >
                <AdminDashboardLayout>
                  <AllRoles />
                </AdminDashboardLayout>
              </AdminRoute>
            }
          />

          <Route
            path="editrole/:id"
            element={
              <AdminRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"edit"}
                moduleName={"roles"}
              >
                <AdminDashboardLayout>
                  <EditRole />
                </AdminDashboardLayout>
              </AdminRoute>
            }
          />

          <Route
            path="permissions"
            element={
              <AdminRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"permissions"}
              >
                <AdminDashboardLayout>
                  <PermissionsAssign />
                </AdminDashboardLayout>
              </AdminRoute>
            }
          />
          <Route
            path="terms-use"
            element={
              <AdminRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"termsofuse"}
              >
                <AdminDashboardLayout>
                  <TermsOfUse />
                </AdminDashboardLayout>
              </AdminRoute>
            }
          />
          <Route
            path="privacy-policy"
            element={
              <AdminRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"privacypolicy"}
              >
                <AdminDashboardLayout>
                  <PrivacyPolicy />
                </AdminDashboardLayout>
              </AdminRoute>
            }
          />
          <Route
            path="compliancetask"
            element={
              <AdminRoute
                isAuthenticated={isAuthenticated}
                permissions={permissions}
                modulePermissionName={"view"}
                moduleName={"compliancetask"}
              >
                <AdminDashboardLayout>
                  <ComplianceTaskCreate />
                </AdminDashboardLayout>
              </AdminRoute>
            }
          />

          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
    </>
  );
};

export default AdminDashboard;

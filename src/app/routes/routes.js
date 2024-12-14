import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { hasPermissions } from "../helpers/permissions.helper";

const ProtectRedirectTo = "/login";

const AuthRedirectTo = "/dashboard";
const AdminRedirectTo = "/";

// pages access before login
// export const AuthRoute = ({
//   children,
//   isAuthenticated = false,
//   comingFrom = "",
// }) => {
//   return !isAuthenticated ? (
//     children
//   ) : (
//     <Navigate to={comingFrom ? comingFrom : AuthRedirectTo} replace={true} />
//   );
// };

export const AuthRoute = ({
  children,
  isAuthenticated = false,
  comingFrom = "",
}) => {
  const { user = {} } = useSelector((state) => state.login);

  const { role_id, isAdmin } = user;

  if (!isAuthenticated) {
    return children;
  }

  if ((isAdmin && role_id === 2 ) || role_id === 1) {
    return <Navigate to="/admin" replace={true} />;
  } else {
    return (
      <Navigate to={comingFrom ? comingFrom : AuthRedirectTo} replace={true} />
    );
  }
};
// pages access after login successfully
// export const ProtectedRoute = ({ children, isAuthenticated }) => {
//   return isAuthenticated ? (
//     children
//   ) : (
//     <Navigate to={ProtectRedirectTo} replace={true} />
//   );
// };

export const ProtectedRoute = ({
  children,
  isAuthenticated,
  permissions,
  modulePermissionName,
  moduleName,
}) => {
  console.log(
    "Permissions",
    isAuthenticated,
    permissions.length,
    modulePermissionName,
    moduleName
  );
  if (!isAuthenticated) {
    return <Navigate to={ProtectRedirectTo} replace={true} />;
  }

  if (
    permissions?.length &&
    !hasPermissions(permissions, modulePermissionName, moduleName)
  ) {
    return <Navigate to="/403" replace={true} />;
  }
  return children;
};

// export const AdminRoute = ({
//   children,
//   isAuthenticated = false,
//   isAdmin = false,
// }) => {
//   const { user = {} } = useSelector((state) => state.login);
//   const { role_id } = user;

//   // const isAdmin = true;
//   return isAuthenticated && isAdmin && (role_id === 1 || role_id === 2)  ? (
//     children
//   ) : (
//     <Navigate
//       to={ isAuthenticated && isAdmin && !(role_id === 1 || role_id === 2) ? AdminRedirectTo : "/"}
//       replace={true}
//     />
//   );
// };

export const AdminRoute = ({
  children,
  isAuthenticated,
  permissions,
  modulePermissionName,
  moduleName,
}) => {
  console.log(
    "Permissions",
    isAuthenticated,
    permissions.length,
    modulePermissionName,
    moduleName
  );

  const { user = {} } = useSelector((state) => state.login);
  const { role_id, isAdmin } = user;

  // if (isAuthenticated && isAdmin && (role_id === 1 || role_id === 2)) {
   if (isAuthenticated && (isAdmin && role_id === 2) || role_id === 1) {
    // Check if the user has the required permissions
    if (
      permissions?.length &&
      !hasPermissions(permissions, modulePermissionName, moduleName)
    ) {
      // Redirect to 403 if permissions are insufficient
      return <Navigate to="/403" replace={true} />;
    }

    // Allow access if all conditions are met
    return children;
  } else {
    // Redirect to the appropriate route based on the conditions
    return (
      <Navigate
        to={
          isAuthenticated && isAdmin && !(role_id === 1 || role_id === 2)
            ? AdminRedirectTo
            : "/"
        }
        replace={true}
      />
    );
  }
};

import React from "react";
import { useSelector } from "react-redux";
import { hasPermissions } from "./permissions.helper";

export default function PermissionButton({
  children,
  modulePermissionName,
  moduleName,
  noPermission = null,
}) {
  const { permissions = [] } = useSelector((state) => state.login);
 
  return (
    <>
      {permissions?.length &&
      !hasPermissions(permissions, modulePermissionName, moduleName)
        ? noPermission
        : children}
    </>
  );
}

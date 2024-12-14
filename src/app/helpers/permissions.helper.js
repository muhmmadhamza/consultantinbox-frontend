export const hasPermissions = (
  permissions = [],
  modulePermissionName = "",
  moduleName = ""
) => {
  console.log(moduleName, modulePermissionName);
  return permissions.some(
    (item) =>
      item?.status &&
      item?.module_name === moduleName &&
      item?.name === modulePermissionName
  );
};

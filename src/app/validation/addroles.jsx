import * as Yup from "yup";

export const CreateRoleSchema = Yup.object().shape({
  name: Yup.string()
    .required("Role name is required")
    .max(100, "Role must be at most 100 characters"),
});

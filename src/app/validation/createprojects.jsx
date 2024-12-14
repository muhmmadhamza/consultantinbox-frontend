import * as Yup from "yup";

export const CreateProjectsSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .max(100, "Title must be at most 100 characters"),
  description: Yup.string()
    .required("Description is required")
    .max(500, "Description must be at most 500 characters"),
  manager_id: Yup.string().required("Manager is required"),
  form_ids: Yup.array().min(1, "Select at least one name").required("Required"),
});

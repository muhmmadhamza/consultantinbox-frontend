import httpRequest from "../axios/index";
import httpFormRequest from "../axios/form_index";

import {
  LOGIN_ENDPOINT,
  REGISTER_ENDPOINT,
  ADMIN_ENDPOINT,
  // CHATBOT_ENDPOINT,
  USERS_ENDPOINT,
  CREATEUSERS_ENDPOINT,
  CREATEPROJECTS_ENDPOINT,
  PROJECTS_ENDPOINT,
  FORGOTPASSWORD_ENDPOINT,
  UPDATEOPT_ENDPOINT,
  RESETPASSWORD_ENDPOINT,
  CREATEROLE_ENDPOINT,
  ROLES_ENDPOINT,
  UPDATE_SINGLE_TEMAPLATE,
  ASSIGN_ENDPOINT,
  CREATE_COLUMN_ENDPOINT,
  UPDATE_COLUMN_ENDPOINT,
  CREATE_TASK_ENDPOINT,
  UPDATE_TASK_ENDPOINT,
  CREATE_COMMENT_ENDPOINT,
  UPDATE_COLUMN_ORDER_ENDPOINT,
  UPDATE_TASK_ORDER_ENDPOINT,
  Forms_ENDPOINT,
  TERMS_OF_USE_ENDPOINT,
  PRIVACY_POLICY_ENDPOINT,
  UPDATE_ROLES_ENDPOINT,
  PERMISSION_ROLE_LIST_ENDPOINT,
  PERMISSION_LIST_ENDPOINT,
  PERMISSION_ON_ROLE_ENDPOINT,
  CREATE_FORM_ENDPOINT,
  UPDATE_FORM_ENDPOINT,
  FORM_LIST_ENDPOINT,
  NOTIFICATION_LIST_ENDPOINT,
  UPDATE_COMMENT_ENDPOINT,
  UPDATE_TASK_STATUS_ENDPOINT,
  TASK_LIST_ENDPOINT,
  ASSIGNTASK_ENDPOINT,
  SIGNUP_USERS_LIST_ENDPOINT,
  LOGIN_USERS_LIST_ENDPOINT,
  DELETEMULTIPLEUSERS_ENDPOINT,
  LOGOUT_USER_ENDPOINT,
  ADMIN_VERIFY_ENDPOINT,
  CUSTOM_FORM_TEMPLATE,
  GET_FORM_TEMPLATE,
  CREATE_CUSTOM_MAP,
  GET_CUSTOM_MAP,
  CREATE_COMPLIANCE_TASK,
  COMPLIANCE_TASK_LIST_ENDPOINT,
  COMPLIANCE_TASK_UPDATE_ENDPOINT,
  GET_COMPANY_MAP,
} from "../constant/apiEndPoints";

export const LoginUser = (values) => {
  return httpRequest.post(LOGIN_ENDPOINT, values);
};

export const RegisterUser = (values) => {
  return httpFormRequest.post(REGISTER_ENDPOINT, values);
};
export const ForgotPassword = (values) => {
  return httpRequest.post(FORGOTPASSWORD_ENDPOINT, values);
};
export const UpdateOtp = (values) => {
  return httpRequest.post(UPDATEOPT_ENDPOINT, values);
};

export const Resetpassword = (values) => {
  return httpRequest.put(RESETPASSWORD_ENDPOINT, values);
};

// export const ChatBot = (values) => {
//   return httpRequest.post(CHATBOT_ENDPOINT, values);
// };

export const UsersData = (companyId) => {
  return httpRequest.get(`${USERS_ENDPOINT}/${companyId}`);
};

export const DeleteMutipleUsersData = (values) => {
  return httpRequest.post(DELETEMULTIPLEUSERS_ENDPOINT, values);
};

export const CreateUsersData = (values) => {
  return httpFormRequest.post(CREATEUSERS_ENDPOINT, values);
};
export const CreateProjects = (values) => {
  return httpRequest.post(CREATEPROJECTS_ENDPOINT, values);
};
export const ProjectsData = (companyId) => {
  return httpRequest.get(`${PROJECTS_ENDPOINT}/${companyId}`);
};

//--------------------- Forms Api calls function ---------------------//
export const FormsData = (companyId) => {
  return httpRequest.get(`${Forms_ENDPOINT}/${companyId}`);
};
export const CreateForm = (values) => {
  return httpRequest.post(CREATE_FORM_ENDPOINT, values);
};
export const UpdateFormData = (values) => {
  return httpRequest.put(UPDATE_FORM_ENDPOINT, values);
};
export const FormList = () => {
  return httpRequest.get(FORM_LIST_ENDPOINT);
};

//--------------------- Roles Api calls function ---------------------//
export const CreateRoles = (values) => {
  return httpRequest.post(CREATEROLE_ENDPOINT, values);
};

export const RolesListData = () => {
  return httpRequest.get(ROLES_ENDPOINT);
};

export const AssignListData = (companyId) => {
  return httpRequest.get(`${ASSIGN_ENDPOINT}/${companyId}`);
};

export const AssignListTaskData = (companyId) => {
  return httpRequest.get(`${ASSIGNTASK_ENDPOINT}/${companyId}`);
};

//--------------------- Kanban Api calls function ---------------------//
export const CreateColumns = (values) => {
  return httpRequest.post(CREATE_COLUMN_ENDPOINT, values);
};

export const UpdateColumns = (values) => {
  return httpRequest.put(UPDATE_COLUMN_ENDPOINT, values);
};

export const CreateTask = (values) => {
  return httpRequest.post(CREATE_TASK_ENDPOINT, values);
};

export const UpdateTask = (values) => {
  return httpFormRequest.put(UPDATE_TASK_ENDPOINT, values);
};

export const TaskList = (companyId) => {
  return httpFormRequest.get(`${TASK_LIST_ENDPOINT}/${companyId}`);
};

export const UpdateTaskStatus = (values) => {
  return httpFormRequest.put(UPDATE_TASK_STATUS_ENDPOINT, values);
};

export const CreateComment = (values) => {
  return httpRequest.post(CREATE_COMMENT_ENDPOINT, values);
};

export const UpdateComment = (values) => {
  return httpRequest.put(UPDATE_COMMENT_ENDPOINT, values);
};

export const UpdateColumnOrder = (values) => {
  return httpRequest.put(UPDATE_COLUMN_ORDER_ENDPOINT, values);
};

export const UpdateTaskOrder = (values) => {
  return httpRequest.put(UPDATE_TASK_ORDER_ENDPOINT, values);
};

//-------------------------------------------
export const TermsOfUseData = () => {
  return httpRequest.get(TERMS_OF_USE_ENDPOINT);
};
export const PrivacyPolicyData = () => {
  return httpRequest.get(PRIVACY_POLICY_ENDPOINT);
};

// -------------------------------- Roles ---------------------------
export const UpdateRoles = (values) => {
  return httpRequest.put(UPDATE_ROLES_ENDPOINT, values);
};

export const UpdatePermissionRoles = (values) => {
  return httpRequest.get(PERMISSION_ROLE_LIST_ENDPOINT, values);
};
// -------------------------------- Permission ---------------------------
export const PermissionList = (values) => {
  return httpRequest.get(PERMISSION_LIST_ENDPOINT, values);
};
export const PermissionOnRole = (values) => {
  return httpRequest.post(PERMISSION_ON_ROLE_ENDPOINT, values);
};

// -------------------------------- Notifications Api Call functions ---------------------------
export const NotificationList = () => {
  return httpRequest.get(NOTIFICATION_LIST_ENDPOINT);
};

// -------------------------------- Signup Users List Call functions ---------------------------
export const SignupUsersList = (companyId) => {
  return httpRequest.get(`${SIGNUP_USERS_LIST_ENDPOINT}/${companyId}`);
};

// -------------------------------- Login Users List Call functions ---------------------------
export const LoginUsersList = (companyId) => {
  return httpRequest.get(`${LOGIN_USERS_LIST_ENDPOINT}/${companyId}`);
};

// -------------------------------- Logout User functions ---------------------------
export const LogoutUser = () => {
  return httpRequest.post(LOGOUT_USER_ENDPOINT);
};

// -------------------------------- Admin Login functions ---------------------------

export const AdminData = () => {
  return httpRequest.get(ADMIN_ENDPOINT);
};

export const AdminVerify = (values) => {
  return httpRequest.post(ADMIN_VERIFY_ENDPOINT, values);
};
// ___________________________________Custom Form function____________________________________________________

export const CreateCustomForm = (values) => {
  return httpRequest.post(CUSTOM_FORM_TEMPLATE, values);
};

export const GetTempForm = (companyId) => {
  return httpRequest.get(`${GET_FORM_TEMPLATE}/${companyId}`);
};

export const UpdateTempForm = (values) => {
  return httpRequest.put(UPDATE_SINGLE_TEMAPLATE, values);
};

// -----------------------------------------custommap--------------------------------------------------
export const CreateMap = (values) => {
  return httpRequest.post(CREATE_CUSTOM_MAP, values);
};

// export const GetMap = (state) => {
//   return httpRequest.get(`${GET_CUSTOM_MAP}/${state}`);
// };
// ___________________________________Create Complianace function____________________________________________________
export const CreateComplianceTask = (values) => {
  return httpRequest.post(CREATE_COMPLIANCE_TASK, values);
};

export const ComplianceTaskList = (companyId) => {
  return httpRequest.get(`${COMPLIANCE_TASK_LIST_ENDPOINT}/${companyId}`);
};

export const ComplianceTaskUpdate = (values) => {
  return httpRequest.put(COMPLIANCE_TASK_UPDATE_ENDPOINT, values);
};
export const GetMap = (state) => {
  return httpRequest.get(`${GET_CUSTOM_MAP}/${state}`);
};
export const GetCompanyMap = (companyId) => {
  return httpRequest.get(`${GET_COMPANY_MAP}/${companyId}`);
};

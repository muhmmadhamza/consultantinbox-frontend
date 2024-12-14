export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const LOGIN_ENDPOINT = "/api/login";
export const REGISTER_ENDPOINT = "/api/register";
export const FORGOTPASSWORD_ENDPOINT = "/api/forgot-password";
export const UPDATEOPT_ENDPOINT = "/api/verify-otp";
export const RESETPASSWORD_ENDPOINT = "/api/reset-password";
// export const CHATBOT_ENDPOINT = "/api/openai/chatbot";

//-------------------- Users endpoint -------------------- //
export const USERS_ENDPOINT = "/api/users/list";
export const ADMIN_ENDPOINT = "/api/admins/list";
export const ADMIN_VERIFY_ENDPOINT = "/api/users/admins/verify";

export const CREATEUSERS_ENDPOINT = "/api/users/create";
export const DELETEMULTIPLEUSERS_ENDPOINT = "/api/users/delete-multiple";

//-------------------- Projects endpoint -------------------- //

export const CREATEPROJECTS_ENDPOINT = "/api/projects/create";
export const PROJECTS_ENDPOINT = "/api/projects/list";

//-------------------- Roles endpoint -------------------- //
export const CREATEROLE_ENDPOINT = "/api/roles/create";
export const ROLES_ENDPOINT = "/api/roles/list";
export const UPDATE_ROLES_ENDPOINT = "/api/roles/update";

//-------------------- Forms endpoint -------------------- //
export const Forms_ENDPOINT = "/api/templates/list";
export const CREATE_FORM_ENDPOINT = "/api/forms/create";
export const UPDATE_FORM_ENDPOINT = "/api/forms/update";
export const FORM_LIST_ENDPOINT = "/api/forms/list";

//--------------------endpoint -------------------- //
export const ASSIGN_ENDPOINT = "/api/projectassignees/list";
export const ASSIGNTASK_ENDPOINT = "/api/taskassignees/list";

//-------------------- Kanban endpoints -------------------- //
export const CREATE_TASK_ENDPOINT = "/api/tasks/create";
export const UPDATE_TASK_ENDPOINT = "/api/tasks/update";
export const CREATE_COLUMN_ENDPOINT = "/api/columns/create";
export const UPDATE_COLUMN_ENDPOINT = "/api/columns/update";
export const CREATE_COMMENT_ENDPOINT = "/api/comments/create";
export const UPDATE_COMMENT_ENDPOINT = "/api/comments/update";
export const UPDATE_COLUMN_ORDER_ENDPOINT = "/api/columns/order";
export const UPDATE_TASK_ORDER_ENDPOINT = "/api/tasks/order";

//-------------------- Tasks endpoints -------------------- //
export const UPDATE_TASK_STATUS_ENDPOINT = "/api/tasks/update-status";
export const TASK_LIST_ENDPOINT = "/api/tasks/list";

//-------------------- Terms of use endpoint -------------------- //
export const TERMS_OF_USE_ENDPOINT = "/api/termsandconditions";

//-------------------- privacy policy endpoint -------------------- //
export const PRIVACY_POLICY_ENDPOINT = "/api/privacypolicy";

//-------------------- Permission endpoint -------------------- //
export const PERMISSION_LIST_ENDPOINT = "/api/permissions/list";
export const PERMISSION_ON_ROLE_ENDPOINT = "/api/permissions/addRoleBase";
export const PERMISSION_ROLE_LIST_ENDPOINT = "/api/rolespermission/list";

//-------------------- Notifications endpoint -------------------- //
export const NOTIFICATION_LIST_ENDPOINT = "/api/notifications/list";

//-------------------- Signup User endpoint -------------------- //
export const SIGNUP_USERS_LIST_ENDPOINT = "/api/signupusers/list";

//-------------------- Login User endpoint -------------------- //
export const LOGIN_USERS_LIST_ENDPOINT = "/api/loginusers/list";

//-------------------- Logout User endpoint -------------------- //
export const LOGOUT_USER_ENDPOINT = "/api/user/logout";

// ___________________________________Custom Form function____________________________________________________

export const CUSTOM_FORM_TEMPLATE = "api/customforms/create";

export const GET_FORM_TEMPLATE = "api/customforms/list";

export const UPDATE_SINGLE_TEMAPLATE = "api/customforms/update";

// -----------------------------------------custommap--------------------------------------------------

export const CREATE_CUSTOM_MAP = "api/maps/projects/create";
export const GET_CUSTOM_MAP = "api/maps/projects/list";
export const GET_COMPANY_MAP = "api/maps/list";


// -----------------------------------------Compliance Task--------------------------------------------------
export const CREATE_COMPLIANCE_TASK = "api/compliances/create";
export const COMPLIANCE_TASK_LIST_ENDPOINT = "/api/compliances/list";
export const COMPLIANCE_TASK_UPDATE_ENDPOINT = "/api/compliances/update";

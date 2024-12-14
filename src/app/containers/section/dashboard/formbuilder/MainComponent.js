
// import React, { useState, useEffect, useRef } from "react";
// import $ from "jquery";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import httpRequest from "../../../../axios/index";
// import show_Toast from "../../../../helpers/toast.helper";

// import { useLocation, Link as RouterLink, useNavigate } from "react-router-dom";
// import { Button, Stack } from "@mui/material";
// import FullScreenDialog from "./Modal";
// import useToggle from "../../../../hooks/useToggle";
// import { CreateCustomForm, CreateForm } from "../../../../services";
// import { useDispatch, useSelector } from "react-redux";
// import { setUser } from "../../../../store/slices/login";
// window.jQuery = $;
// window.$ = $;

// require("jquery-ui-sortable");
// require("formBuilder");

// const FormBuilder = () => {
//   const {
//     toggle: openConfirm,
//     onOpen: onOpenConfirm,
//     onClose: onCloseConfirm,
//   } = useToggle();

//   const location = useLocation();
//   const { state } = location;

//   const [JsonField, setJsonData] = useState(state?.form_data);
//   const [Jsondata, setData] = useState(state?.jsonData);
 

//   const [values, setValues] = useState();
//   const [TemForm, SetTemForm] = useState();

//   const fb = useRef(null);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   var storedId = localStorage.getItem("project_id");
//   var intValue = parseInt(storedId, 10);

//   const handleManageProject = () => {
//     navigate(`/dashboard/kanban/${intValue}/${state.id}`);
//   };
//   const { user = {} } = useSelector((state) => state.login);


//   const initializeFormBuilder = () => {
//     if (fb.current) {
//       $(fb.current).formBuilder("destroy");
//     }
//     $(fb.current).formBuilder({
//       // formData:intValue ?JsonField: Jsondata,
//       formData: !storedId ? JsonField : Jsondata
//     });
//   };

//   useEffect(() => {
//     initializeFormBuilder();
//   }, []);

//   const formDatapreview = $(fb.current).formBuilder("getData");

//   // Function to save and log JSON data

//   const handleSave = async () => {
//     const formData = $(fb.current).formBuilder("getData");
//     const result = JSON.stringify(formData);


//     try {
//       // Send the JSON data to the backend
//       const response = await CreateForm({
//         name: state.name,
//         project_id: intValue,
//         form_no: state.form_no,
//         form_data: result,
//         // Use the formData obtained from the formBuilder
//       });

//       const data = response?.data?.response;
//       setValues(data);

//       // Show a success message or handle the response as needed
//       if (response?.data?.status === "success") {
//         show_Toast({
//           status: true,
//           message: "Form created successfully",
//         });

//         handleManageProject();
//       } else {
//         show_Toast({
//           status: false,
//           message: "Failed to save JSON data",
//         });
//       }
//     } catch (error) {
//       show_Toast({
//         status: false,
//         message: error?.response?.data?.message || "Something went wrong",
//       });
//     }
//   };

//   const handleSaveForm = async () => {
//     const formData = $(fb.current).formBuilder("getData");
//     const result = JSON.stringify(formData);
 
//     try {
//       // Send the JSON data to the backend
//       const response = await CreateCustomForm({
//         name:formData[0].label,
//         form_no: state.form_no,
//         form_data: result,
//         company_id: user.company_id

//         // Use the formData obtained from the formBuilder
//       },
//         //  dispatch(setUser) 

//       );

//       const data = response?.data?.response;
//       console.log("data is comming", data)
//       SetTemForm(data);

//       // Show a success message or handle the response as needed
//       if (response?.data?.status === "success") {
//         show_Toast({
//           status: true,
//           message: "Form created successfully",
//         });

//         // handleManageProject();
//       } else {
//         show_Toast({
//           status: false,
//           message: "Failed to save JSON data",
//         });
//       }
//     } catch (error) {
//       show_Toast({
//         status: false,
//         message: error?.response?.data?.message || "Something went wrong",
//       });
//     }
//   };
















//   const handlePrint = () => {
//     window.print(); // Trigger the browser's print dialog
//   };

//   return (
//     <div>
//       <Button
//         component={RouterLink}
//         to="/dashboard/projects"
//         variant="outlined"
//         startIcon={<ArrowBackIcon />}
//         sx={{
//           backgroundColor: "#3C4256 !important",
//           color: "white !important",
//           marginBottom: "1em",
//           "&:hover": {
//             backgroundColor: "white !important",
//             color: "black !important",
//             border: "1px solid #3C4256",
//           },
//         }}
//       >
//         Go back
//       </Button>
//       <div id="fb-editor" ref={fb}></div>
//       <Stack direction={"row"} gap={2}>

//         <Button
//           variant="outlined"
//           sx={{
//             backgroundColor: "#3C4256 !important",
//             color: "white !important",
//             "&:hover": {
//               backgroundColor: "white !important",
//               color: "black !important",
//               border: "1px solid #3C4256",
//             },
//           }}
//           onClick={handleSaveForm}
//         >
//           Create Form
//         </Button>



//         {/* Add a button to open the preview modal */}
//         <Button
//           variant="outlined"
//           sx={{
//             backgroundColor: "#3C4256 !important",
//             color: "white !important",
//             "&:hover": {
//               backgroundColor: "white !important",
//               color: "black !important",
//               border: "1px solid #3C4256",
//             },
//           }}
//           onClick={onOpenConfirm}
//         >
//           Preview
//         </Button>
//       </Stack>

//       {/* Modal for displaying the form */}
//       <FullScreenDialog
//         open={openConfirm}
//         onClose={onCloseConfirm}
//         formDatas={formDatapreview}
//       />
//     </div>
//   );
// };

// export default FormBuilder;

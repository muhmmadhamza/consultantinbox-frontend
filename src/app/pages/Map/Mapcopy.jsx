// import { Box, Skeleton, Typography } from "@mui/material";
// import { Dialog, DialogTitle, DialogContent } from "@mui/material";
// import { IconButton } from "@mui/material";
// import CancelIcon from "@mui/icons-material/Cancel";

// import { Helmet } from "react-helmet-async";

// import { API_BASE_URL } from "../../constant/apiEndPoints";
// import httpRequest from "../../axios/index";

// import {
//   useJsApiLoader,
//   GoogleMap,
//   Marker,
//   Polyline,
//   Polygon,
//   InfoWindow,
// } from "@react-google-maps/api";

// import axios from "axios";
// import { useState, useEffect } from "react";

// const center = { lat: 31.5204, lng: 74.3587 };

// function Map() {
//   const [geoJsonData, setGeoJsonData] = useState([]);
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [selectedLineString, setSelectedLineString] = useState(null);
//   const [isDialogOpen, setDialogOpen] = useState(false);

//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: "AIzaSyC5KNhvxmGpm23m3J7PXZlNM3zORe5vt1Y",
//     libraries: ["places"],
//   });

//   const getToken = async () => {
//     try {
//       const response = await httpRequest.get(`/api/refresh-token`);
//       const newAccessToken = response?.data?.response?.access_token;
//       localStorage.setItem("access_token", newAccessToken);
//       console.log("Response:", response.data);
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   };

//   const getUserMaps = async () => {
//     try {
//       const tokens = localStorage.getItem("access_token");
//       const response = await axios.post(
//         `${API_BASE_URL}/api/maps/list`,
//         {
//           token: tokens,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log("api response", response.data.response);
//       setGeoJsonData(response.data.response);
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       await getToken();
//       if (localStorage.getItem("access_token")) {
//         getUserMaps();
//       }
//     };

//     if (isLoaded) {
//       fetchData();
//     }
//   }, [isLoaded]);

//   const handleMarkerClick = (feature) => {
//     setSelectedMarker(feature);
//     setSelectedLineString(null);
//   };

//   const handleCloseMarkerInfoWindow = () => {
//     setSelectedMarker(null);
//   };

//   const handleLineStringClick = (feature) => {
//     (async () => {
//       await new Promise((resolve) => {
//         setSelectedLineString(feature);
//         resolve();
//       });
//       console.log("feat", feature);
//       setSelectedMarker(null);
//       setDialogOpen(true);
//     })();
//   };

//   const handleCloseDialog = () => {
//     setDialogOpen(false);
//     setSelectedLineString(null);
//   };

//   const calculateDistance = (point1, point2) => {
//     const lat1 = point1[1];
//     const lon1 = point1[0];
//     const lat2 = point2[1];
//     const lon2 = point2[0];

//     const R = 6371; // Radius of the Earth in kilometers
//     const dLat = deg2rad(lat2 - lat1);
//     const dLon = deg2rad(lon2 - lon1);

//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos(deg2rad(lat1)) *
//         Math.cos(deg2rad(lat2)) *
//         Math.sin(dLon / 2) *
//         Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     const distance = R * c; // Distance in kilometers
//     return distance;
//   };

//   const deg2rad = (deg) => {
//     return deg * (Math.PI / 180);
//   };

//   if (!isLoaded) {
//     return <Skeleton variant="text" />;
//   }

//   return (
//     <>
//       <Helmet>
//         <title> Dashboard | Map </title>
//       </Helmet>
//       <Box
//         sx={{
//           position: "relative",
//           flexDirection: "column",
//           alignItems: "center",
//           height: "70vh",
//           width: "100%",
//         }}
//       >
//         <GoogleMap
//           center={center}
//           zoom={12}
//           mapContainerStyle={{ width: "100%", height: "100%" }}
//         >
//           {geoJsonData.map((featureCollection) =>
//             featureCollection.features.map((feature) => {
//               const geometry = feature.geometry;
//               const coordinates = geometry.coordinates;

//               if (geometry.type === "Point") {
//                 return (
//                   <Marker
//                     key={feature.id}
//                     position={{ lat: coordinates[1], lng: coordinates[0] }}
//                     onClick={() => handleMarkerClick(feature)}
//                   >
//                     {selectedMarker && selectedMarker.id === feature.id && (
//                       <InfoWindow
//                         position={{
//                           lat: selectedMarker.geometry.coordinates[1] + 0.011,
//                           lng: selectedMarker.geometry.coordinates[0],
//                         }}
//                         onCloseClick={handleCloseMarkerInfoWindow}
//                       >
//                         <Box>
//                           <Typography variant="button">
//                             <strong>Title:</strong>{" "}
//                             {selectedMarker.properties.name}
//                           </Typography>
//                           <Typography variant="body2">
//                             <strong>Detail:</strong>{" "}
//                             {selectedMarker.properties.description}
//                           </Typography>
//                           {selectedMarker.properties.pressure && (
//                             <Typography variant="body2">
//                               <strong>Pressure:</strong>{" "}
//                               {selectedMarker.properties.pressure}
//                             </Typography>
//                           )}
//                           {selectedMarker.properties.diameter && (
//                             <Typography variant="body2">
//                               <strong>Diameter:</strong>{" "}
//                               {selectedMarker.properties.diameter}
//                             </Typography>
//                           )}
//                         </Box>
//                       </InfoWindow>
//                     )}
//                   </Marker>
//                 );
//               } else if (geometry.type === "Polygon") {
//                 return (
//                   <Polygon
//                     key={feature.id}
//                     paths={coordinates[0].map(([lng, lat]) => ({ lat, lng }))}
//                     options={{
//                       fillColor: "#FF0000",
//                       fillOpacity: 0.4,
//                       strokeColor: "#FF0000",
//                       strokeOpacity: 1,
//                       strokeWeight: 2,
//                     }}
//                     onClick={() => handleLineStringClick(feature)}
//                   />
//                 );
//               } else if (geometry.type === "LineString") {
//                 return (
//                   <Polyline
//                     key={feature.id}
//                     path={coordinates.map(([lng, lat]) => ({ lat, lng }))}
//                     options={{
//                       strokeColor: "#0000FF",
//                       strokeOpacity: 1,
//                       strokeWeight: 2,
//                     }}
//                     onClick={() => handleLineStringClick(feature)}
//                   ></Polyline>
//                 );
//               }

//               return null;
//             })
//           )}
//         </GoogleMap>

//         {/* Dialog for Polyline */}
//         <Dialog
//           open={isDialogOpen}
//           onClose={handleCloseDialog}
//           sx={{
//             position: "absolute",
//             bottom: 0,
//             left: "40%",
//             maxWidth: "440px",
//           }}
//         >
//           <DialogTitle>
//             <IconButton
//               onClick={handleCloseDialog}
//               sx={{ position: "absolute", right: 0, top: 0 }}
//             >
//               <CancelIcon />
//             </IconButton>
//           </DialogTitle>
//           <DialogContent>
//             <Typography variant="button">
//               <strong>Title:</strong> {selectedLineString?.properties.name}
//             </Typography>
//             <Typography variant="body2">
//               <strong>Detail: </strong>
//               {selectedLineString?.properties.description}
//             </Typography>
//           </DialogContent>
//         </Dialog>
//       </Box>
//     </>
//   );
// }

// export default Map;
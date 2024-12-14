// import React, { useRef, useState } from "react";

// import {
//   Box,
//   Paper,
//   TextField,
//   ButtonGroup,
//   Button,
//   IconButton,
//   Typography,
//   Skeleton,
// } from "@mui/material";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import CloseIcon from "@mui/icons-material/Close";
// import axios from "axios";

// import {
//   useJsApiLoader,
//   GoogleMap,
//   Marker,
//   Autocomplete,
//   DirectionsRenderer,
// } from "@react-google-maps/api";
// import { API_BASE_URL } from "../../constant/apiEndPoints";
// import httpRequest from "../../axios/index";

// const center = { lat: 48.8584, lng: 2.2945 };

// function Map() {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: "AIzaSyC5KNhvxmGpm23m3J7PXZlNM3zORe5vt1Y",
//     libraries: ["places"],
//   });

//   const [map, setMap] = useState(null);
//   const [directionsResponse, setDirectionsResponse] = useState(null);
//   const [distance, setDistance] = useState("");
//   const [duration, setDuration] = useState("");
//   const [token, SetToken] = useState();
//   const [mapcode, SetMapCode] = useState([]);
//   console.log("Map Codes:", mapcode);
//   const originRef = useRef();
//   const destiantionRef = useRef();
//   const [geoJsonData, setGeoJsonData] = useState(null);

//   React.useEffect(() => {
//     // if (token) {
//     //     getUserMaps();
//     // }
//     getToken();
//     getUserMaps();

//     // fetchData();
//   }, []);

//   const getToken = async () => {
//     try {
//       const response = await httpRequest.get(`/api/refresh-token`);

//       // SetToken(response?.data?.response?.access_token);
//       const newAccessToken = response?.data?.response?.access_token;

//       // Set the new access token in local storage
//       localStorage.setItem("access_token", newAccessToken);
//       // Handle the response data as needed
//       console.log("Response:", response.data);
//     } catch (error) {
//       // Handle errors here
//       console.error("Error:", error.message);
//     }
//   };

//   // const getUserMaps = async () => {
//   //   try {
//   //     const tokens = localStorage.getItem('access_token');
//   //     const response = await axios.get(`${API_BASE_URL}/api/maps/list`, {
//   //       headers: {
//   //         Authorization: `Bearer ${tokens}`,
//   //         "Content-Type": "application/json",
//   //       },
//   //     });

//   //     if (response.data && response?.data.response.mapList) {

//   //       const mapCodes = response?.data.response.mapList.map(map => map.mapCode);

//   //       // Handle the mapCodes as

//   //       SetMapCode(mapCodes)

//   //     } else {
//   //       console.error("Invalid response format");
//   //     }
//   //   } catch (error) {
//   //     // Handle errors here
//   //     console.error("Error:", error.message);
//   //   }
//   // };

//   // const fetchData = async () => {
//   //   try {
//   //     const response = await axios.get(
//   //       "https://www.scribblemaps.com/api/maps/J2yHlElSbu/geojson"
//   //     );

//   //     // Set the GeoJSON data in the state
//   //     console.log("here is comming response from backend", response.data);
//   //     setGeoJsonData(response.data);
//   //   } catch (error) {
//   //     // Handle errors here
//   //     console.error("Error fetching GeoJSON data:", error.message);
//   //   }
//   // };

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
     
// SetMapCode(response?.data.response)
//       // if (response.data && response?.data.response.mapList) {
//       //   const mapCodes = response?.data.response.mapList.map(
//       //     (map) => map.mapCode
//       //   );
//       //   // Handle the mapCodes as needed
//       //   SetMapCode(mapCodes);
//       // } else {
//       //   console.error("Invalid response format");
//       // }
//     } catch (error) {
//       // Handle errors here
//       console.error("Error:", error.message);
//     }
//   };

//   if (!isLoaded) {
//     return <Skeleton variant="text" />;
//   }

//   async function calculateRoute() {
//     if (originRef.current.value === "" || destiantionRef.current.value === "") {
//       return;
//     }
//     // eslint-disable-next-line no-undef
//     const directionsService = new google.maps.DirectionsService();
//     const results = await directionsService.route({
//       origin: originRef.current.value,
//       destination: destiantionRef.current.value,
//       // eslint-disable-next-line no-undef
//       travelMode: google.maps.TravelMode.DRIVING,
//     });
//     setDirectionsResponse(results);
//     setDistance(results.routes[0].legs[0].distance.text);
//     setDuration(results.routes[0].legs[0].duration.text);
//   }

//   function clearRoute() {
//     setDirectionsResponse(null);
//     setDistance("");
//     setDuration("");
//     originRef.current.value = "";
//     destiantionRef.current.value = "";
//   }

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         flexDirection: "column",
//         alignItems: "center",
//         height: "100vh",
//         width: "100%",
//       }}
//     >
//       <Box
//         sx={{
//           position: "absolute",
//           left: 0,
//           top: 0,
//           height: "100%",
//           width: "100%",
//         }}
//       >
//         <GoogleMap
//           center={center}
//           zoom={15}
//           mapContainerStyle={{ width: "100%", height: "100%" }}
//           // options={{
//           //   zoomControl: false,
//           //   streetViewControl: false,
//           //   mapTypeControl: false,
//           //   fullscreenControl: false,
//           // }}
//           options={{
//             fullscreenControlOptions: {
//               position: window.google.maps.ControlPosition.TOP_RIGHT,
//             },
//             zoomControlOptions: {
//               position: window.google.maps.ControlPosition.RIGHT_BOTTOM,
//             },
//           }}
//           onLoad={(map) => setMap(map)}
//         >
//           <Marker position={center} />
//           {directionsResponse && (
//             <DirectionsRenderer directions={directionsResponse} />
//           )}
//         </GoogleMap>
//       </Box>
//     </Box>
//   );
// }

// export default Map;

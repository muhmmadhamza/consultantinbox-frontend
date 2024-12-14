import React, { useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import {
  MapContainer,
  TileLayer,
  FeatureGroup,
  Marker,
  Popup,
  Polygon,
  Polyline,
  Rectangle,
  CircleMarker,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { useLocation, useNavigate } from "react-router-dom";
import show_Toast from "../../helpers/toast.helper";
import { CreateMap, GetMap } from "../../services";
import { Button, Stack } from "@mui/material";
import { Helmet } from "react-helmet-async";

const customSvgIcon = new L.DivIcon({
  className: "", // remove default styling
  html: `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <path fill="#3388ff" d="M16 0C9.164 0 4 5.164 4 12c0 9.5 12 20 12 20s12-10.5 12-20C28 5.164 22.836 0 16 0zm0 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
    </svg>
  `,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const center = [38.889805, -77.009056];
const zoom = 12;

const Map = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  const [markers, setMarkers] = useState([]);
  const [circleMarkers, setCircleMarkers] = useState([]);
  const [circle, setCircle] = useState([]);
  const [rectBounds, setRectBounds] = useState([]);
  const [polygons, setPolygons] = useState([]);
  const [polylines, setPolylines] = useState([]);

  // states for response data
  const [resMarkers, setResMarkers] = useState([]);
  const [resCircleMarkers, setResCircleMarkers] = useState([]);
  const [resRectBounds, setResRectBounds] = useState([]);
  const [resPolygons, setResPolygons] = useState([]);
  const [resPolylines, setResPolylines] = useState([]);

  // React.useEffect(() => {
  //   if (!state) {
  //     navigate("/dashboard/projects");
  //   }
  // }, []);

  const handleDrawCreated = (e) => {
    const { layer } = e;
    if (layer instanceof L.Marker) {
      const latlng = layer.getLatLng();
      const latlngObject = { lat: latlng.lat, lng: latlng.lng };
      setMarkers((prevMarkers) => {
        const newMarkers = [...prevMarkers, latlngObject];
        return newMarkers;
      });
      layer.setIcon(customSvgIcon);
    } else if (layer instanceof L.CircleMarker) {
      const latlng = layer.getLatLng();
      const latlngObject = { lat: latlng.lat, lng: latlng.lng };
      setCircleMarkers((prevCircleMarkers) => {
        const newCircleMarkers = [...prevCircleMarkers, latlngObject];
        return newCircleMarkers;
      });
    } else if (layer instanceof L.Circle) {
      const latlng = layer.getLatLng();
      const latlngObject = { lat: latlng.lat, lng: latlng.lng };
      setCircle((prevCircle) => {
        const newCircle = [...prevCircle, latlngObject];
        return newCircle;
      });
    } else if (layer instanceof L.Rectangle) {
      const bounds = layer.getBounds();
      setRectBounds((prevRectBounds) => {
        const newRectBounds = [...prevRectBounds, bounds];
        return newRectBounds;
      });
    } else if (layer instanceof L.Polygon) {
      const latlngs = layer.getLatLngs();
      setPolygons((prevPolygons) => {
        const newPolygon = [...prevPolygons, latlngs];
        return newPolygon;
      });
    } else if (layer instanceof L.Polyline) {
      const latlngs = layer.getLatLngs();
      setPolylines((prevPolylines) => {
        const newPolyline = [...prevPolylines, latlngs];
        return newPolyline;
      });
    } else {
      console.warn("Unhandled layer type:", layer);
    }
  };

  const handleCreateMap = async () => {
    try {
      const response = await CreateMap({
        id: state,
        map_data: {
          markers: markers,
          circleMarkers: circleMarkers,
          circle: circle,
          rectBounds: rectBounds,
          polygons: polygons,
          polylines: polylines,
        },
      });

      if (response?.data?.status === "success") {
        show_Toast({
          status: true,
          message: "Map within this form created successfully",
        });
      } else {
        show_Toast({
          status: false,
          message: "Failed to save JSON data",
        });
      }
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  const fetchData = async () => {
    if (!state) {
      // show_Toast({
      //   status: false,
      //   message: "Open map within project options",
      // });
      return;
    }
    try {
      const response = await GetMap(state);
      if (response?.data?.status === "success") {
        const mapData = JSON.parse(response.data.response.project.project_map);
        setResMarkers(mapData?.markers);
        setResCircleMarkers(mapData?.circleMarkers);
        setResRectBounds(mapData?.rectBounds);
        setResPolygons(mapData?.polygons);
        setResPolylines(mapData?.polylines);
      }
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handlePrint = () => {
    window.print(); 
  };

  return (
    <>
      <Helmet>
        <title> Dashboard | Map</title>
      </Helmet>
    <div>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Button
          variant="contained"
          onClick={handleCreateMap}
          sx={{
            margin: "0px 4px",
            backgroundColor: "#3C4256 !important",
            color: "white !important",
            marginBottom: ".5rem",
            "&:hover": {
              backgroundColor: "white !important",
              color: "black !important",
              outline: "2px solid #3C4256",
              outlineOffset: "-2px",
            },
            '@media print': {
              display: 'none !important', // Hide the specific button on print
            },
          }}
        >
          Create Map
        </Button>
        <Button
          variant="contained"
          onClick={handlePrint}
          sx={{
            margin: "0px 4px",
            backgroundColor: "#3C4256 !important",
            color: "white !important",
            marginBottom: ".5rem",
            "&:hover": {
              backgroundColor: "white !important",
              color: "black !important",
              outline: "2px solid #3C4256",
              outlineOffset: "-2px",
            },
            '@media print': {
              display: 'none !important', // Hide the specific button on print
            },
          }}
        >
          Print
        </Button>
      </Stack>
      <MapContainer center={center} zoom={zoom} style={{ height: "500px" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {resMarkers?.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.lat, marker.lng]}
            icon={customSvgIcon}
          >
            <Popup>
              <div>
                <h3>Marker {index + 1}</h3>
                <p>Latitude: {marker.lat}</p>
                <p>Longitude: {marker.lng}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        {resCircleMarkers?.map((circleMarker, index) => (
          <CircleMarker
            key={index}
            center={[circleMarker.lat, circleMarker.lng]}
            radius={10}
          >
            <Popup>Circle Marker {index + 1}</Popup>
          </CircleMarker>
        ))}
        {resRectBounds?.map((bounds, index) => (
          <Rectangle
            key={index}
            bounds={[
              [bounds._southWest.lat, bounds._southWest.lng],
              [bounds._northEast.lat, bounds._northEast.lng],
            ]}
          >
            <Popup>Rectangle {index + 1}</Popup>
          </Rectangle>
        ))}
        {resPolygons?.map((polygonGroup, groupIndex) => (
          <FeatureGroup key={groupIndex}>
            {polygonGroup?.map((polygon, polygonIndex) => (
              <Polygon
                key={polygonIndex}
                positions={polygon?.map((point) => [point.lat, point.lng])}
              >
                <Popup>Polygon {polygonIndex + 1}</Popup>
              </Polygon>
            ))}
          </FeatureGroup>
        ))}
        {resPolylines?.map((polyline, index) => (
          <Polyline
            key={index}
            positions={polyline.map((point) => [point.lat, point.lng])}
          >
            <Popup>Polyline {index + 1}</Popup>
          </Polyline>
        ))}
        <FeatureGroup>
          <EditControl
            position="topright"
            onCreated={handleDrawCreated}
            draw={{
              marker: true,
              circle: true,
              rectangle: true,
              polygon: true,
              polyline: true,
            }}
          />
        </FeatureGroup>
      </MapContainer>
    </div>
    </>
  );
};

export default Map;

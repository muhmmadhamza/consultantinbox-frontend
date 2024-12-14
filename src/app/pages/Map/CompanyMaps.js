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
  Circle,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { useLocation } from "react-router-dom";
import httpRequest from "../../axios/index";
import show_Toast from "../../helpers/toast.helper";
import { CreateMap, GetCompanyMap, GetMap } from "../../services";
import { Button, Stack } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";

const customSvgIcon = new L.DivIcon({
  className: "",
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

const CompanyMaps = () => {
  const { companyId = null } = useSelector((state) => state.login);

  const location = useLocation();
  const { state } = location;

  const [companyMaps, setCompanyMaps] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [circleMarkers, setCircleMarkers] = useState([]);
  const [circle, setCircle] = useState([]);
  const [rectBounds, setRectBounds] = useState([]);
  const [polygons, setPolygons] = useState([]);
  const [polylines, setPolylines] = useState([]);

  const [resMarkers, setResMarkers] = useState([]);
  const [resCircleMarkers, setResCircleMarkers] = useState([]);
  const [resCircle, setResCircle] = useState([]);
  const [resRectBounds, setResRectBounds] = useState([]);
  const [resPolygons, setResPolygons] = useState([]);
  const [resPolylines, setResPolylines] = useState([]);

  const handleDelete = async (type, mapIndex, dataIndex) => {
    try {
      const newMaps = [...companyMaps];
      const mapData = JSON.parse(JSON.stringify(newMaps[mapIndex]));
      switch (type) {
        case "marker":
          mapData.company_map.markers = mapData.company_map.markers.filter(
            (_, index) => index !== dataIndex
          );
          break;
        case "circleMarker":
          mapData.company_map.circleMarkers =
            mapData.company_map.circleMarkers.filter(
              (_, index) => index !== dataIndex
            );
          break;
        case "circle":
          mapData.company_map.circle = mapData.company_map.circle.filter(
            (_, index) => index !== dataIndex
          );
          break;
        case "rectBounds":
          mapData.company_map.rectBounds =
            mapData.company_map.rectBounds.filter(
              (_, index) => index !== dataIndex
            );
          break;
        case "polygon":
          mapData.company_map.polygons = mapData.company_map.polygons.filter(
            (_, index) => index !== dataIndex
          );
          break;
        case "polyline":
          mapData.company_map.polylines = mapData.company_map.polylines.filter(
            (_, index) => index !== dataIndex
          );
          break;
        default:
          break;
      }
      newMaps[mapIndex] = mapData;
      setCompanyMaps(newMaps);
      const payload = {
        id: mapData.id,
        map_data: mapData.company_map,
      };

      if (Object.values(payload.map_data).some((array) => array.length > 0)) {
        await httpRequest.put("api/maps/update", payload);
      } else {
        await httpRequest.delete(`api/maps/delete/${payload.id}`);
      }
    } catch (error) {
      show_Toast({
        status: false,
        message: "Failed to delete item",
      });
    }
  };

  const handleDrawCreated = (e) => {
    const { layer } = e;
    let type = e.layerType;

    if (layer instanceof L.Marker) {
      const latlng = layer.getLatLng();
      const latlngObject = { lat: latlng.lat, lng: latlng.lng };
      setMarkers((prevMarkers) => {
        const newMarkers = [...prevMarkers, latlngObject];
        return newMarkers;
      });
      layer.setIcon(customSvgIcon);
    } else if (type === "circlemarker") {
      const latlng = layer.getLatLng();
      const latlngObject = { lat: latlng.lat, lng: latlng.lng };
      setCircleMarkers((prevCircleMarkers) => {
        const newCircleMarkers = [...prevCircleMarkers, latlngObject];
        return newCircleMarkers;
      });
    } else if (type === "circle") {
      const latlng = layer.getLatLng();
      const latlngObject = { lat: latlng.lat, lng: latlng.lng };
      const radius = layer.getRadius();
      setCircle((prevCircle) => [...prevCircle, { ...latlngObject, radius }]);
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
    if (
      !markers.length &&
      !circleMarkers.length &&
      !circle.length &&
      !rectBounds.length &&
      !polygons.length &&
      !polylines.length
    ) {
      show_Toast({
        status: false,
        message: "Please create a map first",
      });
      return;
    }

    try {
      let response;
      if (state) {
        response = await httpRequest.post("api/maps/projects/create", {
          project_id: state,
          map_data: {
            markers: markers,
            circleMarkers: circleMarkers,
            circle: circle,
            rectBounds: rectBounds,
            polygons: polygons,
            polylines: polylines,
          },
        });
      } else if (companyId) {
        response = await httpRequest.post("api/maps/create", {
          company_id: companyId,
          map_data: {
            markers: markers,
            circleMarkers: circleMarkers,
            circle: circle,
            rectBounds: rectBounds,
            polygons: polygons,
            polylines: polylines,
          },
        });
      } else {
        return;
      }

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
    try {
      let response;
      if (state) {
        response = await GetMap(state);
      } else if (companyId) {
        response = await GetCompanyMap(companyId);
      } else {
        return;
      }

      if (response?.data?.status === "success") {
        if (state) {
          const mapsData = response.data.response.map((item) => ({
            id: item.id,
            company_map: JSON.parse(item.company_map),
          }));
          setCompanyMaps(mapsData);
          
        } else {
          const mapsData = response.data.response.map((item) => ({
            id: item.id,
            company_map: JSON.parse(item.company_map),
          }));
          setCompanyMaps(mapsData);
        }
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
              "@media print": {
                display: "none !important",
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
              "@media print": {
                display: "none !important",
              },
            }}
          >
            Print
          </Button>
        </Stack>
            <MapContainer
              center={center}
              zoom={zoom}
              style={{ height: "500px" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <>
                {companyMaps.map((mapData, mapIndex) => (
                  <div key={mapIndex}>
                    {mapData?.company_map?.markers?.map((marker, index) => (
                      <Marker
                        key={`${marker.lat}-${marker.lng}`}
                        position={[marker.lat, marker.lng]}
                        icon={customSvgIcon}
                      >
                        <Popup>
                          <div>
                            <h3>Marker</h3>
                            <p>Latitude: {marker.lat}</p>
                            <p>Longitude: {marker.lng}</p>
                            <Button
                              variant="contained"
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
                              }}
                              onClick={() =>
                                handleDelete("marker", mapIndex, index)
                              }
                            >
                              Delete
                            </Button>
                          </div>
                        </Popup>
                      </Marker>
                    ))}

                    {mapData?.company_map?.circleMarkers?.map(
                      (circleMarker, index) => (
                        <CircleMarker
                          key={`${circleMarker.lat}-${circleMarker.lng}`}
                          center={[circleMarker.lat, circleMarker.lng]}
                          radius={10}
                        >
                          <Popup>
                            <h3>Circle Marker</h3>
                            <Button
                              variant="contained"
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
                              }}
                              onClick={() =>
                                handleDelete("circleMarker", mapIndex, index)
                              }
                            >
                              Delete
                            </Button>
                          </Popup>
                        </CircleMarker>
                      )
                    )}

                    {mapData?.company_map?.circle?.map((circle, index) => (
                      <Circle
                        key={`${circle.lat}-${circle.lng}`}
                        center={[circle.lat, circle.lng]}
                        radius={circle?.radius}
                      >
                        <Popup>
                          <h3>Circle</h3>
                          <Button
                            variant="contained"
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
                            }}
                            onClick={() =>
                              handleDelete("circle", mapIndex, index)
                            }
                          >
                            Delete
                          </Button>
                        </Popup>
                      </Circle>
                    ))}

                    {mapData?.company_map?.rectBounds?.map((bounds, index) => (
                      <Rectangle
                        key={`${bounds._southWest.lat}-${bounds._southWest.lng}-${bounds._northEast.lat}-${bounds._northEast.lng}`}
                        bounds={[
                          [bounds._southWest.lat, bounds._southWest.lng],
                          [bounds._northEast.lat, bounds._northEast.lng],
                        ]}
                      >
                        <Popup>
                          <h3>Rectangle</h3>
                          <Button
                            variant="contained"
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
                            }}
                            onClick={() =>
                              handleDelete("rectBounds", mapIndex, index)
                            }
                          >
                            Delete
                          </Button>
                        </Popup>
                      </Rectangle>
                    ))}

                    {mapData?.company_map?.polygons?.map(
                      (polygonGroup, groupIndex) => (
                        <FeatureGroup key={groupIndex}>
                          {polygonGroup?.map((polygon, polygonIndex) => (
                            <Polygon
                              key={`${polygon
                                .map((point) => `${point.lat}-${point.lng}`)
                                .join(",")}`}
                              positions={polygon?.map((point) => [
                                point.lat,
                                point.lng,
                              ])}
                            >
                              <Popup>
                                <h3>Polygon {polygonIndex + 1}</h3>
                                <Button
                                  variant="contained"
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
                                  }}
                                  onClick={() =>
                                    handleDelete(
                                      "polygon",
                                      mapIndex,
                                      polygonIndex
                                    )
                                  }
                                >
                                  Delete
                                </Button>
                              </Popup>
                            </Polygon>
                          ))}
                        </FeatureGroup>
                      )
                    )}

                    {mapData?.company_map?.polylines?.map((polyline, index) => (
                      <Polyline
                        key={`${polyline
                          .map((point) => `${point.lat}-${point.lng}`)
                          .join(",")}`}
                        positions={polyline.map((point) => [
                          point.lat,
                          point.lng,
                        ])}
                      >
                        <Popup>
                          <h3>Polyline {index + 1}</h3>
                          <Button
                            variant="contained"
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
                            }}
                            onClick={() =>
                              handleDelete("polyline", mapIndex, index)
                            }
                          >
                            Delete
                          </Button>
                        </Popup>
                      </Polyline>
                    ))}
                  </div>
                ))}
              </>
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
                    circlemarker: true,
                  }}
                />
              </FeatureGroup>
            </MapContainer>
      </div>
    </>
  );
};

export default CompanyMaps;

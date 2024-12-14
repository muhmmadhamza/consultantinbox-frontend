import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const JeoJsonmap = ({ geoJsonData }) => {
    useEffect(() => {
      
      const map = L.map('map').setView([31.5079222, 74.35680417], 15);
   
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);
  
      
      L.geoJSON(geoJsonData).addTo(map);
      return () => {
         
        map.remove(); 
      };
    }, [geoJsonData]);
  
    return <div id="map" style={{ height: '300px'}} />;
  };
  
  export default JeoJsonmap;

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    sop: any;
  }
}

const Map = () => {
  const mapRef = useRef(null);
  const { sop } = window;

  const geofunc = (position: any, map: any) => {
    const utmkXY = new sop.LatLng(
      position.coords.latitude,
      position.coords.longitude,
    );
    const center = [utmkXY.x, utmkXY.y];
    const marker = sop.marker(center);

    map.setView(sop.utmk(utmkXY.x, utmkXY.y), 10);
    marker.addTo(map);
  };

  useEffect(() => {
    const map = sop.map(mapRef.current);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        geofunc(position, map);
      });
    } else {
      const defaultCenter = [953427, 1950827];
      geofunc(defaultCenter, map);
    }
    return () => {
      map.remove();
    };
  }, [sop, mapRef.current]);

  return (
    <div>
      <div ref={mapRef} style={{ width: '1143px', height: '594px' }} />
    </div>
  );
};

export default Map;

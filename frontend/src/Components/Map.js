import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const center = {
    lat: 20.99872783699226, // Vĩ độ
    lng: 105.81965455739413, // Kinh độ
  };

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
       bootstrapURLKeys={{ key: "API_KEY_CỦA_BẠN" }}
        defaultCenter={center}
        defaultZoom={15}
      >
        {/* Thêm marker hoặc các thành phần khác vào bản đồ */}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
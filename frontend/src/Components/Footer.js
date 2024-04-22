import React from "react";
// import Map from "./Map";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto p-4 bg-gray-400">
        <p className="text-center font-bold" title="Youtube Channel">
          MAZUNO Company Technology
        </p>
      </div>
      {/* <div>
        <Map />
      </div> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.997800408473!2d105.84843977471344!3d20.992725289016335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad0a9c465255%3A0x3098b981e692f3bd!2sHoang%20mai!5e0!3m2!1svi!2s!4v1713604836992!5m2!1svi!2s"
        width="1800"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </footer>
  );
};

export default Footer;

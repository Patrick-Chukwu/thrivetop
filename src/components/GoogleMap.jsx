import React from 'react';

const GoogleMap = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <iframe
        title="Thrivetop Academy Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1515128.5414564447!2d3.3690825482445814!3d8.090728213161483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d87b8ace9d7%3A0x88b18963269f6904!2sThrivetop%20Academy!5e0!3m2!1sen!2sng!4v1725441248116!5m2!1sen!2sng"
        width="100%"
        height="200"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default GoogleMap;

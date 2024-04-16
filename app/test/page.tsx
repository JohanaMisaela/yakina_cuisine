import React from "react";

export default function page() {
  return (
    <iframe
      style={{ width: "100%", height: "90vh", objectFit: "cover" }}
      src="https://www.youtube.com/embed/bBPCcntxPZE?rel=0&autoplay&mute=1&controls=0"
      title="YouTube video player"
      frameBorder="0"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}

import React from "react";
import YouTube from "react-youtube";

export const ModalVideo = ({ closeModal }) => {
  const handleClose = () => {
    closeModal();
  };
  const videoUrl = "https://youtu.be/ZnOAK04tJhc?list=RDZnOAK04tJhc";
  const videoId = videoUrl.match(
    /(?:[?v=]|\/embed\/|\/v\/|youtu\.be\/|\/embed\/|\/e\/|\/watch\?v=)([^#\&\?]{11})/
  )[1];

  const videoOptions = {
    width: "550",
    height: "450",
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <YouTube videoId={videoId} opts={videoOptions} />
      </div>
    </div>
  );
};

import React from "react";
import YouTube from "react-youtube";

export const ModalVideo = ({ closeModal, film }) => {
  const handleClose = () => {
    closeModal();
  };
  const videoUrl = film.link;
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

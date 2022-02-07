import React, { useRef } from "react";
import VideoPlayer from "../../images/Video/VideoPlayer.mp4";
import VideoBg from "../../images/Video/videoBg.png";
import playBtn from "../../images/Video/playBtn.png";
import "./Video.css";

const Video = () => {
  const vid = useRef(null);
  const control = useRef(null);
  let display = true;

  function VidControl() {
    if (display === true) {
      if (vid.current !== null) {
        vid.current.play();
        control.current.style.opacity = "0";
        display = false;
      }
    } else if (display !== true) {
      if (vid.current !== null) {
        vid.current.pause();
        control.current.style.opacity = "1";
        display = true;
      }
    }
  }

  return (
    <div className="video">
      <div className="header__container" id="video">
        <h2>
          FITNESS is <span>a LIFESTYLE</span>
        </h2>
      </div>
      <div className="video__content">
        <div className="video__container" onClick={VidControl}>
          <video
            controls
            className="videoPlayer"
            ref={vid}
            controlsList="nodownload"
          >
            <source src={VideoPlayer} type="video/mp4" />
          </video>
          <div className="control" ref={control}>
            <img src={VideoBg} alt="Video Bg" />
            <div className="playBtn">
              <img src={playBtn} alt="Play Btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

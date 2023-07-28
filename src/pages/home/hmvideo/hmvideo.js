import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./hmvideo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
export const Video = () => {
    const [showVideo, setShowVideo] = useState(false);

   const show=(param)=>
   {
    setShowVideo(param)
   }

  return (
    <>
  <div className={showVideo ==true?
  "test w-100 h-100 "
  :
  "d-none"
  }>
  <iframe className="iframe" src="https://www.youtube.com/embed/xV5DnCI0AJk" 
  title="LOUIS VUITTON Fashion Film 2018 | Pre-Fall 2018 | Directed by VIVIENNE &amp; TAMAS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <button className="text-white position-fixed top-0 end-0 btn fs-3 botona"
   onClick={()=>
              {
                show(false)
              }}
  >X</button>
  </div>

      <div className="vids">
        <div className="bg-vid">
          <div className="positionn">
            <h3>The Beauty </h3>
            <h1>LOOKBOOK</h1>
            <div className="play"    onClick={()=>
              {
                show(true)
              }}>
              <p 
              >PLAY VIDEO</p>
              <FontAwesomeIcon
                icon={faPlay}
                className="ico"

              />
            </div>
          </div>


        </div>
      </div>
    </>
  );
};
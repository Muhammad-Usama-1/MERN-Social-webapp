import React, { useState } from "react";

function PhotoHover() {
  const [hover, setHover] = useState(false);
  return (
    <div onMouseOut={() => setHover(false)} onMouseOver={() => setHover(true)}>
      <img
        className="photo-hover"
        src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/64.e1e5722c.jpg"
        alt=""
      />
      {hover ? <div className="hovered-element">I am hovered</div> : null}
    </div>
  );
}

export default PhotoHover;

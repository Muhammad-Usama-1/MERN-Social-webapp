import React, { useState } from "react";
import "../styles/TabStyle.css";
function Tab() {
  const [toggle, setToggle] = useState(1);
  return (
    <>
      <div className="tab-btns">
        <button
          onClick={() => setToggle(1)}
          className={toggle === 1 ? "tab-btn-active" : null}
        >
          Timeline
        </button>
        <button
          onClick={() => setToggle(2)}
          className={toggle === 2 ? "tab-btn-active" : null}
        >
          About
        </button>
        <button
          onClick={() => setToggle(3)}
          className={toggle === 3 ? "tab-btn-active" : null}
        >
          Friends
        </button>
        <button
          onClick={() => setToggle(4)}
          className={toggle === 4 ? "tab-btn-active" : null}
        >
          Photos
        </button>
      </div>
      <div className={toggle === 1 ? "content-active" : "content-hidden"}>
        Content1
      </div>
      <div className={toggle === 2 ? "content-active" : "content-hidden"}>
        <div className="tab-about">
          <div>buttons</div>
          <div>
            <h4>Contact information</h4>
            <hr />
          </div>
        </div>
      </div>
      <div className={toggle === 3 ? "content-active" : "content-hidden"}>
        <h1>Friends </h1>
        <div className="tab-friendsbtn-container">
          <button>All friends</button>
          <button>Recently Added</button>
          <button>Close friends</button>
          <button>Home /town</button>
          <button>Following</button>
        </div>
        <div className="friendsCard-container">
          <div className="tab-friendCard">
            <img
              src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/05.803eaf62.jpg"
              alt=""
            />
            <div>
              <p>Petey Curiser</p>
              <span>15 Friends</span>
            </div>
            <button style={{ marginLeft: "auto" }}>Friends</button>
          </div>
          <div className="tab-friendCard">
            <img
              src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/05.803eaf62.jpg"
              alt=""
            />
            <div>
              <p>Petey Curiser</p>
              <span>15 Friends</span>
            </div>
            <button style={{ marginLeft: "auto" }}>Friends</button>
          </div>
          <div className="tab-friendCard">
            <img
              src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/05.803eaf62.jpg"
              alt=""
            />
            <div>
              <p>Petey Curiser</p>
              <span>15 Friends</span>
            </div>
            <button style={{ marginLeft: "auto" }}>Friends</button>
          </div>
          <div className="tab-friendCard">
            <img
              src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/05.803eaf62.jpg"
              alt=""
            />
            <div>
              <p>Petey Curiser</p>
              <span>15 Friends</span>
            </div>
            <button style={{ marginLeft: "auto" }}>Friends</button>
          </div>
          <div className="tab-friendCard">
            <img
              src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/05.803eaf62.jpg"
              alt=""
            />
            <div>
              <p>Petey Curiser</p>
              <span>15 Friends</span>
            </div>
            <button style={{ marginLeft: "auto" }}>Friends</button>
          </div>
          <div className="tab-friendCard">
            <img
              src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/05.803eaf62.jpg"
              alt=""
            />
            <div>
              <p>Petey Curiser</p>
              <span>15 Friends</span>
            </div>
            <button style={{ marginLeft: "auto" }}>Friends</button>
          </div>
        </div>
      </div>
      <div className={toggle === 4 ? "content-active" : "content-hidden"}>
        <div>
          <h3>Phtotos</h3>
          <div>
            <button>phtoos of you</button>
            <button>your photos</button>
          </div>
          <div className="tab-photo-section">
            <img
              src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/59.9cbeb915.jpg"
              alt=""
            />
            <img
              src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/54.d81af111.jpg"
              alt=""
            />
            <img
              src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/57.0cd71def.jpg"
              alt=""
            />
            <img
              src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/53.e97dd35c.jpg"
              alt=""
            />
            <img
              src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/53.e97dd35c.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Tab;

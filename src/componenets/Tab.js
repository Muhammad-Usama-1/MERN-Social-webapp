import React, { useState } from "react";
import "../styles/TabStyle.css";
function Tab() {
  const [toggle, setToggle] = useState(2);
  const [inToggle, setInToggle] = useState(1);
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
          <div className="tab-about-btns">
            <button
              onClick={() => setInToggle(1)}
              className={
                inToggle === 1 ? "tab-about-btn-active" : "tab-about-btn"
              }
            >
              contact and basic info
            </button>
            <button
              onClick={() => setInToggle(2)}
              className={
                inToggle === 2 ? "tab-about-btn-active" : "tab-about-btn"
              }
            >
              Family and relationship
            </button>
            <button
              onClick={() => setInToggle(3)}
              className={
                inToggle === 3 ? "tab-about-btn-active" : "tab-about-btn"
              }
            >
              work and education
            </button>
            <button
              onClick={() => setInToggle(4)}
              className={
                inToggle === 4 ? "tab-about-btn-active" : "tab-about-btn"
              }
            >
              Place you have lived
            </button>
            <button
              onClick={() => setInToggle(5)}
              className={
                inToggle === 5 ? "tab-about-btn-active" : "tab-about-btn"
              }
            >
              Details about you
            </button>
          </div>
          <div
            className={inToggle === 1 ? "inner-tab-active" : "inner-tab-hidden"}
          >
            <div className="inner-content-box">
              <h4>Contact information</h4>
              <hr className="margin-line" />
              <div>
                <div className="box">
                  <p>Email</p>
                  <p>mdusama225@gmail.com</p>
                </div>
                <div className="box">
                  <p>Mobile</p>
                  <p>03402306855</p>
                </div>
                <div className="box">
                  <p>Address</p>
                  <p>Asia , Pakistan (Islamic country) </p>
                </div>
              </div>
              {/* ---------------------- */}
              <h4>Website and social links</h4>
              <hr className="margin-line" />
              <div>
                <div className="box">
                  <p>Website</p>
                  <p>usama-portfolio.netlify.app</p>
                </div>
                <div className="box">
                  <p>social </p>
                  <p>www.github.com/muhammad-usama-1</p>
                </div>
              </div>
              {/* ---------------------- */}
              <h4>Basic information</h4>
              <hr className="margin-line" />
              <div>
                <div className="box">
                  <p>Birth Date</p>
                  <p>24 january</p>
                </div>
                <div className="box">
                  <p>Birthyear</p>
                  <p>1999</p>
                </div>
                <div className="box">
                  <p>Gender</p>
                  <p>Male</p>
                </div>
                <div className="box">
                  <p>internseted in</p>
                  <p>Designing</p>
                </div>
                <div className="box">
                  <p>language</p>
                  <p>English, Japenense</p>
                </div>
              </div>
              {/* ---------------------- */}
            </div>
          </div>
          <div
            className={inToggle === 2 ? "inner-tab-active" : "inner-tab-hidden"}
          >
            <div className="inner-content-box">
              <h4>Relationship</h4>
              <div>
                <p>+</p>
                <p>Add your relationship status</p>
              </div>
            </div>
          </div>
          <div
            className={inToggle === 3 ? "inner-tab-active" : "inner-tab-hidden"}
          >
            <h4>work and ecucation</h4>
            <hr />
          </div>
          <div
            className={inToggle === 4 ? "inner-tab-active" : "inner-tab-hidden"}
          >
            <h4>palce yo have lived</h4>
            <hr />
          </div>
          <div
            className={inToggle === 5 ? "inner-tab-active" : "inner-tab-hidden"}
          >
            <div className="inner-content-box">
              <h4>About You</h4>
              <p>Hi i am Usama i have been designing and coding for 1 years </p>
              <h4>Others name</h4>

              <p>Bini Rock</p>
              <h4>Favourite qqoutes</h4>

              <p>
                Your time is limited, so don't waste it living someone else's
                life. ..
              </p>
            </div>
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

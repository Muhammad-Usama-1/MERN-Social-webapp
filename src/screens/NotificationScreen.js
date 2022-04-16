import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeIcon from "@mui/icons-material/Home";
// import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "../styles/NotificationScreenStyle.css";
function NotificationScreen() {
  return (
    <div className="content-notification">
      <h3 style={{ fontWeight: "bold", marginBottom: "20px" }}>Notification</h3>
      <div className="notification-card">
        <div>
          <img
            className="notification-card--image"
            src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/01.7340bf5d.jpg"
            alt=""
          />
        </div>
        <div>
          <p>Paige Turner Posted in UI/UX Community</p>
          <p>15 ago</p>
        </div>
        <div>
          <FavoriteBorderIcon
            sx={{
              color: "#D2042D",
              padding: "2px",
              backgroundColor: "#F88379",
            }}
          />

          <MoreHorizIcon />
        </div>
      </div>
      {/* =========================== */}
      <div className="notification-card">
        <div>
          <img
            className="notification-card--image"
            src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/01.7340bf5d.jpg"
            alt=""
          />
        </div>
        <div>
          <p>Paige Turner Posted in UI/UX Community</p>
          <p>15 ago</p>
        </div>
        <div>
          <FavoriteBorderIcon
            sx={{
              color: "#D2042D",
              padding: "2px",
              backgroundColor: "#F88379",
            }}
          />

          <MoreHorizIcon />
        </div>
      </div>
      {/* =========================== */}
      <div className="notification-card">
        <div>
          <img
            className="notification-card--image"
            src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/01.7340bf5d.jpg"
            alt=""
          />
        </div>
        <div>
          <p>Paige Turner Posted in UI/UX Community</p>
          <p>15 ago</p>
        </div>
        <div>
          <FavoriteBorderIcon
            sx={{
              color: "#D2042D",
              padding: "2px",
              backgroundColor: "#F88379",
            }}
          />

          <MoreHorizIcon />
        </div>
      </div>
      {/* =========================== */}
      <div className="notification-card">
        <div>
          <img
            className="notification-card--image"
            src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/01.7340bf5d.jpg"
            alt=""
          />
        </div>
        <div>
          <p>Paige Turner Posted in UI/UX Community</p>
          <p>15 ago</p>
        </div>
        <div>
          <FavoriteBorderIcon
            sx={{
              color: "#D2042D",
              padding: "2px",
              backgroundColor: "#F88379",
            }}
          />

          <MoreHorizIcon />
        </div>
      </div>
      {/* =========================== */}
      <div className="notification-card">
        <div>
          <img
            className="notification-card--image"
            src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/01.7340bf5d.jpg"
            alt=""
          />
        </div>
        <div>
          <p>Paige Turner Posted in UI/UX Community</p>
          <p>15 ago</p>
        </div>
        <div>
          <FavoriteBorderIcon
            sx={{
              color: "#D2042D",
              padding: "2px",
              backgroundColor: "#F88379",
            }}
          />

          <MoreHorizIcon />
        </div>
      </div>
      {/* =========================== */}
    </div>
  );
}

export default NotificationScreen;

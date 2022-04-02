import React from "react";
import UserCard from "../reusable/UserCard";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { Avatar, Divider, Menu, MenuItem } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FbImageLibrary from "react-fb-image-grid";

// import QuiltedImageList from "./ImageList";
// import { Logout, PersonAdd, Settings } from "@mui/icons-material";
// import Photogrid from "react-facebook-photo-grid";

function Post() {
  const images = [
    "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1603065226404-aa3c955eb5aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1648716522710-6beec6cbb293?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1648809646466-dd4891a0bc15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="post">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <UserCard cta={"Added new photo"} />
        <MoreHorizIcon
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          fontSize="large"
          // aria-expanded={open ? "true" : undefined}
        ></MoreHorizIcon>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "center", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          // anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        >
          <MenuItem>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar />
              <div>
                <p>Save Post</p>
                <p>Add this to your saved item</p>
              </div>
            </div>
          </MenuItem>
          <Divider />

          <MenuItem>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar />
              <div>
                <p>Hide Post</p>
                <p>see fewer post like this</p>
              </div>
            </div>
          </MenuItem>
          <Divider />

          <MenuItem>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar />
              <div>
                <p>Unfollow User</p>
                <p>stop seeing post but stay friends</p>
              </div>
            </div>
          </MenuItem>
          <Divider />

          <MenuItem>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar />
              <div>
                <p>Notification</p>
                <p>turn on notification for this post</p>
              </div>
            </div>
          </MenuItem>
          <Divider />
        </Menu>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
          aspernatur expedita. Sit soluta, id repellat ut ullam laboriosam
          quidem vero.
        </p>
      </div>

      <div className="post-media">
        {/* <img
          src="https://images.unsplash.com/photo-1648809646466-dd4891a0bc15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        /> */}
        <FbImageLibrary countFrom={4} images={images} />
      </div>

      <div
        className="post-reaction"
        style={{ display: "flex", alignItems: "center" }}
      >
        <ThumbUpAltOutlinedIcon
          style={{ color: "#00b4cc", margin: 5 }}
          fontSize="large"
        />
        <span>140 Likes </span>
        <span>20 Comments</span>
        <div
          style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
        >
          <ShareOutlinedIcon style={{ margin: 5 }} fontSize="large" />
          <span>99 shares</span>
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default Post;

import React from "react";
import UserCard from "../reusable/UserCard";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, Divider, Menu, MenuItem } from "@mui/material";
// import { Logout, PersonAdd, Settings } from "@mui/icons-material";

function Post() {
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
      <div>
        <img
          className="post--img"
          src="https://images.unsplash.com/photo-1648737119359-510d4f551382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default Post;

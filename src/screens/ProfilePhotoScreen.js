import React from "react";
import PageHeader from "../reusable/PageHeader";
import PhotoHover from "../reusable/PhotoHover";
import "../styles/ProfilePhtScreenStyle.css";
function ProfilePhotoScreen() {
  return (
    <>
      <div className="content-profilephoto">
        <PageHeader title="Your Photos" />
        <div className="profile-photos-container">
          <PhotoHover />
          <PhotoHover />
          <PhotoHover />
          <PhotoHover />
          <PhotoHover />
          <PhotoHover />
          <PhotoHover />
        </div>
      </div>
    </>
  );
}

export default ProfilePhotoScreen;

import React from "react";
import "./postheader.scss";
import { Breadcrumbcomponent } from "../../../Molecules/Navbar/Breadcrumb/Breadcrumb-link";
import { Post } from "../../../Molecules/Text/Post/Post";

export const PostHeader = ({ data, active, header, country, description }) => (
  <div className="post-header-text">
    <Breadcrumbcomponent data={data} active={active} />
    <Post
      headerText={header}
      countryText={country}
      descriptionText={description}
    />
  </div>
);

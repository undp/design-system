import React from 'react';
import './post-header.scss';
import { Breadcrumbcomponent } from '../../../Components/Navigationcomponents/Breadcrumbs/Breadcrumbs';
import { Post } from '../../../Molecules/Text/Post/Post';

export const PostHeader = ({
  data, active, header, country, description,
}) => (
  <>
    <Breadcrumbcomponent data={data} active={active} />
    <Post
      headerText={header}
      countryText={country}
      descriptionText={description}
    />
  </>
);

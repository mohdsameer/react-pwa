// @ts-ignore

import React from 'react';
import { Helmet } from 'react-helmet-async';
import AppConfiguration from '../AppConfugration';

const HelmetConfig = () => {
  return (
    <Helmet>
      <title>{AppConfiguration.title}</title>
      <link id="favicon" rel="icon" href={AppConfiguration.icon} type="image/x-icon"/>
      <link rel="manifest" href="%PUBLIC_URL%/custom-manifest.json" />
      <meta
        name="description"
        content={AppConfiguration.meta}
      />
    </Helmet>
  );
};

export default HelmetConfig;
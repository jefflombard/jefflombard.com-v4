import React from 'react';
import { Hidden } from 'react-grid-system';

import BrandedButton from '../components/BrandedButton';

const Home = (props) => {
  const { videoHandler } = props;
  return (
    <div className="home">
      <div>
        <h1 className="home-header">Jeff Lombard</h1>
        <Hidden xs>
          <BrandedButton onClick={videoHandler}>Say hello! Give me a click.</BrandedButton>
        </Hidden>
      </div>
    </div>
  );
};

export default Home;

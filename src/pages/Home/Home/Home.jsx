import React from 'react';
import Banner from '../Banner/Banner';
import Trendings from '../Trendings/Trendings';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Trendings></Trendings>
          <Services></Services>
        </div>
    );
};

export default Home;
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerPic1 from '../../../assets/Banner/1.png';
import bannerPic2 from '../../../assets/Banner/2.png';
import bannerPic3 from '../../../assets/Banner/3.png';
import bannerPic4 from '../../../assets/Banner/4.png';
import bannerPic5 from '../../../assets/Banner/5.png';

const Banner = () => {
    return (
        <Carousel autoPlay showArrows={true} infiniteLoop>
                <div>
                    <img src={bannerPic1} />
                </div>
                <div>
                    <img src={bannerPic2} /> 
                </div>
                <div>
                    <img src={bannerPic3} />
                </div>
                <div>
                    <img src={bannerPic4} />
                </div>
                <div>
                    <img src={bannerPic5} /> 
                </div>
            </Carousel>
    );
};

export default Banner;
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Trendings = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("trending.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const calculateDiscountPrice = (actualPrice, discountPrice) => {
    const discountedPrice = actualPrice - (actualPrice * discountPrice) / 100;
    return discountedPrice.toFixed(2);
  };

  return (
    <div className="my-10">
      <div className="border-4 border-dashed w-40 mx-auto p-4">
        <h4 className="text-xl font-semibold text-center">Trending</h4>
      </div>
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mt-5">
        Trending Products
      </h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product._id} className="relative p-4">
            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 mx-auto mb-4"
                />
                <div className="absolute top-5 right-5 bg-red-500 text-white px-2 py-1 rounded-md">
                  {product.discount}% OFF
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-lg font-medium">
                  Ratings: {product.rating}
                </p>
                <div className="flex justify-center mt-2">
                  <span className="text-gray-500 text-sm line-through">
                    ${product.price}
                  </span>
                  <span className="text-green-500 font-bold ml-2">
                    ${calculateDiscountPrice(product.price, product.discount)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Trendings;

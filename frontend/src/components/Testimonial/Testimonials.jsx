import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    Infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          Infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
        Booking through this website was a breeze! The interface is intuitive, making it easy to find and compare different travel options. Plus, the customer service was top-notch - they were responsive and helpful throughout the entire booking process. I highly recommend this website to anyone looking for a seamless travel experience
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Deo</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        I had an amazing trip thanks to the recommendations and guidance provided by this website. From finding the perfect accommodations to discovering hidden gems in my destination, everything was tailored to my preferences. The attention to detail and personalized service exceeded my expectations. I will definitely be using this website for all my future travels
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        I cannot say enough good things about my experience with this travel website. Not only did they offer competitive prices, but their expertise and insider knowledge truly enhanced my trip. The local tips and suggestions provided by the team made my vacation unforgettable. I'm already planning my next adventure and will be sure to use this website again!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Deo</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        I recently booked a tour through this website and was blown away by the quality of service. The tour guide was knowledgeable, friendly, and went above and beyond to ensure everyone had a fantastic experience. The itinerary was well-planned, allowing us to see all the highlights of the destination without feeling rushed. I will definitely be booking with this website again in the future!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;

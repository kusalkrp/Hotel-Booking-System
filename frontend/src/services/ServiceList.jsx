import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Calculate weather",
    desc: "Plan with Precision",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Expert Guidance, Every Step",
  },
  {
    imgUrl: customizationImg,
    title: "Customiztion",
    desc: "Tailored Experiences, Just for You",
  },
];

const ServiceList = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;

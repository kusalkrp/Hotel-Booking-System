import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData = [
   {
        imgUrl: weatherImg,
        title: "Calculate weather",
        desc: "hgvhajbjkavhsvhkaljhv",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "hgvhajbjkavhsvhkaljhv",
    },
    {
        imgUrl: customizationImg,
        title: "Customiztion",
        desc: "hgvhajbjkavhsvhkaljhv",
    },
   

]


const ServiceList = () => {
    return <>
    
        {
            serviceData.map((item, index) => <Col lg='3' key={index}>
                <ServiceCard item={item}/>
            </Col>)
    }
    
    </>
}

export default ServiceList
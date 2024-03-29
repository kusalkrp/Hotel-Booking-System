import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import Testimonials from "../components/Testimonial/Testimonials";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Newsletter from "../shared/Newsletter";


const Home = () => {
  return (
    <>
      {/* ---------hero section start-----------*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />

                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating
                  <span className="highlight"> memories</span>
                </h1>
                <p>
                Embark on an unforgettable journey through the mesmerizing landscapes and rich cultural tapestry of Sri Lanka with our expertly crafted travel packages. From lush tea plantations to ancient ruins, our tailored itineraries promise an immersive experience that captures the essence of this tropical paradise. Whether you crave the thrill of wildlife encounters or seek serenity on pristine beaches, let us be your guide as you explore the wonders of Sri Lanka. Start planning your adventure today and uncover the magic of this enchanting island
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ---------hero section start-----------*/}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">what we serve</h5>
              <h2 className="service__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/*-------featured tour section start------------ */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/*-------featured tour section end------------ */}

      {/*-------experience section end------------ */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience <br />
                  we will serve you
                </h2>
                <p>
                With our wealth of experience and dedication to excellence, we are committed to delivering unparalleled service
                  
                  ensuring each moment of your journey is filled with joy, discovery, and lasting memories. Let us guide you through the wonders of travel, providing personalized attention and expert support every step of the way
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successfull Trip </h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients </h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience </h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
       
        </Container>
      </section>

      {/*-------experience section end------------ */}

      {/*-------gallery section start------------ */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customer tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/*-------gallery  section end------------ */}

      {/*-------testimonial section start------------ */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/*-------testimonial   section end------------ */}
      
      <Newsletter />
      
      
      
    </>
  );
};

export default Home;

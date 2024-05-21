import React from "react";
import Header from "../components/header/Header";
import image from '../assets/petexpo.jpg';
import Footer from "../components/footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div style={{backgroundColor:'#efebe9',display:'flex',justifyContent:'space-between'}}>
        <div>
        <h2>About </h2>
        <p>
          Pet Expo is open to independent retailers, distributors, mass-market
          buyers, and other qualified professionals. This show is not open to
          the general public. Showcasing all types of pet products including:
          Dogs Cats Birds Pet Expo is the pet industry’s premier international
          event, known for delivering business connections and world-class
          education for pet product professionals from around the globe. Buyers
          in attendance can expect to: Browse our reimagined New Products
          Showcase with the latest pet product innovations and vote on Best in
          Show. Explore the sold-out exhibit floor with 1,100+ companies across
          3,400+ booths, and new specialty sections like The Modern Pet, The
          Natural Pet, the Aquatics Lounge, and the Supplier Pavillion. Connect
          with pet product brands and get exclusive show deals such as
          discounts, rebates with purchases, waived order minimums, and free
          shipping. Access the Global Learning Series featuring 50+ sessions on
          pet industry business education brought to you by PIDA and APPA.
          Attend APPA’s State of The Industry presentation for new insights on
          industry outlook, consumer trends, and pet owner data. Enjoy special
          events like the Unleashed welcome reception and network with the pet
          industry trailblazers.
        </p>
        
        </div>

        <img style={{width:'50%'}} src={image}></img>
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;

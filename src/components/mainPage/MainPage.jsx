import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/bird.jpg";
import image2 from "../../assets/cat.jpg";
import image3 from "../../assets/dog.jpg";
import image4 from "../../assets/petlover.png";

const MainPage = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "600px" }}
            className="d-block"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption style={{ color: "black" }}>
            <h3> Birds: Intelligence and Trainability</h3>
            <p>
              Birds are incredibly intelligent and can be trained to perform
              tricks, mimic sounds, and even speak. This can be a fun and
              rewarding experience for both the bird and the owner, fostering a
              deeper connection.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "600px" }}
            className="d-block"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption style={{ color: "white" }}>
            <h3> Cats: Cleanliness</h3>
            <p>
              Cats are naturally clean animals that groom themselves regularly.
              They typically do not have a strong odor, and litter training is
              usually straightforward, making them relatively easy to care for
              in terms of hygiene.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "600px" }}
            className="d-block"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption style={{ color: "black" }}>
            <h3>Dogs: Mental Health Benefits</h3>
            <p>
              Dogs can significantly reduce stress, anxiety, and depression.
              Their presence can increase levels of serotonin and dopamine,
              which are neurotransmitters that promote a sense of well-being and
              happiness. The routine of caring for a dog can also provide
              structure and purpose. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div style={{display:'flex',backgroundColor:'#efebe9'}}>
        <img src={image4}></img>
        <p style={{padding:'50px'}} >
        <span>The ULTIMATE Event for the Pet Lover</span>
          The World of Pets Expo and Educational Experience is the East Coast's
          largest pet expo of its kind, and is family and pet friendly. Don't
          miss this opportunity to view incredible animal and pet related
          entertainment, educational demonstrations and workshops, unique
          speakers, and one stop pet shopping. Join us at our event, it's a pet
          lovers paradise!
        </p>
      </div>
    </>
  );
};

export default MainPage;

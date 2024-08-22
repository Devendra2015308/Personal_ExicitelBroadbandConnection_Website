import React from "react";
import { useNavigate } from 'react-router-dom';
import "../src/css/Home.css"
import img7 from "../src/Pictures/Plan.png";
import img1 from "../src/Pictures/img1.png";
import img2 from "../src/Pictures/Noida.png";
import img3 from "../src/Pictures/alarm.png";
import img4 from "../src/Pictures/home.png";
import img5 from "../src/Pictures/heart.png";
import img6 from "../src/Pictures/4k.png";
import img8 from "../src/Pictures/Vector-Smart-Object.webp";
import img9 from "../src/Pictures/Vector-Smart-Object-1.webp";
import img10 from "../src/Pictures/1-1.webp";
import img11 from "../src/Pictures/Shape-1.webp";
import img12 from "../src/Pictures/women_with_phone.jpg";
import img13 from "../src/Pictures/men_with_phone.jpg";
import whatsappicon from "../src/Pictures/whatsapp.webp";




function Home() {

    const handleWhatsAppClick = () => {
      const phoneNumber = "7053604920"; // Replace with your phone number
      const message = "Hello, I would like to know more about your services.";
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }

    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/contact'); // Adjust the path if necessary
    };
    

  return (
    <div className="homepage">
      <div>
        <img src={img2} alt="Noida's Fastest Braodband"/>
      </div>
      <div className="internet-provider">
      <div className="header-section">
        <h1 className="main-title">INTERNET Wi-Fi SERVICE PROVIDER</h1>
        <p className="subtitle">
        We are passionate about revolutionizing how young Indians experience entertainment on the internet at home. 
        <br/>
        With over 1 million households connected, we're growing rapidly—very rapidly!
        </p>
      </div>
      <div className="power-factors-section">
        <h2 className="section-title1">OUR COMPETITIVE EDGE</h2>
        <div className="factors">
          <div className="factor">
            <div className="factor-icon">
              {/* Replace with your icon */}
              <img src={img8} alt="Exceptionally consistent performance" />
            </div>
            <p className="factor-description">Exceptionally consistent performance</p>
          </div>
          <div className="factor">
            <div className="factor-icon">
              {/* Replace with your icon */}
              <img src={img9} alt="European technology" />
            </div>
            <p className="factor-description">European Technology</p>
          </div>
          <div className="factor">
            <div className="factor-icon">
              {/* Replace with your icon */}
              <img src={img10} alt="Strong and reliable partner network for support" />
            </div>
            <p className="factor-description">Strong and reliable partner network for support</p>
          </div>
          <div className="factor">
            <div className="factor-icon">
              {/* Replace with your icon */}
              <img src={img11} alt="Highly efficient customer service" />
            </div>
            <p className="factor-description">Highly efficient customer service</p>
          </div>
        </div>
      </div>
      </div>
      <br />
      <br />
      <div className="heading">
        <h1>Your Ideal Broadband for Endless Streaming Is Finally Here</h1>
      </div>
      <div className="plan-img">
        <img src={img7} alt="Plan details" />
      </div>
      <div className="service-section">
        <div className="service-block">
          <div className="service-image1">
            <img src={img12} alt="We consistently deliver" />
          </div>
          <div className="service-text">
            <h2>We consistently deliver!</h2>
            <p>
              We understand your passion for online content, and as your local internet/Wi-Fi provider, we've partnered with leading media providers to enhance your experience. Our collaborations include Google Peering (for YouTube & Google Play), Microsoft Peering (for Windows and Xbox updates and apps), Extreme Peering (for high-speed web browsing and P2P transfers), Akamai (for Facebook and live cricket), Netflix, and a range of other Indian and international video services. Now, all your favorite content is just a click away.            
            </p>
          </div>
        </div>

        <div className="service-block">
          <div className="service-image2">
            <img src={img13} alt="We prioritize empathy in everything we do." />
          </div>
          <div className="service-text">
            <h2>We prioritize empathy in everything we do</h2>
            <p>
              Whether it's early in the morning or late at night, as your top local internet provider, we're here for you. If something doesn’t go as planned, simply open a ticket through our mobile app, and we'll address it promptly. You’re our priority, and we're committed to ensuring you have a great connection every day.            
            </p>
          </div>
        </div>
      </div>
      <div className="img1"> 
      <img 
        src={img1} 
        alt="Why Choose Excitel"
        style={{ maxWidth: '100%', height: 'auto' }} 
      />
      </div>
      <section className="benefits-excitel-main">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="benefits-cl">Benefits of Excitel Broadband</h3>
          </div>
          <div className="col-md-3 line_white">
            <div className="book_block">
              <div className="icons">
                <img className="img-fluid" src={img3} alt="4 Hour Service Resolution Promise" />
              </div>
              <h4>Service within 4 hours<br />Our Resolution Promise</h4>
            </div>
          </div>
          <div className="col-md-3 line_white">
            <div className="book_block">
              <div className="icons">
                <img className="img-fluid" src={img5} alt="Customer Service You Will Love" />
              </div>
              <h4>Customer Service<br />You’ll Love</h4>
            </div>
          </div>
          <div className="col-md-3 line_white">
            <div className="book_block">
              <div className="icons">
                <img className="img-fluid" src={img6} alt="Add on OTT +Live TV" />
              </div>
              <h4>Add on OTT<br />+Live TV</h4>
            </div>
          </div>
          <div className="col-md-3 last-border">
            <div className="book_block">
              <div className="icons">
                <img className="img-fluid" src={img4} alt="Fiber To The Home" />
              </div>
              <h4>Fiber To<br />The Home</h4>
            </div>
          </div>
          <div className="col-12">
          <div className="super-fast-cl">
            <h4>To Experience Super-Fast Internet</h4>
            <button className="connection-button" onClick={handleClick}>
              Get Excitel Connection
            </button>
          </div>
          </div>
        </div>
      </div>
      </section>

      <div className="whatsapp-button" onClick={handleWhatsAppClick}>
        <img src={whatsappicon} alt="WhatsApp" />
        <span>Get Excitel</span>
      </div>
    </div>

  );
}

export default Home;

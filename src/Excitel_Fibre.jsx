import React from "react";
import "../src/css/Excitel_Fibre.css"
import img14 from "../src/Pictures/Group-195.webp";
import img15 from "../src/Pictures/image-21-1.webp";
import img16 from "../src/Pictures/wifi.png";
import img17 from "../src/Pictures/speedometer.png";
import img18 from "../src/Pictures/antenna.png";
import img19 from "../src/Pictures/gamelogo.webp";
import img20 from "../src/Pictures/download.webp";
import img21 from "../src/Pictures/4Klogo.webp";


function Excitel_Fiber() {
  return (
    <div className="fiber">
      <div className="broadband-section">
      <div className="broadband-content">
        <h1>BEST FIBER BROADBAND CONNECTION</h1>
        <h2>FOR YOUR HOME & BUSINESS</h2>
        <p>
          Experience the ultimate in internet speed and reliability with Excitel Fiber, designed to meet both home and business needs. Our state-of-the-art fiber optic network delivers lightning-fast connections, making Excitel Fiber the top choice for a flawless online experience.
        <br/>
        <br/>
          Experience internet speeds like never before with Excitel Fiber, offering up to 1 Gigabit/s—the fastest fiber internet in India. Don’t settle for less; choose Excitel Fiber for the premier broadband connection. Locate the nearest Excitel fiber connection and upgrade to the future of connectivity today!
        </p>
      </div>
      <div className="broadband-images">
        <img src={img14} alt="Woman using phone" className="image1" />
      </div>
      </div>
      <div className="feature-cards">
      <div className="card">
        <div className="icon">
          <img src={img19} alt="Game Changer Wi-Fi" />
        </div>
        <h2>Game-Changer Wi-Fi</h2>
        <p>Unleash the full potential of your gaming experience with Excitel Fiber. Achieve high scores effortlessly with minimal latency and lightning-fast speeds of up to 1 Gigabit/s. Elevate your gaming journey with Excitel Fiber’s unbeatable blend of speed and performance.</p>
      </div>
      <div className="card">
        <div className="icon">
          <img src={img20} alt="High-Speed Download" />
        </div>
        <h2>High-Speed Download</h2>
        <p>Satisfy your need for fast downloads with Excitel! Whether it's large files or movies, enjoy reliable, ultra-fast speeds of up to 1 Gigabit/s. With Excitel, you won't face any download limits, even if your device storage is low. Experience seamless, limitless downloads with Excitel’s unmatched speed and reliability.</p>
      </div>
      <div className="card">
        <div className="icon">
          <img src={img21} alt="4K Streaming Delight" />
        </div>
        <h2>4K Streaming Delight</h2>
        <p>Turn every night into a movie night with Excitel’s exceptional Wi-Fi connection. Enjoy seamless HD video streaming for the whole family, free from connection drops or lag. Say goodbye to buffering frustrations as Excitel delivers uninterrupted streaming, offering an unparalleled viewing experience for you and your loved ones.</p>
      </div>
      </div>
      <div className="info-section">
      <div className="info-content">
        <h1>WHAT DOES <span>EXCITEL FIBERNET DO?</span></h1>
        <p>Excitel Fibernet utilizes advanced fiber optic technology to provide seamless internet connections. With equal upload and download speeds, it guarantees a smart and efficient internet experience.</p>
        <p>Excitel Fiber delivers the fastest broadband in India, offering hassle-free browsing and reliable, high-speed internet. Find the best fiber connection near you and experience Excitel’s cutting-edge fiber broadband technology for superior connectivity.</p>
      </div>
      <div className="info-image">
        <img src={img15} alt="Woman with Laptop" />
      </div>
      </div>
      <div className="benefits-section">
      <h2>ADVANTAGES OF CHOOSING EXCITEL FIBERNET</h2>
      <div className="benefits">
        <div className="benefit">
          <div className="icon"><img src={img16} alt="WiFi Icon" /></div>
          <p>Reliable internet for both home and business</p>
        </div>
        <div className="benefit">
          <div className="icon"><img src={img17} alt="Speed Icon" /></div>
          <p>High-speed internet with symmetrical upload and download speeds.</p>
        </div>
        <div className="benefit">
          <div className="icon"><img src={img18} alt="Signal Icon" /></div>
          <p>Consistent and strong signal distribution throughout your home.</p>
        </div>
      </div>
      <div className="installation-services">
        <h3>QUICK INSTALLATION SERVICES</h3>
        <div className="service">
          <div className="service-icon">1</div>
          <p>Installation of the latest Wi-Fi router with advanced software features</p>
        </div>
        <div className="service">
          <div className="service-icon">2</div>
          <p>Immediate support for troubleshooting whenever you need it</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Excitel_Fiber;

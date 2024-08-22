import React from "react";
import "../src/css/Service.css"
import img7 from "../src/Pictures/Plan.png";
import img22 from "../src/Pictures/Monsoon.webp";

function Service() {
  return (
    <div className="page-content">
      <div className="heading">
        <h1>Your Ideal Broadband for Endless Streaming Is Finally Here</h1>
      </div>
      <div className="monsoon">
        <img src={img22} alt="monsoon plan" />
      </div>
      <div className="plan-img">
        <img src={img7} alt="Plan details" />
      </div>
      <div className="why-choose-excitel-bd">
        <h2 className="section-title">Advantages of using Excitel fiber internet include</h2>
        <p><strong>Fast and Reliable Connectivity :</strong><br />
          With Excitel fiber internet, you can experience lightning-fast speeds that ensure smooth streaming, gaming, and browsing.
        </p>
        <p><strong>Cost-effective plans :</strong><br />
          You can access high-quality fiber internet at a budget-friendly price, with a range of plans tailored to meet your specific usage needs and preferences.
        </p>
        <p><strong>Free installation :</strong><br />
          We offer free installation, making it quick, easy, and hassle-free for you to get started.
        </p>
        <p><strong>24/7 customer support:</strong><br />
          If you have any questions or technical issues, our customer support team is always ready to help.
        </p>
        <p><strong>Unlimited Data Usage:</strong><br />
          You can enjoy unlimited data usage without any caps or restrictions, allowing you to explore the online world freely.
        </p>
        <p><strong>Cable Cutter ™ plan:</strong><br />
          This plan provides exceptional internet speeds of up to 300 Mbps, along with access to 22 premium OTT channels.
        </p>
        <h2 className="section-title">What services does Excitel Broadband provide?</h2>
        <ul>
          <li>Easily transfer large files, whether you're uploading or downloading</li>
          <li>Complete your tasks quickly and efficiently</li>
          <li>Benefit from the ease of hassle-free bill payments</li>
          <li>Keep your devices safe with a secure internet connection.</li>
        </ul>

        <h2 className="section-title">Benefits of Fiber-to-the-Home (FTTH) Broadband</h2>
        <ul>
          <li><strong>Reliability:</strong><br />
            Our dedication to seamless connectivity means you can confidently handle all your online activities—whether streaming, gaming, or browsing—without any compromise.
          </li>
          <li><strong>Multiple-device connectivity:</strong><br />
            Boost your home’s connectivity by easily connecting three to four devices simultaneously, enabling you to browse the web and multitask without interruption.
          </li>
          <li><strong>High speeds:</strong><br />
            Excitel Fibernet connections offer exceptionally fast internet speeds, which are essential for tasks such as streaming 4K or 8K videos, playing online games, and downloading or uploading large files.
          </li>
          <li><strong>Better experience:</strong><br />
            FTTH delivers a smoother online experience with fast speeds and high security, eliminating issues like buffering, slow downloads, and dropped connections.
          </li>
          <li><strong>Less signal degradation:</strong><br />
            Fiber-optic networks experience minimal signal degradation compared to traditional copper-based networks (such as DSL). This ensures that even if you are farther from the service provider's network, you can still enjoy consistent speeds.
          </li>
        </ul>

        <h2 className="section-title">Excitel broadband plans provide unlimited internet access with no data caps.</h2>
        <p>
          Discover the limitless possibilities of the online world with Excitel's high-speed internet. Dive into immersive gaming, stream your favorite movies, and enjoy smooth videos without interruption, regardless of distance or time. Elevate your digital experience with Excitel – your gateway to unrestricted connectivity.
        </p>

        <h2 className="section-title">Additional benefits of Excitel’s broadband services include:</h2>
        <p>
          Stay entertained all day with our Cable Cutter™ Plan, which includes Live TV, OTT content, and high-speed internet starting at just ₹719/month. Our hassle-free and affordable plans are designed to meet your needs. Choose the Excitel Cable Cutter™ Plan for seamless, buffer-free entertainment.
        </p>

        <h2 className="section-title">FAQ</h2>
        <ul>
          <li><strong>How fast is Excitel broadband?</strong><br />
            Excitel provides high-speed broadband with plans offering 100, 200, 300, and 400 Mbps at competitive prices. You can perform a speed test on the Excitel website to check the speed of your internet connection.
          </li>
          <li><strong>Will I get the maximum broadband speed as promised in the plan?</strong><br />
            Yes, you will get the maximum speed mentioned in the plan.
          </li>
          <li><strong>How can I check Excitel's broadband plans?</strong><br />
            To view the available plans, visit the Excitel website or stop by any Excitel store and select the plan that best suits your needs.
          </li>
          <li><strong>Which is the fastest broadband in India?</strong><br />          
            Excitel offers some of the fastest broadband speeds with a range of plans designed to match various internet needs.
          </li>
          <li><strong>How can I get an Excitel broadband connection?</strong><br />
            To get connected, either call us directly or fill out the form on our website. Once you’ve reached out, you can select the ideal plan for your home and start enjoying high-speed internet.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Service;

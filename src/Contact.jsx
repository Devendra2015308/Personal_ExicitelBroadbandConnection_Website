import React from "react";

function onClickButton(event) {
  event.preventDefault();

  // Capture the form data
  const name = document.getElementById("exampleFormControlInput1").value;
  const contact = document.getElementById("exampleFormControlInput2").value; // Ensure unique IDs
  const email = document.getElementById("exampleFormControlInput3").value; // Ensure unique IDs
  const message = document.getElementById("exampleFormControlTextarea1").value;

  // Create an object to hold the form data
  const formData = {
    name: name,
    contact: contact,
    email: email,
    message: message
  };

  // Send the form data to the server
  fetch("http://localhost:5000/submit_form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.text())
    .then(data => {
      alert("Form submitted successfully!");
    })
    .catch(error => {
      console.error("Error:", error);
      alert("There was an error submitting the form.");
    });
}

function Contact() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>

      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div className="form-group">
                <label for="exampleFormControlInput1">Enter Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1" // Name input
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="form-group pt-3">
                <label for="exampleFormControlInput1">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput2" // Contact number input
                  placeholder="+91-"
                />
              </div>
              <div className="form-group pt-3">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput3" // Email input
                  placeholder="name@example.com"
                />
              </div>

              <div className="form-group pt-3">
                <label for="exampleFormControlTextarea1">
                  Type your Message Here
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="col-12 pt-3">
                <button
                  onClick={onClickButton}
                  className="btn btn-outline-primary"
                  type="submit"
                >
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

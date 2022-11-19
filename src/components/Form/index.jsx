import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import "./Form.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Form() {
  const [SendTo, setSendTo] = useState({
    userName: "",
    userEmai: "",
    userSubject: "",
    userPhone: "",
    userMessage: "",
  });

  // Form input handle

  const handleInput = (evn) => {
    setSendTo({ ...SendTo, [evn.target.name]: evn.target.value });
  };

  // Form Submit handler

  const HandleForm = (evn) => {
    evn.preventDefault();
    emailjs
      .send("service_ba3eyfk", "template_h2xix5b", SendTo, "a1F1Ee2scjIyiieeq")
      .then(
        (result) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Message SuccessFully Send",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Sorry your message did not send",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      );
    setSendTo({
      userName: "",
      userEmai: "",
      userSubject: "",
      userPhone: "",
      userMessage: "",
    });
  };

  return (
    <div className="Form-container">
      <form onSubmit={HandleForm}>
        <div className="first-section">
          <Input
            name="userName"
            placeholder="Full Name"
            required="required"
            onChange={handleInput}
          />
          <Input
            name="userEmail"
            placeholder="Email"
            required="required"
            onChange={handleInput}
          />
        </div>
        <div className="second-section">
          <Input
            name="userSubject"
            placeholder="Subject"
            required="required"
            onChange={handleInput}
          />
          <Input
            name="userPhone"
            placeholder="Phone Number"
            required="required"
            onChange={handleInput}
          />
        </div>
        <div className="third-section">
          <textarea
            name="userMessage"
            placeholder="Messagee"
            required="required"
            onChange={handleInput}
          ></textarea>
        </div>
        <div className="four-section">
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
}

export default Form;

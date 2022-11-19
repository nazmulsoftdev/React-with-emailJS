import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import "./Form.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Form() {
  const [SendTo, setSendTo] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
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
          setSendTo({
            name: "",
            email: "",
            subject: "",
            phone: "",
            message: "",
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
  };

  return (
    <div className="Form-container">
      <form onSubmit={HandleForm}>
        <div className="first-section">
          <Input
            type="text"
            name="name"
            value={SendTo.name}
            placeholder="Full Name"
            required="required"
            onChange={handleInput}
          />
          <Input
            type="email"
            name="email"
            value={SendTo.email}
            placeholder="Email"
            required="required"
            onChange={handleInput}
          />
        </div>
        <div className="second-section">
          <Input
            type="text"
            name="subject"
            value={SendTo.subject}
            placeholder="Subject"
            required="required"
            onChange={handleInput}
          />
          <Input
            type="number"
            name="phone"
            value={SendTo.phone}
            placeholder="Phone Number"
            required="required"
            onChange={handleInput}
          />
        </div>
        <div className="third-section">
          <textarea
            type="text"
            name="message"
            value={SendTo.message}
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

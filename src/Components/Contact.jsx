import React from "react";
import { CONTACT } from "../constants/index";

function Contact() {
  return (
    <div className="border-b border-neutral-900">
      <h1 className="my-10 text-center text-4xl font-bold">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
}

export default Contact;

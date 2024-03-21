import React from "react";
import ContactForm from "./Contact";

export const metadata = {
  title:
    "Contact Us - Unveiling Daring Truth: Conture Media's Confidential Approach to Short Form Content Creation",
  description:
    "Discover the confidential strategies behind Conture Media's success in video editing, scriptwriting, and more. Unleash your brand's true potential today.",
};

const Contact = () => {
  return (
    <div
      className="w-full h-auto p-5 text-white flex flex-col items-center justify-center "
      style={{
        background: "radial-gradient(circle, #111 80%, black 100%)",
      }}
    >
      <h1 className="text-4xl font-bold  my-2">Contact Us</h1>
      <p className="my-2 font-semibold text-center text-2xl">
        Global Service Provider Available to Everyone in the world.
      </p>
      <p className="mb-8 text-center">
        We&apos;d love to hear from you! Please fill out the form below and
        we&apos;ll get back to you as soon as possible.
      </p>

      <ContactForm />
    </div>
  );
};

export default Contact;

import React, { useState } from "react";
import "../../login/login.css";
import { db } from "../../firebase";
import Footer from "../Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="login">
          <div className="loginContainer">
            <h1>Contact Us</h1>
            <label>Name</label>
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Message</label>
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
              type="submit"
              style={{ background: loader ? "#ccc" : " rgb(7, 7, 7)" }}
            >
              Submit
            </button>
          </div>
        </section>
      </form>
      <Footer />
    </>
  );
};

export default Contact;

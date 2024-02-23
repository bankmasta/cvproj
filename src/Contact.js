
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    console.log('Form submitted:', formData);

    // Clear the form after submission
    setFormData({
      name: '',
      message: '',
    });

    // Show a popup
    alert('Your message has been sent!');
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>
        Thank you for reaching out! Feel free to send me a message using the
        form below.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

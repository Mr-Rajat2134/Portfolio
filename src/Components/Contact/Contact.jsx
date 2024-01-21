// import React, { useRef, useState } from "react";
// import "./Contact.css";
// import {Form} from 'simple-react-form'
// import axios from 'axios';

// // icons
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';


// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post('http://localhost:3001/send-email', formData);
//       console.log('Email sent successfully!');
//     } catch (error) {
//       console.error('Error sending email:', error);
//     }
//   };
 
//   return (
//     <section id="Contact">
//       <h2 className="ContactTitle">Contact</h2>
//       <span className="ContactTitles">Contact</span>
//       <span className="ContactDesc">Please fill out the form below to discuss any work opportunities</span>

//       <Form className='contactform'   onSubmit={handleSubmit}    >   
     
// <input  type="text" className="name" placeholder="Your Name"     id="name"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         required   />
// <input  type="Email" className="email" placeholder="Your Email"  id="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         required  />
//        <textarea className="msg"  placeholder="Your Message"    id="message"
//         name="message"
//         value={formData.message}
//         onChange={handleChange}
//         rows="4"
//         required  />
// <button type="submit" value="send" className="submitBtn">Submit</button>

// <div className="links">
// <FacebookIcon    className="link"     fontSize="large"    />
// <InstagramIcon className="link"    fontSize="large"/>
// <WhatsAppIcon className="link"    fontSize="large"/>
// </div>



//       </Form>





     
//     </section>
//   );
// };

// export default Contact;



// src/components/ContactForm.js
import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import "./Contact.css";

Modal.setAppElement('#root'); // Set the root element for accessibility

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/send-email', formData);
      console.log('Email sent successfully!');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const closeModal = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="Contact">  
      <h2 className="ContactTitle">Contact</h2>
      <span className="ContactTitles">Contact</span>
      <span className="ContactDesc">Please fill out the form below to discuss any work opportunities</span>

      <Modal
        isOpen={isSubmitted}
        onRequestClose={closeModal}
        contentLabel="Submission Modal"
      >
        <div>
          <p>Form submitted successfully!</p>
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>

      <form className='contactform' onSubmit={handleSubmit}>
        <input
          placeholder='Name'
          className="name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          placeholder='Email'
          className="email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder='your Message'
          className="msg"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>
        <button className="submitBtn" type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;

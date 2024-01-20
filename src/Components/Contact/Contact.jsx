import React from "react";
import "./Contact.css";
import {Form} from 'simple-react-form'

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Contact = () => {
  return (
    <section id="Contact">
      <h2 className="ContactTitle">Contact</h2>
      <span className="ContactTitles">Contact</span>
      <span className="ContactDesc">Please fill out the form below to discuss any work opportunities</span>

      <Form className='contactform'>
     
<input  type="text" className="name" placeholder="Your Name"    />
<input  type="Email" className="email" placeholder="Your Email"    />
       <textarea className="msg"  name="message" rows='5' placeholder="Your Message"/>
<button type="submit" value="send" className="submitBtn">Submit</button>

<div className="links">
<FacebookIcon    className="link"     fontSize="large"    />
<InstagramIcon className="link"    fontSize="large"/>
<WhatsAppIcon className="link"    fontSize="large"/>
</div>



      </Form>





     
    </section>
  );
};

export default Contact;

import Footer from "../components/footer";
import Navbar from "../components/navbar";

import emailjs from '@emailjs/browser';

import { useState } from 'react';
import { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    document.title = 'ARC#6014 - Contact Us';
  }, []);

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };

  const handleMailChange = (event: any) => {
    setMail(event.target.value);
  };

  const handleMessageChange = (event: any) => {
    setMessage(event.target.value);
  };

  const sendMail = () => {

    if (name == "" || mail == "" || message == "") {
      alert("Fill all the spaces")
      return
    }

    let templateParams = {
      name: name,
      mail: mail,
      message: message
    };

    emailjs.send('service_vxlzqjv', 'template_obxhi49', templateParams, {publicKey: "eh-n5yXkmHrd_jO2c"}).then(
      () => {
        alert("Your mail is sent")
      },
      () => {
        alert("A problem occured")
      },
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="flex md:flex-row flex-col flex-grow items-center justify-center lg:mt-[9%] mt-[20%] lg:pb-[5%] pb-[20%] pl-[5%] pr-[5%] w-full">
          <div className="flex flex-col items-center justify-center text-center md:pr-[15%]">
            <b className="md:w-[60%] w-[80%] md:text-4xl text-lg">
              Contact Us
            </b>
            <div className="flex justify-center items-center mt-[1%]">
              <div className="flex flex-col md:text-2xl text-sm">
                <li>
                  <ul><p><b>Our Captain: </b><a className="cursor-pointer hover:opacity-[70%] active:opacity-[60%]" href="mailto:akakaa.25@robcol.k12.tr">akakaa.25@robcol.k12.tr</a></p></ul>
                  <ul><p><b>Our Vice-Captain: </b><a className="cursor-pointer hover:opacity-[70%] active:opacity-[60%]" href="mailto:sanker.26@robcol.k12.tr">sanker.26@robcol.k12.tr</a></p></ul>
                  <ul><p><a className="cursor-pointer hover:opacity-[70%] active:opacity-[60%]" href="mailto:arc6014rob@gmail.com">arc6014rob@gmail.com</a></p></ul>
                  <ul><p><a className="cursor-pointer hover:opacity-[70%] active:opacity-[60%]" href="mailto:arc6014@robcol.k12.tr">arc6014@robcol.k12.tr</a></p></ul>
                </li>
              </div>
            </div>
          </div>
          <div className="items-center justify-center md:pl-[5%] md:mt-0 mt-[10%]">
            <div className='text-left'>
              <p className='md:text-4xl text-lg text-center'><b>Send Us A Mail</b></p>
              <div className='md:mt-[4%] mt-[6%]'>
                <p className='md:text-lg text-xs'>Name</p>
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange} 
                  className='rounded-md ps-[3%] pe-[3%] mt-[0.5%] w-full'
                />
              </div>
              <div className='mt-[3%]'>
                <p className='md:text-lg text-xs'>Mail</p>
                <input
                  type="email"
                  value={mail}
                  onChange={handleMailChange} 
                  className='rounded-md ps-[3%] pe-[3%] mt-[0.5%] w-full'
                />
              </div>
              <div className='mt-[3%]'>
                <p className='md:text-lg text-xs'>Message</p>
                <textarea
                  value={message}
                  onChange={handleMessageChange} 
                  rows={5}
                  className='resize-none rounded-md ps-[3%] pe-[3%] mt-[0.5%] w-full'
                />
              </div>
              <div className='flex justify-center mt-[3%]'>
                <button onClick={sendMail} className='md:text-lg text-xs rounded-md bg-white pt-[3%] pb-[3%] pl-[30%] pr-[30%] hover:opacity-[80%] active:opacity-[60%]'>Send</button>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Contact;

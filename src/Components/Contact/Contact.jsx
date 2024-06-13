import React, { useState } from 'react';
import './Contact.css'
import '../../Common.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname:'',
    email: '',
    message: '',
  });

  const [text, setText] = useState("hidden");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    set
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("block");
    console.log('Form Data Submitted:', formData);
    // Perform any additional actions, like sending data to a server
  };

  return (
    <>
        <div className="SuperContainer poppins-regular">

            <div className='leftSide mt-11'>
                <div className='flex justify-start items-center Heading comfortaa-font p-2'>Contact Me</div>
                <div className='flex justify-center items-center quote p-2'>I'm always open to new opportunities and challenges. Reach out, and let's explore how I can contribute to your team.</div>
                <div className="flex justify-start items-center greeting p-2">Thank you!</div>
            </div>


            <form onSubmit={handleSubmit} className='ContactContainer pl pr'>
            <div className='NameContainer margin text-grey'>
                <div className='something'>
                First name:
                <input className='fullnamecontainer mt' type="text" name="firstname" value={formData.name} onChange={handleChange} />
                </div>
                <div className='something'>
                Last name:
                <input className='fullnamecontainer mt' type="text" name="lastname" value={formData.name} onChange={handleChange} />
                </div>            
            </div>

            <div className='something margin text-grey mt-5'>
                Email:
                <input className='emailContainer mt' type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className='margin text-grey mt-5'>
                <div className='something'>
                Message:
                <textarea className='textareaContainer mt' name="message" value={formData.message} onChange={handleChange}></textarea>
                </div>
            </div>
            <div className='buttonDiv'>
                <button className = 'button' type="submit">Submit</button>
                <div className={`textSuccessful ${text}`}>Sent Successfully!!</div>
            </div>
            </form>
        </div>
    </>
  );
};

export default Contact;

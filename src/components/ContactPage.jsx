import { motion } from 'motion/react';
import InputComponent from './InputComponent';
import { useState, useTransition } from 'react';
import contact from '../assets/images/contact.png';
import emailjs from '@emailjs/browser';
import logo from '../assets/images/logo.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState({
    name: '',
    email: '',
    message: ''
  })
  const handleChange = (e) => {
    setError({
      name: '',
      email: '',
      message: ''
    })
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const [isPending, startTransition] = useTransition()
  const [success, setSuccess] = useState(false)
  const [fail, setFail] = useState(false)
  const validateError = [{
    name: [{ "required": true, message: "Name is required" }, { minLength: 3, message: "Name must be at least 3 characters long" }],
    email: [{ "required": true, message: "Email is required" }, { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Email is not valid" }],
    message: [{ "required": true, message: "Message is required" }, { minLength: 10, message: "Message must be at least 10 characters long" }]
  }]
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsObject = {}
    validateError.forEach((item) => {
      Object.keys(item).forEach((key) => {
        item[key].some((rule) => {
          if (rule.required && !formData[key]) {
            errorsObject[key] = rule.message
            return true
          }
          if (rule.minLength && (formData[key].length < rule.minLength)) {
            errorsObject[key] = rule.message
            return true
          }
          if (rule.pattern && !rule.pattern.test(formData[key])) {
            errorsObject[key] = rule.message
            return true
          }
        })
      })
    })
    setError(errorsObject)
    if (Object.keys(errorsObject).length !== 0) {
      return
    }
    startTransition(async () => {
      try {
        const res = await emailjs.send(
          'service_mr6zwfl',
          'template_brgbbi1',
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          { publicKey: 'zVqiBx2VR4_ML3wax' }
        );
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        })
        setTimeout(() => setSuccess(false), 5000);
      } catch (err) {
        console.log('EMAILJS FAILED...', err);
        setFail(true);
        setTimeout(() => setFail(false), 5000);
      }
    });
  }
  return (
    <section id='contact' className="bg-gradient-to-t from-black via-gray-800  to-gray-950 text-white p-8">
      <div className="container mx-auto">
        <motion.h1 initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.2 }} className="text-5xl font-bold text-center mb-12">Contact Me</motion.h1>
        <div className='flex flex-col md:flex-row items-center gap-20'>
          <motion.div className='md:w-1/2 w-3/4'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <img src={contact} alt="photo" className='w-full ' />
          </motion.div>
          <motion.div className="text-gray-400 md:w-1/2 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            <form action="" className='max-w-8/10 mx-auto'>
              <InputComponent id="name" name="Name" value={formData.name} setValue={handleChange} error={error.name} />
              <InputComponent id="email" name="Email" type="email" value={formData.email} setValue={handleChange} error={error.email} />
              <InputComponent id="message" name="Message" type="textarea" value={formData.message} setValue={handleChange} error={error.message} />
              <button onClick={handleSubmit} type="submit" disabled={isPending ? true : false} className="flex items-center justify-center mx-auto w-52 bg-cyan-500 text-white px-6 py-2 cursor-pointer rounded-full hover:scale-115  hover:bg-white hover:text-cyan-500 transition-all duration-75">
                {isPending ? <svg className='text-inherit w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25" height="25">
                  <circle
                    cx="25" cy="25" r="18"
                    fill="none" stroke="currentColor" strokeWidth="4"
                    strokeDasharray="84.823 30.274">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 25 25;360 25 25"
                      keyTimes="0;1"
                      dur="1.6667s"
                      repeatCount="indefinite" />
                  </circle>
                </svg>
                  : success ? "Sent Successfully" : "Send"}
              </button>
              <p className='text-red-300 md:text-md text-xs mt-1 mb=5 text-center'>{fail ? "Failed to send" : ""}</p>
            </form>
          </motion.div>
        </div>
      </div>
      <p className='text-center text-gray-400 text-sm mt-5'>Dewashish Tikas © 2025</p>

      <div className="flex items-center cursor-pointer w-fit mx-auto" >
        <img src={logo} alt="logo" className="w-25 hover:drop-shadow-amber-500 hover:drop-shadow-xl" />
      </div>
      <div className="flex items-center justify-center gap-4 mt-4">
        <a href="mailto:tikasdewashish2208@gmail.com">
          <SiGmail className="text-3xl text-gray-400 hover:text-cyan-400 transition-colors duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/dewashish-tikas-4131b0323/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl text-gray-400 hover:text-cyan-400 transition-colors duration-300" />
        </a>
        <a href="https://github.com/DewashishTikas" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl text-gray-400 hover:text-cyan-400 transition-colors duration-300" />
        </a>
      </div>
    </section>
  );
};

export default ContactPage;
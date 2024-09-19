import React, { useRef, useState , useEffect} from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Blaze } from "./canvas/Blaze";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { socialMediaLinks } from "../constants/SocialMediaLinks";
import { FaGithub, FaLinkedin, FaDiscord,FaTwitter } from 'react-icons/fa'; 

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const iconComponents = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaDiscord: FaDiscord,
  FaTwitter: FaTwitter,
};



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ashok Bk",
          from_email: form.email,
          to_email: "ashokbk215@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };


  // GSAP Animations
  useEffect(() => {
    const elements = formRef.current.querySelectorAll('.fade-in');

    elements.forEach((el, index) => {
      const direction = el.getAttribute('data-direction');
      
      let fromVars = { opacity: 0 };

      switch (direction) {
        case 'top':
          fromVars.y = -50;
          break;
        case 'bottom':
          fromVars.y = 50;
          break;
        case 'left':
          fromVars.x = -50;
          break;
        case 'right':
          fromVars.x = 50;
          break;
        default:
          fromVars.y = 50;
      }

      gsap.fromTo(
        el,
        fromVars,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            end: 'top 20%',
          },
          delay: 0.2 * index,
        }
      );
    });
  }, []);

  return (
    <section ref={formRef}
      className="flex flex-col justify-center items-center gap-10 w-full"
      // style={{ height: '100vh' }}
    >
      <div
        // variants={slideIn("left", "tween", 0.2, 1)}
        className="canva-shadow shadow-2xl shadow-blue-20 
         w-full max-w-[900px] bg-quaternary p-8 rounded-2xl flex flex-col fade-in"
         data-direction='left'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-placeholder py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-placeholder py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-placeholder py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      <div className="mb-10 flex flex-col items-center fade-in" data-direction="top">
        <h4 className="text-secondary font-bold text-2xl mb-4">Follow Me</h4>
        <div className="flex gap-4">
          {socialMediaLinks.map((link) => {
            const IconComponent = iconComponents[link.icon];
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-container bg-transparent"
              >
                <IconComponent className="text-4xl bg-transparent" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");

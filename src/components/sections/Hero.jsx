import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import Budi from "../../assets/images/budi-removebg.png";
import Resume from "../../assets/pdf/resume.pdf";

import Modal from "../../utils/ModalPDF";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(headingRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    gsap.fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.2 });
    gsap.fromTo(textRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.4 });
    gsap.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.6,
      }
    );
    gsap.fromTo(imageRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.8 });
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const handleCVClick = () => {
    openModal();
  };

  return (
    <>
      <section className="px-4 md:px-8 py-12 md:py-20 max-w-7xl mx-auto relative overflow-hidden" id="hero">
        <div className="absolute inset-0 blur-lg pointer-events-none" />

        <div className="relative grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h1 ref={headingRef} className="text-4xl md:text-5xl font-bold transform transition-transform duration-300 hover:scale-105">
              Hello! I'm Budi Prasetio
            </h1>
            <div className="space-y-4">
              <h2 ref={subtitleRef} className="text-xl md:text-2xl transform transition-transform duration-300 hover:scale-105">
                A Web Developer and Tech Enthusiast based in Batam, Indonesia
              </h2>
              <p ref={textRef} className="text-gray-600 transform transition-transform duration-300 hover:scale-105">
                I have been working in web development for the past 1.5 years, collaborating with a variety of clients from different backgrounds. Currently, I work as a freelance developer. Beyond development, I have a strong interest in
                IT Support roles. I genuinely enjoy troubleshooting technical issues, assisting users with system-related problems, and ensuring smooth daily technology operations within an organization. I find great satisfaction in helping
                others work more efficiently by leveraging technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  ref={(el) => (buttonsRef.current[0] = el)}
                  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transform transition-transform duration-300 hover:scale-105"
                  onClick={() => (window.location.href = "#footer")}
                >
                  Talk to me
                </button>
                <button ref={(el) => (buttonsRef.current[1] = el)} className="border border-black px-6 py-3 rounded-lg hover:bg-gray-50 transform transition-transform duration-300 hover:scale-105" onClick={handleCVClick}>
                  Curriculum Vitae
                </button>
              </div>
            </div>
          </div>
          <div className="relative w-96 h-96 mx-auto md:ml-20" ref={imageRef}>
            <img src={Budi} alt="Hero" className="absolute inset-0 w-full h-full object-contain md:object-cover rounded-md" />
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} pdfUrl={Resume} />
    </>
  );
};

export default Hero;

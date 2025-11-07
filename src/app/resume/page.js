"use client";
import React, { useEffect, useRef, useState } from "react";

export default function ResumePage() {
  const mlRef = useRef(null);
  const sweRef = useRef(null);
  const [showSWE, setShowSWE] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Reveal SWE section when ML section is scrolled halfway up
        if (!entry.isIntersecting) {
          setShowSWE(true);
        }
      },
      { threshold: 0.5 } // trigger when half of ML is out of view
    );

    if (mlRef.current) observer.observe(mlRef.current);

    return () => {
      if (mlRef.current) observer.unobserve(mlRef.current);
    };
  }, []);

  return (
    <div className="container my-5">
      {/* ML Resume Section */}
        <div
        ref={mlRef}
        className="row mb-5"
      >
        <div className="col-md-6 mb-4 mb-md-0" style={{ height: "80vh" }}>
          <iframe
            src="/resume_ml.pdf"
            title="ML Resume"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1>Machine Learning Resume</h1>
          <p>
            Focused on research, AI/ML projects, and data-driven model
            development. Includes deep learning, computer vision, and
            optimization research experience.
          </p>
          <p>
          <a href="/resume_software.pdf" download className="btn btn-info mt-3">
                Download <i className="fas fa-download me-2"></i>
            </a>
            </p>
        </div>
      </div>
        <div className="row mt-5" style={{height:'2rem'}}> </div>
      {/* SWE Resume Section */}
      <div
        ref={sweRef}
        className={`row transition-section ${showSWE ? "visible" : ""}`}
        style={{
          opacity: showSWE ? 1 : 0,
          transform: showSWE ? "translateY(0)" : "translateY(100px)",
          transition: "opacity 1s ease-out, transform 1s ease-out",
        }}
      >
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1>Software Engineering Resume</h1>
          <p>
            Highlights full-stack web development, system design, and software
            engineering projects including backend services and frontend UIs.
          </p>
          <p>
            <a href="/resume_software.pdf" download className="btn btn-info mt-3">
                Download <i className="fas fa-download me-2"></i>
            </a>
          </p>
        </div>
        <div className="col-md-6 mb-4 mb-md-0" style={{ height: "80vh" }}>
          <iframe
            src="/resume_software.pdf"
            title="SWE Resume"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </div>
        
      </div>
    </div>
  );
}
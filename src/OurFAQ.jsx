import React, { useState } from 'react';
import './OurFAQ.css';

const faqs = [
  {
    question: 'What areas or countries do you operate in ?',
    answer: '',
  },
  {
    question: 'How do I get started with transport Logistics?',
    answer:
      'To begin, simply reach out to us through our contact form or phone number to schedule an initial consultation. We’ll discuss your logistics needs, assess your requirements, and tailor a plan that fits your business goals.',
  },
  {
    question: 'Can I cancel a shipment after been booked?',
    answer: '',
  },
  {
    question: 'Can I track my shipment in real time ?',
    answer: '',
  },
];

export default function OurFAQ() {
  const [openIndex, setOpenIndex] = useState(1); // 2nd FAQ open by default

  return (
    <div className="faq-container">
      {/* Content Section */}
      <div className="faq-content">
        <div className="faq-title-row">
          <span className="faq-subtitle">OUR FAQS</span>
          <h2 className="faq-title">
            Frequently Asked <span className="faq-title-highlight">Questions</span>
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div
              className={`faq-item${openIndex === idx ? ' open' : ''}`}
              key={idx}
              onClick={() => setOpenIndex(idx)}
            >
              <div className="faq-question-row">
                <span className="faq-question">{faq.question}</span>
                <span className="faq-icon">
                  <i className={`fa-regular ${openIndex === idx ? 'fa-circle-dot' : 'fa-circle'}`}></i>
                </span>
              </div>
              {openIndex === idx && faq.answer && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Asset Section */}
      <div className="faq-asset">
        <img
          src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&w=400"
          alt="Delivery person"
          className="faq-image"
        />
        <div className="faq-experience-box">
          <span className="faq-experience-number">50</span>
          <span className="faq-experience-text">Year of experience</span>
        </div>
      </div>
    </div>
  );
} 
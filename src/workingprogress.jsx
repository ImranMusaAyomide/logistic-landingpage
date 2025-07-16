import React from 'react';
import './workingprogress.css';

const steps = [
  {
    icon: 'fa-comments',
    title: 'Initial Consultation',
    desc: 'We begin with an in-depth discovery call to understand your logistics needs, goals and challenges, setting the stage for a tailored solution.'
  },
  {
    icon: 'fa-boxes-stacked',
    title: 'Inventory Management',
    desc: 'Our Team handles stock organization and order picking to ensure your inventory is always accurate and ready for dispatch.'
  },
  {
    icon: 'fa-box-open',
    title: 'Packaging & Distribution',
    desc: 'Goods are carefully packaged, and our team handles order picking, sorting, efficiently and reducing all wastage.'
  },
  {
    icon: 'fa-truck-fast',
    title: 'Transportation Process',
    desc: 'We deliver your shipments using trusted transportation networks ensuring timely deliveries, giving hassle-free peace of mind.'
  }
];

const WorkingProgress = () => (
  <div className="working-progress-container">
    <div className="working-progress-header">
      <div className="working-progress-label">WORKING PROCESS</div>
      <h2>
        Our Process Is Built Support<br/>
        Your <span className="highlight">Business Growth</span>
      </h2>
    </div>
    <div className="working-progress-steps">
      {steps.map((step, idx) => (
        <div className="working-progress-step" key={idx}>
          <div className="icon-circle">
            <i className={`fa-solid ${step.icon}`}></i>
          </div>
          <div className="step-title">{step.title}</div>
          <div className="step-desc">{step.desc}</div>
          {idx < steps.length - 1 && <div className="arrow"><i className="fa-solid fa-arrow-right"></i></div>}
        </div>
      ))}
    </div>
  </div>
);

export default WorkingProgress; 
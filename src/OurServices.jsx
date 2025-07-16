import React from 'react';
import './OurServices.css';
import truckImg from './assets/plane.svg'; // Replace with actual images if available
import deliveryImg from './assets/train.svg';
import localTruckImg from './assets/welcome.svg';
import shippingImg from './assets/react.svg';

const services = [
  {
    img: truckImg,
    title: 'Road Freight',
    desc: 'Reliable and cost-effective freight transport across cities and regions. Ideal for bulk shipments and large cargo.',
    link: '#',
  },
  {
    img: deliveryImg,
    title: 'Fast Personal Delivery',
    desc: 'Door-to-door delivery for personal or sensitive packages—handled with care and delivered on time.',
    link: '#',
  },
  {
    img: localTruckImg,
    title: 'Local Truck Transport',
    desc: 'Fast, flexible shipping solutions for shorter-range scheduled deliveries within your area or city.',
    link: '#',
  },
  {
    img: shippingImg,
    title: 'International Shipping',
    desc: 'Seamless overseas rotation from Europe to America and Asian continent.',
    link: '#',
  },
];

const OurServices = () => {
  return (
    <section className="ourservices-section">
      <div className="ourservices-header">
        <div className="ourservices-label">Our Services</div>
        <h2 className="ourservices-title">
          Providing Efficient Logistics<br />
          <span className="ourservices-title-highlight">Solutions for <span> Your Business</span></span>
        </h2>
      </div>
      <div className="ourservices-cards">
        {services.map((service, idx) => (
          <div className="ourservices-card" key={idx}>
            <div className="ourservices-card-img">
              <img src={service.img} alt={service.title} />
            </div>
            <div className="ourservices-card-content">
              <h3 className="ourservices-card-title">{service.title}</h3>
              <p className="ourservices-card-desc">{service.desc}</p>
              <a href={service.link} className="ourservices-card-link">Read More &rarr;</a>
            </div>
          </div>
        ))}
      </div>
      <div className="ourservices-carousel">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default OurServices; 
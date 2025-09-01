// components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Williams",
      position: "Product Manager, TechInnovate Inc.",
      content: "Alex is an exceptional developer who consistently delivers high-quality work. His problem-solving skills and attention to detail have been invaluable to our projects."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO, Digital Solutions LLC",
      content: "Working with Alex was a pleasure. He combines technical expertise with creative thinking, making him a versatile asset to any development team."
    },
    {
      id: 3,
      name: "Jessica Rodriguez",
      position: "UX Designer, WebCraft Studios",
      content: "Alex's ability to translate design concepts into functional, beautiful interfaces is impressive. He's collaborative and always focused on user experience."
    }
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
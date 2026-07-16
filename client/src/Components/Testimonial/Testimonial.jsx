import "./Testimonial.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
 import { LuUser } from "react-icons/lu";
 import { CircleUserRound } from 'lucide-react';
import person1 from "../../assets/education.jpeg";
import person2 from "../../assets/education.jpeg";
import person3 from "../../assets/education.jpeg";

const testimonials = [
  
  {
    id:1,
    image:"",
    name:"Anjali Sharma",
    role:"Volunteer",
    review:"Working with Sahyog Foundation has been an incredible experience. Seeing smiles on children's faces motivates me to contribute even more."
  },
  {
    id:2,
    image:"",
    name:"Rahul Verma",
    role:"Donor",
    review:"I truly appreciate the transparency and dedication of the organization. Every donation creates a real impact."
  },
  {
    id:3,
    image:"",
    name:"Neha Patel",
    role:"Social Worker",
    review:"Their healthcare and education initiatives have transformed many villages. Proud to be associated with this NGO."
  }
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">

      <div className="container">

        <div className="section-heading">
          <span>TESTIMONIALS</span>
          <h2>What People Say About Us</h2>
          <p>
            Thousands of volunteers, donors and beneficiaries have
            joined our mission to create a better tomorrow.
          </p>
        </div>

        <div className="testimonial-grid">

          {testimonials.map((item)=>(
            <div className="testimonial-card" key={item.id}>

              <FaQuoteLeft className="quote"/>

              <p>{item.review}</p>

              <div className="stars">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>

              <div className="testimonial-user">

                {item.image ? (
                     <img src={item.image} alt={item.name || "Product Image"} />
               ) : (
                <CircleUserRound className="testimonial-icon"/>
                  //  <LuUser  />
               )}
                
                <div>

                  <h4>{item.name}</h4>

                  <span>{item.role}</span>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;
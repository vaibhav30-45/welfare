import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaChevronRight, FaArrowLeft, FaHeart } from 'react-icons/fa';
import './style/ProgramDetail.css';

// Importing assets for local mapping
import banner from '../assets/ngo.jpg';
import program1 from '../assets/program1.jpg';
import program2 from '../assets/program2.jpg';

// Full detailed data structure matching your main array
const ALL_PROGRAMS = [
  {
    id: 1,
    image: program1,
    title: "Child Education",
    shortDesc: "Providing free and quality education to children in need.",
    fullDesc: "Our Child Education initiative focuses on bringing quality learning resources to underserved sections of society. We set up remedial learning centers, distribute free education kits containing books and stationery, and provide structured mentorship to prevent dropouts. Education is the ultimate foundation for breaking generational poverty, and through your support, we make school access smooth and effective for hundreds of young minds.",
    impact: "Over 1,200 children successfully enrolled and supported in primary schools."
  },
  {
    id: 2,
    image: program2,
    title: "Women Empowerment",
    shortDesc: "Empowering women through skills and self-employment initiatives.",
    fullDesc: "Sahyog's Women Empowerment programs focus on practical self-reliance. We organize regular vocational workshops including tailoring, handicraft making, and basic computer knowledge. By enabling women to acquire market-ready skills, we help them secure financial independence directly from their doorsteps, ensuring a dignified livelihood and a stronger voice in family decision-making.",
    impact: "450+ women trained and active in localized small-scale micro enterprises."
  },
  {
    id: 3,
    image: program1, // mapping to your imports
    title: "Skill Development",
    shortDesc: "Vocational training and career development programs.",
    fullDesc: "Unemployment is best tackled through specialized skills. Our vocational training programs offer youth career-oriented pathways in software basics, electronics repair, and hospitality assistance. We don't just teach the skill; we host resume building workshops and local placement drives to build a seamless path from training rooms to formal jobs.",
    impact: "70% placement conversion rate across our local youth batches."
  },
  {
    id: 4,
    image: program1,
    title: "Healthcare",
    shortDesc: "Medical camps and healthcare assistance for rural communities.",
    fullDesc: "Basic healthcare shouldn't be a luxury. Sahyog Welfare Foundation regularly organizes free diagnostic camps, general body checkups, diabetes testing, and essential medicine distribution drives in remote areas. We also spread structural health education focused on clean drinking water, nutrition trackers, and maternity wellness safeguards.",
    impact: "Hosted 45+ health camps covering 5,000+ rural community families."
  },
  {
    id: 5,
    image: program1,
    title: "Environmental",
    shortDesc: "Tree plantation drives and environmental awareness.",
    fullDesc: "Protecting our ecosystem is vital for a sustainable future. Under our green initiative, we execute large-scale tree plantation drives, urban clean-up campaigns, and rainwater harvesting training sessions. We involve schools and young volunteers to cultivate environmental consciousness as a daily active lifestyle practice.",
    impact: "Planted 10,000+ native tree saplings with an 85% survival rate tracking."
  },
  {
    id: 6,
    image: program2,
    title: "Digital Literacy",
    shortDesc: "Promoting digital skills and computer education.",
    fullDesc: "To survive in a modern economy, digital understanding is critical. We build fully equipped computer labs in rural high schools, providing hands-on training for internet navigation, basic application usage, and safe digital payment handling. This prevents rural youth from falling behind in a highly connected digital world.",
    impact: "Equipped 8 rural public school hubs with functional digital desktop labs."
  }
];

// 1. Internal Detail Banner Component
const ProgramDetailBanner = ({ title }) => {
  return (
    <section className="prog-detail-banner">
      <img src={banner} alt="NGO Banner" />
      <div className="prog-banner-overlay"></div>
      <div className="prog-banner-content">
        <h1>{title}</h1>
        <p>
          <Link to="/">Home</Link>
          <FaChevronRight />
          <Link to="/programs">Programs</Link>
          <FaChevronRight />
          <span className="prog-active-crumb">Details</span>
        </p>
      </div>
    </section>
  );
};

// Main Assembly
const ProgramDetail = () => {
  const { id } = useParams();
  
  // Finding the exact program object using route params ID
  const currentProgram = ALL_PROGRAMS.find(p => p.id === parseInt(id));

  if (!currentProgram) {
    return (
      <div className="prog-not-found">
        <h2>Program Not Found!</h2>
        <Link to="/programs" className="prog-back-btn"><FaArrowLeft /> Back to Programs</Link>
      </div>
    );
  }

  return (
    <div className="program-detail-page-wrapper">
      <ProgramDetailBanner title={currentProgram.title} />

      <section className="prog-detail-content-section">
        <div className="prog-detail-container">
          <div className="prog-detail-grid">
            
            {/* LEFT SIDE: MAIN DESCRIPTION */}
            <div className="prog-detail-main">
              <div className="prog-detail-image-box">
                <img src={currentProgram.image} alt={currentProgram.title} />
              </div>
              
              <div className="prog-detail-text">
                <h2>About The {currentProgram.title} Initiative</h2>
                <p className="prog-lead-text">{currentProgram.shortDesc}</p>
                <p className="prog-full-body-text">{currentProgram.fullDesc}</p>
                
                <div className="prog-impact-card">
                  <h4>Key Impact Till Date</h4>
                  <p>{currentProgram.impact}</p>
                </div>
              </div>

              <div className="prog-detail-footer">
                <Link to="/programs" className="prog-back-btn">
                  <FaArrowLeft /> Back to All Programs
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE: SIDEBAR CTA */}
            <div className="prog-detail-sidebar">
              <div className="prog-cta-box">
                <FaHeart className="heart-icon" />
                <h3>Support This Mission</h3>
                <p>Your contribution can directly fuel our active operational costs for this specific program.</p>
                <button className="prog-donate-now-btn">Donate Now</button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetail;
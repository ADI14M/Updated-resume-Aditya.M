import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineer</h4>
                <h5>Quddle LLC</h5>
              </div>
              <h3>DEC-2025</h3>
            </div>
            <p>
              Created Agentic AI systems and autonomous AI agents.
              Developed and fine-tuned custom AI models for production use cases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Marketing & Branding</h4>
                <h5>InUnity LLP</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Supported brand initiatives and executed creative marketing campaigns.
              Translated technical value propositions into customer-facing materials.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Event Lead & Organizer</h4>
                <h5>ME-RIISE Foundation</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Lead organization efforts for state-level hackathons.
              Managed teams and coordinated event logistics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

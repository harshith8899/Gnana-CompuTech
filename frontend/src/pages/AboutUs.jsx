const VALUES = [
  {
    tick: "01",
    title: "Integrity & trust",
    text: "Transparent in scope, pricing and delivery — no fine print.",
  },
  {
    tick: "02",
    title: "Innovation & growth",
    text: "We evolve with the tech and pedagogy, not behind it.",
  },
  {
    tick: "03",
    title: "Empowerment & inclusion",
    text: "Equal access to opportunity, regardless of where a student starts.",
  },
  {
    tick: "04",
    title: "Excellence & impact",
    text: "We measure ourselves by outcomes we can point to.",
  },
];

export default function AboutUs() {
  return (
    <section className="alt about-page" id="about-us">
      <div className="wrap">
        <div className="about-hero">
          <div className="about-hero-content">
            <div className="eyebrow">
              <span className="num">Ch. 01</span> ABOUT GNANA COMPUTECH
            </div>
            <h2>
              We create learning systems that feel practical, scalable, and
              deeply human.
            </h2>
            <p>
              <strong>Gnana CompuTech Solutions Pvt. Ltd.</strong> is a
              technology-driven organization committed to bridging the gap
              between academic learning and industry requirements. We empower
              students, educators, and institutions by delivering high-quality
              internships, live projects, skill development programs, and
              innovative software solutions that prepare learners for successful
              careers in the digital world. Our focus is on providing practical,
              hands-on learning experiences through real-time projects, expert
              mentorship, and industry-oriented training in emerging
              technologies such as Artificial Intelligence, Machine Learning,
              Data Science, Cyber Security, Full Stack Development, Cloud
              Computing, Internet of Things (IoT), and Business Intelligence. We
              believe that experiential learning is the key to developing
              confident, skilled, and job-ready professionals. 
              <br />
              At <strong>Gnana CompuTech Solutions Pvt. Ltd.</strong>, our mission is to inspire
              innovation, foster continuous learning, and create opportunities
              that enable individuals to excel in an ever-evolving technological
              landscape. We are dedicated to building a future where education
              meets industry, transforming knowledge into real-world success.
            </p>
            <div className="about-hero-actions">
              <a href="/#courses" className="btn btn-primary">
                Explore programs
              </a>
              <a href="/#contact" className="btn btn-ghost">
                Meet the team
              </a>
            </div>
          </div>

          <div className="about-hero-card">
            <span className="about-pill">From classrooms to career pathways, we build tools that support
              growth at every stage.</span>
            <h3>
              Why Choose Us?
            </h3>
            <ul>
              <li>Industry-Oriented Training</li>
              <li>Live Projects with Practical Exposure</li>
              <li>Expert Mentors and Technical Guidance</li>
              <li>Internship & Project Completion Certificates</li>
              <li>Final-Year Project Support</li>
              <li>Affordable and Flexible Learning Programs</li>
              <li>Personalized Mentorship and Career Guidance</li>
              <li>Focus on Emerging Technologies</li>
              <li>Commitment to Student Success and Innovation</li>
              <li>Smart ERP platforms for schools and colleges</li>
              <li>Assessment systems with real time insight</li>
              <li>Hands on internships and project based learning</li>
            </ul>
          </div>
        </div>

        <div className="about-story-grid">
          <div className="ledger-card about-story-card">
            <h3>Our story</h3>
            <p>
              We started with a simple idea: technology should support teaching
              rather than complicate it. By combining academic understanding
              with product thinking, we create systems that are clear for
              educators and empowering for learners.
            </p>
          </div>
          <div className="ledger-card about-story-card">
            <h3>What we believe</h3>
            <ul>
              <li>Learning should be accessible, not intimidating.</li>
              <li>Every institution deserves reliable digital support.</li>
              <li>Good tools should make strong teaching easier to scale.</li>
            </ul>
          </div>
        </div>

        <div className="about-feature-strip">
          <div className="ledger-card">
            <h3>Our mission</h3>
            <p>
              <ul>
                <li>Deliver industry-focused training and internship programs.</li>
                <li>Provide innovative, real-time project development opportunities.</li>
                <li>Bridge the gap between academic education and industry expectations. </li>
                <li>Foster research, innovation, and entrepreneurship among students.</li> 
                <li>Empower learners with technical expertise and employability skills for successful careers.</li>
              </ul>
            </p>
          </div>
          <div className="ledger-card">
            <h3>Our vision</h3>
            <p>
              To become a leading technology and education partner recognized
              for developing industry-ready professionals through innovation,
              excellence, and practical learning.{" "}
            </p>
          </div>
          <div className="ledger-card">
            <h3>How we work</h3>
            <p>
              We listen closely, design around real workflows, and build
              solutions that stay useful long after launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

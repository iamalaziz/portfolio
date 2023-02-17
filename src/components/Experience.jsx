import { useState } from 'react';
import '../App.scss';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (index) => {
    setActiveTab(index);
  };
  return (
    <section id="experience" className="experience">
      <h1 className="section-title" data-aos="fade-up">
        <span>02. </span>Experience
      </h1>
      <div className="container" data-aos="zoom-in">
        <div className="tabs">
          <button
            className={activeTab === 1 ? 'active' : null}
            onClick={() => toggleTab(1)}
          >
            Web Academy
          </button>
          <button
            className={activeTab === 2 ? 'active' : null}
            onClick={() => toggleTab(2)}
          >
            <em>Pending...</em>
          </button>
          <button
            className={activeTab === 3 ? 'active' : null}
            onClick={() => toggleTab(3)}
          >
            <em>Pending...</em>
          </button>
        </div>
        <div className="detail">
          <div className={`content ${activeTab === 1 ? 'active' : ''}`}>
            <h3>
              Online Mentor at <span>@webacademy</span>
            </h3>
            <h5>March 2021 - December 2021</h5>
            <p>
              Taught students the basics of front-end tools (HTML, CSS,
              JavaScript, Python) on Zoom Meetings. Organized clubs and master
              classes between middle developers and students.
            </p>
            <p>
              I was an assistant team leader in internship bootcamps helping
              members get along with working environment in 4 real projects.
            </p>
            <p>
              Since programming needs English language and good level of logic
              thinking, I taught English and math classes as a foundation for
              programming environment.
            </p>
          </div>
          <div className={`content ${activeTab === 2 ? 'active' : ''}`}>
            <h3>
              <em>Pending...</em>
            </h3>
          </div>
          <div className={`content ${activeTab === 3 ? 'active' : ''}`}>
            <h3>
              <em>Pending...</em>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

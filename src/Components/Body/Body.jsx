import React from "react";

const Body = () => {
  return (
    <div className="body-container">
      {/* The main information block. */}
      <section className="block">
        <h1>
          Spinning the ordinary into extraordinary for those who aren't afraid
          to shine!
        </h1>
        <p>
          Aspiring Front-End Web Developer with foundational knowledge in React
          and TypeScript, eager to apply my skills and contribute to turning
          conceptual ideas into fully functional web realities. I am committed
          to learning and mastering web development, and ready to kick-start my
          professional journey in this field.
        </p>
        <div className="box">
          <button className="button button--light">Contact</button>
          <button className="button button--dark">Resume</button>
        </div>
      </section>
      {/* About Me Section. */}
      <section className="block">
        <h2>📝 About Me</h2>
        <p>
          Greetings, I am Ronald, a proficient Front-End Developer with a focus
          on React, having entered the field in 2022. I remain enthusiastic
          about diversifying my skillset and am eager to venture into new
          technological domains.
        </p>
        <p>
          In 2022, I made the pivotal decision to resume my academic pursuits
          shortly after the blissful event of my marriage. This period has been
          transformational, as I have developed a profound passion for
          programming. The nuanced challenges it presents and the satisfaction
          derived from witnessing my creations take form is unparalleled.
        </p>
        <p>
          I continuously seek to encounter new opportunities that foster
          learning and growth in my career as a developer. If my profile
          resonates with your requirements, please do not hesitate to connect
          with me via the social media links provided on this page.
        </p>
        <p>
          Together, let's innovate and contribute something remarkable to the
          world! 🤗
        </p>
      </section>
      {/* Educational Background */}
      <section className="block">
        <h2>📜 Education</h2>
        <div className="outlined-box">
          <div className="four-header light">
            <p>Nicolet Area Technical College</p>
            <p>AAS - IT - Web Software Development</p>
            <p>Rhinelander WI</p>
            <p>2022-Present</p>
          </div>
          <div className="outlined-box__body">
            <p>
              Currently, I'm advancing my technical prowess by pursuing an
              Associates degree in IT - Web Software Development. This rigorous
              program has enabled me to gain comprehensive insights into the
              world of web development, honing my proficiency in diverse
              programming languages, web design strategies, database management,
              and more. As I navigate this academic journey, I'm equipped with a
              growing toolkit of cutting-edge skills to craft intuitive, dynamic
              web solutions.
            </p>
            <ul>
              <li>
                <span className="bold light">Web Design: </span>
                Expertly transform reference images into dynamic web
                applications, bringing unique digital visions to life with
                precision and creativity.
              </li>
              <li>
                <span className="bold light">Project Management: </span>
                Lead projects from conception to completion, utilizing strategic
                planning, resource allocation, and proactive problem-solving to
                ensure timely and successful delivery.
              </li>
              <li>
                <span className="bold light">Communication: </span>
                Harness excellent communication skills to foster effective
                collaboration, streamline processes, and ensure clarity and
                alignment within project teams.
              </li>
              <li>
                <span className="bold light">Web Software Programming: </span>
                Skilled in crafting efficient, scalable web software, leveraging
                diverse programming languages and frameworks to create robust,
                user-centric solutions.
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Awards */}
      <section className="block">
        <h2>🏆 Awards</h2>
        <div className="outlined-box">
          <div className="four-header light">
            <p>Phi Theta Kappa</p>
            <p>2022-Present</p>
          </div>
          <div className="outlined-box__body">
            Phi Theta Kappa (PTK) is a dynamic, internationally recognized honor
            society enriching the academic journey of high-achieving college
            students. It's a vibrant hub of learning, leadership, and
            fellowship, offering its members unique opportunities for personal
            growth and scholarship pursuits. Embodying the joy of intellectual
            exploration, PTK transforms today's scholars into tomorrow's
            leaders!
          </div>
        </div>
        <div className="outlined-box">
          <div className="four-header light">
            <p>Dean's List</p>
            <p>2022-Present</p>
          </div>
          <div className="outlined-box__body">
            The Dean's List is a prestigious academic distinction, signifying
            students' exceptional scholastic achievements. It's an accolade
            awarded by many universities to those who exceed standard academic
            expectations in a semester, thereby highlighting their dedication
            and intellectual prowess. The Dean's List celebrates academic stars,
            applauding their diligence and zest for learning.
          </div>
        </div>
      </section>
      {/*Projects*/}
      <main className="block">
        <h2>🖥 Projects</h2>
        <div className="project-container">
          <div className="project-box"></div>
          <div className="project-box"></div>
          <div className="project-box"></div>
          <div className="project-box"></div>
        </div>
      </main>
    </div>
  );
};

export default Body;

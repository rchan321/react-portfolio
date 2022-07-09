import React from 'react';

function About() {
    return (
      <section className="my-5">
        <h1 id="about">Placeholder</h1>
        <h2 class="myname">Roger Chan</h2>
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        <div className="my-2">
          <p>
            Lorem ipsum dolor 
          </p>
        </div>
      </section>
    );
  }

export default About;
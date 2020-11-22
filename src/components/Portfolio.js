import React from "react";
import Projects from "./Projects";

function Portfolio() {
  return (
    <main className="container jumbotron background">
      <div className="row">
        <div className="col-sm-3">
          <h1>Portfolio</h1>
        </div>
      </div>

      <hr />
      <Projects
        title="Project Title: Form Generator"
        gitrep="https://github.com/kaurshalpreet/Form-Generator"
        herokulink="https://ancient-earth-94263.herokuapp.com/"
        srcprop="./images/formGenerator.png"
        altprop="Form-Generator"
      />

      <Projects
        title="Project Title: Life Organizer"
        gitrep="https://github.com/kaurshalpreet/Life-Organizer"
        herokulink="https://kaurshalpreet.github.io/Life-Organizer/index.html"
        srcprop="./images/lifeOrganizer.png"
        altprop="Life-Organizer"
      />

      <Projects
        title="Project Title: Eat-Da-Burger"
        gitrep="https://github.com/kaurshalpreet/burger"
        herokulink="https://evening-chamber-99233.herokuapp.com/"
        srcprop="./images/Eat-Da-Burger.gif"
        altprop="Eat-Da-Burger"
      />

      <Projects
        title="Project Title: Code Quiz"
        gitrep="https://github.com/kaurshalpreet/homework4-codeQuiz"
        herokulink="https://kaurshalpreet.github.io/homework4-codeQuiz/"
        srcprop="./images/codeQuiz.gif"
        altprop="Code-Quiz-gif"
      />

      <Projects
        title="Project Title: Weather Dashboard"
        gitrep="https://github.com/kaurshalpreet/homework6-Weather-Dashboard"
        herokulink="https://kaurshalpreet.github.io/homework6-Weather-Dashboard/"
        srcprop="./images/weather.png"
        altprop="Weather-Dashboard"
      />

      <Projects
        title="Project Title: Password Generator"
        gitrep="https://github.com/kaurshalpreet/homework3"
        herokulink="https://kaurshalpreet.github.io/homework3/"
        srcprop="./images/passwordGenerator.png"
        altprop="Password-Generator"
      />
    </main>
  );
}

export default Portfolio;

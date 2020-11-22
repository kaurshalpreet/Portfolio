import React from "react";

function About() {
  const fontStyle = {
   fontFamily: 'Work+Sans'
  };

  const widthHeight = {
    width: '150px', 
    height: '200px'
  }
  return (
<div>
<main className="container jumbotron background d-inline-flex p-2 bd-highlight" > 
    <section className="container">
      <h1>About Me</h1>
      
      <hr />

      <div>
        
          <img className="image" src="images/IMG_8412.jpg" style={widthHeight} alt="Shalpreet" />
            
            <article>
              <h2 className="display-1" style={fontStyle}>Shalpreet Kaur</h2>
              <p style={fontStyle}>
                
                An enthusiastic web developer with primary experience in Html, CSS/Bootstrap, JavaScript, JSON interacting with APIs & node.js.
                In the next phase of my career, I not only want to use my skills to make the application look beautiful and functional,
                but also want to work on the technically challenging facets of the application too. <br />
                A self-aware and detail-oriented professional that can adapt to work individually as well as work in a team.
                I bring with me customer service experience in a post-sales environment, 
                engaging with the customer to improve customer experience and increase customer satisfaction.
              </p>

              <p style={fontStyle}>I hold a Bachelor’s degree in Computer Applications from Guru Nanak Dev University, India.
                Currently enrolled at UC Davis Bootcamp - FULL STACK WEB DEVELOPER program. In a process to rediscover myself and 
                contribute to the development of tools for the betterment of humanity and the planet.
                <br />
                My Hobbies are Cooking, Henna Art & Travelling. 
              </p>  
                <br /><br />
            </article>  
            
              <p style={fontStyle}>Let's connect! You can also find me on 
                <a href="https://www.linkedin.com/in/shalpreet-kaur-web-developer" target="_blank" rel="noreferrer" className="fa fa-linkedin"></a>
                <a href="https://github.com/kaurshalpreet" target="_blank" rel="noreferrer" className="fa fa-github"></a> 
                <a href="https://docs.google.com/document/d/17YKOUv9zafEvS_Jo_C1EDyENfAzddeQR3qpFB1ww39Q/edit?usp=sharing" target="_blank" rel="noreferrer">
                  <img className="img-fluid placeholder-thumbnail resume-img" src="images/cv.png"  alt="Resume-link" />
                </a> <br />
                Email : <a href="mailto:kaurshalpreet@gmail.com">kaurshalpreet@gmail.com</a> <br />
                Contact : 707.386.1696
              </p>

      </div>
    </section>  
  </main>
  </div>
  
  );
  }

export default About;

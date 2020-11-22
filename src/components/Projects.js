import React from 'react';

function Projects() {
    return (
        <div className="row">
     <div className="col-sm-12">
       <h4>Project Title: Form Generator</h4>
       <h6>
         Link to the Github Repository:
         <a
           href="https://github.com/kaurshalpreet/Form-Generator"
           target="_blank" rel="noreferrer"
         >
           https://github.com/kaurshalpreet/Form-Generator</a
         >
       </h6>
       <h6>
         Link to the deployed Application:
         <a href="https://ancient-earth-94263.herokuapp.com/" target="_blank" rel="noreferrer"
           >https://ancient-earth-94263.herokuapp.com</a
         >
       </h6>
       <a href="https://ancient-earth-94263.herokuapp.com/" target="_blank" rel="noreferrer">
         <img
           className="img-fluid placeholder-thumbnail"
           src="images/formGenerator.png"
           alt="Form-Generator"
         />
       </a>
     </div>
   </div>
    );
}
 export default Projects;


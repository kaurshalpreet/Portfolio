import React from "react";

function Projects(props) {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12">
          <h4>{props.title}</h4>
          <h6>
            Link to the Github Repository:
            <a href={props.gitrep} target="_blank" rel="noreferrer">
              {props.gitrep}
            </a>
          </h6>
          <h6>
            Link to the deployed Application:
            <a href={props.herokulink} target="_blank" rel="noreferrer">
              {props.herokulink}
            </a>
          </h6>
          <a href={props.herokulink} target="_blank" rel="noreferrer">
            <img
              className="img-fluid placeholder-thumbnail"
              src={props.srcprop}
              alt={props.altprop}
            />
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
}
export default Projects;

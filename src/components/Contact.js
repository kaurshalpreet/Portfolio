import React from "react";

function Contact() {
    return (
  
<main className="container jumbotron background p-2 bd-highlight">
  <div className="container">
          <h1>Contact</h1>
    <hr />

    <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">Name</label>
            <input type="email" className="form-control" id="exampleFormControlInput" placeholder="First and Last Name" />
        </div>

        <div className="form-group">
          <label for="exampleFormControlInput1">Email</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
    </form>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
              </div>
    </div>
</main>  

);
}
export default Contact;
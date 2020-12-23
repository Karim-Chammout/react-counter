import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style.css";

export default function App() {
  const [counter, setCounter] = React.useState(
    Number(localStorage.getItem("counter")) || 0
  );
  const clicker = event => {
    event.target.name == "increase"
      ? setCounter(counter + 1)
      : setCounter(counter - 1);
  };

  localStorage.setItem("counter", counter);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 m-auto">
          <div className="card">
            <img
              src="https://picsum.photos/id/144/250/250"
              className="card-img-top"
              alt="picsum"
            />
            <div className="card-body">
              <h5 className="card-title my-4">Counting Result : {counter}</h5>
              <p className="card-text">
                I love React, I love local storage, I love map method, I love
                counter <br /> All of the above is LYING :(
              </p>
              <button
                name="increase"
                onClick={clicker}
                className="btn btn-danger"
              >
                Increase
              </button>
              <button
                name="decrease"
                onClick={clicker}
                className="btn btn-warning ms-4"
              >
                Decrease
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

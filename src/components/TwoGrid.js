import React from 'react';

export default function TwoGrid() {
  return (
    <div>
      <h2>2x2 Grid</h2>
      <div className="ex_2-parent">
        <div className="col-one">
          1
        </div>
        <div className="col-two">
          2
        </div>
        <div className="col-three">
          3
        </div>
        <div className="col-four">
          4
        </div>
      </div>
      <img className="snippet-img" src="img/ex2-html.png" alt="ex1" />
      <img className="snippet-img" src="img/ex2.png" alt="ex1" />
    </div>
  );
}

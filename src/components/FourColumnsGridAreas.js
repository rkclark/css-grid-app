import React from 'react';

export default function FourColumnsGridAreas() {
  return (
    <div>
      <h2>Four Columns - Ordered with grid areas</h2>
      <div className="ex_4-parent">
        <div className="col-one ex_4-one">
          1
        </div>
        <div className="col-two ex_4-two">
          2
        </div>
        <div className="col-three ex_4-three">
          3
        </div>
        <div className="col-four ex_4-four">
          4
        </div>
      </div>
      <img className="snippet-img" src="img/ex4-html.png" alt="ex1" />
      <img className="snippet-img" src="img/ex4.png" alt="ex1" />
    </div>
  );
}

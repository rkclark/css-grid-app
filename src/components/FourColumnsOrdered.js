import React from 'react';

export default function FourColumnsOrdered() {
  return (
    <div>
      <h2>Four Columns - Ordered with grid-column on child elements</h2>
      <div className="ex_3-parent">
        <div className="col-one ex_3-one">
          1
        </div>
        <div className="col-two ex_3-two">
          2
        </div>
        <div className="col-three ex_3-three">
          3
        </div>
        <div className="col-four ex_3-four">
          4
        </div>
      </div>
      <img className="snippet-img" src="img/ex3-html.png" alt="ex1" />
      <img className="snippet-img" src="img/ex3.png" alt="ex1" />
    </div>
  );
}

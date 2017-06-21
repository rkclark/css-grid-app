import React from 'react';

export default function ContentPanelsLayout() {
  return (
    <div>
      <h2>Content Panels Layout</h2>
      <div className="ex_6-parent">
        <div className="col-four ex_6-header">Header</div>
        <div className="col-one">1</div>
        <div className="col-two">2</div>
        <div className="col-three ex_6-tall">3</div>
        <div className="col-four">4</div>
        <div className="col-one ex_6-extra-tall">5</div>
        <div className="col-two">6</div>
        <div className="col-three ex_6-tall">7</div>
        <div className="col-four ex_6-tall">8</div>
        <div className="col-one">9</div>
        <div className="col-two">10</div>
        <div className="col-three ex_6-footer">Footer</div>
      </div>
      <img className="snippet-img" src="img/ex6-html.png" alt="ex1" />
      <img className="snippet-img" src="img/ex6.png" alt="ex1" />
    </div>
  );
}

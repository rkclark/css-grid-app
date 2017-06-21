import React from 'react';

export default function BasicSiteLayout() {
  return (
    <div>
      <h2>Basic Site Layout</h2>
      <div className="ex_5-parent">
        <div className="col-one ex_5-header">
          Header
        </div>
        <div className="col-two ex_5-sidebar">
          Sidebar
        </div>
        <div className="col-three ex_5-content">
          Some Nice Content
        </div>
        <div className="col-four ex_5-footer">
          Footer
        </div>
      </div>
      <img className="snippet-img" src="img/ex5-html.png" alt="ex1" />
      <img className="snippet-img" src="img/ex5.png" alt="ex1" />
    </div>
  );
}

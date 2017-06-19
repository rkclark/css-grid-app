import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/four-columns">Four Columns</Link>
      <Link to="/two-grid">Two Grid</Link>
      <Link to="/four-columns-ordered">Four Columns w/Ordering</Link>
      <Link to="/four-columns-with-grid-areas">Four Columns w/Grid Areas</Link>
      <Link to="/basic-layout">Basic Site Layout</Link>
      <Link to="/content-panels-layout">Content Panels Layout</Link>
    </div>
  );
}

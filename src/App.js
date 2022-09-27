import React from "react";
import "./style.css";
import ClickCount from './ClickCount';
import HoverCount from './HoverCount';

export default function App() {
  return (
    <div>
      <ClickCount/> <br/>
      <HoverCount/>
     
    </div>
  );
}

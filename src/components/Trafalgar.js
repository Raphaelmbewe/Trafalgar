import React from "react";
import './components.css';
import "bootstrap/dist/css/bootstrap.min.css";

export const AppFooterItem1 = () => {
    let name =  <div className="icon-name text-center">Trafalgar</div>;
    let text = 'Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone';
  return (
    <>
     <div>{name}</div>
      <footer >
      <p className="name-content text-light align-text-middle" style={{fontSize:15}}>
        {text}
      </p>
      <div className="text-light align-text-middle ">©Trafalgar PTY LTD 2020. All rights reserved</div>
      </footer>
    </>
  );
};
import React from "react";
import './components.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {help} from '../Data/FooterDate'
export const AppFooterItem4 = () => {
    let name = <div className="icon-name">Get help</div>;
  return (
    <>
     <div className="text-center"> {name}</div>
    {
        help.map((item)=>{
          const { id,title} = item;
        return(
     <footer className=" container" key={id}>
      <div className="name-content text-light text-center" style={{fontSize:15}} >
          <ul ><a className="my-0 text-light"  href="#">{title}</a></ul>
      </div>
      </footer> 
            )
        })
    }
    </>
  );
};
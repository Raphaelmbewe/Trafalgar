import React from "react";
import './components.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {company} from '../Data/FooterDate'
export const AppFooterItem2 = () => {
    let name = <div className="icon-name">Company</div>;
  return (
    <>
     <div className="text-center"> {name}</div>
    {
        company.map((item)=>{
          const { id,title} = item;
        return(
     <footer className=" container" key={id}>
      <div className="name-content text-light text-center " style={{fontSize:15}} >
          <ul className="FH"><a className="my-0 text-light"  href="#">{title}</a></ul>
      </div>
      </footer> 
            )
        })
    }
    </>
  );
};
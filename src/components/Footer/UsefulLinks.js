import React from "react";
import './footer.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { usefulLinks } from './footerData';
export const AppFooterItem2 = () => {
    let name = <div className="icon-name">Useful Links</div>;
  return (
    <>
     <div className="text-center"> {name}</div>
    {
        usefulLinks.map((item)=>{
          const { id,title, link} = item;
        return(
     <footer className=" container" key={id}>
      <div className="name-content text-light text-center " style={{fontSize:15}} >
          <ul className="FH"><a className="my-0 text-light"  href={link}>{title}</a></ul>
      </div>
      </footer> 
            )
        })
    }
    </>
  );
};
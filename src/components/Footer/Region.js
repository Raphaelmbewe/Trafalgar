import React from "react";
import './footer.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {region} from './footerData'
export const AppFooterItem3 = () => {
    let name = <div className="icon-name">Regions</div>;
  return (
    <>
     <div className="text-center"> {name}</div>
    {
        region.map((item)=>{
          const { id,title} = item;
        return(
     <footer className=" container" key={id}>
      <div className="name-content text-light text-center" style={{fontSize:15}} >
          <ul ><li className="my-0 text-light"  href="#">{title}</li></ul>
      </div>
      </footer> 
            )
        })
    }
    </>
  );
};

import React from 'react';
import { Rnd } from 'react-rnd';
import { ImHappy2 } from 'react-icons/im';
import Plusbin from "../Plusbin/Plusbin";



const style1 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
//   border: "solid 1px #ddd",
  width: "1000px",
  // background: "#f0f0f0"
};



var id=  localStorage.getItem("id_element__icon");
    localStorage.setItem("id_element__icon", id +12);


    function handledelete(e){
      // const list = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
      // const child = e.target.parentElement.parentElement.parentElement.parentElement;
      // console.log(child);
      // child.style.display = "none";
      const id = e.target.parentElement.parentElement.getAttribute("data-key");
      const data = document.getElementById(id);
      data.remove();
     
  }

export default ({
    item,
    width = 10,
    height = 10,
    x = 50,
    y = 50,
    classname = "",
    datakey = 1121,
    parent = "parent",
    checkid = 2,
}) => (
  <Rnd
  default={{
      x: x,
      y: y,
      width: width,
      height: height,
  }}
  style={style1}
  minWidth={10}
  minHeight={20}
  grid={[50, 50]}
  bounds={parent.parent}
  id= {1121*checkid}
>
  <div keyIndex= {1121 * checkid} className="relative congviec group border__full w-full h-full">
      <ImHappy2 className={`w-full h-full border-1 ${classname}`} />
      <Plusbin keyIndex= {1121 *checkid} hiddenPlus = "hidden" classname="dieukhien top-0 opacity-0 -left-7" onClickfuncDELETE={handledelete}/>
  </div>
</Rnd>
);
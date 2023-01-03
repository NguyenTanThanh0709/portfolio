import React, { useState } from "react";
import { Rnd } from "react-rnd";
import Remove from "./Remove";
import Toolbar from "./Toolbar";
import Plusbin from "../Plusbin/Plusbin";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiFontSize, BiFontFamily, BiFontColor } from "react-icons/bi";


const style1 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // border: "solid 1px #ddd",
    width: "100%",
    // background: "#f0f0f0"
};

const color = ["black", "red", "blue", "green", "pink", "white"];
const fstyle = [
    "Arial",
    "Times New Roman",
    "Georgia",
    "Garamond",
    "Verdana",
    "Courier New",
    "Lucida Console",
    "Brush Script MT",
    "Copperplate",
];

// const size = {
//   width: "50px",
//   height: "50px",
// }

export default function Box({
    parent = "parent",
    item = "Text",
    width = 160,
    height = 50,
    x = 50,
    y = 50,
    classname = "",
    fontSize1 = "20px",
    color1 ="#000000",
    datakey = localStorage.getItem("id_element"),
    checkid= 2,
}) {
    var id=  (localStorage.getItem("id_element") - 2) * checkid;
    localStorage.setItem("id_element", id+10280-21)
    const [enable, setEnable] = useState(false);
    const [styleFont, setStyleFont] = useState(fontSize1);
    const [styleFontStyle, setStyleFontStyle] = useState("Arial");
    const [styleColor, setStyleColor] = useState(color1);
    
    const [isBold, setBold] = useState(false);
    const [isItalic, setItalic] = useState(false);
    const [isUnderline, setUnderline] = useState(false);

    function handledelete(e){
        // const list = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        // const child = e.target.parentElement.parentElement.parentElement.parentElement;
        // console.log(child);
        // child.style.display = "none";
        const id = e.target.parentElement.parentElement.getAttribute("data-key");
        const data = document.getElementById(id);
        data.remove();
       
    }
    return (
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
            id= {datakey}
            
        >
            {enable && (
                <div className="absolute text-black top-0 w-[500px] -translate-y-full border border-slate-400 p-[10px] rounded-[20px] bg-slate-400 flex justify-center items-center">
                    <div className="flex  mr-[10px]">
                        <select
                            className="focus:outline-none text-[13px]"
                            onChange={(e) => setStyleFontStyle(e.target.value.replace(" ", ""))}
                        >
                            {fstyle.map((item) => (
                                <option className="text-[13px] text-center">
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex  mr-[10px] items-center justify-center">
                        <BiFontSize className="text-[25px] mr-[10px]" />
                        <input
                            type="number"
                            className="h-[19.2px] w-[50px] text-[15px] focus:outline-none text-center"
                            min="10"
                            onInput={(e) => setStyleFont(e.target.value + "px")}
                            value={parseInt(styleFont.replace("px", ""))}
                        ></input>
                    </div>
                    <div
                        className={
                            "flex cursor-pointer mr-[10px] items-center justify-center px-[5px] rounded-[10px] " +
                            (isBold ? "bg-slate-300" : "")
                        }
                        onClick={() => setBold(!isBold)}
                    >
                        <p className="text-[25px] px-[5px] font-bold">B</p>
                    </div>
                    <div
                        className={
                            "flex cursor-pointer mr-[10px] items-center justify-center px-[5px] rounded-[10px] " +
                            (isItalic ? "bg-slate-300" : "")
                        }
                        onClick={() => setItalic(!isItalic)}
                    >
                        <p className="text-[25px] px-[5px] italic text-center">
                            I
                        </p>
                    </div>
                    <div
                        className={
                            "flex cursor-pointer mr-[10px] items-center justify-center px-[5px] rounded-[10px] " +
                            (isUnderline ? "bg-slate-300" : "")
                        }
                        onClick={() => setUnderline(!isUnderline)}
                    >
                        <p className="text-[25px] px-[5px] underline">U</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <BiFontColor className="text-[25px]" />
                        <input
                            type="color"
                            onChange={(e) => setStyleColor(e.target.value)}
                            value={`${styleColor}`}
                        ></input>
                    </div>
                    <AiOutlineCloseCircle
                        className="ml-[20px] text-[25px] cursor-pointer"
                        onClick={() => setEnable(false)}
                    ></AiOutlineCloseCircle>
                </div>
            )}
            <div
                data-key={datakey}
                className={`congviec group w-full h-full border relative ${classname}`}
                contentEditable
                suppressContentEditableWarning={true}
                spellCheck={false}
                onDoubleClick={() => {
                    setEnable(true);
                }}
            >
                <p
                    className={
                        `w-full h-full ${styleFontStyle} ` +
                        (isBold ? "font-bold " : " ") +
                        (isItalic ? "italic " : " ") +
                        (isUnderline ? "underline " : " ")
                    }
                    style={{
                        fontSize: styleFont,
                        color: styleColor,
                        
                    }}
                >
                    {item}
                </p>
                
                {/* <Remove></Remove> */}
                <Plusbin keyIndex= {datakey} hiddenPlus = "hidden" classname="dieukhien top-0 opacity-0 -left-7" onClickfuncDELETE={handledelete}/>
            </div>
        </Rnd>
    );
}

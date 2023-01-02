import React, { useState } from "react";
import { Rnd } from "react-rnd";
import Remove from "./Remove";
import Toolbar from "./Toolbar";
import Plusbin from "../Plusbin/Plusbin";
import { AiOutlineCloseCircle } from "react-icons/ai";


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
    { name: "Times New Roman", fs: "'Times New Roman', Times, serif;" },
    { name: "Arial", fs: "Arial, Helvetica, sans-serif;" },
    {
        name: "Lucida Console",
        fs: "'Lucida Console', 'Courier New', monospace;",
    },
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
    color1 ="black",
    datakey = localStorage.getItem("id_element"),
}) {
    var id=  localStorage.getItem("id_element") - 2;
    localStorage.setItem("id_element", id+10000-21)
    const [enable, setEnable] = useState(false);
    const [styleFont, setStyleFont] = useState("");
    const [styleFontStyle, setStyleFontStyle] = useState("Arial");
    const [styleColor, setStyleColor] = useState(color1);

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
                <div className="absolute top-0 left-0 h-[200px] text-black -translate-x-full border border-slate-400 p-[10px] rounded-[20px] bg-slate-400">
                    <AiOutlineCloseCircle
                        className="text-[25px] cursor-pointer mb-[10px]"
                        onClick={() => setEnable(false)}
                    ></AiOutlineCloseCircle>
                    <div className="flex flex-col mb-[10px]">
                        <label className="text-[15px]">Font Size (px)</label>
                        <input
                            type="number"
                            className="h-[19.2px] w-[50px] text-[15px] focus:outline-none text-center"
                            min="10"
                            onInput={(e) => setStyleFont(e.target.value)}
                        ></input>
                    </div>
                    <div className="flex flex-col mb-[10px]">
                        <label className="text-[15px]">Text Color</label>
                        <select
                            className="focus:outline-none text-[13px]"
                            onChange={(e) => setStyleColor(e.target.value)}
                        >
                            {color.map((item) => (
                                <option className="text-[13px] text-center">
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col mb-[10px]">
                        <label className="text-[15px]">Font Family</label>
                        <select
                            className="focus:outline-none text-[13px]"
                            onChange={(e) => setStyleFontStyle(e.target.value)}
                        >
                            <option className="text-[13px] text-center">
                                Arial
                            </option>
                            <option className="text-[13px] text-center">
                                Times New Roman
                            </option>
                            <option className="text-[13px] text-center">
                                Lucida Console
                            </option>
                        </select>
                    </div>
                </div>
            )}
            <div data-key= {datakey}
                className={`congviec group w-full h-full border relative ${classname}`}
                contentEditable
                suppressContentEditableWarning={true}
                spellCheck={false}
                onDoubleClick={() => {
                    setEnable(true);
                }}
            >
                <p
                    className={`w-full h-full ${styleFontStyle}`}
                    style={{
                        fontSize: styleFont + "px",
                        color: styleColor,
                        fontFamily: styleFontStyle,
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

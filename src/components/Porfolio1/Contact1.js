import { BiCurrentLocation, BiMailSend } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import Box from "../DragAndDrop/Box";
import Image from "../DragAndDrop/Image";
import { useState, useEffect } from "react";

export default function Contact1() {
    const wrapper = document.getElementsByClassName("Page")[0];

    const [state, setState] = useState({
        height: wrapper.offsetHeight,
        width: wrapper.offsetWidth,
    });

    console.log(state.width, state.height);
    return (
        <div
            id="movable"
            className="changeClass relative flex justify-center items-center w-full h-[600px] text-white/80"
        >
            <Box
                item={"CONTACT US"}
                parent={"#movable"}
                color1="text-gray-300"
                width={231}
                x={0.1 * state.width}
                y={0.15 * state.height}
                classname="text-[25px]"
            ></Box>
            <Image
                datakey={801}
                x={0.05 * state.width}
                y={0.25 * state.height}
                width={"300px"}
                height={"300px"}
                src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-de-thuong.jpg"
            ></Image>
            <Box
                item={"Creative House"}
                parent={"#movable"}
                width="200px"
                color1="text-gray-300"
                x={0.5 * state.width}
                y={0.3 * state.height}
                classname="text-[25px]"
            ></Box>

            <Box
                item={<BiCurrentLocation />}
                parent={"#movable"}
                width="50px"
                x={0.5 * state.width}
                color1="text-gray-300"
                y={0.4 * state.height}
                classname="text-[30px]"
            ></Box>
            <Box
                item={"123 Anywhere St., Any City, ST 12345"}
                classname="text-lg"
                parent={"#movable"}
                width={"450px"}
                color1="text-gray-300"
                x={0.55 * state.width}
                y={0.4 * state.height}
            ></Box>
            <Box
                item={<BiMailSend />}
                parent={"#movable"}
                color1="text-gray-300"
                width="50px"
                x={0.5 * state.width}
                y={0.5 * state.height}
                classname="text-[30px]"
            ></Box>

            <Box
                item={"hello@reallygreatsite.com"}
                classname="text-lg"
                parent={"#movable"}
                width={"400px"}
                x={0.55 * state.width}
                color1="text-gray-300"
                y={0.5 * state.height}
            ></Box>
            <Box
                item={<BsFillTelephoneFill />}
                parent={"#movable"}
                width="50px"
                x={0.5 * state.width}
                color1="text-gray-300"
                classname="text-[30px]"
                y={0.6 * state.height}
            ></Box>
            <Box
                item={"+123-456-7890"}
                classname="text-lg"
                parent={"#movable"}
                width={"400px"}
                x={0.55 * state.width}
                color1="text-gray-300"
                y={0.6 * state.height}
            ></Box>
        </div>
    );
}

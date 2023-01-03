import React, { useEffect, useRef } from "react";
import Box from "../DragAndDrop/Box";
import ThanhKE from "../DragAndDrop/ThanhKe";
import Image from "../DragAndDrop/Image";
function About1( {classname = "bg-red-400", checkid1 = 2}) {
    const height = window.innerHeight-50 ;
    const width = (window.innerWidth - 348) * 0.9;
    console.log(localStorage.getItem("id_element"));

    return (
        <div  className={`changeClass w-full h-[600px] relative  text-red-500 ${classname}`}>
            <Box
                checkid={1 * checkid1}
            
                item={"By TSIMPLE"}
                width={210}
                height={40}
                x={width * 0.034}
                y={height * 0.034}
                color1="text-rose-600"
                fontSize1="30px"
                classname={"font-bold text-3xl"}
            />
            <Box
                checkid={2 * checkid1}
                item={"CONTENT CREATOR"}
                width={350}
                height={40}
                x={width * 0.55}
                y={height * 0.034}
                color1="text-rose-600"
                fontSize1="30px"
                classname={"font-bold text-3xl"}
            />
            <ThanhKE y={width * 0.1} x={height * 0.085} width={825}  />
            <Image
                x={width * 0.67}
                y={height * 0.21}
                width={225}
                
                height={225}
                datakey={2023 + checkid1 }
            />
            <Box
                checkid={3 * checkid1}
                item={"ABOUT"}
                width={210}
                height={40}
                color1="text-rose-600"
                x={width * 0.034}
                y={height * 0.32487309644}
                fontSize1="40px"
                classname={"font-bold text-4xl"}
            />
            <Box
                checkid={4 * checkid1}
                item={
                    "African Folktales and Myths for children, teachers, librarians and storytellers. Amazing & Inspiring Stories with Lessons for the Young and Old. Non Profit Organization. Support African Education. Types: Animated folktales, Narrated..."
                }
                width={480}
                height={130}
                x={width * 0.034}
                color1="text-rose-600"
                y={height * 0.40947546531}
                classname={"font-bold text-base"}
            />
            <Box
                checkid={5 * checkid1}
                item={"+521"}
                width={210}
                height={40}
                x={width * 0.034}
                y={height * 0.68020304568}
                color1="text-rose-600"
                fontSize1="30px"
                classname={"font-bold text-3xl"}
            />
            <Box
                checkid={6 * checkid1}
                item={"Happy"}
                width={210}
                height={40}
                x={width * 0.034}
                color1="text-rose-600"
                fontSize1="30px"
                y={height * 0.75972927242}
                classname={"font-bold text-3xl"}
            />
            <Box
                checkid={7 * checkid1}
                item={"+521"}
                width={210}
                height={40}
                color1="text-rose-600"
                x={width * 0.58341968911}
                fontSize1="30px"
                y={height * 0.68020304568}
                classname={"font-bold text-3xl"}
            />
            <Box
                checkid={8 * checkid1}
                item={"SAD"}
                width={210}
                color1="text-rose-600"
                height={40}
                x={width * 0.58341968911}
                fontSize1="30px"
                y={height * 0.75972927242}  
                classname={"font-bold text-3xl"}
            />
        </div>
    );
}
export default About1;

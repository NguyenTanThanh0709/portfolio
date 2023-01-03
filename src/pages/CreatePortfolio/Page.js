import { useState } from "react";
import Block1 from "../../components/CreatePortfolio/Block1";
import Block2 from "../../components/CreatePortfolio/Block2";
import Block3 from "../../components/CreatePortfolio/Block3";
import Block4 from "../../components/CreatePortfolio/Block4";
import Home1 from "../../components/Porfolio1/Home1";
import Image from "../../components/DragAndDrop/Image";
import Box from "../../components/DragAndDrop/Box";
import ThanhKE from "../../components/DragAndDrop/ThanhKe";
import About1 from "../../components/Porfolio1/About1";
import Contact1 from "../../components/Porfolio1/Contact1";
// <Heading />, <SubHeading />, <TextBox />, <ImageBox />

// export const DataContext = createContext()
export default function Page({ num, index, classname = "bg-white" }) {
    const [ele, setEle] = useState([]);


    const handleDrop = (event) => {
        event.preventDefault();
        var valueId = event.dataTransfer.getData("Text1");
        const [name, id] = valueId.split("_");
        setEle([...ele, arr[name][id - 1]]);
        
    };
    const [back, setback] = useState(localStorage.getItem("backgroungColor"));
    const arr = {
        Sample: [
            <Home1 classname={back} checkid1={localStorage.getItem("id_sample")} />,
            <About1 classname={back} checkid1={localStorage.getItem("id_sample")} />,
            <Contact1 />,
        ],
        Components: [<Block1 />, <Block2 />, <Block3 />, <Block4 />],
        Text: [
            <Box />,
            <Box height={65} classname="font-bold"  fontSize1="50px"/>,
            <ThanhKE />,
            <Image />,
        ],
    };
    return (
        <div
            id={num}
            className={`Page mt-[8px] w-[90%] max-w-[90%] h-[600px] border border-black ${classname} overflow-hidden`}
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
                handleDrop(event)
                
            }}
        >
            {ele.map((item) => item)}
        </div>
    );
}

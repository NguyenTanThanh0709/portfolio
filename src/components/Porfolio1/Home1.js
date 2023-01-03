import Box from "../DragAndDrop/Box";
import Icon from "../DragAndDrop/Icon";
function Home1({classname = "bg-yellow-500", checkid1 = 3}) {
    const height = window.innerHeight;
    const width = (window.innerWidth - 348) * 0.9;
    return (
        <div className={`w-full h-[600px] relative  changeClass ${classname}` }>
            <Box
                checkid={1*checkid1+1}
                item={"BRAND"}
                width={150}
                height={40}
                x={width * 0.0207253886}
                y={height * 0.09055876685}
                fontSize1="30px"
                color1="text-rose-600"
                classname={"text-rose-600 font-bold text-3xl"}
            />
            <Box
                checkid={2*checkid1}
                item={"CONTENT CREATOR"}
                width={370}
                height={40}
                x={width * 0.2518134715}
                y={height * 0.09055876685}
                color1="text-rose-600"
                fontSize1="30px"

                classname={"text-rose-600 font-bold text-3xl"}
            />
            <Box
                checkid={3*checkid1}
                item={"PHOTOGRAPHER"}
                width={270}
                height={40}
                x={width * 0.66632124352}
                fontSize1="30px"
                y={height * 0.09055876685}
                color1="text-rose-600"
                classname={"text-rose-600 font-bold text-3xl"}
            />

            <Icon
                checkid={3*checkid1}
                width={200}
                height={200}
                x={width * 0.70466321243}
                y={height * 0.28709055876}
                color1="text-green-600"
                classname={"text-green-600"}
            />
            <Box
                checkid={4*checkid1}
                item={"CREATIVE"}
                width={500}
                height={100}
                x={width * 0.0207253886}
                y={height * 0.20709055876}
                fontSize1="80px"
                color1="text-rose-600"
                classname={"text-rose-600 font-bold text-8xl"}
            />
            <Box
                checkid={5*checkid1}
                item={"PORTFOLIO"}
                width={580}
                height={100}
                x={width * 0.0207253886}
                y={height * 0.35096339113}
                color1="text-green-600"
                fontSize1="80px"

                classname={"font-bold text-8xl text-green-600"}
            />
            <Box
                checkid={6*checkid1}
                item={
                    "Learn English with the most interesting Bible stories, starting with Abraham. Take a Look at the Book. Examine the Message. Learn the Story. Explore the Bible. Types: Read and listen to story, Articles in English, & 30 other languages."
                }
                width={670}
                height={100}
                x={width * 0.0207253886}
                y={height * 0.50988439306+55}
                fontSize1="20px"
                color1="text-green-600"
                classname={"text-lg text-green-600"}
            />
            <Box
                checkid={7*checkid1}
                item={"BY TSIMPLE"}
                width={270}
                height={40}
                x={width * 0.0207253886}
                y={height * 0.68666666666 + 80}
                color1="text-green-600"
                classname={"text-green-600 font-bold text-xl"}
            />
            <Box
                checkid={8*checkid1}
                item={"2022"}
                width={200}
                height={40}
                x={820 - 100 - 40}
                y={height * 0.68666666666 + 80}
                color1="text-green-600"
                classname={"text-green-600 font-bold text-xl"}
            />
        </div>
    );
}
export default Home1;

import EducBg from "./component/EducBg";
import Contentcontain from "./component/Contentcontain";

const AboutMe = () => {
    

    return  (
        <div className="px-6 overflow-y-auto h-screen w-100 md:flex justify-around gap-4">
        <div className="">
            <h1 className="text-yellow-200 text-[50pt] font-tungsten uppercase leading-none">Aaron Zayke Lecourt, 
            <small className="ml-2">22</small></h1>
            <p className="font-valorant text-slate-50">124 Purok 1, Sunnyside Fairview, Baguio City, 2600</p>
            <div className="flex flex-col">
            <Contentcontain 
            title={"Likes"} 
            content="Anything black, pickles in burgers, pineapples on pizzas, salad rolls, etc." />
            <Contentcontain 
            title={"Dislikes"} 
            content="Colorful things, overly sweet stuff, romantic movies, olives in pizzas, etc." />
            <Contentcontain 
            title={"Hobbies"} 
            content="Watch movies, camp with friends, hike & trek, listen to music, play pingpong, etc." />
            </div>
            <br /><br />
            <div className="text-slate-100  text-[30pt] font-tungsten font-bold">
            "If you can’t beat fear, just do it scared."
            </div>
        </div>
        <div className="flex flex-col">
        <Contentcontain 
            title="Educational Background" 
            content={<EducBg/>} />
        <Contentcontain 
            title={"awards & distinctions"} 
            content="High Blue TKD Player, Korean Traditional Drums (Janggu) player, JHS Batch Valedictorian, CISCO Certification for Packet Tracer, etc." />
        </div>
        </div>
    );
};

export default AboutMe;
import EducBg from "./component/EducBg";
import Contentcontain from "./component/Contentcontain";
import HomeDetails from "./component/HomeDetails";
import useFetch from "./useFetch";
import ReviewList from "./ReviewList";

const Home = () => {
    // const title = "Welcome to Our App!";
    // const description = "This is Our Staff Tracking Application";
    const {data:reviews, isPending, error} = useFetch('http://localhost:8000/reviews');

    return  (
        <div className="px-6 overflow-y-auto h-screen w-100 grid grid-cols-7 max-lg:grid-cols-1">
            <div className="col-span-2 border-r border-slate-100/10 pr-3 text-white xl:col-span-1 max-lg:hidden">
            {error && <div className="font-valorant"> {error} </div>}
                {reviews == 0 && <div className="font-valorant text-sm text-slate-500/50"> No Reviews </div>}
                {isPending && <div className="font-valorant text-sm text-slate-500/50"> Loading Reviews... </div>}
                {reviews && <ReviewList reviews = {reviews} reviewlist = "" />}
            </div>
            <div className="col-span-3 text-white xl:col-span-4 max-lg:col-span-4 bg-top max-lg:bg-cover bg-no-repeat bg-lecourt mx-3">
            </div>
            <div className="col-span-2 text-white xl:col-span-2 max-lg:col-span-3">
                <HomeDetails/>
            </div>
        </div>
    );
};

export default Home;
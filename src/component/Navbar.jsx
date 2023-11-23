import { Outlet,Link } from "react-router-dom";

const Navbar = () => {
    return(
        <>
        <nav className="flex justify-between p-5 items-center">
            <h1 className="text-xl text-slate-200 font-valorant">Aaron Lecourt</h1>
            <div className="flex gap-6 items-center uppercase text-sm font-poppins">
                <Link to = "/" className="text-slate-100 hover:text-rose-500">Home</Link>
                <Link to = "/aboutme" className="text-slate-100 hover:text-rose-500">About Me</Link>
                <Link to = "/create-review" className="text-slate-100 border-2 border-white/50 hover:border-rose-600 hover:border-2 hover:bg-rose-500 hover:text-slate-100 p-2">Leave a Review</Link>
            </div>
        </nav>
        <Outlet/>
        </>
    );
}

export default Navbar;
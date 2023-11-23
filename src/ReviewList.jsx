import {Link} from "react-router-dom";
const ReviewList = ({reviews, reviewlist}) => {
    return(
        <div className="">
            {reviews.map((s) => (
                <div className="mt-4" key={s.id}>
                    <Link to = {`/reviews/${s.id}`}>
                    <div className="relative">
                        <div className='absolute text-slate-100 bg-rose-500 font-valorant text-sm px-2 uppercase z-10'>{s.name}</div>
                        <div className='relative top-2 bg-slate-50/10 hover:bg-rose-500/10 hover:border-rose-600 p-4 pb-2 pl-3 border border-white/50 text-white text-xs font-poppins'>
                            "{s.review}"
                        </div>
                    </div>                    
                    </Link> 
                </div>
            ))}      
        </div>
    );
};

export default ReviewList;
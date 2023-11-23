import useFetch from "./useFetch";
import { useParams, useNavigate } from 'react-router-dom';

const StaffDetails = () => {
    const { id } = useParams();
    const { data: reviews, error, isPending } = useFetch('http://localhost:8000/reviews/' + id);

    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/reviews/' + reviews.id, {
            method: "DELETE",
        }).then(() => {
            navigate('/')
        })
    }

    return (
        <div className="flex flex-col justify-center h-screen">
            {isPending && <div className="font-valorant text-[90pt] text-slate-500/10 text-center"> Loading Review... </div>}
            {error && <div className="font-valorant"> {error} </div>}
            {
                reviews && (
                    <>
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-center text-slate-100 text-[25pt] max-w-[500px] font-tungsten leading-none">"{reviews.review}"</div>
                            <div className="mt-3">
                                <h2 className="text-slate-100 bg-rose-500 px-3 uppercase font-valorant text-center">{reviews.name}</h2>
                            </div>
                        </div>
                        <div className="flex justify-center mt-5">
                            <button onClick={handleClick} className="text-rose-500 px-3 py-2 font-valorant">REMOVE THIS REVIEW</button>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default StaffDetails;

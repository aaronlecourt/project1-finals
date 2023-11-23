import { useState } from "react";
import { useNavigate } from "react-router";

const CreateReview = () => {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const reviews = {name, review}
        setIsPending(true);
        fetch('http://localhost:8000/reviews',{
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(reviews)
        }).then(() => {console.log("Review successfully added.");setIsPending(false);navigate('/')})
    }

    return(
        <div className="flex items-center justify-center w-full">
            <div className="bg-slate-700/50 w-full max-w-[600px] border border-slate-100/20 p-6">
                <h2 className="text-slate-100 font-tungsten uppercase text-[50pt] text-center">Leave a Review</h2>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <div className="flex flex-col">
                        <label className="text-slate-100 font-poppins text-xs uppercase font-bold">Name:</label>
                        <input className="w-full bg-slate-300/10 p-2 text-slate-50 font-poppins text-xs" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-slate-100 font-poppins text-xs uppercase font-bold">Position:</label>
                        <textarea className="w-full bg-slate-300/10 p-2 text-slate-50 font-poppins text-xs" type="text" required value={review} onChange={(e) => setReview(e.target.value)} />
                    </div>
                    <div className="flex justify-center">
                        {!isPending && <button className="bg-rose-500 w-full text-white p-2 hover:bg-rose-700 font-valorant text-sm">Add Review</button>}
                        {isPending && <button className="bg-gray-500 text-white p-2 cursor-not-allowed font-valorant text-sm" disabled>Just a moment! Staff!</button>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateReview;

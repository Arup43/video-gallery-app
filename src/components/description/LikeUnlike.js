import { useState } from "react";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import axios from "../../utils/axios";

export default function LikeUnlike({likes, unlikes, id}) {

    const [likeCount, setLike] = useState(likes);

    const [unlikeCount, setUnlike] = useState(unlikes);

    const handleLiked = () => {

        axios.patch(`/videos/${id}`, { likes: likeCount+1 }).then(() => {
            setLike(likeCount + 1);
        })
        .catch(err => {
            console.log(err);
        })
        
    }

    const handleUnliked = () => {

        axios.patch(`/videos/${id}`, { unlikes: unlikeCount+1 }).then(() => {
            setUnlike(unlikeCount + 1);
        })
        .catch(err => {
            console.log(err);
        })
        
    }



    return (
        <div className="flex gap-10 w-48">
            <div style={{cursor: 'pointer'}} className="flex gap-1" onClick={handleLiked}>
                <div className="shrink-0">
                    <img className="w-5 block" src={likeImage} alt="Like" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                    {likeCount}
                </div>
            </div>
            <div style={{cursor: 'pointer'}} className="flex gap-1" onClick={handleUnliked}>
                <div className="shrink-0">
                    <img className="w-5 block" src={unlikeImage} alt="Unlike" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                    {unlikeCount}
                </div>
            </div>
        </div>
    );
}

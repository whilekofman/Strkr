import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLike, getLikes, newLike } from "../../store/likes";
import { getSession } from "../../store/session";

const Like = ( { activity, activityLikes, userLikesActivity } ) => {
    const currentUser = useSelector(getSession)
    const [likesActivity, setLikesActivity] = useState(userLikesActivity)
    const [likeStyle, setLikeStyle] = useState(false)


    const dispatch = useDispatch()
    // const stateLikes = useSelector(getLikes)



    const usersLike = activityLikes.filter(like => like.likerId === currentUser.id)

    console.log(usersLike.length, activity.id)

        
    const thumbCss = !usersLike.length ? "material-symbols-outlined thumbs-up thumbs-not-liked" : "material-symbols-outlined thumbs-up thumbs-liked thumbs-liked-color"
    // console.log(likeStyle, userLikesActivity, thumbCss, activity.id)


    const toggleLike = e => {
        e.preventDefault()
        // console.log('Click', usersLike[0].id)
        
        if (userLikesActivity) {
            const likeId = 
            dispatch(deleteLike(usersLike[0].id))
            // userLikesActivity = false
        } else {
            const like = {
                likerId: currentUser.id,
                likeableType: "Activity",
                likeableId: activity.id
            
            }
            setLikesActivity(userLikesActivity)
            // userLikesActivity = true
            dispatch(newLike(like, like.likeableType, like.likeableId))
        }
        setLikeStyle((like) => !like)
        console.log(likeStyle)



    }
    
    return ( 
        <>
        <button onClick={toggleLike}>
            <div className={thumbCss}>thumb_up</div>
        </button>
        </>
     );
}
 
export default Like;

// "material-symbols-outlined thumbs-up thumbs-not-liked"
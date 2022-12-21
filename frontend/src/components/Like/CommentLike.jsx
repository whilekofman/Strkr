import { useSelector } from "react-redux"
import { getLikes } from "../../store/likes"
import { getSession } from "../../store/session"

const CommentLike = ( { commentId } ) => {

    const currentUser = useSelector(getSession)
    const likes = useSelector(getLikes)
    
    const likesFiltered = likes.filter(like => 
        like.likeableType === "Comment" && like.likeableId === commentId)

    // console.log(likesFiltered)
    let likeToggle = false
    const heartClass = likeToggle ? "material-symbols-outlined not-liked" :  "comment-liked-color material-symbols-outlined liked"

    // const heartClass = ["material-symbols-outlined not-liked", "comment-liked-color material-symbols-outlined liked"]

    const handleCommentLike = e => {
        e.preventDefault()
        likeToggle = !likeToggle

        // console.log(heartClass[0])
        // const swapHeartClass = heartClass.shift()
        // heartClass.push(swapHeartClass)
        // console.log(heartClass[0])

    }

    return ( 
        <div onClick={handleCommentLike} className={heartClass}>favorite</div>
     );
}
 
export default CommentLike;
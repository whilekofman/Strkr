import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteComment, fetchComments } from "../../store/comments";
import { getSession } from "../../store/session";
import CommentLike  from "../Like/CommentLike";

const CommentIndexItem = ( { comment, athlete } ) => {
    const dayjs = require('dayjs')
    const relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)
    const dispatch = useDispatch()
    const currentUser = useSelector(getSession)
    const [deleted, setDeleted] = useState(false)
    const {
        id,
        fname,
        lname,
        authorProfilePicture,
        body,
        createdAt,
        activityId,
        authorId
        
    } = comment
    const TimeSinceComment = dayjs().to(dayjs(createdAt))
    // const year22 = (2002, 22, 2)
    // const date = new Date(createdAt)
    // // console.log(((new Date() - date) / 1000) / 60, 'minutes ago')
    // // const timeAgo = ((new Date() - date) / 1000) / 60
    // const commentTime = new Date(createdAt)
    // console.log(createdAt)
    // console.log(typeof new Date(createdAt))

    const handleDeleteComment = e => {
        e.preventDefault()
        dispatch(deleteComment(id))   
    }
    const [userAvitar, setUserAvitar] = useState(authorProfilePicture ? authorProfilePicture : "https://aa-cadence-dev.s3.amazonaws.com/adyson.jpeg")

    return ( 
        <div className="comment-container">
            <div className="comment-card">
                
                <div className="commenter-photo-container">
                    <img src={userAvitar} alt="commenter-photo" className="commenter-photo"/>
                </div>
                <div className="commenter-name-comment-index">
                    <div className="commenter-name">
                        {`${fname} ${lname} `}
                    </div>
                    <div className="comment-body">
                        {body}  <br />
                        {TimeSinceComment}
                        {/* {createdAt} */}
                        {/* <TimeSinceComment createdAt<br /={createdAt} /> */}
                        {/* <ReactTimeAgo date={createdAt} /> */}
                        {/* {new Date() - createdAt}
                         */}
                         {/* <TimeAgoComment  /> */}

                    </div>
                    <CommentLike commentId={id}/>


                </div>
                <div className="delete-like-container">
                    { (athlete === currentUser.id || currentUser.id === authorId )&&
                        <div onClick={handleDeleteComment} className="delete-comment-link" to="">Delete</div>
                    }
                </div>
                
            </div>
        </div>
     );
}
 
export default CommentIndexItem;
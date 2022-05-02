import Comment from "./Comment"

function CommentsCard({comments}){
    // console.log(comments)
return (
    <div>
        <h2>{comments.length} Comments</h2>
        <div> { comments=  comments.map(
            comment => (<Comment key={comment.id} comment={comment}/> )
            )}
            </div>
    </div>
)
}

export default CommentsCard;
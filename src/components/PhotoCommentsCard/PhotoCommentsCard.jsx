export default function PhotoCommentsCard({photoComments}){
  return(
    <div>
        {photoComments && photoComments.map((photoComment) => {
          return (
              <div className="photoDetail__comment" key={photoComment.id}>
                <div className="photoDetail__comment--name">
                  {photoComment.name}
                </div>
                <div className="photoDetail__comment--text">
                  {photoComment.comment}
                </div>
                <div className="photoDetail__comment--time">
                  {photoComments.timestamp}
                </div>
              </div>
          );
        })}
      </div>
  )
}
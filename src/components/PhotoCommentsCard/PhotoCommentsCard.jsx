import "./PhotoCommentsCard.scss";
export default function PhotoCommentsCard({ photoComments }) {
  const reversePhotoComments = [...photoComments].reverse();
  return (
    <div className="photoDetail__comment--container">
      <h2 className="photoDetail__comment--title">
        {photoComments.length}
        {photoComments.length > 1 ? " Comments" : " Comment"}
      </h2>
      {photoComments &&
        reversePhotoComments.map((photoComment) => {
          return (
            <div className="photoDetail__comment" key={photoComment.id}>
              <hr />
              <div className="photoDetail__comment--container2">
                <div className="photoDetail__comment--name">
                  {photoComment.name}
                </div>
                <div className="photoDetail__comment--time">
                  {new Date(photoComment.timestamp).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    }
                  )}
                </div>
              </div>
              <div className="photoDetail__comment--text">
                {photoComment.comment}
              </div>
            </div>
          );
        })}
    </div>
  );
}

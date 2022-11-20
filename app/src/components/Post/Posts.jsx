import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GoComment } from "react-icons/go";
import millify from "millify";
import ReadMoreReact from "read-more-react";
import { connect } from "react-redux";
import { Like } from "../../store/action/postAction";
import { useEffect, useState } from "react";
import MenuPost from "./Menu.Post";
import CommentPost from "./Comment.post";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const Posts = ({ data, Like, auth }) => {
  const userLike = data.like
    .map((i) => i.user._id === auth.data._id)
    .some((i) => i === true);
  const time = Number(new Date(data.createdAt).getTime()) - Number(Date.now());
  const ago = timeAgo.format(new Date() - time, "mini");
  const [like, setLike] = useState(userLike);
  const [likeCount, setLikeCount] = useState(data.like.length);
  const [commentCount, setCommentCount] = useState(data.comment.length);
  const [showCmt, setShowCmt] = useState(false);
  const [comment, setComment] = useState([]);
  const [cut, setCut] = useState(4);

  useEffect(() => {
    setComment(data.comment.slice(0, cut));
  }, [cut]);

  const handleLike = async () => {
    setLike((pre) => !pre);
    if (like) {
      console.log(data._id);
      Like(-1, data._id);
      setLikeCount((pre) => pre - 1);
    } else {
      Like(1, data._id);
      setLikeCount((pre) => pre + 1);
    }
  };

  const handleComment = () => {
    setShowCmt((pre) => !pre);
    setCut(4);
  };

  return (
    <div className="card !pb-0 !shadow w-full lg:!w-[60%] mx-auto !border mb-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={data.user.avatar} className="w-[35px]" alt="user" />
          <div className="flex flex-col">
            <Link to={`/profile/${data.user._id}`}>
              <p>{data.user.username}</p>
            </Link>
            <p className="text-sm text-gray-400">{ago} ago</p>
          </div>
        </div>
      </div>

      <div className="mt-5 ">
        {data.text.length < 30 ? (
          <h2 className={"text-4xl"}>{data.text}</h2>
        ) : (
          <ReadMoreReact
            min={300}
            ideal={400}
            max={500}
            text={data.text}
            readMoreText={"see more..."}
          />
        )}
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 mt-10">
          <p>Like</p>
          <h4>{millify(likeCount)}</h4>
        </div>
        <div className="flex items-center space-x-2 mt-10">
          <p>Comments</p>
          <h4>{millify(commentCount)}</h4>
        </div>
      </div>

      <div
        className={
          showCmt
            ? "border-t border-b flex space-x-10  py-2"
            : "border-t flex space-x-10  py-2"
        }
      >
        <button
          onClick={handleLike}
          className="flex justify-center space-x-2 text-xl w-[30%] hover:bg-gray-200 items-center btn "
        >
          {like ? <AiFillLike className="text-blue-500" /> : <AiOutlineLike />}
          <p>Like</p>
        </button>
        <button
          onClick={handleComment}
          className="flex justify-center space-x-2 text-xl w-[30%] hover:bg-gray-200 items-center btn"
        >
          <GoComment className="mt-1" /> <p>Comment</p>
        </button>
        {data.user._id === auth.data._id && <MenuPost id={data._id} />}
      </div>

      {showCmt && (
        <CommentPost
          cmt={data}
          user={auth}
          setComment={setComment}
          comment={comment}
          setCommentCount={setCommentCount}
          cut={cut}
          setCut={setCut}
        />
      )}
    </div>
  );
};

const MapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(MapStateToProps, { Like })(Posts);

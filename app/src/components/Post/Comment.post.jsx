import { useState } from "react";
import { connect } from "react-redux";
import { AddComment } from "../../store/action/postAction";
import PlaceholderLoading from "react-placeholder-loading";
import CommentItemPost from "./CommentItem.post";

const CommentPost = ({
  user: { data },
  cmt,
  AddComment,
  setCommentCount,
  setComment,
  comment,
  cut,
  setCut,
}) => {
  const [text, setText] = useState({
    cmt: "",
    simple: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setText((pre) => ({ cmt: "", simple: pre.simple }));
    if (text !== "") {
      setLoading(true);
      const res = await AddComment(cmt._id, text.simple);
      setLoading(false);
      setCommentCount((pre) => pre + 1);
      setComment((pre) => [res.result, ...pre]);
    }
  };

  const handleDeleteComment = async (e) => {
    setComment((pre) => pre.filter((i) => i._id !== e));
    setCommentCount((pre) => pre - 1);
  };

  const handleLoadMore = async (e) => {
    setCut((pre) => pre + 4);
  };

  console.log(cmt.comment.length > cut);

  return (
    <div className="mt-7">
      <div className="flex space-x-2">
        <img className="w-[35px]" src={data.avatar} alt="user.png" />
        <form onSubmit={handleSubmit} className="w-full">
          <input
            autoComplete={"off"}
            type="text"
            value={text.cmt}
            onChange={(e) =>
              setText((prevState) => ({
                simple: e.target.value,
                cmt: e.target.value,
              }))
            }
            name="cmt"
            id="cmt"
            className="form !rounded-3xl bg-gray-100 !border-0 w-full"
            autoFocus={true}
            placeholder={"Write a comment..."}
          />
        </form>
      </div>
      <div className="my-2 space-y-8 pb-8">
        {loading && (
          <div className="flex items-center space-x-1">
            <PlaceholderLoading shape="circle" width={30} height={30} />
            <PlaceholderLoading shape="rect" width={145} height={45} />
          </div>
        )}
        {comment.map((i) => (
          <CommentItemPost i={i} key={i._id} Delete={handleDeleteComment} />
        ))}
        {cmt.comment.length > cut && (
          <button onClick={handleLoadMore}>View more comment...</button>
        )}
      </div>
    </div>
  );
};

export default connect(null, { AddComment })(CommentPost);

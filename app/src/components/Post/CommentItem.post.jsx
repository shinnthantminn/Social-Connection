import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { connect } from "react-redux";
import { BiTrash } from "react-icons/bi";
import { DropComment } from "../../store/action/postAction";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");
const CommentItemPost = ({ i, auth, DropComment, Delete }) => {
  const time = Number(new Date(i.createdAt).getTime()) - Number(Date.now());
  const ago = timeAgo.format(new Date() - time, "mini");

  const handleDelete = async () => {
    if (confirm("Are you sure to delete comment")) {
      Delete(i._id);
      await DropComment(i.post, i._id);
    }
  };

  return (
    <div
      key={i._id}
      className="flex w-[80%] break-words paraText relative items-center mb-5 space-x-1"
    >
      <img src={i.user.avatar} className={"w-[30px]"} alt="" />
      <div className="bg-gray-200 rounded-lg px-3 py-1">
        <p className="font-bold">{i.user.username}</p>
        <p>{i.text}</p>
      </div>
      {auth.data._id === i.user._id && (
        <button onClick={handleDelete}>
          <BiTrash />
        </button>
      )}
      <div className="absolute -bottom-5 left-10 text-[5px] text-gray-400">
        {ago}
      </div>
    </div>
  );
};

const MapToStateToProp = (state) => ({
  auth: state.auth,
});

export default connect(MapToStateToProp, { DropComment })(CommentItemPost);

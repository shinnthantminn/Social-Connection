import "suneditor/dist/css/suneditor.min.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { AddPost, AllPostGet } from "../../store/action/postAction";
import Loading from "../../access/animation/Loading/Loading";

const EditorPost = ({ AddPost, auth, post, AllPostGet, setPage }) => {
  const [value, setValue] = useState("");
  const [style, setStyle] = useState({
    height: "200px",
    fontSize: "25px",
  });

  const onSubmit = async () => {
    const res = await AddPost(value);
    setPage(1);
    if (res.con) {
      AllPostGet(1);
    }
  };

  useEffect(() => {
    if (value.length > 80) {
      if (value.length > 120) {
        return setStyle({
          height: "400px",
          fontSize: "16px",
        });
      }
      return setStyle({
        height: "200px",
        fontSize: "16px",
      });
    } else if (value.length === 0) {
      setStyle({
        height: "200px",
        fontSize: "25px",
      });
    }
  }, [value]);

  return (
    <div className="card !py-0 !px-0">
      {post.loading ? (
        <>
          <Loading />
        </>
      ) : (
        <div className="w-full bg-white rounded-lg">
          <div className="border-b flex justify-center items-center relative">
            <h1 className="text-2xl text-center py-5">Create Post</h1>
          </div>
          <div className="flex items-center space-x-2 my-5 mx-2">
            <img src={auth.data?.avatar} className="w-[30px]" alt="" />
            <p>{auth.data.username}</p>
          </div>

          <textarea
            placeholder={"What's on your mind"}
            style={style}
            className={"form !px-3 !border-0 post"}
            autoFocus={true}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="flex justify-center">
            <button
              onClick={onSubmit}
              disabled={value.length === 0}
              className="px-2 py-2 !w-[95%] disabled:bg-blue-200 text-xl my-3 bg-blue-500 !rounded-[2px] text-white"
            >
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.post,
});

export default connect(mapStateToProps, { AddPost, AllPostGet })(EditorPost);

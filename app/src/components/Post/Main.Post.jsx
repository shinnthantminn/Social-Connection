import { useEffect, useState } from "react";
import { AllPostGet, InfinityScroll } from "../../store/action/postAction";
import { connect } from "react-redux";
import Posts from "./Posts";
import Loading from "../../access/animation/Loading/Loading";
import EditorPost from "./Editor.Post";

const MainPost = ({ post, AllPostGet, auth, InfinityScroll }) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (page === 1) {
        const res = await AllPostGet(page);
      } else {
        setLoading(true);
        const res = await InfinityScroll(page);
        setLoading(false);
      }
    })();
  }, [page]);

  const loadMore = () => {
    setPage((pre) => pre + 1);
  };

  return (
    <>
      {post.loading ? (
        <div className="mt-5">
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-11 pt-7 ">
          <div className=" col-span-11 lg:col-span-7 order-2 lg:order-1">
            <div className="px-2 space-y-5 lg:overflow-scroll min-h-[100vh] lg:h-[90vh] pb-10">
              {post.posts?.map((i) => (
                <Posts key={i._id} data={i} />
              ))}
              {loading ? (
                <h1 className="text-center">Loading</h1>
              ) : (
                <>
                  {post.posts?.length < post.count && (
                    <div className="flex justify-center">
                      <button
                        onClick={loadMore}
                        className="btn text-white bg-blue-500"
                      >
                        Load More...
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="col-span-11 lg:col-span-4 order-1 mb-5 lg:mb-0 sm:order-2">
            <EditorPost setPage={setPage} />
          </div>
        </div>
      )}
    </>
  );
};

const MapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth,
});

export default connect(MapStateToProps, { AllPostGet, InfinityScroll })(
  MainPost
);

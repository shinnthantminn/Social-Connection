import { CgTrash } from "react-icons/cg";
import { DeletePost, AllPostGet } from "../../store/action/postAction";
import { connect } from "react-redux";

const MenuPost = ({ id, DeletePost, AllPostGet }) => {
  const handleDelete = async () => {
    const res = await DeletePost(id);
    if (res.con) {
      AllPostGet(1);
    }
  };

  return (
    <div
      className={
        "flex justify-center space-x-2 text-xl w-[30%] btn hover:bg-gray-200 items-center btn cursor-pointer"
      }
      onClick={handleDelete}
    >
      <button>
        <CgTrash />
      </button>
    </div>
  );
};

export default connect(null, { DeletePost, AllPostGet })(MenuPost);

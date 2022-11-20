import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getAll } from "../store/action/profileAction";
import { useEffect, useState } from "react";
import Loading from "../access/animation/Loading/Loading";
import { PaginationProfile, Profiles } from "../components";

const DeveloperPage = ({
  profiles: { isLoading, profiles, count },
  getAll,
}) => {
  const [pagination, setPagination] = useState([]);
  const [param, setParams] = useSearchParams();

  useEffect(() => {
    getAll(param.get("page") ? param.get("page") : 1);
    const paginate = Math.ceil(count / 4);
    setPagination([...Array(paginate).keys()]);
  }, [param.get("page"), count]);

  return (
    <div className="w-full lg:w-[80%] xl:w-[70%] mt-6 mx-auto ">
      <div className="min-h-[75vh] sm:min-h-[80vh]">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <h1 className="text-lg sm:text-2xl font-semibold headerText mb-5 text-teal-400">
              Browse and Connect with friends
            </h1>
            {profiles && (
              <>
                {profiles.map((i) => (
                  <Profiles data={i} key={i._id} />
                ))}
              </>
            )}
            <PaginationProfile
              count={count}
              setParams={setParams}
              param={param}
              pagination={pagination}
            />
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profiles: state.profiles,
});

export default connect(mapStateToProps, { getAll })(DeveloperPage);

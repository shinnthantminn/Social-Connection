import React, { useState } from "react";

const PaginationProfile = ({ count, setParams, param, pagination }) => {
  return (
    <div className="flex text-blue-500 justify-center text-xl pb-10">
      {Math.ceil(count / 4) > 1 && (
        <>
          <button
            onClick={() => {
              const value = +param.get("page");
              if (value !== 0) {
                setParams({ page: value > 1 ? value - 1 : value });
              }
            }}
            className="btn duration-300 hover:bg-gray-300 cursor-pointer !rounded-l !rounded-r-none border"
          >
            Previous
          </button>
          {pagination.map((i, inx) => (
            <button
              key={inx}
              onClick={(e) => {
                const value = +e.target.innerText;
                setParams({ page: value });
              }}
              className="btn duration-300 hover:bg-gray-300 cursor-pointer !rounded-none border"
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => {
              const value = +param.get("page");
              const limit = Math.ceil(count / 4);
              if (value !== 0) {
                setParams({ page: value < limit ? value + 1 : value });
              } else {
                setParams({
                  page: 2,
                });
              }
            }}
            className="btn duration-300 hover:bg-gray-300 cursor-pointer border !rounded-r !rounded-l-none"
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default PaginationProfile;

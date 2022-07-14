const UseDropDown = () => {
  const fadeinOut = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const dropDown = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        mass: 0.8,
      },
    },
  };

  return { fadeinOut, dropDown };
};

export default UseDropDown;

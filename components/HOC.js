import React from "react";

const hoc = (WrappedComp, props) => {
  console.log(WrappedComp, props);
  const NewComp = () => {
    const [loggedIn, setLoggedIn] = React.useState(false);

    React.useEffect(() => {
      setLoggedIn(true);
    }, []);

    return loggedIn ? <WrappedComp {...props} /> : <p>Not logged In</p>;
  };

  return NewComp;
};

export default hoc;

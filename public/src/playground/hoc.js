import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>This info is {props.info}</p>
  </div>
);

//Higher Order Components
const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>THis is private info. Please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(
  <AdminInfo isAdmin={false} info="information from react"></AdminInfo>,
  document.getElementById("app")
);

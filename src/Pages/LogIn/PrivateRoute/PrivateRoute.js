import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../../../Component/State/AuthContext";

function PrivateRoute({ children, ...rest }) {
    const [auth,setAuth] = useContext(AuthContext)
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute
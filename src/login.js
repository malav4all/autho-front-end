import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Login = () => {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  return (
    <>
      {isAuthenticated && <>{user.email}</>}
      {isAuthenticated ? (
        <>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
    </>
  );
};

export default Login;

import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Profile from "./profile";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-boost";
import { useAuth0 } from "@auth0/auth0-react";
const App = () => {
  const [accessToken, setAccessToken] = useState();
  const { getAccessTokenSilently, loginWithRedirect } = useAuth0();
  const getAccessToken = useCallback(async () => {
    try {
      const token = await getAccessTokenSilently();
      setAccessToken(token);
    } catch (err) {
      loginWithRedirect();
    }
  }, [getAccessTokenSilently, loginWithRedirect]);

  useEffect(() => {
    getAccessToken();
  }, [getAccessToken]);

  return (
    <ApolloProvider
      client={
        new ApolloClient({
          uri: "http://localhost:4000/graphql",
          request: async (operation) => {
            if (accessToken) {
              operation.setContext({
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              });
            }
          },
        })
      }
    >
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/dashboard" element={<Profile />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;

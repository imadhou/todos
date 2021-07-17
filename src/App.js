import React, {useState} from "react";
import { ApolloProvider} from "@apollo/client";
import client from "./graphql/client";
import HomePage from "./components/pages/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import DetailsPage from "./components/pages/DetailsPage";


export default function App() {
  const [todo, setTodo] = useState({});
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/:id"  component={DetailsPage} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}








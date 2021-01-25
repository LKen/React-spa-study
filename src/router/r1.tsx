/* eslint-disable no-unused-vars */

import React from 'react'
import {  RouteComponentProps } from 'react-router';
import {
  BrowserRouter as Router,
  HashRouter,

  Switch,
  Route,

  NavLink,
  Redirect,
  Link,

  useRouteMatch,
  useParams
} from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics({ match, location, ...arf }: RouteComponentProps) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch location={location}>
        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route path={match.path} render={() => (<h3>Please select a topic.</h3>)} />
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams() as any;
  return <h3>Requested topic ID: {topicId}</h3>;
}

function Routes() {
  return <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/topics" component={Topics}>
          {/* <Topics /> */}
        </Route>
        <Route path="/">
          <Home />
        </Route>

        {/* ? 确切匹配 */}
        {/* <Route exact path="/">
          <Home />
        </Route> */}
      </Switch>
    </div>
  </Router>
}
export default Routes
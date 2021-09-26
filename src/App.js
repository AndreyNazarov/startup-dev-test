import './App.css';
import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loader from './Loader/Loader';

const HomeView = lazy(() => import('./views/HomeView'));
const CommentsView = lazy(() => import('./views/CommentsPage'));
const App = () => {
  return (
    <>
      {/* <Navigation /> */}
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/comments/:id">
            <CommentsView />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;

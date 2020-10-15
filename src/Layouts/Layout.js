import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// routes config
import routes from '../routes';

class Layout extends Component {
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  render() {
    return (
      <div className="app">
        <div className="app-body">
          <main className="main">
              <Suspense>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/" />
                </Switch>
              </Suspense>
          </main>
        </div>
      </div>
    );
  }
}

export default Layout;

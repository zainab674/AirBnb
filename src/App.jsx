import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import {
  AuthorizeWrapper,
  PrivateRoutes,
  PublicRoutes,
  UnAuthorizedWrapper,
} from './routes';
import { CardDetail, HomePage, HostLanding } from './pages';

function App() {
  // let token = localStorage.getItem('token');
  let token;
  function renderRoutes() {
    if (token) {
      return (
        <Routes>
          <Route path='*' element={<Navigate to='/' />} />

          {PrivateRoutes.map(({ path, element, key }) => (
            <Route key={key} path={path} element={<AuthorizeWrapper />}>
              <Route key={key + 1} path={path} element={element} />
            </Route>
          ))}
        </Routes>
      );
    } else {
      return (
        <Routes>
          <Route path='*' element={<Navigate to='/' />} />
          {PublicRoutes.map(({ path, element, key }) => (
            <Route
              key={key}

              path={path}
              element={<UnAuthorizedWrapper />}
            >
              <Route key={key + 1} path={path} element={element} />
            </Route>
          ))}
        </Routes>
      );
    }
  }
  return <Router>{renderRoutes()}</Router>;



  ////////////////////////WORKING
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/card/:id' element={<CardDetail />} />
        <Route path='/host/landing' element={<HostLanding />} />
      </Routes>
    </Router>
  );


  function renderRoutes() {
    console.log('Token:', token);
    return (
      <Routes>
        {token ? (
          <>
            {console.log('Rendering Private Routes')}
            <Route path='*' element={<Navigate to='/' />} />
            {PrivateRoutes.map(({ path, element, key }) => (
              <Route key={key} path={path} element={element} />
            ))}
          </>
        ) : (
          <>
            {console.log('Rendering Public Routes')}
            <Route path='*' element={<Navigate to='/' />} />
            {PublicRoutes.map(({ path, element, key }) => (
              <Route key={key} path={path} element={element} />
            ))}
          </>
        )}
      </Routes>
    );
  }


  return <Router>{renderRoutes()}</Router>;

}

export default App;

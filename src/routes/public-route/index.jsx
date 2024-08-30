import { SignInPage } from '../../pages';
import SignupForm from '../../pages/auth/Signup';
import ForgotPasswordPage from '../../pages/auth/forgot';
import { HomePage } from '../../pages';
import { CardDetail } from '../../pages';
import { HostDetail } from '../../pages';
import { Payment } from '../../pages';
import { HostLanding } from '../../pages';

const authenticatedRoutes = [
  {
    key: 0,
    path: '/',
    element: HomePage,
  },
  {
    key: 1,
    path: '/card/:id',
    element: CardDetail,
  },
  {
    key: 2,
    path: '/host/:id',
    element: HostDetail,
  },
  {
    key: 3,
    path: '/payment/:id',
    element: Payment,
  },
  {
    key: 4,
    path: '/host/landing',
    element: HostLanding,
  },

];

function withNavigationWatcher(Component, path) {
  const WrappedComponent = function (props) {
    return <Component {...props} />;
  };
  return <WrappedComponent />;
}
export default authenticatedRoutes.map((route) => {
  return {
    ...route,
    element: withNavigationWatcher(route.element, route.path),
  };
});

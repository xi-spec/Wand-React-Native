import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export default function getTabBarVisible (route) {
  const routeName = getFocusedRouteNameFromRoute(route);

  switch (routeName) {
    case 'Detail':
      return false;
    case 'List':
      return false;
    case 'Checkout':
      return false;
    case 'Address':
      return false;
    case 'Payment':
      return false;
    case 'Payment successful':
      return false;
    case 'Shipping address':
      return false;
    case 'Order history"':
      return false;
    case 'Payment method':
      return false;
    case 'Order history':
      return false;
    case 'Login':
      return false;
    case 'Register':
      return false;

    default:
      return true;
  }
};

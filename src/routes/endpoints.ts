import Home from '../containers/home';
import Combustivel from '../containers/combustivel';
import { RouteProps } from 'react-router-dom';


const publicUrl = process.env.PUBLIC_URL;

interface EndPointsProps extends RouteProps {
  name?: string
}

export const endpoints: EndPointsProps[] = [
  { path: `${publicUrl}/`, component: Home, exact: true },
  { path: `${publicUrl}/home`, name: 'Home', component: Home, exact: true },
  { path: `${publicUrl}/combustivel`, name: 'Combustivel', component: Combustivel, exact: true }
];
import {
  useEffect,
  useState,
} from 'react';

import {
  Link,
  useLocation,
} from 'react-router-dom';

import {
  CART,
  HOME_ROUTE,
  LOGIN,
  OFFERS,
  PAYMENT,
  PRODUCTS,
  PROFILE,
  QUESTIONS,
  SIGNUP,
} from '../../../Constants/Routs';
import { text } from './text';

// interface IProps {
//   location: Location;
// }

const Breadcrumbs = () => {
  const [firstPage, setFirstPage] = useState("");
//   const [secondPage, setSecondPage] = useState("");

  const location = useLocation()

  useEffect(()=>{

    location.pathname == PRODUCTS && setFirstPage(text.product)
    location.pathname == OFFERS && setFirstPage(text.offers)
    location.pathname == QUESTIONS && setFirstPage(text.questions)
    location.pathname == SIGNUP && setFirstPage(text.signUp)
    location.pathname == LOGIN && setFirstPage(text.logIn)
    location.pathname == PROFILE && setFirstPage(text.profile)
    location.pathname == CART && setFirstPage(text.cart)
    location.pathname == PAYMENT && setFirstPage(text.payMent)


  },[])
  return (
    <div className='flex flex-row items-center gap-1.5 text-black/40'> 
      <Link to={HOME_ROUTE}>{text.home}</Link>
      <span>/</span>
      <Link  to={HOME_ROUTE}>{firstPage}</Link>
      <span>/</span>
      {/* <Link to={HOME_ROUTE}>{secondPage}</Link> */}
    </div>
  );
};

export default Breadcrumbs;

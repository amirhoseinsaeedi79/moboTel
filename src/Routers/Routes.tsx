import { lazy } from 'react';

import { useRoutes } from 'react-router-dom';

//route name
import {
  CART,
  EDIT_PROFILE,
  HISTORY,
  HOME_ROUTE,
  LOVE_PRODUCTS,
  OFFERS,
  PAYMENT,
  PRODUCTS,
  QUESTIONS,
  REGISTER,
  TICKETS,
  USER_PANEL,
} from '../Constants/Routs';

//pages
const MainPage = lazy(() => import("../Pages/index"));
const Home = lazy(() => import("../Pages/Home/index"));
const Products = lazy(() => import("../Pages/Products/index"));
const Offers = lazy(() => import("../Pages/Offers/index"));
const Questions = lazy(() => import("../Pages/Questions/index"));
const Register = lazy(() => import("../Pages/Register/index"));
const Cart = lazy(() => import("../Pages/Cart/index"));
const PayMent = lazy(() => import("../Pages/PayMent/index"));
const UserPanel = lazy(() => import("../Pages/UserPanel/index"));
const Profile = lazy(() => import("../Pages/UserPanel/Profile/index"));
const EditProfile = lazy(() => import("../Pages/UserPanel/EditProfile/index"));
const LoveProducts = lazy(() => import("../Pages/UserPanel/LoveProducts/index"));
const History = lazy(() => import("../Pages/UserPanel/History/index"));
const Tickets = lazy(() => import("../Pages/UserPanel/Tickets/index"));

export const Routes = () =>
  useRoutes([
    {
      path: HOME_ROUTE,
      element: <MainPage />,
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          path: PRODUCTS,
          element: <Products />,
        },
        {
          path: OFFERS,
          element: <Offers />,
        },
        {
          path: QUESTIONS,
          element: <Questions />,
        },
        {
          path: REGISTER,
          element: <Register />,
        },
        {
          path: CART,
          element: <Cart />,
        },
        {
          path: PAYMENT,
          element: <PayMent />,
        },
        {
          path: USER_PANEL,
          element: <UserPanel />,
          children: [
            {
              element: <Profile />,
              index: true,
            },
            {
              path:EDIT_PROFILE,
              element: <EditProfile />
            },
            {
              path:LOVE_PRODUCTS,
              element: <LoveProducts />
            },
            {
              path:HISTORY,
              element: <History />
            },
            {
              path:TICKETS,
              element: <Tickets />
            },
          ],
        },
      ],
    },
  ]);

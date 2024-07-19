import { Outlet } from 'react-router-dom';

import Breadcrumbs from '../Components/Elements/BreadCrumbs';

const MainPage = () => {
  return (
    <div>
      <Breadcrumbs  />
      <div className='text-4xl text-blue-500'>navbar</div>
      <Outlet />
      <div className='text-4xl text-red-500'>footer</div>
    </div>
  )
}

export default MainPage;

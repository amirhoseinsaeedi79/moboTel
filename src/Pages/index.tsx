import { Outlet } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <div className='text-4xl text-blue-500'>navbar</div>
      <Outlet />
      <div className='text-4xl text-red-500'>footer</div>
    </div>
  )
}

export default MainPage;

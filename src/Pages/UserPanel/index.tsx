import { Outlet } from 'react-router-dom';

const UserPanel = () => {
  return (
    <div>
      <span>
      <Outlet />
      </span>
    </div>
  )
}

export default UserPanel

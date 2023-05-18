import { Navigate, Outlet } from 'umi'
 
export default () => {
  const { isLogin } = { isLogin: false };

  if (isLogin) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};
import { Navigate, Outlet } from 'umi';
import { useQuery } from '@tanstack/react-query';

export default () => {
  const { isLogin } = { isLogin: false };
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ['repoData'],
  //   queryFn: () =>
  //     fetch('/api/login').then(
  //       (res) => res.json(),
  //     ),
  // })
  // console.log(isLoading, error, data);
  

  // if (isLoading) return 'Loading...';

  if (isLogin) return <Outlet />;

  return <Navigate to="/login" />;
};
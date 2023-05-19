import type { RuntimeConfig } from '@umijs/max';

import { matchRoutes } from 'umi';
import { history, Link } from '@umijs/max';

const loginPath = '/user/login';
 
export function onRouteChange({ clientRoutes, location }: any) {
  const route = matchRoutes(clientRoutes, location.pathname)?.pop()?.route as any;
  console.log('route', route);
  if (route) {
    document.title = route?.title || '';
  }
}

export function patchRoutes({ routes, routeComponents }: any) {
  console.log('patchRoutes', routes, routeComponents);
}

// const API_SERVER = '/path/to/api/server';

// export const reactQuery = {
//   devtool: { 
//     initialIsOpen: true,
//   },
//   queryClient: {
// 	  defaultOptions: {
// 	    queries: {
// 	      queryFn: async ({ queryKey }: any) => {
// 	        const res = await fetch(`${API_SERVER}/${queryKey.join('/')}`);
// 	        if (res.status !== 200) {
// 	          throw new Error(res.statusText);
// 	        }
// 	        return res.json();
// 	      }
// 	    }
// 	  }
//   },
// };

export const layout: RuntimeConfig = ({ initialState, setInitialState }) => {
  return {
    // onPageChange: () => {
    //   const { location } = history;
    //   // 如果没有登录，重定向到 login
    //   if (!initialState?.currentUser && location.pathname !== loginPath) {
    //     history.push(loginPath);
    //   }
    // },
    // childrenRender: (children: any) => {
    //   return (
    //     <div className="demo">{children}</div>
    //   )
    // },
    ...initialState?.settings
  }
}

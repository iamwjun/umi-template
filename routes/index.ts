export default [
  {
    path: '/login',
    layout: false,
    component: 'login'
  },
  {
    path: '/',
    layout: true,
    wrappers: [
      '@/wrappers/auth',
    ],
    routes: [
      { path: "/", component: "@/pages/index", title: "首页" },
      { path: "/first", component: "@/pages/first", title: "页面1" },
      { path: "/second", component: "@/pages/second", title: "页面2" },
      { path: "/three", component: "@/pages/three", title: "页面3" },
    ],
  },
];
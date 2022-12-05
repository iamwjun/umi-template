import { defineConfig } from 'umi';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';

export default defineConfig({
  chainWebpack(memo) {
    memo.plugin('case-sensitive-paths').use(CaseSensitivePathsPlugin);
  },
  npmClient: "pnpm",
  routes: [
    {
      path: '/login',
      layout: false,
      component: 'login'
    },
    {
      path: '/',
      layout: false,
      wrappers: [
        '@/wrappers/auth',
      ],
      component: '@/layouts/index',
      routes: [
        { path: "/", component: "@/pages/index", title: "首页" },
        { path: "/first", component: "@/pages/first", title: "页面1" },
        { path: "/second", component: "@/pages/second", title: "页面2" },
        { path: "/three", component: "@/pages/three", title: "页面3" },
      ],
    },
  ],
});

import { defineConfig } from 'umi';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';

import routes from './routes';

export default defineConfig({
  chainWebpack(memo) {
    memo.plugin('case-sensitive-paths').use(CaseSensitivePathsPlugin);
  },
  codeSplitting: {
    jsStrategy: 'granularChunks'
  },
  npmClient: "pnpm",
  history: {
    type: "hash"
  },
  routes
});

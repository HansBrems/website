/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: 'app',
  browserBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildDirectory: 'netlify/functions/server/build',
  devServerPort: 8002,
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  mdx: async filename => {
    const [rehypeHighlight] = await Promise.all([
      import('rehype-highlight').then(mod => mod.default),
    ]);
    return {
      rehypePlugins: [rehypeHighlight],
    };
  },
  tailwind: true,
};

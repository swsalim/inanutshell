// Save crawling budget by not fetching SSG meta files
const NEXT_SSG_FILES = [
  '/*.json$',
  '/*_buildManifest.js$',
  '/*_middlewareManifest.js$',
  '/*_ssgManifest.js$',
  '/*.js$',
];

const exclude = [
  '/dashboard*',
  '/404',
  '/api*',
  '/login',
  '/server-sitemap.xml',
];

const config = {
  siteUrl: 'https://www.yuurrific.com/',
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: true,
  sitemapSize: 7000,
  exclude,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', disallow: NEXT_SSG_FILES }],
  },
  transform: async (config, path) => {
    // check if the URL includes the `/category/` path
    if (path.includes('/category/')) {
      // Split the URL by `/category/` to get the parts before and after
      const parts = path.split('/category/');
      // Further split the second part by the first occurrence of `/` to separate the category from the slug
      const [category, ...slugParts] = parts[1].split('/');
      const [, slug] = slugParts[0].split('%2F');
      // Reconstruct the URL without the `category` prefix and without duplicated `slug`
      const newPath = `/${category}/${slug}`;
      // Return the modified URL object
      return {
        loc: newPath, // modified URL
        lastmod: new Date().toISOString(),
        changefreq: config.changefreq,
        priority: config.priority,
      };
    }
    // For URLs that don't need modification, return them as is
    return {
      loc: path,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      changefreq: config.changefreq,
      priority: config.priority,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};

module.exports = config;

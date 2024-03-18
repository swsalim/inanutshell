export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase() // Convert to lowercase
    .trim() // Trim whitespace from both ends
    .replace(/[^a-z0-9 -]/g, '') // Remove all non-word chars
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/-+/g, '-'); // Replace multiple - with single -
}

// NOTE: Only works when we set unoptimized: false in next.config.js
export function imageKitLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src[0] === '/') src = src.slice(1);
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  const paramsString = params.join(',');
  let urlEndpoint = `https://ik.imagekit.io/${process.env.NEXT_PUBLIC_IMAGEKIT_ID}`;
  if (urlEndpoint[urlEndpoint.length - 1] === '/') {
    urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  }

  return `${urlEndpoint}/${src}?tr=${paramsString}`;
}

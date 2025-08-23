/**
 * Utility function to get the correct asset path considering the basePath
 */
export function getAssetPath(path: string): string {
  const basePath =
    process.env.NODE_ENV === 'production' ? '/rachna-parakh' : '';
  return `${basePath}${path}`;
}

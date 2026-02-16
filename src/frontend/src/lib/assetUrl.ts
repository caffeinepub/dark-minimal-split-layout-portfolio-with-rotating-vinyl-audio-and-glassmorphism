/**
 * Helper function to build asset URLs that work with subpath hosting (e.g., GitHub Pages).
 * Uses the Vite BASE_URL environment variable to ensure assets load correctly
 * regardless of deployment path.
 */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Ensure base ends with slash
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
}

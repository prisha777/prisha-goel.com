export const basePath = import.meta.env.BASE_URL;
export const siteHref = (path = '') => `${basePath}${path.replace(/^\//, '')}`;
export const navigation = [
  { label: 'Home', path: '' },
  { label: 'About', path: 'about/' },
  { label: 'Research', path: 'research/' },
  { label: 'Projects', path: 'projects/' },
  { label: 'Experience', path: 'experience/' },
  { label: 'Photography', path: 'photography/' },
  { label: 'Writing & Media', path: 'press/' },
];

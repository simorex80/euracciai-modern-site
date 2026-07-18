(function normalizeDirectoryPath() {
  const { pathname, search, hash } = window.location;
  const lastSegment = pathname.split('/').pop();

  if (!pathname.endsWith('/') && lastSegment && !lastSegment.includes('.')) {
    window.location.replace(`${pathname}/${search}${hash}`);
  }
})();

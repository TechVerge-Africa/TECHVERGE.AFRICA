'use client';

import { useEffect, useState } from 'react';

/**
 * The current year, read in the visitor's browser so it rolls over on 1 January
 * without a rebuild. `serverYear` is the year the page was rendered (the build year
 * for static pages); the browser's year replaces it as soon as the page loads.
 */
export default function CurrentYear({ serverYear }: { serverYear: number }) {
  const [year, setYear] = useState(serverYear);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return <>{year}</>;
}

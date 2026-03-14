'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export function ActiveServiceHighlight() {
  const searchParams = useSearchParams();
  const activeType = searchParams.get('type');

  useEffect(() => {
    if (activeType) {
      document.getElementById(activeType)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [activeType]);

  return null;
}
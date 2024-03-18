'use client';

import { useEffect } from 'react';

// TOOD: remove hacky way to scroll top for nexted alyout
export function ScrollUp() {
  useEffect(() => window.document.scrollingElement?.scrollTo(0, -16), []);

  return null;
}

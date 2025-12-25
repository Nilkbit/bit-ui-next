'use client';

import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider as EmotionCacheProvider } from '@emotion/react';
import { useState } from 'react';

const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};

export function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  const [cache] = useState(() => {
    const cache = createEmotionCache();
    cache.compat = true;
    return cache;
  });

  useServerInsertedHTML(() => {
    const styleTags = cache.sheet.tags.map(tag => tag.outerHTML);
    cache.sheet.flush();
    return <>{styleTags}</>;
  });

  return (
    <EmotionCacheProvider value={cache}>
      {children}
    </EmotionCacheProvider>
  );
}
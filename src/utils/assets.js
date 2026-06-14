import { useEffect, useState } from 'react';

const assetStatusCache = new Map();

async function checkAsset(src, expectedTypePrefix) {
  if (!src) return false;

  const response = await fetch(src, { method: 'HEAD' });
  if (!response.ok) return false;

  const contentType = response.headers.get('content-type') || '';
  return contentType.toLowerCase().startsWith(expectedTypePrefix);
}

export function useAssetAvailable(src, expectedTypePrefix) {
  const cacheKey = `${expectedTypePrefix}:${src}`;
  const [isAvailable, setIsAvailable] = useState(() => assetStatusCache.get(cacheKey) ?? null);

  useEffect(() => {
    let isMounted = true;

    if (!src) {
      setIsAvailable(false);
      return () => {
        isMounted = false;
      };
    }

    const cached = assetStatusCache.get(cacheKey);
    if (cached !== undefined) {
      setIsAvailable(cached);
      return () => {
        isMounted = false;
      };
    }

    setIsAvailable(null);
    checkAsset(src, expectedTypePrefix)
      .then((available) => {
        assetStatusCache.set(cacheKey, available);
        if (isMounted) setIsAvailable(available);
      })
      .catch(() => {
        assetStatusCache.set(cacheKey, false);
        if (isMounted) setIsAvailable(false);
      });

    return () => {
      isMounted = false;
    };
  }, [cacheKey, expectedTypePrefix, src]);

  return isAvailable;
}

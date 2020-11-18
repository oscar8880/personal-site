import { useCallback, useRef } from 'react';

export const useVisibility = (
  cb: (isVisible: boolean) => void,
  deps: React.DependencyList
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): ((node: any) => void) => {
  const intersectionObserver = useRef<IntersectionObserver | null>(null);
  return useCallback(node => {
    if (intersectionObserver.current) {
      intersectionObserver.current.disconnect();
    }
    intersectionObserver.current = new IntersectionObserver(([entry]) => {
      cb(entry.isIntersecting);
    });
    if (node) intersectionObserver.current.observe(node);
  }, deps);
};

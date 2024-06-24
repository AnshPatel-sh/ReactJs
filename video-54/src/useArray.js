import { useCallback, useState } from "react";

export function useArray(initialValue) {
  const [array, setArray] = useState(initialValue);

  /**Push element logic */
  const push = useCallback((elementToPush) => {
    setArray((previousArrayState) => {
      return [...previousArrayState, elementToPush];
    });
  }, []);

  /**Replace logic */
  const replace = useCallback((index, newElement) => {
    setArray((previousArrayState) => {
      return [
        ...previousArrayState.slice(0, index),
        newElement,
        ...previousArrayState.slice(index + 1),
      ];
    });
  }, []);

  /**Filter logic */
  /*  const filter = useCallback(() => {
    setArray((previousArrayState) => {
      return previousArrayState.filter((number) => {
        return number < 3;
      });
    });
  }, []); */

  const filter = useCallback((callback) => {
    setArray((previousArrayState) => {
      return previousArrayState.filter(callback);
    });
  }, []);

  /**Remove Logic */
  const remove = useCallback((index) => {
    setArray((previousArrayState) => {
      return [
        ...previousArrayState.slice(0, index),
        ...previousArrayState.slice(index + 1),
      ];
    });
  }, []);

  /**Clear logic */
  const clear = useCallback(() => {
    setArray([]);
  }, []);

  /**Reset Logic */
  const reset = useCallback(() => {
    setArray(initialValue);
  }, [initialValue]);

  return { array, set: setArray, push, replace, filter, remove, reset, clear };
}

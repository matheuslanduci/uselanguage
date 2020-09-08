import * as React from "react";

type Response<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export function usePersistedState<T>(
  key: string,
  initialState: T
): Response<T> {
  const [state, setState] = React.useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

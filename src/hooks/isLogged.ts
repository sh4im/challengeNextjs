import { useState } from "react";

export const useIsLogged = () => {
  const [logged, setLogged] = useState(false);

  return logged;
};

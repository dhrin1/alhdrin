import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useThemeMode() {
  const [themeMode, setThemeMode] = useLocalStorage("theme", "light");
  useEffect(() => {
    const classname = "dark";
    const bodyClasses = window.document.body.classList;
    themeMode === "dark"
      ? bodyClasses.add(classname)
      : bodyClasses.remove(classname);
  }, [themeMode]);

  return [themeMode, setThemeMode];
}

export default useThemeMode;

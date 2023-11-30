import { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    document.body.style.textAlign = 'center'

    // Cleanup function to reset the style when the component unmounts
    return () => {
      document.body.style.textAlign = ''
    }
  }, []) // the empty dependency array ensures this effect runs only once when the component mounts
  return "you are alone in dark ... "
};

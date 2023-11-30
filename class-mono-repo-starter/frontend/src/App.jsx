import { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    document.body.style.textAlign = 'center'
    document.body.style.fontFamily = 'Roboto, sans-serif'

    // Cleanup function to reset the style when the component unmounts
    return () => {
      document.body.style.textAlign = ''
      document.body.style.fontFamily = ''
    }
  }, []) // the empty dependency array ensures this effect runs only once when the component mounts
  return "you are alone in dark ... "
};

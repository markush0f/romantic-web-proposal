import { useEffect, useState } from "react";
import Home from "./components/home"


function App() {
  const [firstScreenVisible, setFirstScreenVisible] = useState(true);
  useEffect(() => {
    console.log(firstScreenVisible)
  }, []);
  return (
    <Home
      setFirstScreenVisible={setFirstScreenVisible}
    />
  )
}

export default App

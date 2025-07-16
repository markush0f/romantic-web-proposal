import { useState } from "react";
import Home from "./components/home"


function App() {
  const [firstScreenVisible, setFirstScreenVisible] = useState(true);

  return (
    <Home
      setFirstScreenVisible={setFirstScreenVisible}
    />
  )
}

export default App

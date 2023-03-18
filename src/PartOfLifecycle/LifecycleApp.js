import { useState } from "react"
import ComponentUnmount from "./components/ComponentUnmount"
import UseEffectExplain from "./components/UseEffectExplain"

export default function LifecycleApp() {
  // componentUnmount() icin
  const [isVisible, setIsVetvisible] = useState(true)
  
  return (
    <>
      {/* <UseEffectExplain /> */}
      {isVisible && <ComponentUnmount />}

      <br/>
      
      <button onClick={() => setIsVetvisible()} >Toggle Counter</button>
    </>
  )
}

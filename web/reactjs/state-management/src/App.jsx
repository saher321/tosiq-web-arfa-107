import { useContext } from "react"
import { Store } from "./store/ContextStore"

const App = () => {
  let data = useContext(Store)
  return (
    <>
    <div className="p-4 bg-amber-200">
      App name: {data.appName} <br />
      App Version: {data.appVersion}
    </div>
    </>
  )
}
export default App
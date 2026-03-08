import React from 'react'
import Button from './components/Button'

const App = () => {

  const contactUs = () => {
    console.log("CONTACT US PAGE")
  }
  const aboutUs = () => {
    console.log("ABOUT US PAGE")
  }
  const helpDesk = () => {
    console.log("HELP DESK PAGE")
  }
  const webPages = () => {
    console.log("WEB PAGE")
  }
  const settings = () => {
    console.log("SETTINGS PAGE")
  }
  
  return (
    <div>
      Hello React js. 
      <div>
        <Button func={contactUs} title="Contact us"/>
      </div>
      <div>
        <Button func={aboutUs} title="About us"/>
      </div>
      <div>
        <Button func={helpDesk} title="Help desk"/>
      </div>
      <div>
        <Button func={webPages} title="Web pages"/>
      </div>
      <div>
        <Button func={settings} title="Settings"/>
      </div>
    </div>
  )
}

export default App

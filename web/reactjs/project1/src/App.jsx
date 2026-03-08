import React from 'react'
import Button from './components/Button'
import Card from './components/Card'

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
      <span className='m-1 text-[11px] border-t-2 border-blue-500 block p-2 shadow rounded'>Hello React js.</span>
      
      <Card />  

      <div className='grid place-items-center'>
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
    </div>
  )
}

export default App

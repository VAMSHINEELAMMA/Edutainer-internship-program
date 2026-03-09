import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Promote from './components/Promote'

function App() {
  const [age,setAge] = useState(20)
  const [phone,setPhone]=useState('123-456-7890')
  const [email,setEmail]=useState('abc@gmail.com')
  const [address,setAddress]=useState('123 Main St, Anytown, USA')
  
  return (
    //  <div className="container">
    //   <div className="block">
    //     <h1>This is a default app</h1>
    //     <ul>
    //       <li>React</li>
    //       <li>Vite</li>
    //       <li>JavaScript</li>
    //       <li>CSS</li>
    //       <li>HTML</li>
    //       <li>Node.js</li>
    //       <li>Express</li>
    //       <li>MongoDB</li>
    //     </ul>
    //     <button>Click me</button>
    //   </div>

    //   <div className="block">
    //     <h1>This is a default app</h1>
    //     <ul>
    //       <li>React</li>
    //       <li>Vite</li>
    //       <li>JavaScript</li>
    //       <li>CSS</li>
    //       <li>HTML</li>
    //       <li>Node.js</li>
    //       <li>Express</li>
    //       <li>MongoDB</li>
    //     </ul>
    //     <button>Click me</button>
    //   </div>
    // </div>
<>
    {/* <h1>Hello from App.jsx</h1>
    <h1>We have a variable age with the value {age}.His phone number is {phone} and address {address}.If want to contact mail to the email address {email}.</h1> */}
    <div>
      <Promote/>
    </div>
</>
  )
}


export default App

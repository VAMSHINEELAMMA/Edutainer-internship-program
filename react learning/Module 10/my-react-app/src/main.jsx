import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Student from './components/Student.jsx'
import StudentForm from './components/form.jsx'

// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Student />
    <StudentForm />
  </StrictMode>,
)

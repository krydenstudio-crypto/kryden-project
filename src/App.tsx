
import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import HomePage from './routes/HomePage'

function App() {
 

  return (
   <Routes>
    <Route element={<Layout/>}>
       <Route path='/' element={<HomePage/>}/>
    </Route>
   </Routes>
  )
}

export default App

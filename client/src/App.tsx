import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Dashboard from './components/Dashboard'
import Applications from './components/Applications'
import Analytics from './components/Analytics'
import Activity from './components/Activity'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/applications' element={<Applications />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='activity' element={<Activity />} />
      </Route>
    </Routes>
  )
}

export default App
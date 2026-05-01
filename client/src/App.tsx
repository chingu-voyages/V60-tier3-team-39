import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Dashboard from './sections/Dashboard'
import Applications from './sections/applications/Applications'
import Analytics from './sections/analytics/Analytics'
import Activity from './sections/Activity'

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
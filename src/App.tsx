import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from './contexts/Counter'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

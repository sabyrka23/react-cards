import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/MainLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path="add-question" element={<h1>Add Question</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

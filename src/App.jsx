import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/MainLayout'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="add-question" element={<h1>Add Question</h1>} />
          <Route path="login" element={<h1>Login</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

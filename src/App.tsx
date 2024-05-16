import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import { ThemeProvider } from './components/theme-provider'

function App() {

  return (
    <>
    <ThemeProvider >
      <RouterProvider router={routes}/>
      </ThemeProvider>
    </>
  )
}

export default App

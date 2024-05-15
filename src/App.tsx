import { RouterProvider } from 'react-router-dom'
import logo from './assets/weather_icon.png'
import { Button } from './components/ui/button'
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

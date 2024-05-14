import logo from './assets/weather_icon.png'
import { Button } from './components/ui/button'

function App() {

  return (
    <>
      <div className='bg-background text-foreground'>
        <h1> Weather App </h1>
        <img src={logo} alt="" />
        <Button>Login</Button>
       </div>
    </>
  )
}

export default App

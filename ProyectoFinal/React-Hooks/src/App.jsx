import { UserProvider } from "./Providers/UserProvider";
import { Padre } from './components/Padre';

export default function App() {

  return (
    <UserProvider>
      <Padre>Hola</Padre>
    </UserProvider>

  )
}

// useContext useRef (customHook)
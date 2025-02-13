import './style.css';
import { useState } from 'react';
import { Form } from './Form';
import { Carrito } from './Carrito';
import { Header } from './Header';

function App() {

  let [nombre, setNombre] = useState("");

  let onSubmit = (data) => {
    setForm(data);
    setNombre(data.nombre);
  }

  const [form, setForm] = useState(null);

  return (
    // <>
    // { form == null ?
    //   <Form onSubmit={onSubmit} nombre={nombre} />
    //   :
    //   <>

    //     <Carrito form={form} />
    //   </>
    // }
    // </>
    <Header />
  )
}

export default App;

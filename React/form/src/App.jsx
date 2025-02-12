import './style.css';
import { useForm } from 'react-hook-form';
import { ValidateAge } from './validator';

function App() {

  const { register, formState: { errors }, handleSubmit } = useForm();

  // form.onSubmit
    // useForm.handleSubmit
      // onSubmit

  let onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form className="form" onSubmit={ handleSubmit(onSubmit) }>
      <h2>Formulario de Ingreso</h2>
      <div className="input-sector">
        <label>Nombre Completo</label>
        <input type="text" className="input" autoFocus {...register("nombre", {
          required: true,
          minLength: 2
        })} />
        { errors.nombre?.type === "required" && <p className="error">El nombre es requerido</p> }
        { errors.nombre?.type === "minLength" && <p className="error">El nombre no puede ser menor a 2 caracteres</p> }
      </div>
      <div className="input-sector">
        <label>Correo electrónico</label>
        <input type="email" className="input" {...register("email", {
          required: true,
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ 
        })} />
        { errors.email?.type === "required" && <p className="error">El correo electrónico es requerido</p> }
        { errors.email?.type === "pattern" && <p className="error">El correo electrónico no es valido</p> }
      </div>
      <div className="input-sector">
        <label>Edad</label>
        {/* entre 18 y 65 */}
        <input type="number" className="input" {...register("edad", {
          required: true,
          validate: ValidateAge
        })} />
        { errors.edad?.type === "required" && <p className="error">La edad es requerido</p> }
        { errors.edad?.type === "validate" && <p className="error">La edad debe estar entre 18 y 65 años</p> }
      </div>
      <div className="input-sector">
        <label>Teléfono</label>
        <input type="tel" className="input" {...register("tel", {
          required: true,
        })} />
        { errors.tel?.type === "required" && <p className="error">El telefono es requerido</p> }
      </div>
      <input type="submit" className="button" value="Registrarse" />
    </form>
  )
}

export default App;

// Check: ¿Quiero guardar el teléfono?
// Telefono: Que todo sea número
// Contraseña: pattern: al menos 1 simbolo, 1 mayúscula, 1 minúscula, 1 número (entre 8 y 20 caracteres)
// RepetirContraseña: es igual a Contraseña
// DAR POR TERMINADO EL FORM
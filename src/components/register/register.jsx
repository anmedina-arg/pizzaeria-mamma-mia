import './register.css';
import { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [error, setError] = useState(false); // <-- Cuando veamos la opcion con error

  const handleSubmit = async (e) => {
    // “Hay dos cosas que nunca se deben validar con expresiones regulares: los emails y las URLs.”
    // e.preventDefault();

    // // Validación 1: Campos vacíos
    // if (!email || !password || !rePassword) {
    //   return alert('Todos los campos son obligatorios');
    // }

    // // Validación 2: Password mínimo 6 caracteres
    // if (password.length < 6) {
    //   return alert('La contraseña debe tener al menos 6 caracteres');
    // }

    // // Validación 3: Passwords deben coincidir
    // if (password !== rePassword) {
    //   return alert('Las contraseñas no coinciden');
    // }

    // // Si todo está bien
    // alert('Datos enviados correctamente');

    // Opcion con estado de error
    e.preventDefault();

    if (!email || !password || !rePassword) {
      setError('Todos los campos son obligatorios');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    if (password !== rePassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setError('');
    alert('Datos enviados correctamente');
  };

  return (
    <form onSubmit={handleSubmit} className="register-form-container">
      <label htmlFor="email" className="register-form-input">
        Email
        <input
          id="email"
          type="email"
          placeholder="jhon@doe.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password" className="register-form-input">
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label htmlFor="re-password" className="register-form-input">
        Validate password
        <input
          id="re-password"
          type="password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
      </label>

      {error && <p className="form-error">{error}</p>}

      <input type="submit" name="Register" value="Register" />
    </form>
  );
}

export default Register;

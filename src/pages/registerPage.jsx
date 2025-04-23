import './registerPage.css';
import Register from '../components/register/register';

function RegisterPage() {
  return (
    <div className="register-page-container">
      <h2 className="register-page-title">Register form</h2>
      <Register />
    </div>
  );
}

export default RegisterPage;

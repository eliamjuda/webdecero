// Insert your imports there

const Login = () => {

  return (
    <div className="login-card">
      <form>
        <input type="text" name="username" placeholder="Usuario" />
        <input type="password" name="password" placeholder="Contraseña" />
        <input type="submit" name="login-view" className="login login-submit" value="Ingresar" />
      </form>
    </div>
  );
}

export default Login;
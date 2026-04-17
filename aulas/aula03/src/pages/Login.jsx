import avatar from "../assets/learn.svg";
import FormLogin from "../forms/FormLogin";

function Login() {
  return (
    <>
      <img src={avatar} alt="Imagem do logo" />
      <h1>Aluno Online</h1>
     <FormLogin/>
    </>
  );
}

export default Login;
import Layout from "./Layout";
import Tabela from "../components/Tabela";
function Notas() {
  return (
    <Layout titulo="Minhas Notas" subtitulo="Historico de notas do semestre">
      <Tabela />
      <Tabela />
      <Tabela />
    </Layout>
  );
}

export default Notas;

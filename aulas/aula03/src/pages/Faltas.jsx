import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";
import Topbar from "../components/Topbar";
import Layout from "./Layout";

function Faltas() {
  return (
    <Layout
    titulo = "Minhas Faltas "
    subtitulo = "Historico de Falyes por Semestre"
    >
      <Tabela />
      <Tabela />
      <Tabela />
    </Layout>
  );
}

export default Faltas;

import Card from "../components/Card";
import Layout from "./Layout";

function Dashboard() {
  const avisos = [
    "Eleição para representante",
    "Participe do IESB-SE"
  ];

  const datas = [
    "23/04 - Avaliação p1",
    "04/04 - Transferêcia de Curso",
    "07/06 - Renovação de matrícula"
  ];

  const disciplinas = [
    "Construção de Frontend",
    "Devops",
    "BI e Data Warehousing"
  ];
  return (
    <Layout
     titulo = "Olá Aluno" 
     subtitulo = "Bem-vindo ao portal do aluno"
    >  
          <Card titulo = "Mural de Avisos" items={avisos}/>
          <Card titulo = "Calendário Academico" items={datas}/>
          <Card titulo = "Minhas Diciplinas" items={disciplinas}/>
    </Layout>
  );
}

export default Dashboard;

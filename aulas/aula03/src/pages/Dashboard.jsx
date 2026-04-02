import Card from "../components/card";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";

function Dashboard(){
    return <div>
       <Sidebar />
       <main>
        <Topbar / >
        <h2>Bem vindo ao Portal do aluno</h2>
        <section>
            <Card / >
            <Card / >
            <Card / >
        </section>
       </main>
    </div>
}

export default Dashboard;
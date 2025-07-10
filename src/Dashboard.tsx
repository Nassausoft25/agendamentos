// Dashboard.tsx
import '../styles/dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="sidebar-icon">🏠</div>
                <div className="sidebar-icon">📅</div>
                <div className="sidebar-icon">💬</div>
                <div className="sidebar-icon">💼</div>
            </aside>

            {/* Main content */}
            <main className="main-content">
                <input className="search-bar" placeholder="Pesquisar" />

                <h2 className="section-title">Consultas</h2>
                <div className="card-consulta-row">
                    <div className="card-consulta">
                        <h3>Dra. Adriele Santos</h3>
                        <small>Psiquiatra</small>
                        <small>🕒 06:30</small>
                        <small>📅 15/08/2025</small>
                        <button className="btn-agendar">Agendar consulta</button>
                    </div>

                    <div className="card-consulta">
                        <h3>Dr. João Pedro</h3>
                        <small>Cirurgião dentista</small>
                        <small>🕒 07:30</small>
                        <small>📅 15/08/2025</small>
                        <button className="btn-agendar">Agendar consulta</button>
                    </div>
                </div>

                <h2 className="section-title">Profissionais</h2>
                <div className="profissionais-row">
                    <div className="card-profissional">
                        <h4>Dra. Adriele Santos</h4>
                        <small>314750 CRM/RN</small>
                        <small>Médica Psiquiatra formada pela Uninassau-Natal</small>
                        <button className="btn-perfil">Perfil profissional</button>
                    </div>

                    <div className="card-profissional">
                        <h4>Dr. João Pedro</h4>
                        <small>944059 CRM/RN</small>
                        <small>Cirurgião Dentista - Uninassau-Mossoró</small>
                        <button className="btn-perfil">Perfil profissional</button>
                    </div>

                    <div className="card-profissional">
                        <h4>Dr. Francisco</h4>
                        <small>957542 CRM/RN</small>
                        <small>Clínico Geral - UFRN</small>
                        <button className="btn-perfil">Perfil profissional</button>
                    </div>

                    <div className="card-profissional">
                        <h4>Dra. Saori Kido</h4>
                        <small>716116 CRM/RN</small>
                        <small>Proctologista - Universidade Potiguar</small>
                        <button className="btn-perfil">Perfil profissional</button>
                    </div>

                    <div className="card-profissional">
                        <h4>Dra. Priscila Nogueira</h4>
                        <small>084113 CRM/RN</small>
                        <small>Pediatra - Uninassau-Natal</small>
                        <button className="btn-perfil">Perfil profissional</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;

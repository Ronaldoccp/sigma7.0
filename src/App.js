import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import EstoqueMateriais from './pages/EstoqueMateriais';
import NotFound from './pages/NotFound';
import RelatoriosConsultas from './pages/RelatoriosConsultas';
import ReservasMateriais from './pages/ReservasMateriais';
import TransferenciaMateriais from './pages/TransferenciaMateriais';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/estoque-materiais" element={<EstoqueMateriais />} />
          <Route path="/transferencia-materiais" element={<TransferenciaMateriais />} />
          <Route path="/reservas-materiais" element={<ReservasMateriais />} />
          <Route path="/relatorios-consultas" element={<RelatoriosConsultas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

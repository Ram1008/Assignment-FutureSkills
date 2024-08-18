import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './containers/layout/Layout';
import Home from './containers/home/Home';
import HelpCenterState from './contexts/helpCenter/HelpCenterState';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<HelpCenterState><Home /></HelpCenterState>} />
      </Routes>
    </Layout>
  </Router>
);

export default App;


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ZooSimulator from './pages/ZooSimulator.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={ZooSimulator} />
      </Routes>
    </Router>
  );
}

export default App;


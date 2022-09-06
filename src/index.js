import { createRoot } from 'react-dom/client';
import Dashboard from './components/Dashboard'

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<Dashboard />);
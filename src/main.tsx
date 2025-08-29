
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('main.tsx executing');

const rootElement = document.getElementById("root");
console.log('Root element:', rootElement);

if (rootElement) {
  const root = createRoot(rootElement);
  console.log('Creating React root and rendering App');
  root.render(<App />);
  console.log('App rendered');
} else {
  console.error('Root element not found!');
}

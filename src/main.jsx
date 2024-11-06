import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// toastify should be added before index.css
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import { ToastContainer } from 'react-toastify';
import { store } from './store.js';
import { Provider } from 'react-redux';
import { extendTheme } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#C4F1F9',

      900: '#065666',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
      <ToastContainer position="top-center" />
    </ChakraProvider>
  </Provider>
);

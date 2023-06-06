import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './redux/store';
import Greeting from './components/Greeting';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Greeting />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

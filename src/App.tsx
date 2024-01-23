import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { LoginPage } from './pages/RegLoginPages/LoginPage';
import { RegistrationPage } from './pages/RegLoginPages/RegistrationPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RegistrationPage/>
    },
    {
      path: "/login-page",
      element: <LoginPage/>
    },
    {
      path: "/main-page",
      element: <MainPage />
    }
  ])

  return (
    <div className='App'>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

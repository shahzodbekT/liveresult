import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { LoginPage } from "./pages/RegLoginPages/LoginPage";
import { RegistrationPage } from "./pages/RegLoginPages/RegistrationPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RegistrationPage />,
    },
    {
      path: "/login-page",
      element: <LoginPage />,
    },
    {
      path: "/main-page",
      element: <MainPage />,
    },
    {
      path: "/profile-page",
      element: <ProfilePage />,
    },
  ]);

  return (
    <div className="App">
      <div className="max-w-full">
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </div>
    </div>
  );
}

export default App;

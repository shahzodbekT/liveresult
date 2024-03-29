import { AppButton } from "../../components/AppButton/AppButton";
import { AppInput } from "../../components/AppInput/AppInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface RegistrationFormData {
  userEmail: string;
  userName: string;
  userPassword: string;
}

const registrationPageFields: RegistrationFormData = {
  userEmail: "",
  userName: "",
  userPassword: "",
};

const registrationValidationSchema = yup.object({
  userEmail: yup
    .string()
    .required("Обязательное поле")
    .email("Неправильный e-mail"),
  userName: yup.string().required("Обязательное поле"),
  userPassword: yup
    .string()
    .required("Обязательное поле")
    .min(6, "Пароль должен содержать как минимум 6 символов"),
});

export const RegistrationPage = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<RegistrationFormData>({
    defaultValues: registrationPageFields,
    resolver: yupResolver(registrationValidationSchema),
  });

  const navigate = useNavigate();

  const onRegistrationFormSubmit = (data: RegistrationFormData) => {
    if (data) {
      navigate("/login-page");
      localStorage.setItem("userName", data.userName);
    }
  };

  const [currentTheme, setCurrentTheme] = useState<string>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    setCurrentTheme(savedTheme || "light");

    applyTheme(savedTheme || "light");
  }, [currentTheme]);

  const toggleTheme = (): void => {
    setCurrentTheme((currentTheme) => {
      const newTheme = currentTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const applyTheme = (theme: string): void => {
    // Apply theme-specific styles here
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div>
      <div onClick={toggleTheme} className="fixed right-1 top-1">
        <label className="swap swap-rotate">
          {/* sun icon */}
          <svg
            className="fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
        </label>
      </div>
      <div className="mt-40">
        <form
          onSubmit={handleSubmit(onRegistrationFormSubmit)}
          className="flex flex-col justify-center items-center gap-3"
        >
          <h1 className="text-4xl mb-3  ">Регистрация</h1>
          <Controller
            name="userEmail"
            control={control}
            render={({ field }) => (
              <AppInput
                type="email"
                placeholder="Введите email"
                hasError={!!errors.userEmail}
                errorText={errors.userEmail?.message as string}
                {...field}
              />
            )}
          />
          <Controller
            name="userName"
            control={control}
            render={({ field }) => (
              <AppInput
                type="text"
                placeholder="Введите имя"
                hasError={!!errors.userName}
                errorText={errors.userName?.message as string}
                {...field}
              />
            )}
          />
          <Controller
            name="userPassword"
            control={control}
            render={({ field }) => (
              <AppInput
                type="password"
                placeholder="Введите пароль"
                hasError={!!errors.userPassword}
                errorText={errors.userPassword?.message as string}
                {...field}
              />
            )}
          />
          <AppButton type="submit" buttonText="Зарегистрироваться" />
          <Link to="/login-page" className="m-2" style={{ cursor: "pointer" }}>
            Уже есть аккаунт? Войти
          </Link>
        </form>
      </div>
    </div>
  );
};

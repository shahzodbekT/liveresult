import { AppButton } from "../../components/AppButton/AppButton";
import { AppInput } from "../../components/AppInput/AppInput";
import { Navbar } from "../../components/Navbar/Navbar";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

interface LoginFormValues {
  userEmail: string;
  userPassword: string;
}

const loginPageFields: LoginFormValues = {
  userEmail: "",
  userPassword: "",
};

const loginValidationSchema = yup.object({
  userEmail: yup
    .string()
    .required("Обязательное поле")
    .email("Неправильный e-mail"),
  userPassword: yup
    .string()
    .required("Обязательное поле")
    .min(6, "Пароль должен содержать как минимум 6 символов"),
});

export const LoginPage = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormValues>({
    defaultValues: loginPageFields,
    resolver: yupResolver(loginValidationSchema),
  });

  const navigate = useNavigate();

  const onLoginFormSubmit = (data: LoginFormValues) => {
    console.log(data);
    if (data) {
      navigate("/profile-page");
    }
  };

  return (
    <div className="mt-40">
      <form
        onSubmit={handleSubmit(onLoginFormSubmit)}
        className="flex m-36 flex-col justify-center items-center gap-3"
      >
        <h1 className="text-4xl mb-3  ">Авторизация</h1>
        <Controller
          name="userEmail"
          control={control}
          render={({ field }) => (
            <AppInput
              type="text"
              placeholder="Введите email"
              hasError={!!errors.userEmail}
              errorText={errors.userEmail?.message as string}
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
        <AppButton type="submit" buttonText="Войти" />
        <Link to="/" className="m-2">Нет аккаунта? Зарегистрироваться</Link>
      </form>
    </div>
  );
};

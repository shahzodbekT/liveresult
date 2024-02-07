import { AppButton } from "../../components/AppButton/AppButton";
import { AppInput } from "../../components/AppInput/AppInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const registrationPageFields = {
  userEmail: "",
  userName: "",
  userPhoneNumber: "",
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
  } = useForm({
    defaultValues: registrationPageFields,
    resolver: yupResolver(registrationValidationSchema),
  });

  const navigate = useNavigate();

  const onRegistrationFormSubmit = (data: any) => {
    console.log(data);
    if (data) {
      navigate("/login-page");
      localStorage.setItem("userName", data.userName);
    }
  };

  return (
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
  );
};

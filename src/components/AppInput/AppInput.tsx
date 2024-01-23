interface InputPropTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError: boolean;
  errorText: string;
}

export const AppInput = ({ type, placeholder, hasError, errorText, ...props }: InputPropTypes) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
        {...props}
      />
      {hasError && <span>{errorText}</span>}
    </>
  );
};

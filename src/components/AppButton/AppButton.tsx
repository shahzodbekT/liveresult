type ButtonPropsTypes = {
    buttonText: string,
    type: "submit" | "reset" | "button"
}

export const AppButton = ({buttonText, type}: ButtonPropsTypes) => {
    return(
        <button type={type} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">{buttonText}</button>
    )
}
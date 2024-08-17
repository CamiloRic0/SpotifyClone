import { forwardRef } from "react";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> { }


const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    function twmerge(arg0: string, className: string | undefined): string | undefined {
        throw new Error("Function not implemented.");
    }

    return (
        <button
            type={type}
            className={twmerge(`
            w-full
            rounded-full
            bg-green-500
            border
            border-transparent
            px-3
            py-3
            disabled:cursor-not-allowed
            disabled:opacity-50
            text-black
            hover:opacity-75
            transition
            `,
                className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
        >
    { children }
        </button >
    )
})

Button.displayName = "Button";

export default Button;
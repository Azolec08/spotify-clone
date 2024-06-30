import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

// Define the ButtonProps interface, extending standard button attributes
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

// Define the Button component using forwardRef
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={twMerge(
          `w-full rounded-full bg-green-500 border border-transparent px-3 py-3
          disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold 
          hover:opacity-75 transition 
          `, // Base styles for the button
          className // Merge in additional classes passed as props
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

// Add a display name to the Button component for better debugging
Button.displayName = "Button";

export default Button;

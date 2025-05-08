type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: string;
  outline?: boolean;
  children?: React.ReactNode;
  className?: string;
  borderColor?: string;
  bgColor?: string;
  borderRadius?: string;
};

const Button = ({
  type = "button",
  outline,
  children,
  className,
  borderRadius = "rounded-lg",
  borderColor = "border-brand",
  bgColor = "bg-brand",
}: ButtonProps) => {
  const baseStyles = `font-poppins py-1 px-2 ${borderRadius} cursor-pointer `;
  return (
    <button
      type={type}
      className={`${baseStyles} ${
        outline ? `border-1  ${borderColor}` : `${bgColor} `
      } ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;

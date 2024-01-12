import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  hoverBgVariant: string;
  height?: number;
  width?: number;
  eventId?: string;
}

const Button: React.FC<ButtonProps> = ({ type, title, icon, variant, hoverBgVariant, height, width, eventId }) => {
  const buttonStyle: React.CSSProperties = {
    height: height ? `${height}rem` : undefined,
    width: width ? `${width}rem` : undefined,
  };


  return (
    <Link
      href={`/event-details/${eventId}`} passHref
    >
      <button
        type={type}
        className={`flexCenter gap-3 border ${variant} w-50 h-10  ${hoverBgVariant} cursor-pointer`}
        style={buttonStyle}
      >
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label>{title}</label>
      </button>
    </Link>

  );
};



export default Button
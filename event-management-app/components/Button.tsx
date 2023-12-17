import Image from "next/image";

type ButtonProps = {
    type : 'button' | 'submit';
    title : string;
    icon? : string;
    variant : 'btn_dark_black';
    hoverBgVariant : 'btn_white_text';
    height?: number;
    width?: number;
}

const Button: React.FC<ButtonProps> = ({ type, title, icon, variant, hoverBgVariant, height, width }) => {
  const buttonStyle: React.CSSProperties = {
    height: height ? `${height}rem` : undefined,
    width: width ? `${width}rem` : undefined,
  };

  return (
    <button
      type={type}
      className={`flexCenter gap-3 border ${variant} w-50 h-10 mt-5 lg:mt-10 ${hoverBgVariant} cursor-pointer`}
      style={buttonStyle}
    >
        {icon && <Image src={icon} alt={title} width={24} height={24}/>}
        <label>{title}</label>
    </button>
  );
};



export default Button
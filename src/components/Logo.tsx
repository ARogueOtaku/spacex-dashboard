interface ILogoProps {
  src: string;
  className: string;
  name: string;
}

const Logo = ({ src, className, name }: ILogoProps) => {
  return <img src={src} alt={name} className={className} />;
};

export default Logo;

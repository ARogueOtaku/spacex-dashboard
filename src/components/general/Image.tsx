export interface IImageProps {
  src: string;
  className: string;
  name: string;
}

const Image = ({ src, className, name }: IImageProps) => {
  return <img src={src} alt={name} className={className} />;
};

export default Image;

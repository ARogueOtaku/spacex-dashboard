import { ReactNode, useState } from "react";
import Image, { IImageProps } from "./Image";
import DownArrIcon from "../../assets/DownArrIcon.svg";

export interface IFilterProps<T> {
  iconProps?: IImageProps;
  textClass?: string;
  optionsClass?: string;
  value: T;
  selector?: ReactNode;
  textTransform?: (transformParam: T) => ReactNode;
}

const DownArrIconProps: IImageProps = {
  src: DownArrIcon,
  className: "h-4",
  name: "Down arrow",
};

const Filter = <T,>({ iconProps, textClass, value, selector, textTransform }: IFilterProps<T>) => {
  const [selectorOpen, setSelectorOpen] = useState<boolean>(false);

  return (
    <div
      className="flex items-end w-fit relative gap-2 overflow-visible cursor-pointer"
      onClick={() => setSelectorOpen((isOpen) => !isOpen)}
    >
      {iconProps ? <Image {...iconProps} /> : null}
      <span className={textClass ?? ""}>{textTransform ? textTransform(value) : (value as unknown as string)}</span>
      <Image {...DownArrIconProps} />
      {selectorOpen ? selector : null}
    </div>
  );
};

export default Filter;

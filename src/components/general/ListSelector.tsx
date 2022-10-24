import { ReactNode } from "react";

interface IListSelectorProps<T> {
  activeItem: T;
  listItems: Array<T>;
  className?: string;
  itemClass?: string;
  activeItemClass?: string;
  textTransform?: (transformParam: T) => ReactNode;
  onClick: (item: T) => void;
}

const ListSelector = <T,>({
  activeItem,
  listItems,
  className,
  itemClass,
  activeItemClass,
  textTransform,
  onClick,
}: IListSelectorProps<T>) => {
  return (
    <div className={className ?? ""}>
      {listItems.map((item, idx) => (
        <div
          className={(activeItem === item ? activeItemClass : itemClass) ?? ""}
          key={idx}
          onClick={() => onClick(item)}
        >
          {textTransform ? textTransform(item) : (item as unknown as string)}
        </div>
      ))}
    </div>
  );
};

export default ListSelector;

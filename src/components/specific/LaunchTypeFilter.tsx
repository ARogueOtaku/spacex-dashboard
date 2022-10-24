import Filter from "../general/Filter";
import FilterIcon from "../../assets/FilterIcon.svg";
import ListSelector from "../general/ListSelector";
import { IImageProps } from "../general/Image";

const FilterIconProps: IImageProps = {
  src: FilterIcon,
  className: "h-4",
  name: "Calendar",
};

const LaunchTypeFilter = ({ value, setValue }: { value: string; setValue: (newValue: string) => void }) => {
  return (
    <Filter
      value={value}
      iconProps={FilterIconProps}
      textTransform={(transformParam: string) => `${transformParam} Launches`}
      textClass="leading-4 font-medium text-gray-600"
      selector={
        <ListSelector
          activeItem={value}
          className="absolute w-max min-w-full top-full right-0 mt-3 shadow"
          listItems={["All", "Upcoming", "Successful", "Failed"]}
          onClick={(listItem: string) => setValue(listItem)}
          activeItemClass="py-2 px-4 text-sm leading-3.5 font-inter bg-slate-100"
          itemClass="py-2 px-4 text-sm leading-3.5 font-inter"
          textTransform={(transformParam: string) => `${transformParam} Launches`}
        />
      }
    />
  );
};

export default LaunchTypeFilter;

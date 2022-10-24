import Filter from "../general/Filter";
import { IImageProps } from "../general/Image";
import CalendarIcon from "../../assets/CalendarIcon.svg";
import LaunchTypeFilter from "./LaunchTypeFilter";
import { useState } from "react";

const CalendarIconProps: IImageProps = {
  src: CalendarIcon,
  className: "h-4",
  name: "Calendar",
};

//ToDo: Move State out to Context Later
const LaunchFilters = ({ dateFilter }: { dateFilter: string }) => {
  const [launchType, setLaunchType] = useState("All");
  return (
    <div className="m-4 mt-8 md:mt-12 flex gap-4 flex-col md:flex-row justify-between items-center">
      <Filter
        value={dateFilter}
        iconProps={CalendarIconProps}
        textTransform={(transformParam: string) => `Past ${transformParam} Month(s)`}
        textClass="leading-4 font-medium text-gray-600"
      />
      <LaunchTypeFilter value={launchType} setValue={setLaunchType} />
    </div>
  );
};

export default LaunchFilters;

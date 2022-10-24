import { useState } from "react";
import HomeLayout from "./layouts/HomeLayout";
import LaunchFilters from "./components/specific/LaunchFilters";

const App = () => {
  const [filter, setFilter] = useState<string>("All");

  return (
    <div className="app">
      <HomeLayout>
        <LaunchFilters dateFilter={filter} />
      </HomeLayout>
    </div>
  );
};

export default App;

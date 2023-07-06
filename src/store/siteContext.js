import React, { createContext } from "react";

const SiteContext = createContext({
  activeCatagory: "",
  setActiveCatagory: () => {},
  projects: [],
  setProjects: () => {},
});

export default SiteContext;

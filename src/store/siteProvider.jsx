import React, { useEffect, useRef, useState } from "react";
import SiteContext from "./siteContext";

const SiteProvider = ({ children }) => {
  const [activeCatagory, setActiveCatagory] = useState("about");
  const [projects, setProjects] = useState([]);
  const [about, setAbout] = useState("");
  const initialLoad = useRef(false);

  const loadAbout = async () => {
    // Grab about as well

    const aboutReq = await fetch("/api/v2/grabAbout.php");

    const aboutRes = await aboutReq.text();

    setAbout(aboutRes);
  };

  useEffect(() => {
    if (!initialLoad.current) {
      loadAbout();

      setTimeout(async () => {
        const req = await fetch("/api/v2/grabProjects.php");

        const res = await req.json();

        // Now set the state to the projects

        setProjects(res);
      }, 1000);
    }

    return () => {
      initialLoad.current = true;
    };
  }, []);

  return (
    <SiteContext.Provider
      value={{
        activeCatagory,
        setActiveCatagory,
        projects,
        setProjects,
        about,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export default SiteProvider;

import { Typography, Stack, Box } from "@mui/material";
import React, { useContext } from "react";
import SiteContext from "../store/siteContext";
import Date from "./date";

const Projects = () => {
  const siteCtx = useContext(SiteContext);

  return (
    <React.Fragment>
      <Stack
        sx={{
          width: "100%",
        }}
      >
        {siteCtx.projects.map((project, index) => {
          return (
            <Stack
              key={index}
              sx={{
                padding: "0px 20px 50px 20px",
                "& > a": {
                  textDecoration: "none",
                  color: "#bccddd",
                },
                "& a:hover": {
                  color: "#E7C086",
                },
                "& > a:hover > div": {
                  borderColor: "rgba(143, 151, 164, 0.35)",
                },
                width: "100%",
              }}
            >
              <a
                target="_blank"
                onClick={(evt) => !project.url && evt.preventDefault()}
                href={project.url ? project.url : "#"}
              >
                <Stack
                  sx={{
                    width: "100%",
                    padding: 2,
                    position: "relative",
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "10px 10px 13px 0px rgba(5, 5, 5, 0.11)",
                    borderTop: "3px solid rgba(76, 86, 103, 0.15)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <Stack
                    sx={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Stack
                      justifyContent="center"
                      alignItems="center"
                      sx={{ width: "100px" }}
                    >
                      <Box sx={{ marginBottom: 1 }}>
                        <Date set={project.createdAt} />
                      </Box>
                      <Stack
                        sx={{
                          width: "20%",
                          minWidth: "120px",
                          borderRadius: "5px",
                          overflow: "hidden",
                          outline: "2px",
                          outlineColor: "#26282f",
                          outlineStyle: "solid",
                          outlineOffset: "2px",
                        }}
                      >
                        <img
                          src={`/api/v2/images/thumbnails/${project.thumbnail}`}
                        />
                      </Stack>
                    </Stack>
                    <Stack
                      sx={{
                        paddingLeft: "30px",
                        width: "100%",
                        flexFlow: "wrap",
                      }}
                    >
                      <Typography variant="projectTitle" data-linkarrow="true">
                        {project.title}
                      </Typography>
                      <Typography
                        component="span"
                        style={{
                          width: "100%",
                          padding: "10px",
                          color: "#dfdede",
                        }}
                        dangerouslySetInnerHTML={{ __html: project.shortDes }}
                      ></Typography>
                      <Stack
                        flexDirection="row"
                        sx={{ flexWrap: "wrap", width: "90%" }}
                      >
                        {project.tags.map((tag, index) => (
                          <Box key={index} className="tag" data-tag={tag}>
                            {tag}
                          </Box>
                        ))}
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </a>
            </Stack>
          );
        })}
      </Stack>
    </React.Fragment>
  );
};

export default Projects;

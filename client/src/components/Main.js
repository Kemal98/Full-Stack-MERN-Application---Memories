import { Box, Container, Grid, Grow, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";
import Form from "./Form/Form";
import Posts from "./Posts/Posts";

export default function Main({ currentId, setCurrentId }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const theme = useTheme();

  const form = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  return (
    <>
      <Box component="main" sx={{ mt: "2rem" }}>
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
            >
              {form && (
                <Grid item xs={12} sm={4}>
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
              )}

              <Grid item xs={12} sm={12}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Box>
    </>
  );
}

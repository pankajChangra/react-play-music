import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Card, Grid, Paper } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import {dateWithMonthName} from "../utils/dateUtils";
import Audioupload from './AudioUploadAndPlay';

const Main = () => {
  const today = dateWithMonthName();
  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card elevation={0}>
              <Paper
                sx={{
                  bgcolor: deepOrange[800],
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 5
                }}
              >
                <Typography
                  variant="h4"
                  color="white"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Drop Your Mp3 File
                </Typography>
                <Typography
                  variant="body1"
                  color="white"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  {today}
                </Typography>
              </Paper>
            </Card>
            <Audioupload />
          </Grid>
        </Box>
      </Container>
  );
}

export default Main;

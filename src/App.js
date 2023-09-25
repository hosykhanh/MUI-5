import "./App.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { AppBar, Toolbar } from "@mui/material";
import Grid from "@mui/material/Grid";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import HomeIcon from "@mui/icons-material/Home";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl/FormControl";
import FormLabel from "@mui/material/FormLabel";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <HomeIcon fontSize="large"></HomeIcon>
          <Typography variant="h5" align="left" pl={2} sx={{ flexGrow: 1 }}>
            MUI-5
          </Typography>
          <Button color="inherit">Log In</Button>
          <Button color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>
      <Box mt={5}>
        <Typography variant="h1" gutterBottom>
          MUI-5 App
        </Typography>
        <Typography variant="h3" gutterBottom>
          This is a app using MUI-5
        </Typography>
        <Typography variant="subtitle1" align="center" mt={5} p={5}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Box>
      <Grid container p={5} spacing={5}>
        <Grid item xs={4}>
          <Typography paragraph={true} align="justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Boastrap 5</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This is CSS framework to build website quickly
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>MUI 5</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>This is CSS framework to build</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion disabled>
            <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
              <Typography>New framework</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>This is CSS framework to build</Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={8}>
          <Typography paragraph={true} align="justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
            suscipit, quam beatae rerum inventore consectetur, neque doloribus,
            cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi
            quidem quibusdam.
          </Typography>

          <FormControl>
            <FormLabel>Which framework would you like to use?</FormLabel>
            <RadioGroup row defaultValue="react" name="radio-button">
              <FormControlLabel
                value="boastrap"
                control={<Radio />}
                label="Boastrap"
              ></FormControlLabel>
              <FormControlLabel
                value="react"
                control={<Radio />}
                label="React"
              ></FormControlLabel>
              <FormControlLabel
                value="others"
                control={<Radio />}
                label="Others"
              ></FormControlLabel>
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Stack direction="row" spacing={5} paddingTop={15} paddingLeft={15}>
        <Button variant="text">Click me</Button>
        <Button variant="contained">Submit</Button>
        <Button variant="outlined">Sign In</Button>
        <Button disabled>Disabled</Button>
        <Button variant="outlined" startIcon={<DeleteIcon></DeleteIcon>}>
          Delete
        </Button>
        <Button variant="outlined" startIcon={<SendIcon></SendIcon>}>
          Send
        </Button>
      </Stack>
      <div></div>
    </div>
  );
}

export default App;

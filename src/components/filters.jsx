import { Search } from "@mui/icons-material";
import DirectionsBoatFilledOutlinedIcon from "@mui/icons-material/DirectionsBoatFilledOutlined";
import {
  Badge,
  Card,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { useState } from "react";
import { styled } from "@mui/material/styles";

const Filters = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      background: "#53c153",
      // top: "-10px",
      // border: `2px solid ${theme.palette.background.paper}`,
      borderRadius: "20px",
      // padding: "15px 15px",
      margin: "10px 10px 0px 0px",
      // left: "0rem",
    },
  }));
  return (
    <>
      <Card className="bg-card ">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Input
              size="small"
              className="bg-search br-20"
              id="input-with-icon-adornment"
              placeholder="My Reposibilities"
              startAdornment={
                <InputAdornment position="start">
                  <DirectionsBoatFilledOutlinedIcon fontSize="small" />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <Search fontSize="small" />
                </InputAdornment>
              }
            />

            {/* <TextField
              label=""
              placeholder="My Reposibilities"
              id="outlined-basic"
              variant="filled"
              // sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DirectionsBoatFilledOutlinedIcon fontSize="small" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Search fontSize="small" />
                  </InputAdornment>
                ),
              }}
            /> */}
          </Grid>
          <Grid item xs={4}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="PO"
                onChange={handleChange}
                className=""
              >
                <MenuItem value={10} selected>
                  PO
                </MenuItem>
                <MenuItem value={20}>PO</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <StyledBadge badgeContent={10}>
              {/* <MailIcon /> */}
              <TuneOutlinedIcon className="tune-badge"/>
            </StyledBadge>
          </Grid>
          <Grid item xs={6}>
          <TextField id="standard-basic" label="Coy Id" placeholder="Enter Coy Id" variant="standard" />
          </Grid>
          <Grid item xs={6}>
          <TextField id="standard-basic" label="Order no" placeholder="Enter Order no" variant="standard" />
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Filters;

import { Search } from "@mui/icons-material";
import DirectionsBoatFilledOutlinedIcon from "@mui/icons-material/DirectionsBoatFilledOutlined";
import {
  Badge,
  Card,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useState } from "react";
import { styled } from "@mui/material/styles";

const Filters = () => {
  const [age, setAge] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [groupbyHovered, setGroupByHovered] = useState(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const useStyles = styled({
    underline: {
      "&:before": {
        borderBottom: "2px solid green",
      },
      "&:hover:not($disabled):not($focused):not($error):before": {
        borderBottom: "2px solid blue",
      },
      "&:after": {
        borderBottom: "3px solid purple",
      },
    },
    disabled: {},
    focused: {},
    error: {},
  });

  const Inputclasses = useStyles();
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      background: "#53c153",
      borderRadius: "20px",
      margin: "10px 10px 0px 0px",
    },
  }));
  return (
    <>
      <Card className="bg-filter-card ">
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
          </Grid>
          <Grid item xs={4}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <span>PO</span>
                </MenuItem>
                <MenuItem value={20}>PO</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <StyledBadge badgeContent={10}>
              <TuneOutlinedIcon className="tune-badge" />
            </StyledBadge>
          </Grid>
          <Grid className="pl-16" xs={6}>
            <TextField
              id="standard-basic"
              label="Coy Id"
              placeholder="Enter Coy Id"
              variant="standard"
              InputProps={{ Inputclasses }}
            />
          </Grid>
          <Grid className="pl-16" xs={6}>
            <TextField
              id="standard-basic"
              label="Order no"
              placeholder="Enter Order no"
              variant="standard"
            />
          </Grid>
          <Grid item xs={2} className=" ml-16">
            <div
              className={`filter-sort d-flex ${isHovered ? "hovered" : ""}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="filter-sort">Sort</span>
              {isHovered ? <Search /> : <KeyboardArrowDownOutlinedIcon />}
            </div>
          </Grid>
          <Grid item xs={4}>
            <div
              className={`filter-sort d-flex ${
                groupbyHovered ? "hovered" : ""
              }`}
              onMouseEnter={() => setGroupByHovered(true)}
              onMouseLeave={() => setGroupByHovered(false)}
            >
              <span className="filter-sort">Group By</span>
              {groupbyHovered ? <Search /> : <KeyboardArrowDownOutlinedIcon />}
            </div>
          </Grid>

          <Grid item xs={1}></Grid>
          <Grid item xs={2} className="txt-end">
            <span className="filter-sort">Clear</span>
          </Grid>
          <Grid item xs={2} className="txt-end">
            <span className="filter-sort">Search</span>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Filters;

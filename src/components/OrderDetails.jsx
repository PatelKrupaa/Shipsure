import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import PrintIcon from "@mui/icons-material/Print";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import DescriptionIcon from "@mui/icons-material/Description";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import Rating from "@mui/material/Rating";
import Badge from "@mui/material/Badge";
import DialpadIcon from "@mui/icons-material/Dialpad";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Avatar from "@mui/material/Avatar";
import DirectionsBoatFilledOutlinedIcon from "@mui/icons-material/DirectionsBoatFilledOutlined";
import { Gauge } from "@mui/x-charts/Gauge";
import { Button, Link } from "@mui/material";
import {
  Card,
  Grid,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

const OrderDetails = () => {
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  ];

  const tabsNames = [
    "Summary",
    "Order Lines",
    "Suppliers",
    "Analysis",
    "Freight Details",
    "Delivery",
    "Invoice",
    "Memos",
    "Notes & Attachments",
    "Budgets",
  ];

  return (
    <div className="orders">
      <Grid item xs={12} className="orderDetails">
        <Box sx={{ width: "100%" }} className="orderDetails-box">
          <Avatar
            sx={{ width: 28, height: 28, fontSize: 12, bgcolor: "green" }}
          >
            RT
          </Avatar>
          <div className="orderHeader">
            <Typography
              variant="h5"
              sx={{ marginRight: 2, fontSize: "16px", fontWeight: "bold" }}
              noWrap
              component="div"
              class="ms-auto"
            >
              4907-00019
            </Typography>{" "}
            <Typography
              sx={{ fontSize: "14px", fontWeight: "bold", marginLeft: "10px" }}
              variant="h5"
              noWrap
              component="div"
              class="ms-auto"
            >
              HOTEL/TECH WORK SQUAD GFR
            </Typography>
          </div>
          <div className="bg-80e7ff badgeOrder">
            <DirectionsBoatFilledOutlinedIcon className="fs-20 icon" />
            <p>Lorem Ipsum</p>
          </div>
        </Box>
        <Box sx={{ width: "100%" }} className="orderDetails-box box2">
          <div>
            <Typography
              variant="caption"
              sx={{ lineHeight: "10px" }}
              display="block"
              gutterBottom
            >
              Date Requested
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "14px" }}
              display="block"
              gutterBottom
            >
              10 Jul 2019
            </Typography>
          </div>
          <div>
            <Typography
              variant="caption"
              sx={{ lineHeight: "10px" }}
              display="block"
              gutterBottom
            >
              Type
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "14px" }}
              display="block"
              gutterBottom
            >
              Services
            </Typography>
          </div>
          <div>
            <Typography
              variant="caption"
              sx={{ lineHeight: "10px" }}
              display="block"
              gutterBottom
            >
              Account Code
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "14px" }}
              display="block"
              gutterBottom
            >
              {`5830042 - HM PAX ACCOMODATION (LABOUR)`}
            </Typography>
          </div>
          <div className="link">
            <Link
              href="#"
              sx={{ fontWeight: "bold", marginRight: 1, color: "green" }}
            >
              Order Summary
            </Link>
            <Link href="#" sx={{ fontWeight: "bold", color: "green" }}>
              Order Progress
            </Link>
          </div>
        </Box>
      </Grid>
      <Divider />
      <Box sx={{ width: "100%" }} className="orderDetails-iconsbox">
        <Button
          sx={{ textTransform: "capitalize", color: "green" }}
          startIcon={<SaveAsIcon />}
        >
          Edit Order Details
        </Button>
        <Button
          sx={{ textTransform: "capitalize", color: "green" }}
          startIcon={<PrintIcon />}
        >
          Print Order Details
        </Button>
        <Button
          sx={{ textTransform: "capitalize", color: "green" }}
          startIcon={<FileOpenIcon />}
        >
          Change Delivery Status
        </Button>
        <Button
          sx={{ textTransform: "capitalize", color: "green" }}
          startIcon={<DescriptionIcon />}
        >
          Reports
        </Button>
        <Button
          sx={{ textTransform: "capitalize", color: "green" }}
          startIcon={<TouchAppIcon />}
        >
          Actions
        </Button>
      </Box>
      <Divider />
      <Box sx={{ width: "100%" }} className="tabs">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleTabChange}
            indicatorColor="bg-dark"
            aria-label="basic tabs example"
          >
            {tabsNames?.map((value, index) => {
              return (
                <Tab
                  label={value}
                  sx={{ textTransform: "capitalize" }}
                  {...a11yProps({ index })}
                />
              );
            })}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Box>
            <div className="firstContent">
              <Typography
                variant="caption"
                sx={{ lineHeight: "0px" }}
                display="block"
                className="Title"
                gutterBottom
              >
                <p>Components</p>
                <Badge className="badge" color="secondary" badgeContent={0}>
                  0
                </Badge>
              </Typography>
              <Typography
                sx={{ fontWeight: "bold" }}
                display="block"
                className="italic"
                gutterBottom
              >
                No items found
              </Typography>
            </div>
          </Box>
          <Box>
            <div className="firstContent">
              <Typography
                variant="caption"
                sx={{ lineHeight: "10px" }}
                display="block"
                className="Title"
                gutterBottom
              >
                Authorized Supplier
                <Badge className="badge" color="secondary" badgeContent={0}>
                  Ref: PRJ001963SRIN
                </Badge>
              </Typography>
              <Box sx={{ width: "100%" }} className="tabContentAuth">
                <div>
                  <Typography
                    variant="caption"
                    sx={{ lineHeight: "10px" }}
                    display="block"
                    gutterBottom
                  >
                    Date Authorized
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "15px" }}
                    display="block"
                    gutterBottom
                  >
                    12 Jul 2019
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="caption"
                    sx={{ lineHeight: "10px" }}
                    display="block"
                    gutterBottom
                  >
                    Authorized By
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "15px" }}
                    display="block"
                    gutterBottom
                  >
                    Jim Darren
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="caption"
                    sx={{ lineHeight: "10px", fontSize: "12px" }}
                    display="block"
                    gutterBottom
                  >
                    Invoice Chased Date
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    display="block"
                    gutterBottom
                  >
                    -
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="caption"
                    sx={{ lineHeight: "10px" }}
                    display="block"
                    gutterBottom
                  >
                    PO Chased Date
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    display="block"
                    gutterBottom
                  >
                    -
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="caption"
                    sx={{ lineHeight: "10px" }}
                    display="block"
                    gutterBottom
                  >
                    PO Confirmed Date
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    display="block"
                    gutterBottom
                  >
                    -
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="caption"
                    sx={{ lineHeight: "10px" }}
                    display="block"
                    gutterBottom
                  >
                    PO Ref No.
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    display="block"
                    gutterBottom
                  >
                    -
                  </Typography>
                </div>
              </Box>
              <div>
                <Typography
                  variant="caption"
                  sx={{ lineHeight: "10px", fontWeight: "bold" }}
                  display="block"
                  className="AuthDesc"
                  gutterBottom
                >
                  {`Repairs (Riding Squads / Manpower)`}
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", marginLeft: "2%" }}
                  display="block"
                  gutterBottom
                >
                  <Rating name="read-only" value={4} readOnly />
                </Typography>
              </div>
              <div>
                <Typography
                  variant="caption"
                  sx={{ lineHeight: "10px", fontWeight: "bold" }}
                  display="block"
                  className="Details"
                  gutterBottom
                >
                  <p>
                    <LocationOnIcon className="iconDetails" />
                    1st Floor, Skypark, 8 Elliot Place, G3 8EP, GBR
                  </p>
                  <p>
                    <LocalPhoneIcon className="iconDetails" />+ 44-12345678
                  </p>
                  <p>
                    <DialpadIcon className="iconDetails" />+ 44-12345678
                  </p>
                  <p className="underlines">
                    <EmailIcon className="iconDetails" />
                    repairs@services.com
                  </p>
                </Typography>
              </div>
            </div>
          </Box>
          <Box>
            <div className="firstContent">
              <Typography
                variant="caption"
                sx={{ lineHeight: "10px" }}
                display="block"
                className="Title"
                gutterBottom
              >
                Suppliers
                <Badge className="badge" color="secondary" badgeContent={0}>
                  2
                </Badge>
              </Typography>
              <TableContainer component={Paper} className="table">
                <Table
                  sx={{ minWidth: 650, bgcolor: "" }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Dessert (100g serving)</TableCell>
                      <TableCell align="right">Calories</TableCell>
                      <TableCell align="right">Fat&nbsp;(g)</TableCell>
                      <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                      <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.calories}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.fat}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.carbs}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.protein}
                        </StyledTableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Box>
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default OrderDetails;

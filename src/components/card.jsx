import { Badge, Card, Grid } from "@mui/material";
import DirectionsBoatFilledOutlinedIcon from "@mui/icons-material/DirectionsBoatFilledOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import styled from "@emotion/styled";
import { styled, useTheme } from "@mui/material/styles";

const Orders = () => {
  const cardsData = [
    {
      id: 1,
      code: "4907 - 00019",
      description: "HOTEL/TECH WORK SQUAD GFR",
      content: "Lorem Ipsum",
      serviceName: "Services",
      date: "12 Jul 2019",
      name: "RT",
      color: "success",
    },
    {
      id: 2,
      code: "5325 - 00034",
      description: "SAFETY EQUIPEMENT - COMPULSORY SPARES",
      content: "Lorem Ipsum",
      serviceName: "Consumable",
      date: "04 Mar 2020",
      name: "TQ",
      color: "error",
    },
    {
      id: 3,
      code: "4907 - 00038",
      description: "EM SPARES FOR INTERSTAGE FILTER UNIT",
      content: "Lorem Ipsum",
      serviceName: "Spares",
      date: "26 Jul 2022",
      name: "EO",
      color: "warning",
    },
    {
      id: 4,
      code: "5325 - 00040",
      description: "FUEL.LUBE / AIR / WATER.SEWAGE SYSTEM ",
      content: "Lorem Ipsum",
      serviceName: "Spares",
      date: "10 Mar 2019",
      name: "RT",
      color: "success",
    },
    {
      id: 5,
      code: "4907 - 00050",
      description: "HOBART FX-A_FES VSP UNDERCOUNTER",
      content: "Lorem Ipsum",
      serviceName: "Spares",
      date: "21 Nov 2019",
      name: "RT",
      color: "success",
    },
    {
      id: 6,
      code: "5325 - 00051",
      description: "EXTERNAL HARD DISK DISK DISK",
      content: "Lorem Ipsum",
      serviceName: "Spares",
      date: "20 Mar 2020",
      name: "RT",
      color: "success",
    },
  ];

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      // border: `2px solid ${theme.palette.background.paper}`,
      borderRadius: "20px",
      padding: "15px 15px",
      margin: "12px 0px 0px -5px",
      left: "0rem",
    },
  }));
  return (
    <>
      {cardsData.map((card) => (
        <Card key={card.id} className="bg-card comman-card">
          <div className="cards">
            <div>
              <p className="text-003e36 p-0">{card.code}</p>
              <p className="fs-12 fw-700">{card.description}</p>
              <div className="bg-80e7ff badge">
                <DirectionsBoatFilledOutlinedIcon className="fs-20"/>
                <p>{card.content}</p>
              </div>
            </div>
            <div>
              <div className="d-flex mt-1">
                <PushPinOutlinedIcon className="" />
                <StyledBadge
                  badgeContent={card.name}
                  color={card.color}
                ></StyledBadge>
              </div>
              <div className="mt-45">
                <div className="txt-end fs-12 card-bg-txt">
                  {card.serviceName}
                </div>
                <div className="txt-end fs-12 card-bg-txt">{card.date}</div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default Orders;

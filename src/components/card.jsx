import { Badge } from "@mui/material";
import DirectionsBoatFilledOutlinedIcon from "@mui/icons-material/DirectionsBoatFilledOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useEffect } from "react";

const Orders = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      icon: <PushPinOutlinedIcon />,
    },
    {
      id: 2,
      code: "5325 - 00034",
      description: "SAFETY EQUIPEMENT - COMPULSORY SPARES",
      content: "Lorem Ipsum",
      serviceName: "Consume",
      date: "12 Jul 2019",
      name: "TQ",
      color: "error",
      icon: '',
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
      icon: <PushPinOutlinedIcon />,
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
      icon: <ErrorOutlineOutlinedIcon />,
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
      icon: <PushPinOutlinedIcon />,
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
      icon: '',
    },
  ];

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      borderRadius: "20px",
      padding: "15px 15px",
      margin: "12px 0px 0px -5px",
      left: "0rem",
    },
  }));

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId === selectedCard ? null : cardId);
  };
  useEffect(() => {
    if (!selectedCard && cardsData.length > 0) {
      setSelectedCard(cardsData[0].id);
    }
  }, [selectedCard, cardsData]);

  return (
    <>
      {cardsData.map((card) => (
        <div
          key={card.id}
          className={`bg-card  cards comman-card ${
            selectedCard === card.id ? "selected-card" : ""
          }`}
          onClick={() => handleCardClick(card.id)}
        >
          <div className="p-10">
            <div className="text-003e36 card-code">{card.code}</div>
            <b className="fs-12 fw-700 card-description">{card.description}</b>
            <div className="bg-80e7ff badge">
              <DirectionsBoatFilledOutlinedIcon className="fs-20" />
              <div className="card-content">{card.content}</div>
            </div>
          </div>
          <div>
            <div className="d-flex mt-1">
              {card.icon}
              <StyledBadge
                badgeContent={card.name}
                color={card.color}
              ></StyledBadge>
            </div>
            <div className="mt-25">
              <div className="txt-end fs-12 card-bg-txt">
                {card.serviceName}
              </div>
              <div className="txt-end fs-12 card-bg-txt">{card.date}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Orders;

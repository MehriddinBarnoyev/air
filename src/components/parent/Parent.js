import React from "react";
import { ParentWrapper, MenuWrapper } from "./parentWrapper";
import { Button } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

export default function Index() {
  const menu = [
    "Asosiy",
    "Yo'nalishlar",
    "Charter reyslar",
    "Yangiliklar",
    "Biz haqimizda",
  ];

  return (
    <ParentWrapper>
      <header>
        <div className="row">
          <div className="col col-2">
            <img
              src="https://232425.uz/storage/settings/ad3f815c711ea7ef34641d213c437bb1.png"
              alt=""
              width={"180px"}
            />
          </div>
          <MenuWrapper className="col col-8 d-flex justify-content-between">
            {menu.map((item, index) => {
              return (
                <a href="#" key={index}>
                  {item}
                </a>
              );
            })}

            <LanguageIcon />
           
          </MenuWrapper>
          <div className="col">
            <Button>Bog'lanish</Button>
          </div>
        </div>
      </header>
    </ParentWrapper>
  );
}

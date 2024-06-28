import React, { useState } from "react";
import Logo from "../Logo/Logo";
import NavbarItem from "../NavbarItem/NavbarItem";
import notification from "../../assets/notification.svg";
import user from "../../assets/user.png";
import down from "../../assets/down.svg";
import briefcase from "../../assets/briefcase.svg";
import message from "../../assets/message.svg";
import payment from "../../assets/payment.svg";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Jobs");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-row w-full justify-between h-[109px] items-center px-4 md:px-8 lg:px-12 xl:px-16">
      <div>
        <Logo />
      </div>
      <div className="hidden md:flex flex-row gap-4 md:gap-6 lg:gap-8 h-fit px-4 py-2 border-[1px] border-[#D1D1D1] rounded-full">
        <NavbarItem
          icon={briefcase}
          field={"Jobs"}
          active={activeItem === "Jobs"}
          onClick={() => setActiveItem("Jobs")}
        />
        <NavbarItem
          icon={message}
          field={"Messages"}
          active={activeItem === "Messages"}
          onClick={() => setActiveItem("Messages")}
        />
        <NavbarItem
          icon={payment}
          field={"Payments"}
          active={activeItem === "Payments"}
          onClick={() => setActiveItem("Payments")}
        />
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex flex-row gap-2 md:gap-4">
          <img
            src={notification}
            alt="Notifications"
            className="w-8 h-auto md:w-10"
          />
          <div className="flex flex-row justify-center items-center gap-2 md:gap-4">
            <img src={user} alt="User" className="w-8 h-8 md:w-10 md:h-10" />
            <img
              src={down}
              alt="Dropdown"
              className="w-3 h-3 md:w-4 md:h-4 hidden md:flex"
            />
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <IoMdClose className="w-8 h-8 text-[#DC4A2D]" />
            ) : (
              <HiMenu className="w-8 h-8 text-[#DC4A2D]" />
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-[109px] left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4 z-10">
          <NavbarItem
            icon={briefcase}
            field={"Jobs"}
            active={activeItem === "Jobs"}
            onClick={() => {
              setActiveItem("Jobs");
              setIsMobileMenuOpen(false);
            }}
          />
          <NavbarItem
            icon={message}
            field={"Messages"}
            active={activeItem === "Messages"}
            onClick={() => {
              setActiveItem("Messages");
              setIsMobileMenuOpen(false);
            }}
          />
          <NavbarItem
            icon={payment}
            field={"Payments"}
            active={activeItem === "Payments"}
            onClick={() => {
              setActiveItem("Payments");
              setIsMobileMenuOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;

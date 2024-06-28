import React from "react";
import { motion } from "framer-motion";

const NavbarItem = ({ icon, field, active, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className={`flex flex-row px-4 py-2 md:px-6 md:py-3 cursor-pointer text-[16px] md:text-[20px] rounded-full align-middle items-center justify-center gap-2 md:gap-4 ${
        active
          ? "bg-[#DC4A2D] border-2 border-[#FCB4A5] rounded-full text-white"
          : "text-[#B0B0B0] hover:bg-[#D1D1D1] hover:bg-opacity-30"
      }`}
      initial={{ scale: 1, opacity: 0.8 }}
      animate={{ scale: active ? 1.1 : 1, opacity: active ? 1 : 0.8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={icon} alt={field} className="w-4 h-4 md:w-6 md:h-6" />
      <p>{field}</p>
    </motion.div>
  );
};

export default NavbarItem;

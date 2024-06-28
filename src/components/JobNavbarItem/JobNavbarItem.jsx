import React from "react";
import { motion } from "framer-motion";

const JobNavbarItem = ({ field, active, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ scale: 1, opacity: 0.8 }}
      animate={{ scale: active ? 1.1 : 1, opacity: active ? 1 : 0.8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <p
        className={`${
          active
            ? "text-[#DC4A2D] border-[#DC4A2D] font-bold border-b-2"
            : "text-[#888888]"
        } text-[16px] md:text-[18px] lg:text-[20px] pb-[10px] cursor-pointer hover:text-[#DC4A2D] hover:border-[#DC4A2D] transition-all duration-300 ease-in-out`}
      >
        {field}
      </p>
    </motion.div>
  );
};

export default JobNavbarItem;

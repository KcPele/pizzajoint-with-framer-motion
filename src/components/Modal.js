import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const bacdropVarients = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};
const Modal = ({ showModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={bacdropVarients}
          animate="visible"
          initial="hidden"
          exit="hidden"
        >
          <motion.div className="modal" variants={modal}>
            <p>Wants to make another Pizza</p>
            <Link to="/">
              <button>Start again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

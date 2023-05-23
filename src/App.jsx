import { ToastContainer } from "react-toastify";
import { About, Education, Experience, MilitaryService, Technologies, Contact } from "./components"
import { motion, useScroll } from "framer-motion"

export const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <motion.div className="fixed top-0 left-0 right-0 bg-teal h-2 origin-left	" style={{ scaleX: scrollYProgress }} />
      <About />

      <Experience />
      <Education />
      <Technologies />
      <MilitaryService />
      <Contact />

    </>
  )
}



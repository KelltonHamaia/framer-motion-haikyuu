import { motion } from "motion/react";

const reveal = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 2
        }
    }
}


export const Header = () => {

    return (
        <motion.img
            className="max-w-64 mx-auto my-8"
            src="/images/Haikyuu-Logo.png"
            variants={reveal}
            whileInView="animate"
            viewport={{ once: false }}
            initial="initial"
            animate="animate"
        />
    );

}

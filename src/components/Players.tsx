import { motion } from "motion/react";
import { teams_data } from "../_data/data";

export const Teams = () => {

    const container = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const item = {
        initial: { opacity: 0, },
        animate: { opacity: 1, duration: .5 },
    }

    const image = {
        initial: { rotate: 0 },
        hover: { rotate: 3, scale: 1.1 }
    }

    return (

        <motion.div
            className='px-20 space-y-10 pb-10'
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            variants={container}
        >
            <motion.h1
                variants={{
                    initial: { scale: 0 },
                    animate: { scale: 1, transition: { duration: .5 } }
                }}
                className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance col-span-full text-center"
            >
                Times
            </motion.h1>

            <motion.div
                className="grid grid-cols-2 gap-10"
                variants={container}
            >
                {teams_data.map((team) => (
                    <motion.div
                        key={team.image}
                        className="border border-zinc-900  h-104 rounded hover:bg-zinc-900"
                        variants={item}
                        whileHover={{ scale: 1.1 }}

                    >
                        <motion.div
                            className="flex gap-5 p-4"
                            whileHover="hover"
                        >
                            <motion.p className="flex-1">
                                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                    {team.team}
                                </h3>
                                <p className="leading-7 not-first:mt-6">{team.description}</p>
                            </motion.p>
                            <motion.img
                                className="flex-1 max-h-96 rounded object-cover"
                                src={team.image}
                                variants={image}
                            />

                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );

}

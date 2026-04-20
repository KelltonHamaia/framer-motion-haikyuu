import { motion } from "motion/react";

const container = {
    hidden: {},
    show: {
        transition: {
            delay: 4,
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

const appear = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0
    },
}

export const BannerArea = () => {

    return (
        <motion.div
            className="grid grid-cols-2 gap-4 p-20"
            variants={container}
            initial="hidden"
            animate="show"
            whileInView="animate"
            viewport={{ once: false }}
        >
            <motion.div
                className="text-3xl text-pretty tracking-tight leading-relaxed px-10 "
                variants={item}
            >
                <motion.div
                    className="flex flex-col gap-16"
                    variants={container}
                    initial="hidden"
                    animate="show"
                    whileInView="animate"
                    viewport={{ once: false }}
                >
                    <motion.h1 variants={item} className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
                        Haikyuu
                    </motion.h1>
                    <motion.p variants={item} className="scroll-m-20 text-xl font-semibold tracking-tight leading-loose">
                        A história acompanha Hinata Shoyo, um garoto de baixa estatura
                        que sonha em se tornar um grande jogador de vôlei, inspirado pelo lendário <span className="text-orange-400">“Pequeno Gigante”</span>.
                        Ao entrar no colégio <span className="text-orange-400">Karasuno</span>, ele encontra rivalidade, amizade e um time em reconstrução
                        que busca recuperar seu antigo prestígio.
                        No anime, cada jogo é construído com estratégia, técnica e muita tensão emocional, onde cada ponto importa como se fosse decisivo.
                        O anime se destaca por transformar movimentos esportivos em algo dinâmico e quase cinematográfico,
                        com uma narrativa que mantém o ritmo acelerado e envolvente.
                    </motion.p>
                </motion.div>
            </motion.div>
            <motion.img
                variants={appear}
                src="/images/banner.png"
                className="rounded hover:scale-110 transition"
            />
        </motion.div>
    );

}

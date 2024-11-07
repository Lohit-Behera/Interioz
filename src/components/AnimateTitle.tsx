import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function AnimateTitle({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center">
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -30 },
          }}
          transition={{
            duration: 0.5,
            ease: [0.12, 0.8, 0.17, 0.89],
            delay: (index + 1) * 0.3,
          }}
          className={cn("inline-block mr-2", className)}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}

export default AnimateTitle;

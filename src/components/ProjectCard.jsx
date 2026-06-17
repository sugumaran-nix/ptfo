import { motion } from 'framer-motion';

export default function ProjectCard({ image, title, desc, tags, delay = 0 }) {
  return (
    <motion.div
      className="rounded-xl overflow-hidden border border-borderLight dark:border-borderDark bg-cardLight dark:bg-cardDark flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
    >
      <div className="w-full aspect-[16/10] overflow-hidden bg-black/5 dark:bg-white/5">
        <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="p-5 flex flex-col gap-2.5 flex-1">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-sm text-inkMuted dark:text-white/60 leading-relaxed flex-1">{desc}</p>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-ink dark:text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

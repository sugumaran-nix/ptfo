import { motion } from 'framer-motion';

/**
 * Single labeled proficiency bar that animates its fill width
 * when scrolled into view. Mount the parent list with client:visible.
 */
export default function ProficiencyBar({ label, percent, delay = 0 }) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-ink dark:text-white">{label}</span>
        <span className="text-sm text-inkMuted dark:text-white/60">{percent}%</span>
      </div>
      <div className="w-full h-1.5 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-accent dark:bg-accentDark"
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

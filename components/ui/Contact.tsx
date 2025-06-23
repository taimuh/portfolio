import { PERSONAL_INFO, UI_TEXT } from '@/lib/constants';

export function Contact() {
  return (
    <section id="contact" className={STYLES.section}>
      <div className={STYLES.container}>
        <h3 className={STYLES.title}>{UI_TEXT.sections.contactInfo}</h3>
        <div className={STYLES.content}>
          <div className={STYLES.contactItem}>
          <svg className={STYLES.icon}  width="24" height="24" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
            <span>{PERSONAL_INFO.xHandle}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const STYLES = {
  section: "bg-neutral-200 dark:bg-gray-700 py-16",
  container: "bg-neutral-200 dark:bg-gray-700 rounded-lg p-8 flex flex-col items-center justify-center",
  title: "text-xl font-semibold mb-6",
  content: "space-y-4",
  contactItem: "flex items-center space-x-3",
  icon: "h-6 w-6 text-slate-900",
} as const;
import { PERSONAL_INFO, UI_TEXT } from '@/lib/constants';

export function Contact() {
  return (
    <section id="contact" className="bg-neutral-200 dark:bg-gray-700 py-16">
      <div className="bg-neutral-200 dark:bg-gray-700 rounded-lg p-8 flex flex-col items-center justify-center">
        <h3 className="text-xl font-semibold mb-6">{UI_TEXT.sections.contactInfo}</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
          <svg className="h-6 w-6 text-slate-900"  width="24" height="24" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
            <span>{PERSONAL_INFO.xHandle}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
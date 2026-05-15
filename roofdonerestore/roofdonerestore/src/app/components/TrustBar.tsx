import React from 'react';

const TRUST_ITEMS = [
  {
    label: 'Licensed & Bonded',
    path: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z',
  },
  {
    label: 'Fast Response Time',
    path: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    label: 'Free Inspections',
    path: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    label: 'Insurance Claim Experts',
    path: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z',
  },
  {
    label: '5-Year Warranty',
    path: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93C9.33 17.79 7 14.5 7 11V7.18L12 5z',
  },
];

export default function TrustBar() {
  return (
    <div className="bg-accent py-4 overflow-hidden" aria-label="Trust signals">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
          {TRUST_ITEMS?.map(({ label, path }) => (
            <li key={label} className="flex items-center gap-2 text-white text-[0.83rem] font-semibold whitespace-nowrap">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white/85 flex-shrink-0" aria-hidden="true">
                <path d={path} />
              </svg>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
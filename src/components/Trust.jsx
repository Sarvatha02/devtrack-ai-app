import React from 'react';

const Trust = () => {
  const logos = [
    { name: 'Google', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Amazon', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Microsoft', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Meta', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'Netflix', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-text/40 mb-10 uppercase tracking-widest">
          Trusted by developers at world-class companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <div key={logo.name} className="h-6 md:h-8 hover:opacity-100 transition-opacity">
              <img 
                src={logo.icon} 
                alt={logo.name} 
                className="h-full w-auto invert brightness-0" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;

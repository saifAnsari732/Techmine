import { motion } from 'framer-motion';

const brands = [
  {
    name: 'Sri Shyam Foundation',
    image: '/sre.png',
  },
  {
    name: 'Tejomarg',
    image: '/3.png',
    url:"https://tejomarg.com/"
  },
  {
    name: 'KisanChoice',
    image: '/4.png',
    url: "https://www.kisangroups.co.in/"
  },
  {
    name: 'News 24',
    image: '/2.png',
  },
  {
    name: 'GV Computer Center',
    image: '/gv_computer_center.jpg',
  },
];

const Brands = () => {
  return (
    <section className="py-6 bg-bg-color relative overflow-hidden border-t border-[var(--border-color)]">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-sm md:text-base uppercase tracking-[0.4em] font-bold ">
          Our Trusted Partners
        </p>
      </div>

      <div className="flex overflow-hidden relative">
        
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25,
              ease: 'linear',
            },
          }}
          className="flex items-center gap-24 whitespace-nowrap px-10"
        >
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center shrink-0"
            >
              <a href={brand.url} target="_blank" rel="noopener noreferrer">
              <img
                src={brand.image}
                alt={brand.name}
                className="
                  h-[40px]
                  sm:h-[50px]
                  md:h-[60px]
                  lg:h-[70px]
                  w-auto
                  object-contain
                  opacity-80
                  hover:opacity-100
                  transition-all
                  duration-500
                  hover:scale-105
                "
              />
              </a>
            </div>
          ))}
        </motion.div>

        {/* Left Gradient */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg-color to-transparent z-10" />

        {/* Right Gradient */}
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg-color to-transparent z-10" />
      </div>
    </section>
  );
};

export default Brands;
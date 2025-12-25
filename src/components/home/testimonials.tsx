export const Testimonials = () => {
  const cardsData = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Briar Martin",
      handle: "@neilstellar",
      date: "April 20, 2025",
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Avery Johnson",
      handle: "@averywrites",
      date: "May 10, 2025",
    },
    {
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
      name: "Jordan Lee",
      handle: "@jordantalks",
      date: "June 5, 2025",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
      name: "Alex Rivera",
      handle: "@alexbuilds",
      date: "July 15, 2025",
    },
  ];

  // The only changes are inside this CreateCard component
  const CreateCard = ({ card }: { card: (typeof cardsData)[0] }) => (
    <div className="mx-4 w-72 shrink-0 rounded-md border-2 border-black bg-white p-4 shadow-[4px_4px_0px_#000] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000]">
      {/* CARD HEADER */}
      <div className="flex items-center gap-3">
        <img
          className="size-11 rounded-full border-2 border-black"
          src={card.image}
          alt="User Image"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <p className="font-bold text-black">{card.name}</p>
            {/* Verified SVG */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"
                fill="#2196F3"
              />
            </svg>
          </div>
          <span className="text-sm text-gray-600">{card.handle}</span>
        </div>
      </div>

      {/* CARD BODY */}
      <p className="py-4 text-black">
        Radiant made undercutting all of our competitors an absolute breeze.
      </p>

      {/* CARD FOOTER */}
      <div className="flex items-center justify-between border-t-2 border-black pt-2 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <span>Posted on</span>
          <a
            href="https://x.com"
            target="_blank"
            className="hover:text-sky-500"
          >
            {/* X Logo SVG */}
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z" />
            </svg>
          </a>
        </div>
        <p>{card.date}</p>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
        }
        .marquee-inner {
            animation: marqueeScroll 25s linear infinite;
        }
        .marquee-reverse {
            animation-direction: reverse;
        }
      `}</style>
      <div className="marquee-row relative mx-auto w-full max-w-5xl overflow-hidden">
        {/* ... Marquee structure remains the same ... */}
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-[#f9f9f9] to-transparent"></div>
        <div className="marquee-inner flex min-w-[200%] transform-gpu pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-[#f9f9f9] to-transparent md:w-40"></div>
      </div>
      <div className="marquee-row relative mx-auto w-full max-w-5xl overflow-hidden">
        {/* ... Marquee structure remains the same ... */}
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-[#f9f9f9] to-transparent"></div>
        <div className="marquee-inner marquee-reverse flex min-w-[200%] transform-gpu pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-[#f9f9f9] to-transparent md:w-40"></div>
      </div>
    </>
  );
};

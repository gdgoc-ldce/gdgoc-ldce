import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";

export const Testimonials = () => {
  const doodleAvatar = "/images/person.jpg";
  const cardsData = [
    {
      image: doodleAvatar,
      name: "Piyush Bhati",
      handle: "LDCE'28",
      date: "2 weeks ago",
      text: `Wrapping up an amazing journey through the Google Cloud Study Jams! Thanks to GDGoC-LDCE, I got the opportunity to dive deep into Google Cloud’s ecosystem hands-on, project-based, and surprisingly fun. Ended up 23rd on the leaderboard, which I’ll gladly take as a win! Shoutout to our amazing team lead ATHARVA CHITRE for guiding us through this journey and keeping the whole squad moving forward!`,
      link: "https://www.linkedin.com/posts/piyush-bhati_googlecloud-studyjams-gdg-activity-7403464564618563584-UyRc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW-Z4kBo4FnCOhnLL8kXccytk8pXc8N4g0",
    },
    {
      image: doodleAvatar,
      name: "Sachin Baghel",
      handle: "Sales & Ops Manager | Textile Eng. Student",
      date: "2 weeks ago",
      text: `As a participant of GDGoC, I have learned many things, and with the help of the team and coordination with participants, I have enrolled on this. I’m excited to continue growing with GDG Falcon! GDGoC-LDCE`,
      link: "https://www.linkedin.com/posts/sachinbaghel-eng_sachin-baghel-google-skills-activity-7403059391161057280-_OCh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW-Z4kBo4FnCOhnLL8kXccytk8pXc8N4g0",
    },
    {
      image: doodleAvatar,
      name: "Yash Prajapati",
      handle: "Computer Student @ LDCE",
      date: "2 weeks ago",
      text: `Thrilled to announce that I’ve completed the Google Cloud Study Jam 2025, a 1-month cloud learning program organized by GDGoC-LDCE. This program helped me strengthen my cloud fundamentals through hands-on labs and real-world practice. Excited to apply these skills in upcoming projects. ☁️🚀`,
      link: "https://www.linkedin.com/posts/yash-prajapati-b95abb317_googlecloud-studyjam2025-cloudcomputing-activity-7403045687858556928-si_4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW-Z4kBo4FnCOhnLL8kXccytk8pXc8N4g0",
    },
    {
      image: doodleAvatar,
      name: "Parv Shah",
      handle: "Tech Team @ MSA LDCE & GDGoC LDCE",
      date: "2 weeks ago",
      text: `Leveled up my cloud game! 🚀 So stoked to have crushed the Google Cloud Study Jam 2025 organized by GDGoC-LDCE. Ready to build some amazing things with these new skills. Lets goooooooooo 🔥!`,
      link: "https://www.linkedin.com/posts/parv-shah-9a1a48287_googlecloud-studyjam2025-cloudcomputing-activity-7403052706661142528-6Ki_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW-Z4kBo4FnCOhnLL8kXccytk8pXc8N4g0",
    },
    {
      image: doodleAvatar,
      name: "Yug Shah",
      handle: "Freshman @ LDCE",
      date: "2 months ago",
      text: `Excited to share that I've joined the GDGoC-LDCE as part of the Social Media and Photography Team! ✨ This opportunity is a great step toward combining my passion for creativity, communication, and technology. Looking forward to connecting with fellow tech enthusiasts, sharing insights about the latest in technology, and creating engaging content that brings our developer community together.`,
      link: "https://www.linkedin.com/posts/yugshah586_gdgoc-googledevelopers-contentcreation-activity-7387480439935971328-SyZZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW-Z4kBo4FnCOhnLL8kXccytk8pXc8N4g0",
    },
  ];

  const CreateCard = ({ card }: { card: (typeof cardsData)[0] }) => {
    const CardContent = (
      <div className="mx-4 w-72 shrink-0 cursor-pointer rounded-md border-2 border-black bg-white p-4 shadow-[4px_4px_0px_#000] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000]">
        <div className="flex items-center gap-3">
          <img
            className="size-11 rounded-full border-2 border-black"
            src={card.image}
            alt="User Image"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <p className="font-bold text-black">{card.name}</p>
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

        <p className="py-4 text-black">
          {card.text.length > 220 ? card.text.slice(0, 220) + "..." : card.text}
        </p>

        <div className="flex items-center justify-between border-t-2 border-black pt-2 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <span>Posted on</span>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-sky-500"
            >
              <FaLinkedin />
            </Link>
          </div>
          <p>{card.date}</p>
        </div>
      </div>
    );
    return card.link ? (
      <a
        href={card.link}
        target="_blank"
        rel="nofollow noreferrer"
        style={{ textDecoration: "none" }}
      >
        {CardContent}
      </a>
    ) : (
      CardContent
    );
  };

  return (
    <section className="relative flex flex-col items-center gap-6 py-16">
      <div className="relative flex flex-col items-center text-center">
        <div className="font-title relative flex flex-wrap items-center justify-center gap-3 text-4xl font-black text-gray-900 md:text-6xl">
          {["What", "People Say", "About Us"].map((word, idx) => (
            <span
              key={word}
              className="rounded-lg border-4 border-black bg-white px-4 py-1 shadow-[4px_4px_0px_#000]"
            >
              {word}
            </span>
          ))}
        </div>
        <p className="mt-3 max-w-2xl text-base text-gray-600">
          Real stories from the GDGoC LDCE community, straight from their
          LinkedIn feeds.
        </p>
      </div>
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
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-linear-to-r from-[#f9f9f9] to-transparent"></div>
        <div className="marquee-inner flex min-w-[200%] transform-gpu pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-linear-to-l from-[#f9f9f9] to-transparent md:w-40"></div>
      </div>
      <div className="marquee-row relative mx-auto w-full max-w-5xl overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-linear-to-r from-[#f9f9f9] to-transparent"></div>
        <div className="marquee-inner marquee-reverse flex min-w-[200%] transform-gpu pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-linear-to-l from-[#f9f9f9] to-transparent md:w-40"></div>
      </div>
    </section>
  );
};

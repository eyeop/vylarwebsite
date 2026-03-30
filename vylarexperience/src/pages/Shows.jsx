export default function Shows() {
  const upcomingShows = [
    {
      date: "More dates soon",
      venue: "Upcoming live shows are being scheduled now.",
      location: "Follow Vylar for new announcements.",
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 pt-6 pb-16 text-black">
      <div className="w-full max-w-3xl rounded-3xl bg-black/60 px-6 py-8 text-center text-gray-100 shadow-xl backdrop-blur-sm">
        <p className="text-sm uppercase tracking-[0.35em] text-gray-300">Live</p>
        <h1 className="mt-3 text-4xl font-semibold">Shows</h1>
        <p className="mt-4 text-base text-gray-200 sm:text-lg">
          Upcoming performances and booking updates will land here first.
        </p>
        <a
          href="https://instagram.com/vylarexperience"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-gray-100 transition hover:bg-gray-100 hover:text-black active:scale-95"
        >
          Follow on Instagram
        </a>
      </div>

      <div className="mt-8 grid w-full max-w-3xl gap-4">
        {upcomingShows.map((show) => (
          <article
            key={show.date}
            className="rounded-2xl bg-white/70 px-6 py-5 shadow-lg backdrop-blur-sm"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-gray-600">{show.date}</p>
            <h2 className="mt-2 text-2xl font-semibold">{show.venue}</h2>
            <p className="mt-2 text-base text-gray-700">{show.location}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

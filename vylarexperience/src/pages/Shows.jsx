const shows = [
  {
    date: "2026-04-03",
    dateEn: "Fri, Apr 3",
    venueEn: "Banpo Hangang Park, Banpo Bridge Moonlight Rainbow Fountain",
    venueKo: "반포한강공원 반포대교 달빛무지개분수",
    timeEn: "Starts at 6:30 PM",
    mapUrl: "https://naver.me/5LHsKvrH",
    mapLabel: "Open in Naver Map",
  },
  {
    date: "2026-04-04",
    dateEn: "Sat, Apr 4",
    venueEn: "Hongdae Busking Zone 1",
    venueKo: "홍대 버스킹존1",
    timeEn: "Starts at 6:30 PM",
    mapUrl: "https://naver.me/5jXWJkxb",
    mapLabel: "Open in Naver Map",
  },
  {
    date: "2026-04-09",
    dateEn: "Thu, Apr 9",
    venueEn: "Konkuk University Cozy Zone",
    venueKo: "건국대학교 행정관 앞 잔디밭",
    timeEn: "12:00 PM to 12:30 PM",
    mapUrl: "https://naver.me/FlBYZrYY",
    mapLabel: "Open in Naver Map",
  },
];

function getTodayInSeoul() {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const parts = formatter.formatToParts(new Date());
  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  return `${year}-${month}-${day}`;
}

function ShowCard({ show }) {
  return (
    <article className="rounded-3xl bg-black/60 px-6 py-6 shadow-xl backdrop-blur-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">{show.dateEn}</p>
        </div>
      </div>

      <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-[2rem]">
        {show.venueEn}
      </h2>
      <p className="mt-2 text-sm text-gray-400">{show.venueKo}</p>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-lg font-medium text-gray-100">{show.timeEn}</p>
          {show.noteEn ? <p className="mt-3 text-sm text-gray-400">{show.noteEn}</p> : null}
        </div>

        {show.mapUrl ? (
          <a
            href={show.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-100 transition hover:bg-gray-100 hover:text-black"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M12 2a7 7 0 0 0-7 7c0 5.08 6.13 12.08 6.39 12.38a.82.82 0 0 0 1.22 0C12.87 21.08 19 14.08 19 9a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
            </svg>
            {show.mapLabel}
          </a>
        ) : (
          <div className="rounded-full border border-white/15 px-4 py-2 text-sm text-gray-400">
            Map details soon
          </div>
        )}
      </div>
    </article>
  );
}

export default function Shows() {
  const todayInSeoul = getTodayInSeoul();
  const sortedShows = [...shows].sort((a, b) => a.date.localeCompare(b.date));
  const upcomingShows = sortedShows.filter((show) => show.date >= todayInSeoul);
  const pastShows = sortedShows
    .filter((show) => show.date < todayInSeoul)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="flex flex-col items-center px-4 pt-6 pb-16 text-white">
      <div className="w-full max-w-[44rem] rounded-3xl bg-black/60 px-6 py-6 text-center text-gray-100 shadow-xl backdrop-blur-sm sm:px-8">
        <p className="text-sm uppercase tracking-[0.35em] text-gray-300">Live</p>
        <h1 className="mt-3 text-4xl font-semibold">Shows</h1>
        <p className="mt-3 text-base text-gray-200 sm:text-lg">
          Upcoming performances
        </p>
      </div>

      <div className="mt-8 grid w-full max-w-[44rem] gap-4">
        {upcomingShows.length > 0 ? (
          upcomingShows.map((show) => (
            <ShowCard key={`${show.date}-${show.venueEn}`} show={show} />
          ))
        ) : (
          <div className="rounded-3xl bg-black/60 px-6 py-6 text-center text-gray-300 shadow-xl backdrop-blur-sm">
            No upcoming shows right now. Check back soon.
          </div>
        )}
      </div>

      {pastShows.length > 0 ? (
        <details className="mt-6 w-full max-w-[44rem] rounded-3xl bg-black/50 px-6 py-5 shadow-xl backdrop-blur-sm">
          <summary className="cursor-pointer list-none text-base font-medium text-gray-100">
            <span className="inline-flex items-center gap-2">
              View past shows
              <span className="rounded-full border border-white/15 px-2 py-0.5 text-xs text-gray-400">
                {pastShows.length}
              </span>
            </span>
          </summary>

          <div className="mt-4 grid gap-4">
            {pastShows.map((show) => (
              <ShowCard key={`${show.date}-${show.venueEn}`} show={show} />
            ))}
          </div>
        </details>
      ) : null}
    </div>
  );
}

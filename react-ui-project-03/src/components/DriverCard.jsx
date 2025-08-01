import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const drivers = [
  {
    name: "Charles Leclerc",
    img: "/driver/leclerc.jpg",
    bg: "/driver/lerler.jpg",
    desc: "Monégasque, cepat, agresif, 5x GP Winner.",
    photo: "/driver/lecler2.jpg",
    stats: [
      { label: "GP Wins", value: 5 },
      { label: "Pole Positions", value: 24 },
      { label: "Podiums", value: 34 },
      { label: "Seasons", value: 7 },
      { label: "Grand Prix Entered", value: 160 },
      { label: "Career Points", value: 1569 },
      { label: "Highest Race Finish", value: "1 (x8)" },
      { label: "Highest Grid Position", value: "1 (x26)" },
      { label: "Pole Positions", value: 26 },
      { label: "World Championships", value: 0 },
      { label: "DNFs", value: 21 },
    ],
    biography: {
      birthDate: "16/10/1997",
      birthPlace: "Monte Carlo, Monaco",
      quote:
        "WHATEVER THE POSITION IS AT STAKE, YOU'VE GOT TO DO YOUR ABSOLUTE BEST AS A DRIVER WHETHER YOU'RE FIGHTING FOR THE FIFTH, FOURTH OR FIRST POSITION.",
      story:
        "Charles Leclerc, pembalap asal Monaco, tiba di F1 dengan reputasi mentereng setelah menjuarai GP3 dan Formula 2. Dikenal dengan kemampuannya mencetak pole position dan memenangkan balapan, ia juga terbukti mampu mengatasi tekanan.\n\nPada 2018, Leclerc debut di F1 bersama tim Sauber dan menunjukkan performa impresif yang membuatnya dilirik Ferrari. Ia bergabung dengan tim Scuderia pada 2019, menggantikan Kimi Raikkonen. Di sana, ia langsung tampil menantang Sebastian Vettel, memenangkan balapan perdananya di Spa dan diikuti kemenangan di Monza. Ia menjadi pembalap pertama yang mengalahkan perolehan poin Vettel dalam satu musim bersama Ferrari.\n\nPada musim 2022, Leclerc menjadi penantang serius bagi Max Verstappen, meraih tiga kemenangan dan sembilan pole position. Sayangnya, ia dan tim Ferrari gagal mengulang performa tersebut di musim berikutnya.\n\nDi luar lintasan, Leclerc dikenal rendah hati. Ia memiliki motivasi kuat untuk balapan demi mendiang ayahnya, Hervé, dan mentornya, Jules Bianchi.",
    },
  },
  {
    name: "Lewis Hamilton",
    img: "/driver/lewis.jpeg",
    bg: "/driver/lewis.jpeg",
    photo: "/driver/lewiss.jpg",
    desc: "Legenda F1, 7x World Champion. Bergabung Ferrari 2025.",
    stats: [
      { label: "GP Wins", value: 103 },
      { label: "Pole Positions", value: 104 },
      { label: "Podiums", value: 197 },
      { label: "Seasons", value: 18 },
      { label: "Grand Prix Entered", value: 369 },
      { label: "Career Points", value: 4971.5 },
      { label: "Highest Race Finish", value: "1 (x105)" },
      { label: "Highest Grid Position", value: "1 (x104)" },
      { label: "Pole Positions", value: 104 },
      { label: "World Championships", value: 7 },
      { label: "DNFs", value: 32 },
      { label: "Podiums (updated)", value: 202 },
    ],
    biography: {
      birthDate: "07/01/1985",
      birthPlace: "Stevenage, England",
      quote:
        "DRIVING A SCUDERIA FERRARI HP CAR FOR THE FIRST TIME WAS ONE OF THE BEST FEELINGS OF MY LIFE.",
      story:
        "‘Still I Rise’ – these are the words emblazoned across the back of Lewis Hamilton’s helmet and tattooed across his shoulders, and ever since annihilating expectations with one of the greatest rookie performances in F1 history in 2007, that’s literally all he’s done: risen to the top of the all-time pole positions list ahead of his hero Ayrton Senna, surged into first place in the wins column surpassing the inimitable Michael Schumacher, and then matched the legendary German’s seven world titles.\n\nIs he the G.O.A.T? Few would deny that he’s in the conversation – and what’s more he’s got there his way, twinning his relentless speed with a refusal to conform to stereotypes for how a racing driver should think, dress or behave.\n\nRespect is hard earned in F1, but Hamilton – Sir Lewis Hamilton to be precise – has it from every one of his peers. Why? Because they know that whatever the track, whatever the conditions, whatever the situation, when his visor goes down and the lights go out, it’s Hammertime.",
    },
  },
];

const DataTeam = {
  bg: "/driver/ferrarii.jpg",
  name: "Scuderia Ferrari",
  logo: "/teams/ferrari-logo.png",
  summaryStats: [
    { label: "Grand Prix Entered", value: 1112 },
    { label: "Team Points", value: 10525 },
    { label: "Highest Race Finish", value: "1 (x249)" },
    { label: "Podiums", value: 637 },
    { label: "Highest Grid Position", value: "1 (x253)" },
    { label: "Pole Positions", value: 253 },
    { label: "World Championships", value: 16 },
  ],
  description:
    "For many, Ferrari and Formula 1 racing have become inseparable. The only team to have competed in every season since the world championship began, the Prancing Horse has grown from the humble dream of founder Enzo Ferrari to become one of the most iconic and recognised brands in the world. Success came quickly through the likes of Alberto Ascari and John Surtees, and continued – in amongst leaner times – with Niki Lauda in the 1970s and then Michael Schumacher in the 2000s, when Ferrari claimed a then unprecedented five consecutive title doubles, securing their status as the most successful and decorated team in F1 history...",
  history: [
    {
      year: 2024,
      summary:
        "Team Principal Fred Vasseur’s leadership starts to gel and strong campaign sees Charles Leclerc and Carlos Sainz take five wins between them. Runners-up in the constructors’ standings, losing out to McLaren at the final round. Lewis Hamilton signed to replace Sainz for 2025.",
    },
    {
      year: 2023,
      summary:
        "Only team other than Red Bull to win a race – Carlos Sainz in Singapore – but an otherwise frustrating campaign of mixed fortunes sees team narrowly lose out to Mercedes for P2 in the constructors’ table, despite six pole positions and nine podiums.",
    },
  ],
};

const DriverCard = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-10 ">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ZWKp63JTvgE?autoplay=1&mute=1&loop=1&playlist=ZWKp63JTvgE&controls=0&showinfo=0&modestbranding=1"
            title="Background Video"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>

        <div className="absolute  h-full z-20 top-1/4">
          <h1 className="text-[200px] text-red-800 font-black ">FERRARI</h1>
        </div>
      </section>
      <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-black">
        <div className="text-white text-center">
          <img
            src={DataTeam.bg}
            alt="Logo"
            className=" absolute object-cover w-full h-full left-0 top-0"
          />
          <div className="absolute text-red-800 text-justify mt-[17rem]  bg-white/15 p-4 rounded-xl">
            <h1 className="text-5xl font-bold mb-4">{DataTeam.name}</h1>
            <p className="max-w-4xl mx-auto text-lg leading-relaxed text-left">
              {DataTeam.description}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-black px-8 md:px-24 py-20 text-gray-200">
        <h2 className="text-4xl font-bold mb-6">Team History</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {DataTeam.history.map((yearData) => (
            <div key={yearData.year}>
              <h3 className="text-2xl font-semibold mb-2">{yearData.year}</h3>
              <p>{yearData.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative w-full min-h-screen overflow-hidde items-center justify-center n flex flex-col">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src="https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-6/487307814_1073650438133878_5288230973477624107_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XyoOQcPbaXgQ7kNvwE1xXZr&_nc_oc=AdmGXhcoZerCzAJf69b-ajdleBX6YCLc1O7xVYfJJlg0-CshyNiG4SOnmvEVuyvTF2A&_nc_zt=23&_nc_ht=scontent.fjog3-1.fna&_nc_gid=Qy3bVSiT26n6aBNhE1vKZA&oh=00_AfRBF56FzQ4Lta7uylxpVyIiR88EpHKmqZn3J204HzAfgQ&oe=688EB4EB"
            alt="driver"
            className="w-full h-full object-cover "
            style={{ objectPosition: "center 10%" }}
          />
        </div>

        <h1 className="absolute z-10 text-[180px] font-black top-4">DRIVER</h1>
      </section>

      {drivers.map((d, index) => (
        <section key={d.name} className="relative h-screen flex items-center ">
          <img
            src={d.bg}
            alt={d.name}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70">
            <div
              className={`relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-8 md:px-10 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="flex flex-col items-center justify-center -mt-[8rem]">
                <img
                  src={d.photo}
                  alt={d.name}
                  className="h-55 w-55 md:h-60 md:w-60 object-cover rounded-full"
                />
                <div className=" mt-6 w-full max-w-2xl ">
                  <div className="flex flex-col items-center justify-center">
                    {" "}
                    <span className="text-sm text-gray-400">
                      {d.biography.birthDate}
                    </span>
                    <span className="text-sm text-gray-400 mb-2">
                      {d.biography.birthPlace}
                    </span>
                  </div>

                  {d.biography.story.split("\n\n").map((paragraph, idx) => (
                    <div className="items-start text-justify w-[30rem]">
                      <p
                        key={idx}
                        className="mt-4 text-base leading-relaxed text-white"
                      >
                        {paragraph}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="max-w-xl text-center md:text-left mt-[26rem] ">
                <h2 className="text-5xl font-black mb-20 uppercase">
                  {d.name}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {d.stats.map((s) => (
                    <div key={s.label} className="">
                      <span className="block text-4xl font-bold text-red-700">
                        {s.value}
                      </span>
                      <span className="text-xl font-boldtext-gray-400">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default DriverCard;

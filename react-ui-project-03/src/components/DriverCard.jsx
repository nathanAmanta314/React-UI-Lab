import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const DataTeam1 = {
  bg: "/teams/redbull-bg.jpg",
  name: "Oracle Red Bull Racing",
  logo: "/teams/redbull-logo.png",
  summaryStats: [
    { label: "Grand Prix Entered", value: 408 },
    { label: "Team Points", value: 8031 },
    { label: "Highest Race Finish", value: "1 (x124)" },
    { label: "Podiums", value: 223 },
    { label: "Highest Grid Position", value: "1 (x107)" },
    { label: "Pole Positions", value: 107 },
    { label: "World Championships", value: 6 },
  ],
  description:
    "Red Bull memasuki F1 sebagai tim penuh pada 2004 setelah bertahun-tahun menjadi sponsor. Sejak podium pertama mereka pada 2006, Red Bull dengan cepat menjadi kekuatan dominan, terutama selama era kejayaan 2010–2013 bersama Sebastian Vettel. Kini, dengan Max Verstappen, Red Bull kembali meraih kejayaan sebagai kekuatan utama di F1 modern.",
  history: [
    {
      year: 2024,
      summary:
        "Max Verstappen memenangkan 7 dari 10 balapan pertama namun gagal menang di 10 balapan terakhir, meski tetap meraih gelar keempatnya. Tim turun ke posisi 3 konstruktor di belakang McLaren dan Ferrari, dan Adrian Newey hengkang ke Aston Martin.",
    },
    {
      year: 2023,
      summary:
        "RB19 nyaris tak terkalahkan. Red Bull memenangkan semua balapan kecuali satu dan meraih gelar konstruktor dan pembalap. Verstappen dan Perez finis 1–2 di klasemen pembalap.",
    },
  ],
};

const drivers1 = [
  {
    name: "Max Verstappen",
    img: "/driver/max.jpg",
    bg: "/driver/max-bg.jpg",
    photo: "/driver/max-profile.jpg",
    desc: "Juara dunia 4x, agresif & insting tajam.",
    stats: [
      { label: "Grand Prix Entered", value: 223 },
      { label: "Career Points", value: 3210.5 },
      { label: "Highest Race Finish", value: "1 (x65)" },
      { label: "Podiums", value: 117 },
      { label: "Highest Grid Position", value: "1 (x44)" },
      { label: "Pole Positions", value: 44 },
      { label: "World Championships", value: 4 },
      { label: "DNFs", value: 33 },
    ],
    biography: {
      birthDate: "30/09/1997",
      birthPlace: "Hasselt, Belgium",
      quote: "I HATE LOSING!",
      story:
        "Max Verstappen menjadi pembalap termuda F1 saat debut di usia 17 tahun. Setelah debut kemenangan gemilang bersama Red Bull di Barcelona 2016, kariernya melesat. Juara dunia sejak 2021, Verstappen telah mendominasi F1 dengan gaya balap agresif dan kemampuan luar biasa dalam segala kondisi.",
    },
  },
  {
    name: "Yuki Tsunoda",
    img: "/driver/tsunoda.jpg",
    bg: "/driver/tsunoda-bg.jpg",
    photo: "/driver/tsunoda-profile.jpg",
    desc: "Berani, cepat, dan kini pembalap Red Bull utama.",
    stats: [
      { label: "Grand Prix Entered", value: 101 },
      { label: "Career Points", value: 101 },
      { label: "Highest Race Finish", value: "4 (x1)" },
      { label: "Podiums", value: 0 },
      { label: "Highest Grid Position", value: "3 (x1)" },
      { label: "Pole Positions", value: 0 },
      { label: "World Championships", value: 0 },
      { label: "DNFs", value: 15 },
    ],
    biography: {
      birthDate: "11/05/2000",
      birthPlace: "Sagamihara, Japan",
      quote:
        "I REALLY LIKE TO BATTLE AND I DON'T LOSE MUCH WHEN BATTLE HAPPENS.",
      story:
        "Tsunoda naik ke F1 hanya dalam 3 tahun dari F4 Jepang, dan kini membalap untuk tim utama Red Bull pada 2025. Meski awalnya adaptasinya lambat, ia berkembang menjadi pembalap penuh determinasi dan potensi besar untuk mencetak sejarah bagi Jepang.",
    },
  },
];

const DataTeam2 = {
  bg: "/teams/mclaren-bg.jpg",
  name: "McLaren Formula 1 Team",
  logo: "/teams/mclaren-logo.png",
  summaryStats: [
    { label: "Grand Prix Entered", value: 985 },
    { label: "Team Points", value: 7509.5 },
    { label: "Highest Race Finish", value: "1 (x200)" },
    { label: "Podiums", value: 437 },
    { label: "Highest Grid Position", value: "1 (x172)" },
    { label: "Pole Positions", value: 172 },
    { label: "World Championships", value: 9 },
  ],
  description:
    "McLaren telah menjadi bagian penting dalam sejarah F1 sejak 1966. Dengan legenda seperti Senna, Prost, hingga Hamilton membalap untuk mereka, tim ini telah mengumpulkan banyak kemenangan dan gelar. Kini, dengan duet Norris-Piastri, McLaren kembali ke papan atas kompetisi.",
  history: [
    {
      year: 2024,
      summary:
        "Kembali meraih gelar konstruktor pertama sejak 1998. Norris menang 4 kali, Piastri 2 kali, mengalahkan Red Bull dan Ferrari.",
    },
    {
      year: 2023,
      summary:
        "Setelah start lambat, tim menjadi penantang podium reguler dengan total 9 podium dari Norris dan Piastri.",
    },
  ],
};

const drivers2 = [
  {
    name: "Lando Norris",
    img: "/driver/norris.jpg",
    bg: "/driver/norris-bg.jpg",
    photo: "/driver/norris-profile.jpg",
    desc: "Cepat, kreatif, McLaren’s star.",
    stats: [
      { label: "Grand Prix Entered", value: 142 },
      { label: "Career Points", value: 1282 },
      { label: "Highest Race Finish", value: "1 (x9)" },
      { label: "Podiums", value: 38 },
      { label: "Highest Grid Position", value: "1 (x13)" },
      { label: "Pole Positions", value: 13 },
      { label: "World Championships", value: 0 },
      { label: "DNFs", value: 12 },
    ],
    biography: {
      birthDate: "13/11/1999",
      birthPlace: "Bristol, England",
      quote: "I'M READY TO BRING THE FIGHT TO EVERYONE.",
      story:
        "Lando Norris masuk F1 bersama McLaren pada 2019 dan menjadi salah satu pembalap muda paling konsisten. Musim 2024 jadi terobosan dengan 4 kemenangan dan posisi runner-up kejuaraan, membawa McLaren juara konstruktor.",
    },
  },
  {
    name: "Oscar Piastri",
    img: "/driver/piastri.jpg",
    bg: "/driver/piastri-bg.jpg",
    photo: "/driver/piastri-profile.jpg",
    desc: "Juara F2 2021, masa depan McLaren.",
    stats: [
      { label: "Grand Prix Entered", value: 60 },
      { label: "Career Points", value: 673 },
      { label: "Highest Race Finish", value: "1 (x8)" },
      { label: "Podiums", value: 22 },
      { label: "Highest Grid Position", value: "1 (x4)" },
      { label: "Pole Positions", value: 4 },
      { label: "World Championships", value: 0 },
      { label: "DNFs", value: 3 },
    ],
    biography: {
      birthDate: "06/04/2001",
      birthPlace: "Melbourne, Australia",
      quote:
        "I LIKE CARS, I LIKE RACING, BUT I THINK THE COMPETITION SIDE OF THINGS IS PROBABLY THE NUMBER ONE THING.",
      story:
        "Dibesarkan di Melbourne, Piastri melewati jenjang F4 hingga F2 dengan penuh prestasi. Bergabung McLaren sejak 2023 dan langsung tampil impresif. Tahun 2024 ia membantu McLaren meraih gelar konstruktor dan meraih 2 kemenangan GP.",
    },
  },
];

const DataTeam3 = {
  bg: "/teams/mercedes-bg.jpg",
  name: "Mercedes-AMG PETRONAS Formula One Team",
  logo: "/teams/mercedes-logo.png",
  summaryStats: [
    { label: "Grand Prix Entered", value: 319 },
    { label: "Team Points", value: 7926.5 },
    { label: "Highest Race Finish", value: "1 (x121)" },
    { label: "Podiums", value: 197 },
    { label: "Highest Grid Position", value: "1 (x135)" },
    { label: "Pole Positions", value: 134 },
    { label: "World Championships", value: 8 },
  ],
  description:
    "Mercedes bangkit sebagai kekuatan utama F1 di era hybrid, mendominasi dari 2014 hingga 2020. Kini dengan George Russell dan Kimi Antonelli, mereka siap menyongsong era baru pasca Lewis Hamilton.",
  history: [
    {
      year: 2024,
      summary:
        "Turun ke posisi 4 klasemen meski Russell dan Hamilton menang dua kali. Pengumuman mengejutkan: Hamilton pindah ke Ferrari di akhir musim.",
    },
    {
      year: 2023,
      summary:
        "Tidak menang untuk pertama kalinya sejak 2011, namun menutup musim dengan posisi kedua klasemen berkat konsistensi.",
    },
  ],
};

const drivers3 = [
  {
    name: "George Russell",
    img: "/driver/russell.jpg",
    bg: "/driver/russell-bg.jpg",
    photo: "/driver/russell-profile.jpg",
    desc: "Cepat & tenang. Masa depan Mercedes.",
    stats: [
      { label: "Grand Prix Entered", value: 142 },
      { label: "Career Points", value: 886 },
      { label: "Highest Race Finish", value: "1 (x4)" },
      { label: "Podiums", value: 21 },
      { label: "Highest Grid Position", value: "1 (x7)" },
      { label: "Pole Positions", value: 6 },
      { label: "World Championships", value: 0 },
      { label: "DNFs", value: 19 },
    ],
    biography: {
      birthDate: "15/02/1998",
      birthPlace: "King's Lynn, England",
      quote: "IF IN DOUBT, GO FLAT OUT.",
      story:
        "Russell tampil konsisten sejak debut bersama Williams, kemudian mencuri perhatian saat menggantikan Hamilton di Sakhir 2020. Sejak itu, ia jadi andalan Mercedes dan kini memimpin tim pasca kepergian Hamilton.",
    },
  },
  {
    name: "Kimi Antonelli",
    img: "/driver/antonelli.jpg",
    bg: "/driver/antonelli-bg.jpg",
    photo: "/driver/antonelli-profile.jpg",
    desc: "Bintang muda Italia, penerus Hamilton.",
    stats: [
      { label: "Grand Prix Entered", value: 14 },
      { label: "Career Points", value: 64 },
      { label: "Highest Race Finish", value: "3 (x1)" },
      { label: "Podiums", value: 1 },
      { label: "Highest Grid Position", value: "3 (x1)" },
      { label: "Pole Positions", value: 0 },
      { label: "World Championships", value: 0 },
      { label: "DNFs", value: 4 },
    ],
    biography: {
      birthDate: "25/08/2006",
      birthPlace: "Bologna, Italy",
      quote:
        "RACING FOR MERCEDES IS A BIG RESPONSIBILITY, BUT AT THE SAME TIME IT’S A GREAT OPPORTUNITY AND A PRIVILEGE.",
      story:
        "Kimi Antonelli direkrut Mercedes sejak karting dan langsung dipromosikan ke F2, melewati jenjang F3. Usai kemenangan impresif di Silverstone dan Spa, Mercedes memilihnya menggantikan Hamilton mulai musim 2025.",
    },
  },
];

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
          <div className="absolute text-white text-justify mt-[17rem]  bg-black/50 p-4 rounded-xl ">
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

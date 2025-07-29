import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DriverCard = () => {
  return (
    <div className="w-full flex flex-col">
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

      <section className="relative w-full min-h-screen overflow-hidde items-center justify-center n flex flex-col">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src="https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-6/487307814_1073650438133878_5288230973477624107_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XyoOQcPbaXgQ7kNvwE1xXZr&_nc_oc=AdmGXhcoZerCzAJf69b-ajdleBX6YCLc1O7xVYfJJlg0-CshyNiG4SOnmvEVuyvTF2A&_nc_zt=23&_nc_ht=scontent.fjog3-1.fna&_nc_gid=Qy3bVSiT26n6aBNhE1vKZA&oh=00_AfRBF56FzQ4Lta7uylxpVyIiR88EpHKmqZn3J204HzAfgQ&oe=688EB4EB"
            alt="driver"
            className="w-full h-full object-cover scale-[1.8]"
            style={{ objectPosition: "center 10%" }}
          />
        </div>

        <h1 className="absolute z-10 text-[180px] font-black top-4">DRIVER</h1>
      </section>
    </div>
  );
};

export default DriverCard;

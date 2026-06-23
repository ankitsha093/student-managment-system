import { Link } from "@tanstack/react-router";
import logo from "@/assets/Logo.svg";
import BgImage from "@/assets/Auth-Side-Bg-Image.jpg";

function Auth({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-screen justify-between items-stretch">
      <div
        className="w-1/2 flex flex-col justify-center items-center p-4  bg-cover bg-center h-screen  relative before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[#4B6FFF]/60 before:inset-0"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="relative z-10">
          <h3>What's New on Preskool !!!</h3>
          <div>
            <h5>Summer Vacation Holiday Homework</h5>
            <p>The school will remain closed from April 20th to June...</p>
          </div>
        </div>
      </div>
      <div className="flex align-center justify-center flex-col w-1/2">
        <Link to="/">
          <img src={logo} alt="Preskool Logo" />
        </Link>
        {children}
      </div>
    </div>
  );
}

export default Auth;

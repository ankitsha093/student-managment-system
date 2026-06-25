import { Link } from "@tanstack/react-router";
import logo from "@/assets/Logo.svg";
import BgImage from "@/assets/Auth-Side-Bg-Image.jpg";

type WhatsNewData = {
  title: string;
  discription: string;
};

const WHATSNEWDATA: WhatsNewData[] = [
  {
    title: "Summer Vacation Holiday Homework",
    discription: "The school will remain closed from April 20th to June...",
  },
  {
    title: "New Academic Session Admission Start(2024-25)",
    discription:
      "An academic term is a portion of an academic year, the time ...",
  },
  {
    title: "Date sheet Final Exam Nursery to Sr.Kg",
    discription:
      "Dear Parents, As the final examination for the session 2024-25 is ...",
  },
  {
    title: "Annual Day Function",
    discription:
      "Annual functions provide a platform for students to showcase their...",
  },
  {
    title: "Summer Vacation Holiday Homework",
    discription:
      "The school will remain closed from April 20th to June 15th for summer...",
  },
];

function Auth({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-screen justify-between items-stretch">
      <div
        className="w-1/2 flex flex-col justify-center items-center p-4  bg-cover bg-center h-screen  relative before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[#4B6FFF]/60 before:inset-0"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="relative z-10 p-6 bg-white/10 rounded-4xl w-[80%] backdrop-blur-sm">
          <h3 className="text-white font-semibold text-xl mb-5">
            What's New on Preskool !!!
          </h3>
          {WHATSNEWDATA?.map((DATA, ID) => {
            return (
              <div className="bg-white p-5 rounded-sm mb-3.5" key={`a${ID}`}>
                <h5 className="text-[#202C4B] text-sm font-medium mb-1">
                  {DATA.title}
                </h5>
                <p className="text-sm text-[#515B73]">{DATA.discription}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex align-center justify-center flex-col w-1/2">
        <div className="w-[60%] mx-auto flex flex-col gap-20 align-middle justify-center">
          <Link to="/" className="flex justify-center">
            <img src={logo} alt="Preskool Logo" className="h-12 w-auto" />
          </Link>
          <div className="shadow-small p-5 rounded-xl">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Auth;

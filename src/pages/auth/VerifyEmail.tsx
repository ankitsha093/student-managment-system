import { Button } from "@/components/ui/button";
import Auth from "./Auth";
import { Link, useNavigate } from "@tanstack/react-router";

const VerifyEmail = () => {
  const navigate = useNavigate();
  return (
    <Auth>
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold">Verify your Email</h2>
        <p className="text-sm mb-4 text-[#515B73]">
          We've sent a link to your email ter4@example.com. Please follow the
          link inside to continue
        </p>
        <p className="text-sm mb-4 text-[#515B73]">
          Didn’t receive an email?{" "}
          <Link to="#resend-link" className="text-[#0F65CD] hover:underline">
            Resend Link
          </Link>
        </p>
        <Button
          className="w-full"
          size="lg"
          onClick={() => navigate({ to: "/sign-in" })}
        >
          Skip Now
        </Button>
      </div>
    </Auth>
  );
};

export default VerifyEmail;

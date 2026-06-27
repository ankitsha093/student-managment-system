import { Button } from "@/components/ui/button";
import Auth from "./Auth";
import { Link, useNavigate } from "@tanstack/react-router";
import { Field } from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const VerifyOtp = () => {
  const navigate = useNavigate();
  return (
    <Auth>
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold">Login with your Email Address</h2>
        <p className="text-sm mb-4 text-[#515B73]">
          We sent a verification code to your email. Enter the code from the
          email in the field below
        </p>

        <Field className="w-full mt-4 mb-4">
          <InputOTP id="digits-only" maxLength={4} className="w-full">
            <InputOTPGroup className="flex gap-4 w-full">
              <InputOTPSlot
                index={0}
                className="w-13 h-13 rounded-sm flex-1 border-color:[#E6E8EB]"
              />
              <InputOTPSlot
                index={1}
                className="w-13 h-13 rounded-sm flex-1 border-color:[#E6E8EB]"
              />
              <InputOTPSlot
                index={2}
                className="w-13 h-13 rounded-sm flex-1 border-color:[#E6E8EB]"
              />
              <InputOTPSlot
                index={3}
                className="w-13 h-13 rounded-sm flex-1 border-color:[#E6E8EB]"
              />
              <InputOTPSlot
                index={3}
                className="w-13 h-13 rounded-sm flex-1 border-color:[#E6E8EB]"
              />
            </InputOTPGroup>
          </InputOTP>
        </Field>
        <Alert variant="destructive" className="max-w-sm mb-2">
          <AlertCircleIcon />
          <AlertTitle>Otp will expire in 09:59</AlertTitle>
        </Alert>
        <Button
          className="w-full"
          size="lg"
          onClick={() => navigate({ to: "/sign-in" })}
        >
          Verify My Account
        </Button>
      </div>
    </Auth>
  );
};

export default VerifyOtp;

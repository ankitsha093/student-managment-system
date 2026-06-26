import Auth from "./Auth";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";

const isSuccess: boolean = true;

const ResetPassword = () => {
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const showHidePassword = () => {
    setIsShowPassword((prev) => !prev);
  };
  return (
    <Auth>
      {!isSuccess ? (
        <>
          <h2 className="text-2xl font-bold">Reset Password?</h2>
          <p className="text-sm mb-4 text-[#515B73]">
            Enter New Password & Confirm Password to get inside
          </p>

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="fieldgroup-password">
                Old Password
              </FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id="fieldgroup-password"
                  type={isShowPassword ? "text" : "password"}
                />
                <InputGroupAddon align="inline-end">
                  <div
                    onClick={() => showHidePassword()}
                    className="cursor-pointer"
                    role="button"
                  >
                    {isShowPassword ? <EyeIcon /> : <EyeOffIcon />}
                  </div>
                </InputGroupAddon>
              </InputGroup>
            </Field>
            <Field>
              <FieldLabel htmlFor="fieldgroup-password">
                New Password
              </FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id="fieldgroup-password"
                  type={isShowPassword ? "text" : "password"}
                />
                <InputGroupAddon align="inline-end">
                  <div
                    onClick={() => showHidePassword()}
                    className="cursor-pointer"
                    role="button"
                  >
                    {isShowPassword ? <EyeIcon /> : <EyeOffIcon />}
                  </div>
                </InputGroupAddon>
              </InputGroup>
            </Field>
            <Field>
              <FieldLabel htmlFor="fieldgroup-password">
                New Confirm Password
              </FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id="fieldgroup-password"
                  type={isShowPassword ? "text" : "password"}
                />
                <InputGroupAddon align="inline-end">
                  <div
                    onClick={() => showHidePassword()}
                    className="cursor-pointer"
                    role="button"
                  >
                    {isShowPassword ? <EyeIcon /> : <EyeOffIcon />}
                  </div>
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </FieldGroup>

          <Button className="w-full mt-5" size="lg">
            Change Password
          </Button>
          <div className="text-center mt-4">
            Return to?{" "}
            <Link to="/sign-in" className="text-[#0F65CD] hover:underline">
              Log in
            </Link>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            className="size-13 mb-3.5"
          >
            <circle cx="25" cy="25" r="25" fill="#1ABE17" />
            <g clipPath="url(#clip0_2083_409578)">
              <path
                d="M18 25L23 30L33 20"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2083_409578">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(13 13)"
                />
              </clipPath>
            </defs>
          </svg>
          <h2 className="text-2xl font-bold">Success</h2>
          <p className="text-sm mb-4 text-[#515B73]">
            Your Password Reset Successfully
          </p>
          <Button className="w-full" size="lg" onClick={()=>navigate({to:"/sign-in"})}>
            Back to Log in
          </Button>
        </div>
      )}
    </Auth>
  );
};

export default ResetPassword;

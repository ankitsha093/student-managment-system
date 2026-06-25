import Auth from "./Auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";

const SignUp = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const showHidePassword = () => {
    setIsShowPassword((prev) => !prev);
  };
  return (
    <Auth>
      <h2 className="text-2xl font-bold">Register</h2>
      <p className="text-sm mb-4 text-[#515B73]">
        Please enter your details to sign up
      </p>

      <div className=" flex justify-between my-6 gap-2.5">
        <Button className="bg-[#288EC7] hover:bg-[#288EC7]/80 py-0 h-14 flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="size-6"
          >
            <path
              d="M23.5 12.0694C23.5 5.71811 18.3513 0.569391 12 0.569391C5.64872 0.569391 0.5 5.71811 0.5 12.0694C0.5 17.8094 4.70538 22.567 10.2031 23.4297V15.3936H7.2832V12.0694H10.2031V9.5358C10.2031 6.65361 11.92 5.06158 14.5468 5.06158C15.805 5.06158 17.1211 5.28619 17.1211 5.28619V8.11627H15.671C14.2424 8.11627 13.7969 9.00273 13.7969 9.91218V12.0694H16.9863L16.4765 15.3936H13.7969V23.4297C19.2946 22.567 23.5 17.8094 23.5 12.0694Z"
              fill="white"
            />
          </svg>
        </Button>
        <Button
          variant="outline"
          size="icon"
          aria-label="Submit"
          className="py-4 h-14 flex-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="size-6"
          >
            <rect width="24" height="24" fill="white" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.04 12.2624C23.04 11.447 22.9668 10.6629 22.8309 9.91016H12V14.3586H18.1891C17.9225 15.7961 17.1123 17.014 15.8943 17.8295V20.7149H19.6109C21.7855 18.7129 23.04 15.7647 23.04 12.2624Z"
              fill="#0092E4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9999 23.4986C15.1049 23.4986 17.7081 22.4688 19.6108 20.7125L15.8943 17.827C14.8645 18.517 13.5472 18.9247 11.9999 18.9247C9.00471 18.9247 6.46948 16.9018 5.56516 14.1836H1.72311V17.1631C3.61539 20.9215 7.50448 23.4986 11.9999 23.4986Z"
              fill="#5CB85C"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.56523 14.1855C5.33523 13.4955 5.20455 12.7584 5.20455 12.0005C5.20455 11.2425 5.33523 10.5055 5.56523 9.81548V6.83594H1.72318C0.944318 8.38844 0.5 10.1448 0.5 12.0005C0.5 13.8562 0.944318 15.6125 1.72318 17.165L5.56523 14.1855Z"
              fill="#FDA700"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9999 5.07386C13.6883 5.07386 15.2043 5.65409 16.3961 6.79364L19.6945 3.49523C17.7029 1.63955 15.0997 0.5 11.9999 0.5C7.50448 0.5 3.61539 3.07705 1.72311 6.83545L5.56516 9.815C6.46948 7.09682 9.00471 5.07386 11.9999 5.07386Z"
              fill="#E41F07"
            />
          </svg>
        </Button>
        <Button size="icon" className="py-4 h-14 flex-1 bg-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="size-6"
          >
            <path
              d="M21.2806 18.424C20.9328 19.2275 20.5211 19.9672 20.0441 20.6472C19.3939 21.5743 18.8615 22.216 18.4512 22.5724C17.8151 23.1573 17.1337 23.4568 16.4039 23.4739C15.8801 23.4739 15.2483 23.3248 14.5129 23.0224C13.7751 22.7214 13.097 22.5724 12.477 22.5724C11.8268 22.5724 11.1294 22.7214 10.3835 23.0224C9.63647 23.3248 9.03466 23.4824 8.57453 23.498C7.87475 23.5278 7.17725 23.2197 6.48102 22.5724C6.03665 22.1848 5.48084 21.5204 4.81499 20.5791C4.1006 19.5739 3.51326 18.4084 3.05313 17.0795C2.56035 15.6442 2.31332 14.2543 2.31332 12.9087C2.31332 11.3673 2.64639 10.0379 3.31351 8.92385C3.83781 8.029 4.53531 7.32312 5.40829 6.80493C6.28127 6.28674 7.22453 6.02267 8.24033 6.00578C8.79614 6.00578 9.52502 6.1777 10.4308 6.51559C11.334 6.85462 11.914 7.02655 12.1682 7.02655C12.3583 7.02655 13.0026 6.82552 14.0948 6.42473C15.1276 6.05305 15.9993 5.89916 16.7134 5.95978C18.6485 6.11595 20.1023 6.87876 21.0691 8.25303C19.3385 9.30163 18.4824 10.7703 18.4994 12.6544C18.5151 14.122 19.0474 15.3432 20.0938 16.3129C20.568 16.7629 21.0975 17.1107 21.6867 17.3578C21.5589 17.7283 21.424 18.0832 21.2806 18.424ZM16.8426 0.960131C16.8426 2.11039 16.4224 3.18439 15.5848 4.17847C14.5739 5.36023 13.3513 6.04311 12.0254 5.93536C12.0085 5.79736 11.9987 5.65213 11.9987 5.49951C11.9987 4.39526 12.4794 3.21349 13.3331 2.24724C13.7593 1.75801 14.3014 1.35122 14.9587 1.02671C15.6146 0.707053 16.235 0.530273 16.8185 0.5C16.8355 0.653772 16.8426 0.807554 16.8426 0.960116V0.960131Z"
              fill="white"
            />
          </svg>
        </Button>
      </div>
      <div className="flex justify-center gap-1.5 mt-6 mb-3 items-center before:content-[''] before:h-[0.063rem] before:flex-1 before:bg-[#E9EDF4] after:content-[''] after:h-[0.063rem] after:flex-1 after:bg-[#E9EDF4]">
        OR
      </div>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
          <Input id="fieldgroup-name" placeholder="Jordan Lee" />
        </Field>
        <Field>
          <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
          <Input
            id="fieldgroup-email"
            type="email"
            placeholder="name@example.com"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
          <InputGroup>
            <InputGroupInput
              id="fieldgroup-password"
              type={isShowPassword ? "text" : "password"}
              placeholder="Enter password"
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
          <FieldLabel htmlFor="fieldgroup-confirm-password">
            Confirm Password
          </FieldLabel>
          <Input
            id="fieldgroup-confirm-password"
            type="password"
            placeholder=""
          />
        </Field>
      </FieldGroup>
      <FieldGroup className="max-w-sm mt-5">
        <Field orientation="horizontal">
          <Checkbox id="terms-checkbox" name="terms-checkbox" />
          <Label htmlFor="terms-checkbox">
            I Agree to{" "}
            <Link to="#terms" className="text-[#0F65CD] hover:underline">
              Terms & Privacy
            </Link>
          </Label>
        </Field>
      </FieldGroup>
      <Button className="w-full mt-5" size="lg">
        Sign Up
      </Button>
      <div className="text-center mt-4">
        Already have an account?{" "}
        <Link to="/signin" className="text-[#0F65CD] hover:underline">
          Sign In
        </Link>
      </div>
    </Auth>
  );
};

export default SignUp;

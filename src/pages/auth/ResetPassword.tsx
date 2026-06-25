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

const ResetPassword = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const showHidePassword = () => {
    setIsShowPassword((prev) => !prev);
  };
  return (
    <Auth>
      <h2 className="text-2xl font-bold">Reset Password?</h2>
      <p className="text-sm mb-4 text-[#515B73]">
        Enter New Password & Confirm Password to get inside
      </p>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="fieldgroup-password">Old Password</FieldLabel>
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
          <FieldLabel htmlFor="fieldgroup-password">New Password</FieldLabel>
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
        <Link to="/signin" className="text-[#0F65CD] hover:underline">
          Log in
        </Link>
      </div>
    </Auth>
  );
};

export default ResetPassword;

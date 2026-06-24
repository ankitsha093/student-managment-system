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

const SignUp = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const showHidePassword = () => {
    setIsShowPassword((prev) => !prev);
  };
  return (
    <Auth>
      <h2 className="text-3xl">Register</h2>
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
              <div onClick={() => showHidePassword()} className="cursor-pointer" role="button">
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
          <Label htmlFor="terms-checkbox">Accept terms and conditions</Label>
        </Field>
      </FieldGroup>
      <Button className="w-full mt-5" size="lg">
        Submit
      </Button>
    </Auth>
  );
};

export default SignUp;

import { Button } from "@/components/ui/button";
import Auth from "./Auth";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  
} from "@/components/ui/field"

const SignUp = () => {
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
        <Input
          id="fieldgroup-password"
          type="password"
          placeholder=""
        />
       
       
      </Field>
       <Field>
        <FieldLabel htmlFor="fieldgroup-confirm-password">Confirm Password</FieldLabel>
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
<Button variant="default" className=" p-4 w-full text-white mt-5">Submit</Button>
{/* <Button variant="outline" className="bg-[#506EE4] p-4 w-full">  Button </Button> */}

    </Auth>
  );
};

export default SignUp;

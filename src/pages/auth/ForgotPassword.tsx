import { Button } from "@/components/ui/button";
import Auth from "./Auth";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "@tanstack/react-router";

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <Auth>
      <h2 className="text-2xl font-bold">Forgot Password?</h2>
      <p className="text-sm mb-4 text-[#515B73]">
        If you forgot your password, well, then we’ll email you instructions to
        reset your password.
      </p>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="fieldgroup-email">Email Address</FieldLabel>
          <Input
            id="fieldgroup-email"
            type="email"
            placeholder="name@example.com"
          />
        </Field>
      </FieldGroup>

      <Button
        className="w-full mt-5"
        size="lg"
        onClick={() => navigate({ to: "/reset-password" })}
      >
        Sign In
      </Button>
      <div className="text-center mt-4">
        Return to{" "}
        <Link to="/sign-in" className="text-[#0F65CD] hover:underline">
          Log in
        </Link>
      </div>
    </Auth>
  );
};

export default ForgotPassword;

import SignIn from "@/pages/auth/SignIn";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/signIn")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignIn />;
}

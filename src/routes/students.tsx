import StudentsPage from "@/pages/students/Index";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/students")({
  component: RouteComponent,
});

function RouteComponent() {
  return <StudentsPage />;
}

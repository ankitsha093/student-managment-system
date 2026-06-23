import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/images/Logo.svg";

export const Route = createFileRoute("/auth")({
  component: Auth,
}); 


function Auth() {
  return (
    <div>
      <div>
        <div>
          <h3>What's New on Preskool !!!</h3>
          <div>
            <h5>Summer Vacation Holiday Homework</h5>
            <p>The school will remain closed from April 20th to June...</p>
          </div>
        </div>
      </div>
      <div>
        <Link to="/">
          <img src={logo} alt="Preskool Logo" />
        </Link>
      </div>
    </div>
  );
};



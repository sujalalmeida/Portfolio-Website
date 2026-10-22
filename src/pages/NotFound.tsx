import { ArrowLeft } from "lucide-react";
import "./NotFound.css";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found wrap">
      <p className="section-kicker">404 / Page not found</p>
      <h1>A little off track.</h1>
      <p>
        This page doesn’t exist. My projects and contact details are back on the
        home page.
      </p>
      <a className="text-link" href="/">
        <ArrowLeft size={18} /> Back to the portfolio
      </a>
    </main>
  );
}

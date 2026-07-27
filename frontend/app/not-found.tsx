import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main-content" className="notFound">
      <div className="shell">
        <p className="sectionLabel">Page not found</p>
        <h1>We could not find that page</h1>
        <p>
          Return to the Somali Post home page or use the main navigation to find
          official postal guidance.
        </p>
        <Link className="navAction" href="/">
          <ArrowLeft size={17} aria-hidden="true" />
          Return home
        </Link>
      </div>
    </main>
  );
}

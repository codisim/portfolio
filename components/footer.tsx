import Link from "next/link";
import { GoRepoForked } from "react-icons/go";
import { FaStar } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-8 border-t border-border ">
      <div className="container mx-auto px-4">
        <p className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
          © {currentYear}
          <span className="text-violet-600 font-semibold">
            <Link
              href="/#"
              className="hover:text-violet-700 flex items-center gap-1.5 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codisim.
            </Link>
          </span>
           All rights reserved.
        </p>
        </div>
    </footer>
  );
}

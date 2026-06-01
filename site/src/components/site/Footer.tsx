import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";


export function Footer() {
  return (
    <footer className="mt-24 border-t bg-gradient-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Crest" className="h-10 w-10" />
            <div>
              <div className="font-display font-bold">Holy Saviours College</div>
              <div className="text-xs text-muted-foreground">Shaping leaders since 1969</div>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A premier secondary institution in Lagos, Nigeria — committed to academic excellence, character and faith.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/academics" className="hover:text-foreground">Academics</Link></li>
            <li><Link to="/admissions" className="hover:text-foreground">Admissions</Link></li>
            <li><Link to="/gallery" className="hover:text-foreground">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Portals</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/portal" className="hover:text-foreground">Parent Portal</Link></li>
            <li><Link to="/portal" className="hover:text-foreground">Student Portal</Link></li>
            <li><Link to="/portal" className="hover:text-foreground">Staff Dashboard</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Visit</h4>
          <address className="mt-3 not-italic text-sm text-muted-foreground">
            12 Saviour's Way, Ikeja<br />Lagos, Nigeria<br />
            <a href="mailto:hello@holysaviours.edu.ng" className="hover:text-foreground">hello@holysaviours.edu.ng</a><br />
            +234 (0)1 555 0169
          </address>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} Holy Saviours College. All rights reserved.</span>
          <span>Crafted with care in Lagos.</span>
        </div>
      </div>
    </footer>
  );
}

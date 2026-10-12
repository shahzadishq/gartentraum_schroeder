import { site, navLinks } from '@/lib/site';
import Logo from './Logo';
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  InstagramIcon,
  FacebookIcon,
  WhatsAppIcon,
} from './icons';

const services = [
  'Gartenplanung & 3D',
  'Garten- & Landschaftsbau',
  'Poolbau',
  'Pflasterarbeiten',
  'Terrassen',
  'Gartenpflege',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bark text-sand-200/80">
      <div className="container-content section-padding py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <Logo variant="white" className="h-12 w-auto" />
            <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.3em] text-brand-300">
              {site.tagline} · {site.location}
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Ihr regionaler Partner für Garten- und Landschaftsbau in
              Westoverledingen. Von der Idee bis zum Traumgarten – Beratung &
              Umsetzung aus einer Hand.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-50/15 text-sand-200 transition-all hover:border-brand-400 hover:bg-brand-400 hover:text-[#3a2817]"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-50/15 text-sand-200 transition-all hover:border-brand-400 hover:bg-brand-400 hover:text-[#3a2817]"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-50/15 text-sand-200 transition-all hover:border-brand-400 hover:bg-brand-400 hover:text-[#3a2817]"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-base font-semibold text-sand-50">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-sand-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-base font-semibold text-sand-50">
              Leistungen
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#leistungen"
                    className="transition-colors hover:text-sand-50"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-base font-semibold text-sand-50">
              Kontakt
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                <span>
                  {site.location}
                  <br />
                  {site.region}, {site.address.country}
                </span>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-sand-50"
                >
                  <PhoneIcon className="h-5 w-5 shrink-0 text-brand-400" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-sand-50"
                >
                  <WhatsAppIcon className="h-5 w-5 shrink-0 text-brand-400" />
                  {site.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-3 transition-colors hover:text-sand-50"
                >
                  <MailIcon className="h-5 w-5 shrink-0 text-brand-400" />
                  {site.email}
                </a>
              </li>
            </ul>
            <a href="#kontakt" className="btn-primary mt-6 !px-6 !py-3 text-[13px]">
              Beratung anfragen
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-sand-50/10 pt-8 text-xs text-sand-200/60 sm:flex-row">
          <p>
            © {year} Gartentraum Schröder · Garten- & Landschaftsbau
            Westoverledingen
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-sand-50">
              Impressum
            </a>
            <a href="#" className="transition-colors hover:text-sand-50">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

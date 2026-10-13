import { site, navLinks } from '@/lib/site';
import Logo from '@/components/Logo';
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  InstagramIcon,
  FacebookIcon,
  WhatsAppIcon,
} from '@/components/icons';
import { LeafDecor } from './LeafDecor';

const services = [
  'Gartenplanung & 3D',
  'Garten- & Landschaftsbau',
  'Poolbau',
  'Pflasterarbeiten',
  'Terrassen',
  'Gartenpflege',
];

export default function FooterV2() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-forest-900/10 bg-white text-forest-700">
      <LeafDecor className="pointer-events-none absolute -right-16 -top-10 hidden h-40 w-80 text-brand-500/10 lg:block" />
      <div className="container-content section-padding relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <Logo className="h-12 w-auto" />
            <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.3em] text-brand-600">
              {site.tagline} · {site.location}
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-forest-700/80">
              Ihr regionaler Partner für Garten- und Landschaftsbau in
              Westoverledingen. Von der Idee bis zum Traumgarten – Beratung &
              Umsetzung aus einer Hand.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { href: site.social.instagram, label: 'Instagram', Icon: InstagramIcon },
                { href: site.social.facebook, label: 'Facebook', Icon: FacebookIcon },
                { href: site.whatsappHref, label: 'WhatsApp', Icon: WhatsAppIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-900/12 text-forest-700 transition-all hover:border-brand-500 hover:bg-brand-500 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-base font-semibold text-forest-900">Navigation</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-brand-600">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-base font-semibold text-forest-900">Leistungen</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service}>
                  <a href="#leistungen" className="transition-colors hover:text-brand-600">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-base font-semibold text-forest-900">Kontakt</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span>
                  {site.location}
                  <br />
                  {site.region}, {site.address.country}
                </span>
              </li>
              <li>
                <a href={site.phoneHref} className="flex items-center gap-3 transition-colors hover:text-brand-600">
                  <PhoneIcon className="h-5 w-5 shrink-0 text-brand-600" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-brand-600"
                >
                  <WhatsAppIcon className="h-5 w-5 shrink-0 text-brand-600" />
                  {site.whatsapp}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="flex items-center gap-3 transition-colors hover:text-brand-600">
                  <MailIcon className="h-5 w-5 shrink-0 text-brand-600" />
                  {site.email}
                </a>
              </li>
            </ul>
            <a href="#kontakt" className="btn-primary mt-6 !px-6 !py-3 text-[13px]">
              Beratung anfragen
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-forest-900/10 pt-8 text-xs text-forest-700/60 sm:flex-row">
          <p>© {year} Gartentraum Schröder · Garten- & Landschaftsbau Westoverledingen</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-brand-600">Impressum</a>
            <a href="#" className="transition-colors hover:text-brand-600">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

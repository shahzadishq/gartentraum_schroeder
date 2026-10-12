import Image from 'next/image';
import Reveal from './Reveal';
import { site } from '@/lib/site';
import { asset } from '@/lib/asset';
import { PhoneIcon, MailIcon, MapPinIcon, ArrowRightIcon, WhatsAppIcon } from './icons';

export default function CTA() {
  return (
    <section id="kontakt" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={asset('/images/pool-stone.webp')}
          alt="Pool mit Natursteineinfassung von Gartentraum Schröder in der Abenddämmerung"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-forest-950/90" />
      </div>

      <div className="container-content section-padding relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Pitch */}
          <Reveal>
            <span className="eyebrow mb-5 text-forest-300">Jetzt starten</span>
            <h2 className="heading-serif text-4xl text-sand-50 sm:text-5xl lg:text-6xl">
              Bereit für Ihren Traumgarten?
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-sand-200/85">
              Lassen Sie uns gemeinsam Ihren perfekten Außenbereich planen.
              Vereinbaren Sie jetzt Ihre kostenlose und unverbindliche Beratung.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={site.phoneHref}
                className="group flex items-center gap-4 text-sand-100 transition-colors hover:text-white"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-800/70 text-forest-200 transition-colors group-hover:bg-forest-400 group-hover:text-forest-950">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-sand-200/60">
                    Telefon
                  </span>
                  <span className="font-medium">{site.phone}</span>
                </span>
              </a>
              <a
                href={site.emailHref}
                className="group flex items-center gap-4 text-sand-100 transition-colors hover:text-white"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-800/70 text-forest-200 transition-colors group-hover:bg-forest-400 group-hover:text-forest-950">
                  <MailIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-sand-200/60">
                    E-Mail
                  </span>
                  <span className="font-medium">{site.email}</span>
                </span>
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-sand-100 transition-colors hover:text-white"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/90 text-white transition-transform group-hover:scale-105">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-sand-200/60">
                    WhatsApp
                  </span>
                  <span className="font-medium">{site.whatsapp}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 text-sand-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-800/70 text-forest-200">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-sand-200/60">
                    Region
                  </span>
                  <span className="font-medium">
                    {site.location} · {site.region}
                  </span>
                </span>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <form
              className="rounded-[2rem] bg-sand-50 p-8 shadow-card sm:p-10"
              action={site.emailHref}
              method="post"
            >
              <h3 className="font-serif text-2xl font-medium text-forest-900">
                Beratung vereinbaren
              </h3>
              <p className="mt-1.5 text-sm text-forest-700/70">
                Wir melden uns zeitnah bei Ihnen.
              </p>

              <div className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Ihr Name" required />
                  <Field
                    label="Telefon"
                    name="phone"
                    type="tel"
                    placeholder="Ihre Telefonnummer"
                  />
                </div>
                <Field
                  label="E-Mail"
                  name="email"
                  type="email"
                  placeholder="ihre@email.de"
                  required
                />
                <div>
                  <label
                    htmlFor="interest"
                    className="mb-1.5 block text-sm font-medium text-forest-800"
                  >
                    Ihr Anliegen
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full rounded-xl border border-forest-700/15 bg-white px-4 py-3 text-sm text-forest-900 outline-none transition focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Bitte wählen …
                    </option>
                    <option>Gartenplanung & 3D-Visualisierung</option>
                    <option>Garten- & Landschaftsbau</option>
                    <option>Pflasterarbeiten</option>
                    <option>Poolbau & Außenbereiche</option>
                    <option>Terrassen & Gestaltung</option>
                    <option>Pflege & Sonstiges</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-forest-800"
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Erzählen Sie uns von Ihrem Projekt …"
                    className="w-full resize-none rounded-xl border border-forest-700/15 bg-white px-4 py-3 text-sm text-forest-900 outline-none transition placeholder:text-forest-700/40 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20"
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary mt-6 w-full group">
                Anfrage senden
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="mt-3 text-center text-xs text-forest-700/55">
                Kostenlos & unverbindlich. Ihre Daten werden vertraulich behandelt.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-forest-800"
      >
        {label}
        {required && <span className="text-forest-500"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-forest-700/15 bg-white px-4 py-3 text-sm text-forest-900 outline-none transition placeholder:text-forest-700/40 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20"
      />
    </div>
  );
}

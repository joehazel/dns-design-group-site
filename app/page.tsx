'use client'; 

import { useState, FormEvent } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

const projects = [
  {
    title: 'Highland Park Residence',
    category: 'Full Home Interior Design',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Modern Lakeside Retreat',
    category: 'Space Planning + Furnishings',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Executive Office Refresh',
    category: 'Commercial Interior Styling',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Serene Primary Suite',
    category: 'Luxury Bedroom Design',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: "Entertainer's Kitchen",
    category: 'Kitchen + Dining Concept',
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Curated Living Space',
    category: 'Furniture + Finish Selection',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
];

const services = [
  {
    title: 'Interior Design',
    description:
      'Thoughtful, layered interiors designed to reflect how you live while elevating every detail.',
  },
  {
    title: 'Space Planning',
    description:
      'Layouts that improve flow, comfort, and functionality without sacrificing beauty.',
  },
  {
    title: 'Selections & Styling',
    description:
      'Furniture, finishes, lighting, textiles, and accessories curated into a cohesive final look.',
  },
];

export default function HomePage() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const messageInput = form.elements.namedItem('message') as HTMLTextAreaElement;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: nameInput.value.trim(),
          lastName: '',
          email: emailInput.value.trim(),
          projectType: 'General inquiry',
          message: messageInput.value.trim(),
        }),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-[#f6f0e8] text-[#2f2925]">
      <header className="sticky top-0 z-30 border-b border-[#ded4c8] bg-[#f6f0e8]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <p className="font-serif text-2xl tracking-wide">DNS Design Group</p>
            <p className="text-xs uppercase tracking-[0.35em] text-[#7b6d62]">
              Interior Design Studio
            </p>
          </div>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#portfolio" className="transition hover:opacity-70">
              Portfolio
            </a>
            <a href="#services" className="transition hover:opacity-70">
              Services
            </a>
            <a href="#contact" className="transition hover:opacity-70">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(37,30,25,0.35), rgba(37,30,25,0.35)), url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
            <div className="max-w-3xl rounded-[2rem] border border-white/20 bg-black/10 p-8 backdrop-blur-sm md:p-12">
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#f0e7df]">
                Warm, timeless, beautifully lived in
              </p>
              <h1 className="font-serif text-5xl leading-tight text-white md:text-7xl">
                Interiors that feel elevated, personal, and enduring.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#f5ece5] md:text-lg">
                DNS Design Group creates refined interiors with warmth, texture,
                and intention. Each space is designed to feel luxurious without
                losing comfort, inviting clients into a home that is both stunning
                and deeply livable.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#portfolio"
                  className="rounded-full bg-[#ead7c1] px-6 py-3 text-sm font-medium text-[#2f2925] shadow-lg transition hover:-translate-y-0.5"
                >
                  View Portfolio
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/50 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Start a Project
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#8e7e72]">
              About
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              A studio approach rooted in comfort, detail, and quiet luxury.
            </h2>
          </div>
          <div className="rounded-[2rem] bg-[#eadfce] p-8 shadow-sm">
            <p className="text-base leading-8 text-[#4e433c]">
              From full-home transformations to carefully layered finishing
              touches, DNS Design Group helps clients create interiors that feel
              polished, welcoming, and distinctly their own. The design language
              is warm and luxurious, with room to evolve into a cleaner, more
              minimal direction whenever needed.
            </p>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section
          id="portfolio"
          className="mx-auto max-w-7xl px-6 py-6 lg:px-10 lg:py-10"
        >
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#8e7e72]">
                Portfolio
              </p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                Selected Spaces
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#5d524b]">
              A curated look at interiors shaped by rich materials, natural
              light, tailored furnishings, and a strong sense of place.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#9b8c80]">
                    {project.category}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#8e7e72]">
              Services
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Design Support, Beautifully Tailored
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-[#ded4c8] bg-[#fbf7f2] p-8 shadow-sm"
              >
                <h3 className="font-serif text-2xl">{service.title}</h3>
                <p className="mt-4 leading-7 text-[#5d524b]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <div className="grid gap-8 rounded-[2rem] bg-[#2f2925] p-8 text-white shadow-2xl lg:grid-cols-[1fr_1fr] lg:p-12">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#d3bda8]">
                Contact
              </p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Let&apos;s create a space that feels like home, only better.
              </h2>
              <p className="mt-6 max-w-xl leading-8 text-[#ece2d9]">
                Ready to discuss your project? Reach out to DNS Design Group to
                start the conversation.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-[#f7efe6] p-6 text-[#2f2925]">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="mb-2 block text-sm font-medium">Name</label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-xl border border-[#d8c8b8] bg-white px-4 py-3 outline-none focus:border-[#9b8c80]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-[#d8c8b8] bg-white px-4 py-3 outline-none focus:border-[#9b8c80]"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    required
                    className="min-h-[140px] w-full rounded-xl border border-[#d8c8b8] bg-white px-4 py-3 outline-none focus:border-[#9b8c80]"
                    placeholder="Tell us about your space, style, and goals"
                  />
                </div>

                {status === 'success' && (
                  <p className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
                    Thanks! We&apos;ll be in touch within 1–2 business days.
                  </p>
                )}
                {status === 'error' && (
                  <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                    Something went wrong. Please email us directly at joe@webhazel.com
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full rounded-full bg-[#2f2925] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

<form className="space-y-5" onSubmit={async (e) => {
  e.preventDefault();
  const form = e.target;
  await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: form.name.value,
      lastName: '',
      email: form.email.value,
      projectType: 'General inquiry',
      message: form.message.value,
    }),
  });
  alert("Thanks! We'll be in touch soon.");
  form.reset();
}}>
  <div>
    <label className="mb-2 block text-sm font-medium">Name</label>
    <input name="name" className="w-full rounded-xl border border-[#d8c8b8] bg-white px-4 py-3 outline-none" placeholder="Your name" required />
  </div>
  <div>
    <label className="mb-2 block text-sm font-medium">Email</label>
    <input name="email" type="email" className="w-full rounded-xl border border-[#d8c8b8] bg-white px-4 py-3 outline-none" placeholder="Your email" required />
  </div>
  <div>
    <label className="mb-2 block text-sm font-medium">Project Details</label>
    <textarea name="message" className="min-h-[140px] w-full rounded-xl border border-[#d8c8b8] bg-white px-4 py-3 outline-none" placeholder="Tell us about your space, style, and goals" required />
  </div>
  <button type="submit" className="w-full rounded-full bg-[#2f2925] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
    Send Inquiry
  </button>
</form>

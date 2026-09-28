const I18N = {
en: {
  "nav.services": "Services", "nav.why": "Why us", "nav.reviews": "Reviews", "nav.contact": "Contact",
  "nav.call": "(912) 443-1986",
  "hero.kicker": "Savannah, GA · Mercedes & BMW specialists · Mobile mechanic",
  "hero.title": "Expert auto care —<br>at our shop or your door.",
  "hero.sub": "Rated 4.4 out of 5 from 27 Google reviews: full-service auto repair specializing in Mercedes and BMW, with mobile service from oil changes to engine rebuilds.",
  "hero.cta1": "Call (912) 443-1986", "hero.cta2": "See services",
  "trust.t1t": "Mobile mechanic", "trust.t1d": "We come to your home or office",
  "trust.t2t": "Mercedes & BMW", "trust.t2d": "European car specialists",
  "trust.t3t": "Mon – Fri, 8 AM – 5 PM", "trust.t3d": "Open weekdays for shop & mobile",
  "stats.hoursNum": "Mon – Fri", "stats.hours": "8 AM – 5 PM",
  "stats.makesNum": "Mercedes & BMW", "stats.makes": "European specialists",
  "stats.diagNum": "4.4 ★", "stats.diag": "27 Google reviews",
  "stats.quoteNum": "Mobile", "stats.quote": "service at your door",
  "services.kicker": "What we do", "services.title": "Full-service auto care, shop or mobile",
  "services.s1t": "Mobile mechanic service", "services.s1d": "From oil changes to engine rebuilds — we bring the shop to your home or office.",
  "services.s2t": "Mercedes & BMW specialists", "services.s2d": "Full-service European car care from a team that knows these cars inside out.",
  "services.s3t": "Engine diagnostics", "services.s3d": "Accurate troubleshooting with modern diagnostic equipment — no guessing.",
  "services.s4t": "Brake service", "services.s4d": "Pads, rotors and full brake system inspection — done right, your safety first.",
  "services.s5t": "Oil changes & maintenance", "services.s5d": "Factory-spec maintenance to keep your engine running strong, at our shop or yours.",
  "services.s6t": "Battery & electrical", "services.s6d": "Battery testing and replacement plus electrical system repairs for all makes.",
  "why.kicker": "Why choose us", "why.title": "The shop that comes to you",
  "why.intro": "Bragg's Mobile Services is a full-service auto shop in Savannah specializing in Mercedes and BMW — with mobile service that brings expert care to your driveway. Honest diagnosis, clear pricing, work done right the first time.",
  "why.l1t": "Mobile service", "why.l1d": "Oil changes to engine rebuilds, at your home or office.",
  "why.l2t": "European specialists", "why.l2d": "Mercedes and BMW expertise you can trust.",
  "why.l3t": "Honest quotes", "why.l3d": "The price is confirmed before any work begins.",
  "why.l4t": "Savannah local", "why.l4d": "At 2412 Habersham St — easy to reach, fast service.",
  "gallery.kicker": "The shop in action", "gallery.title": "Careful work, every time",
  "gallery.c1": "Accurate diagnostics, no guessing",
  "gallery.c2": "Brakes serviced with care",
  "gallery.c3": "Oil changes done right",
  "reviews.kicker": "Word on the street", "reviews.title": "Trusted by Savannah drivers",
  "reviews.num": "4.4", "reviews.more": "from 27 Google reviews",
  "reviews.cta": "See what customers say about us on Google",
  "faq.kicker": "Good to know", "faq.title": "Frequently asked questions",
  "faq.q1": "Do you really come to me for repairs?",
  "faq.a1": "Yes — our mobile service brings the shop to your home or office, from oil changes all the way to engine rebuilds. Call (912) 443-1986 to book a mobile visit.",
  "faq.q2": "Do you work on cars other than Mercedes and BMW?",
  "faq.a2": "Yes — we're a full-service auto shop for all makes and models, with a specialty in Mercedes and BMW.",
  "faq.q3": "What are your hours?",
  "faq.a3": "Monday to Friday, 8:00 AM to 5:00 PM. We're closed on weekends.",
  "faq.q4": "How do I book an appointment?",
  "faq.a4": "Just call us at (912) 443-1986 — for shop visits or mobile service, we'll find a time that works for you.",
  "contact.kicker": "Come see us", "contact.title": "Book your appointment",
  "contact.addr": "Address", "contact.phone": "Phone", "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Fri: 8:00 AM – 5:00 PM<br>Sat – Sun: closed",
  "contact.cta": "Call now to book",
  "nav.gallery": "Gallery", "nav.faq": "FAQ",
  "footer.tag": "Auto repair & mobile mechanic · Savannah, Georgia"
}};

function applyLang() {
  document.documentElement.lang = "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N.en[key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.title = "Bragg's Mobile Services — Auto Repair in Savannah, GA | Mobile Mechanic";
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang();

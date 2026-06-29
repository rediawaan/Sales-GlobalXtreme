const WHATSAPP_NUMBER = "6287733340006";
const INSTALLATION_FEE = 300000;
let currentLanguage = "id";

const translations = {
  id: {
    menu_button: "Menu",
    nav_packages: "Paket",
    nav_promo: "Promo",
    nav_router: "Router",
    nav_calculator: "Kalkulator",
    nav_install: "Cara Pasang",
    nav_faq: "FAQ",
    hero_eyebrow: "Konsultasi WiFi Rumah dan Bisnis",
    hero_title: "Butuh WiFi Rumah atau Bisnis? Saya Bantu Pilihkan Paket.",
    hero_desc: "Dapatkan info paket internet, promo router gratis, estimasi biaya, prosedur pemasangan, dan konsultasi langsung melalui WhatsApp.",
    hero_cta_primary: "Hubungi Saya",
    hero_cta_secondary: "Lihat Paket",
    trust_1: "Cek kebutuhan pelanggan",
    trust_2: "Info promo sederhana",
    trust_3: "Arahkan ke WhatsApp",
    sales_info: "Konsultasi paket internet rumah, bisnis, villa, kantor, cafe, dan hotel.",
    about_kicker: "Tentang Saya",
    about_title: "Sales yang siap bantu pilih paket internet.",
    about_desc: "Website ini dibuat sebagai halaman personal untuk membantu calon pelanggan memahami paket, promo, router, estimasi pembayaran, dan proses pemasangan sebelum menghubungi sales.",
    about_support_title: "Apa yang bisa saya bantu?",
    support_1_title: "Cek area jaringan",
    support_1_desc: "Kirim lokasi pemasangan, lalu saya bantu cek ketersediaan jaringan.",
    support_2_title: "Rekomendasi paket",
    support_2_desc: "Paket disesuaikan dengan kebutuhan rumah, bisnis, jumlah perangkat, dan aktivitas internet.",
    support_3_title: "Arahan pemasangan",
    support_3_desc: "Saya bantu jelaskan alur registrasi, pembayaran, dan estimasi jadwal pemasangan.",
    about_need_title: "Cocok untuk kebutuhan:",
    need_home: "Rumah",
    need_office: "Kantor",
    need_school: "Sekolah",
    about_note: "Catatan: website ini bukan website resmi perusahaan. Website ini dibuat sebagai alat bantu konsultasi personal sales.",
    package_kicker: "Paket Internet",
    package_title: "Pilih paket sesuai kebutuhan.",
    package_desc: "Tampilan dibuat sederhana agar calon pelanggan cepat membandingkan paket utama.",
    tag_home: "Rumah",
    tag_business: "Bisnis",
    lite_home_desc: "Internet rumah stabil untuk kebutuhan harian.",
    lite_home_li_3: "Cocok untuk keluarga",
    lite_home_li_4: "Streaming dan belajar online",
    lite_plus_desc: "Untuk pengguna aktif, gaming, live streaming, dan banyak perangkat.",
    lite_plus_li_1: "Up to Bandwidth performa tinggi",
    lite_plus_li_3: "Cocok untuk gaming dan content creator",
    lite_plus_li_4: "CCTV, kos kecil, dan rumah besar",
    signature_desc: "Internet bisnis dengan koneksi lebih stabil dan layanan prioritas.",
    signature_note: "Paket Signature tersedia hingga 1 Gbps.",
    signature_li_4: "Cocok untuk kantor, cafe, villa, hotel",
    choose_package: "Pilih Paket",
    compare_kicker: "Perbandingan",
    compare_title: "Lihat Perbedaan Paket GlobalXtreme.",
    compare_desc: "Sesuaikan kebutuhan Anda dengan tipe paket, layanan, dan rekomendasi penggunaan.",
    table_aspect: "Aspek",
    table_bandwidth: "Tipe Bandwidth",
    table_recommendation: "Rekomendasi",
    compare_lite_home_bandwidth: "Up to Bandwidth untuk kebutuhan rumah",
    compare_lite_plus_bandwidth: "Up to Bandwidth performa tinggi",
    compare_lite_home_service: "Internet rumah stabil dan Unlimited Data",
    compare_lite_plus_service: "Koneksi lebih kuat untuk gaming, live streaming, dan banyak perangkat",
    compare_lite_home_reco: "Rumah, keluarga, streaming, belajar online",
    compare_lite_plus_reco: "Gamer, content creator, WFH, CCTV, kos kecil, rumah besar",
    compare_signature_reco: "Kantor, cafe, restoran, villa, hotel, sekolah, bisnis",
    promo_title: "Promo Paket Berlangganan.",
    promo_3_month: "3 Bulan",
    promo_3_desc: "Langganan 3 bulan di awal dan dapatkan:",
    promo_3_benefit: "Gratis Router",
    promo_6_month: "6 Bulan",
    promo_6_desc: "Langganan 6 bulan di awal dan dapatkan:",
    promo_6_benefit: "Gratis Router + Diskon 10%",
    promo_12_month: "1 Tahun",
    promo_12_desc: "Langganan 1 tahun di awal dan dapatkan:",
    promo_12_benefit: "Gratis Router + Diskon 20%",
    router_title: "Router yang didapat.",
    router_desc: "Informasi router dibuat singkat agar pelanggan tahu perangkat yang sesuai dengan paketnya.",
    router_1300_desc: "Ruijie Reyee RG-EW1300G adalah router Wi-Fi 5 Gigabit berkecepatan 1300 Mbps yang andal untuk kebutuhan rumah standar.",
    router_1300_sig: "Signature 100 sampai 200 Mbps",
    router_6000_desc: "Ruijie Reyee RG-EW6000GX adalah router Wi-Fi 6 berkecepatan 6000 Mbps yang dilengkapi port 2.5G dan prosesor Quad-Core untuk performa gaming berat.",
    router_6000_sig: "Signature 300 Mbps ke atas",
    calculator_kicker: "Kalkulator Promo",
    calculator_title: "Hitung estimasi biaya awal.",
    calculator_desc: "Simulasi ini membantu pelanggan memahami subtotal, diskon promo, PPN 11%, biaya instalasi, router, dan estimasi total.",
    select_package: "Pilih Paket",
    select_period: "Masa Berlangganan",
    calc_button: "Hitung Estimasi",
    result_package: "Paket",
    result_period: "Masa berlangganan",
    result_discount: "Diskon",
    result_installation: "Biaya Instalasi",
    result_total: "Total estimasi",
    install_kicker: "Cara Pasang",
    install_title: "Proses pemasangan dibuat jelas.",
    install_desc: "Empat tahap sederhana dari cek lokasi sampai instalasi.",
    step_1_title: "Survey Lokasi",
    step_1_desc: "Tim mengecek area pemasangan dan ketersediaan jaringan.",
    step_2_title: "Registrasi",
    step_2_desc: "Pelanggan menyiapkan KTP dan email aktif.",
    step_3_title: "Pembayaran",
    step_3_desc: "Pelanggan menerima invoice sesuai paket yang dipilih.",
    step_4_title: "Pemasangan",
    step_4_desc: "Instalasi sekitar 2 sampai 3 hari setelah pembayaran berhasil.",
    faq_title: "Pertanyaan yang sering muncul.",
    faq_desc: "Jawaban dibuat singkat agar calon pelanggan cepat paham.",
    faq_q_1: "Apakah biaya pemasangan gratis?",
    faq_a_1: "Biaya pemasangan gratis untuk pelanggan yang langsung berlangganan 3 bulan di awal. Selain bebas biaya pemasangan, pelanggan juga mendapatkan gratis router.",
    faq_q_2: "Bagaimana cara mendapatkan gratis router?",
    faq_a_2: "Untuk paket Lite dan Lite Plus, pelanggan perlu berlangganan minimal 3 bulan di awal. Setelah masa 3 bulan selesai, metode pembayaran bisa diubah menjadi bulanan. Paket Signature tetap mendapatkan gratis router meskipun berlangganan 1 bulan.",
    faq_q_3: "Bagaimana memastikan lokasi saya terjangkau jaringan?",
    faq_a_3: "Hubungi saya melalui WhatsApp dan kirim lokasi pemasangan. Saya akan bantu cek ketersediaan jaringan di area Anda.",
    faq_q_4: "Apakah customer service tersedia 24 jam?",
    faq_a_4: "Iya. Customer service tersedia 24 jam untuk membantu Anda. Kami memiliki tim customer service asli, bukan robot.",
    faq_q_5: "Apakah ada biaya instalasi?",
    faq_a_5: "Untuk langganan 1 bulan, biaya instalasi Rp300.000 dan tidak mendapatkan router gratis.",
    contact_title: "Isi data singkat, lalu kirim ke WhatsApp.",
    contact_desc: "Form ini membuat pesan pelanggan lebih rapi sehingga sales bisa cepat memahami kebutuhan awal.",
    form_name: "Nama",
    form_location: "Lokasi Pemasangan",
    form_need: "Kebutuhan",
    form_interest: "Paket yang diminati",
    form_submit: "Kirim ke WhatsApp",
    placeholder_name: "Contoh: Budi",
    placeholder_location: "Contoh: Denpasar, Bali",
    interest_unknown: "Belum tahu, ingin konsultasi",
    final_title: "Mau mulai cek paket dan promo?",
    final_desc: "Konsultasi dulu agar paket yang dipilih sesuai kebutuhan lokasi dan penggunaan.",
    final_cta: "Konsultasi Sekarang",
    footer_desc: "Website personal Sales Representative GlobalXtreme untuk membantu calon pelanggan memahami paket, promo, router, estimasi biaya, dan proses pemasangan.",
    footer_menu: "Menu Cepat",
    footer_note_title: "Catatan",
    footer_note: "Website ini bukan website resmi perusahaan. Harga dan promo dapat berubah mengikuti kebijakan yang berlaku."
  },
  en: {
    menu_button: "Menu",
    nav_packages: "Packages",
    nav_promo: "Promo",
    nav_router: "Router",
    nav_calculator: "Calculator",
    nav_install: "How to Install",
    nav_faq: "FAQ",
    hero_eyebrow: "Home and Business WiFi Consultation",
    hero_title: "Need WiFi for Home or Business? I Help You Choose the Right Package.",
    hero_desc: "Get package information, free router promo, cost estimate, installation process, and direct consultation through WhatsApp.",
    hero_cta_primary: "Contact Me",
    hero_cta_secondary: "View Packages",
    trust_1: "Check customer needs",
    trust_2: "Simple promo info",
    trust_3: "Direct to WhatsApp",
    sales_info: "Consultation for home, business, villa, office, cafe, and hotel internet packages.",
    about_kicker: "About Me",
    about_title: "A sales representative ready to help you choose an internet package.",
    about_desc: "This personal website helps customers understand packages, promos, routers, payment estimates, and installation steps before contacting sales.",
    about_support_title: "How can I help you?",
    support_1_title: "Check network coverage",
    support_1_desc: "Send the installation location, then I will help check network availability.",
    support_2_title: "Package recommendation",
    support_2_desc: "The package is matched with your home, business, number of devices, and internet activity.",
    support_3_title: "Installation guidance",
    support_3_desc: "I will explain registration, payment, and estimated installation schedule.",
    about_need_title: "Suitable for:",
    need_home: "Home",
    need_office: "Office",
    need_school: "School",
    about_note: "Note: this is not the official company website. This website is a personal sales consultation tool.",
    package_kicker: "Internet Packages",
    package_title: "Choose a package based on your needs.",
    package_desc: "The layout is simple so customers can compare the main packages quickly.",
    tag_home: "Home",
    tag_business: "Business",
    lite_home_desc: "Stable home internet for daily needs.",
    lite_home_li_3: "Suitable for families",
    lite_home_li_4: "Streaming and online learning",
    lite_plus_desc: "For active users, gaming, live streaming, and many devices.",
    lite_plus_li_1: "High-performance Up to Bandwidth",
    lite_plus_li_3: "Suitable for gaming and content creators",
    lite_plus_li_4: "CCTV, small boarding house, and larger homes",
    signature_desc: "Business internet with more stable connection and priority service.",
    signature_note: "Signature packages are available up to 1 Gbps.",
    signature_li_4: "Suitable for offices, cafes, villas, hotels",
    choose_package: "Choose Package",
    compare_kicker: "Comparison",
    compare_title: "See the differences between GlobalXtreme packages.",
    compare_desc: "Match your needs with the package type, service, and recommended use.",
    table_aspect: "Aspect",
    table_bandwidth: "Bandwidth Type",
    table_recommendation: "Recommendation",
    compare_lite_home_bandwidth: "Up to Bandwidth for home needs",
    compare_lite_plus_bandwidth: "High-performance Up to Bandwidth",
    compare_lite_home_service: "Stable home internet and Unlimited Data",
    compare_lite_plus_service: "Stronger connection for gaming, live streaming, and many devices",
    compare_lite_home_reco: "Home, family, streaming, online learning",
    compare_lite_plus_reco: "Gamer, content creator, WFH, CCTV, small boarding house, larger home",
    compare_signature_reco: "Office, cafe, restaurant, villa, hotel, school, business",
    promo_title: "Subscription Package Promo.",
    promo_3_month: "3 Months",
    promo_3_desc: "Subscribe for 3 months upfront and get:",
    promo_3_benefit: "Free Router",
    promo_6_month: "6 Months",
    promo_6_desc: "Subscribe for 6 months upfront and get:",
    promo_6_benefit: "Free Router + 10% Discount",
    promo_12_month: "1 Year",
    promo_12_desc: "Subscribe for 1 year upfront and get:",
    promo_12_benefit: "Free Router + 20% Discount",
    router_title: "Router included.",
    router_desc: "Router information is kept short so customers know the device that matches their package.",
    router_1300_desc: "Ruijie Reyee RG-EW1300G is a Wi-Fi 5 Gigabit router with speeds up to 1300 Mbps for standard home needs.",
    router_1300_sig: "Signature 100 to 200 Mbps",
    router_6000_desc: "Ruijie Reyee RG-EW6000GX is a Wi-Fi 6 router with speeds up to 6000 Mbps, equipped with a 2.5G port and Quad-Core processor for heavy gaming performance.",
    router_6000_sig: "Signature 300 Mbps and above",
    calculator_kicker: "Promo Calculator",
    calculator_title: "Calculate the initial cost estimate.",
    calculator_desc: "This simulation helps customers understand subtotal, promo discount, PPN 11%, installation fee, router, and total estimate.",
    select_package: "Choose Package",
    select_period: "Subscription Period",
    calc_button: "Calculate Estimate",
    result_package: "Package",
    result_period: "Subscription period",
    result_discount: "Discount",
    result_installation: "Installation fee",
    result_total: "Total estimate",
    install_kicker: "How to Install",
    install_title: "The installation process is clear.",
    install_desc: "Four simple steps from location check to installation.",
    step_1_title: "Location Survey",
    step_1_desc: "The team checks the installation area and network availability.",
    step_2_title: "Registration",
    step_2_desc: "Customers prepare an ID card and active email.",
    step_3_title: "Payment",
    step_3_desc: "Customers receive an invoice based on the selected package.",
    step_4_title: "Installation",
    step_4_desc: "Installation takes around 2 to 3 days after successful payment.",
    faq_title: "Frequently asked questions.",
    faq_desc: "Answers are kept short so customers can understand quickly.",
    faq_q_1: "Is the installation fee free?",
    faq_a_1: "The installation fee is free for customers who subscribe for 3 months upfront. Customers also get a free router.",
    faq_q_2: "How do I get a free router?",
    faq_a_2: "For Lite and Lite Plus packages, customers need to subscribe for at least 3 months upfront. After the first 3 months, the payment method can be changed to monthly. Signature customers still get a free router even with a 1-month subscription.",
    faq_q_3: "How do I confirm if my location is covered?",
    faq_a_3: "Chat me through WhatsApp and send your installation location. I will help check network availability in your area.",
    faq_q_4: "Is customer service available 24 hours?",
    faq_a_4: "Yes. Customer service is available 24 hours to help you. We have a real customer service team, not a robot.",
    faq_q_5: "Is there an installation fee?",
    faq_a_5: "For a 1-month subscription, the installation fee is Rp300.000. For promo periods, please consult through WhatsApp.",
    contact_title: "Fill in short details, then send to WhatsApp.",
    contact_desc: "This form makes customer messages clearer so sales can understand the initial need faster.",
    form_name: "Name",
    form_location: "Installation Location",
    form_need: "Need",
    form_interest: "Interested Package",
    form_submit: "Send to WhatsApp",
    placeholder_name: "Example: Budi",
    placeholder_location: "Example: Denpasar, Bali",
    interest_unknown: "Not sure, need consultation",
    final_title: "Want to check packages and promos?",
    final_desc: "Consult first so the selected package matches the location and usage needs.",
    final_cta: "Consult Now",
    footer_desc: "Personal website of a GlobalXtreme Sales Representative to help customers understand packages, promos, routers, cost estimates, and installation process.",
    footer_menu: "Quick Menu",
    footer_note_title: "Note",
    footer_note: "This is not the official company website. Prices and promos may change based on applicable policy."
  }
};

const rupiah = (value) => new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0
}).format(value);

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const languageToggle = document.getElementById("languageToggle");
const packageSelect = document.getElementById("packageSelect");
const periodSelect = document.getElementById("periodSelect");
const calcBtn = document.getElementById("calcBtn");
const waForm = document.getElementById("waForm");

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.textContent = translations[language][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (translations[language][key]) element.placeholder = translations[language][key];
  });

  if (languageToggle) languageToggle.textContent = language === "id" ? "ID / EN" : "EN / ID";
  updatePeriodOptions();
  calculate();
}

function updatePeriodOptions() {
  if (!periodSelect) return;
  const periodLabels = currentLanguage === "id"
    ? { 1: "1 bulan", 3: "3 bulan", 6: "6 bulan", 12: "1 tahun" }
    : { 1: "1 month", 3: "3 months", 6: "6 months", 12: "12 months" };

  Array.from(periodSelect.options).forEach((option) => {
    option.textContent = periodLabels[option.value];
  });
}

function getDiscountRate(period) {
  if (period === 6) return 0.10;
  if (period === 12) return 0.20;
  return 0;
}

function getRouterText(period, router) {
  if (period === 1) {
    return currentLanguage === "id" ? "Tidak mendapatkan router gratis" : "No free router included";
  }
  return currentLanguage === "id" ? `Gratis Router: ${router}` : `Free Router: ${router}`;
}

function getPromoNote(period) {
  if (currentLanguage === "en") {
    if (period === 12) return "Subscribe for 1 year upfront and get: Free Router + 20% Discount.";
    if (period === 6) return "Subscribe for 6 months upfront and get: Free Router + 10% Discount.";
    if (period === 3) return "Subscribe for 3 months upfront and get: Free Router.";
    return "Installation fee: Rp300.000. Router: No free router included.";
  }

  if (period === 12) return "Langganan 1 tahun di awal dan dapatkan: Gratis Router + Diskon 20%.";
  if (period === 6) return "Langganan 6 bulan di awal dan dapatkan: Gratis Router + Diskon 10%.";
  if (period === 3) return "Langganan 3 bulan di awal dan dapatkan: Gratis Router.";
  return "Biaya Instalasi: Rp300.000. Router: Tidak mendapatkan router gratis.";
}

function formatPeriod(period) {
  if (currentLanguage === "en") {
    if (period === 1) return "1 month";
    return `${period} months`;
  }

  if (period === 12) return "1 tahun";
  return `${period} bulan`;
}

function getInstallationFee(period) {
  return period === 1 ? INSTALLATION_FEE : 0;
}

function calculate() {
  if (!packageSelect || !periodSelect) return;

  const [priceValue, packageName, router] = packageSelect.value.split("|");
  const price = Number(priceValue);
  const period = Number(periodSelect.value);
  const subtotal = price * period;
  const discount = subtotal * getDiscountRate(period);
  const taxable = subtotal - discount;
  const tax = taxable * 0.11;
  const installationFee = getInstallationFee(period);
  const total = taxable + tax + installationFee;

  const resultPackage = document.getElementById("resultPackage");
  const resultPeriod = document.getElementById("resultPeriod");
  const resultSubtotal = document.getElementById("resultSubtotal");
  const resultDiscount = document.getElementById("resultDiscount");
  const resultTax = document.getElementById("resultTax");
  const resultInstall = document.getElementById("resultInstall");
  const resultRouter = document.getElementById("resultRouter");
  const resultTotal = document.getElementById("resultTotal");
  const resultPromoNote = document.getElementById("resultPromoNote");

  if (resultPackage) resultPackage.textContent = packageName;
  if (resultPeriod) resultPeriod.textContent = formatPeriod(period);
  if (resultSubtotal) resultSubtotal.textContent = rupiah(subtotal);
  if (resultDiscount) resultDiscount.textContent = rupiah(discount);
  if (resultTax) resultTax.textContent = rupiah(tax);
  if (resultInstall) resultInstall.textContent = rupiah(installationFee);
  if (resultRouter) resultRouter.textContent = getRouterText(period, router);
  if (resultTotal) resultTotal.textContent = rupiah(total);
  if (resultPromoNote) resultPromoNote.textContent = getPromoNote(period);
}

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    const isActive = navMenu.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", String(isActive));
  });

  document.querySelectorAll("nav a, nav button").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    applyLanguage(currentLanguage === "id" ? "en" : "id");
  });
}

document.querySelectorAll("[data-package]").forEach((button) => {
  button.addEventListener("click", () => {
    const interest = document.getElementById("interest");
    if (interest) interest.value = button.dataset.package;
  });
});

if (calcBtn) calcBtn.addEventListener("click", calculate);
if (packageSelect) packageSelect.addEventListener("change", calculate);
if (periodSelect) periodSelect.addEventListener("change", calculate);

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    item.classList.toggle("active");
  });
});

if (waForm) {
  waForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const location = document.getElementById("location").value.trim();
    const need = document.getElementById("need").value;
    const interest = document.getElementById("interest").value;

    const message = currentLanguage === "id"
      ? `Halo, saya ingin konsultasi pemasangan internet GlobalXtreme.\n\nNama: ${name}\nLokasi pemasangan: ${location}\nKebutuhan: ${need}\nPaket yang diminati: ${interest}\n\nMohon bantu cek paket dan promo yang cocok.`
      : `Hello, I would like to consult about GlobalXtreme internet installation.\n\nName: ${name}\nInstallation location: ${location}\nNeed: ${need}\nInterested package: ${interest}\n\nPlease help check the suitable package and promo.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
}

function initPackageCardSelection() {
  const cards = Array.from(document.querySelectorAll(".package-card"));
  if (!cards.length) return;

  const setActive = (targetCard) => {
    cards.forEach((card) => card.classList.remove("is-active"));
    targetCard.classList.add("is-active");
  };

  cards.forEach((card) => {
    card.addEventListener("click", () => setActive(card));
  });
}

initPackageCardSelection();

applyLanguage("id");


// ===== PACKAGE CARD ACTIVE FIX =====
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".package-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      cards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
    });
  });

  // ===== AUTO SCROLL MOBILE =====
  const wrapper = document.querySelector(".package-wrapper");

  if (wrapper && window.innerWidth < 768) {
    let scrollAmount = 0;

    setInterval(() => {
      const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;

      scrollAmount += wrapper.clientWidth * 0.9;

      if (scrollAmount > maxScroll) scrollAmount = 0;

      wrapper.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }, 4000);
  }
});


const cards = document.querySelectorAll('.package-card');

cards.forEach(card=>{
  card.addEventListener('click',()=>{
    cards.forEach(c=>{
      c.classList.remove('active');
      const btn = c.querySelector('.btn-select');
      if(btn) btn.innerText = 'Pilih Paket';
    });

    card.classList.add('active');
    const btn = card.querySelector('.btn-select');
    if(btn) btn.innerText = 'Dipilih';
  });
});

const grid = document.querySelector('.package-grid');

if(grid && window.innerWidth < 768){
  let scroll = 0;
  setInterval(()=>{
    const max = grid.scrollWidth - grid.clientWidth;
    scroll += grid.clientWidth * 0.9;
    if(scroll > max) scroll = 0;
    grid.scrollTo({left:scroll,behavior:'smooth'});
  },4000);
}


document.querySelectorAll('.package-card').forEach(card=>{
  card.onclick = ()=>{
    document.querySelectorAll('.package-card').forEach(c=>{
      c.classList.remove('active');
      const btn = c.querySelector('button');
      if(btn) btn.innerText = 'Pilih Paket';
    });

    card.classList.add('active');
    const btn = card.querySelector('button');
    if(btn) btn.innerText = 'Dipilih';
  }
});


document.querySelectorAll('.package-card').forEach(card=>{
  card.addEventListener('click',()=>{
    document.querySelectorAll('.package-card').forEach(c=>{
      c.classList.remove('active');
      const btn=c.querySelector('button');
      if(btn) btn.innerText='Pilih Paket';
    });

    card.classList.add('active');
    const btn=card.querySelector('button');
    if(btn) btn.innerText='Dipilih';
  });
});


document.querySelectorAll('.package-card').forEach(card=>{
  card.onclick=()=>{
    document.querySelectorAll('.package-card').forEach(c=>{
      c.classList.remove('active');
      let b=c.querySelector('button');
      if(b) b.innerText='Pilih Paket';
    });

    card.classList.add('active');
    let b=card.querySelector('button');
    if(b) b.innerText='Dipilih';
  };
});

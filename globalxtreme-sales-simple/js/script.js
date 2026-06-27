/*
  JavaScript Vanilla untuk Website Personal Sales GlobalXtreme
  Ganti nomor WhatsApp di sini jika nomor berubah.
*/

const WHATSAPP_NUMBER = "6287733340006";

const whatsappBaseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

function buildWhatsAppUrl(message) {
  return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

// Mobile navigation
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");
    navToggle.classList.toggle("active", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  });
}

// FAQ accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");

  if (!button) return;

  button.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    faqItems.forEach((otherItem) => {
      otherItem.classList.remove("active");
      const otherButton = otherItem.querySelector(".faq-question");
      if (otherButton) otherButton.setAttribute("aria-expanded", "false");
    });

    if (!isActive) {
      item.classList.add("active");
      button.setAttribute("aria-expanded", "true");
    }
  });
});


// Promo calculator
const promoCalculator = document.getElementById("promoCalculator");
const calcPackage = document.getElementById("calcPackage");
const calcDuration = document.getElementById("calcDuration");
const installFee = document.getElementById("installFee");
const calculatorResult = document.getElementById("calculatorResult");

const packageData = {
  "lite-300": {
    name: "Lite Home 300 Mbps",
    group: "lite",
    monthly: 300000,
    router: "RG-EW1300G",
  },
  "lite-500": {
    name: "Lite Home 500 Mbps",
    group: "lite",
    monthly: 500000,
    router: "RG-EW1300G",
  },
  "liteplus-300": {
    name: "Lite Plus 300 Mbps",
    group: "lite",
    monthly: 700000,
    router: "RG-EW1300G",
  },
  "liteplus-500": {
    name: "Lite Plus 500 Mbps",
    group: "lite",
    monthly: 1000000,
    router: "RG-EW6000GX",
  },
  // Data lengkap Signature disimpan untuk kalkulator.
  // Tampilan kartu paket di index.html hanya menampilkan 100 Mbps, 500 Mbps, dan 1 Gbps agar halaman tetap sederhana.
  "signature-100": {
    name: "Signature 100 Mbps",
    group: "signature",
    monthly: 1000000,
    router: "RG-EW1300G",
  },
  "signature-200": {
    name: "Signature 200 Mbps",
    group: "signature",
    monthly: 2000000,
    router: "RG-EW1300G",
  },
  "signature-300": {
    name: "Signature 300 Mbps",
    group: "signature",
    monthly: 3000000,
    router: "RG-EW6000GX",
  },
  "signature-400": {
    name: "Signature 400 Mbps",
    group: "signature",
    monthly: 4000000,
    router: "RG-EW6000GX",
  },
  "signature-500": {
    name: "Signature 500 Mbps",
    group: "signature",
    monthly: 5000000,
    router: "RG-EW6000GX",
  },
  "signature-600": {
    name: "Signature 600 Mbps",
    group: "signature",
    monthly: 6000000,
    router: "RG-EW6000GX",
  },
  "signature-700": {
    name: "Signature 700 Mbps",
    group: "signature",
    monthly: 7000000,
    router: "RG-EW6000GX",
  },
  "signature-800": {
    name: "Signature 800 Mbps",
    group: "signature",
    monthly: 8000000,
    router: "RG-EW6000GX",
  },
  "signature-900": {
    name: "Signature 900 Mbps",
    group: "signature",
    monthly: 9000000,
    router: "RG-EW6000GX",
  },
  "signature-1000": {
    name: "Signature 1 Gbps",
    group: "signature",
    monthly: 10000000,
    router: "RG-EW6000GX",
  },
  dedicated: {
    name: "Dedicated Internet Access",
    group: "dedicated",
    monthly: null,
    router: "Menyesuaikan kebutuhan",
  },
};

function formatCurrency(value) {
  return `IDR ${Math.round(value).toLocaleString("id-ID")}`;
}

function getDurations(packageGroup) {
  if (packageGroup === "signature") {
    return [
      { months: 1, discount: 0, label: "1 Bulan - Free Router" },
      { months: 3, discount: 0, label: "3 Bulan - Free Router" },
      { months: 6, discount: 10, label: "6 Bulan - Free Router + Diskon 10%" },
      { months: 12, discount: 20, label: "12 Bulan - Free Router + Diskon 20%" },
    ];
  }

  if (packageGroup === "lite") {
    return [
      { months: 3, discount: 0, label: "3 Bulan - Free Router" },
      { months: 6, discount: 10, label: "6 Bulan - Free Router + Diskon 10%" },
      { months: 12, discount: 20, label: "12 Bulan - Free Router + Diskon 20%" },
    ];
  }

  return [{ months: "custom", discount: 0, label: "Konsultasi harga custom" }];
}

function updateDurationOptions() {
  if (!calcPackage || !calcDuration) return;

  const selectedPackage = packageData[calcPackage.value];
  calcDuration.innerHTML = '<option value="">Pilih masa berlangganan</option>';

  if (!selectedPackage) return;

  getDurations(selectedPackage.group).forEach((duration) => {
    const option = document.createElement("option");
    option.value = String(duration.months);
    option.dataset.discount = String(duration.discount);
    option.textContent = duration.label;
    calcDuration.appendChild(option);
  });
}

function renderEmptyResult() {
  if (!calculatorResult) return;
  calculatorResult.innerHTML = `
    <div class="result-empty">
      <strong>Hasil simulasi akan tampil di sini.</strong>
      <span>Pilih paket dan masa promo terlebih dahulu.</span>
    </div>
  `;
}

function renderCustomResult() {
  if (!calculatorResult) return;

  const message = [
    "Halo, saya ingin konsultasi Dedicated Internet Access GlobalXtreme.",
    "",
    "Mohon dibantu informasi harga custom dan kebutuhan teknisnya.",
  ].join("\n");

  calculatorResult.innerHTML = `
    <div class="result-custom">
      <h4>Dedicated Internet Access</h4>
      <p>Harga paket ini bersifat custom. Silakan konsultasi langsung agar kebutuhan bandwidth, area, dan teknis dapat dicek terlebih dahulu.</p>
      <a class="btn btn-gold result-wa" href="${buildWhatsAppUrl(message)}" target="_blank" rel="noopener">Konsultasi Dedicated <span aria-hidden="true">↗</span></a>
    </div>
  `;
}

function renderCalculationResult(data) {
  if (!calculatorResult) return;

  const message = [
    "Halo, saya ingin konsultasi pemasangan WiFi GlobalXtreme berdasarkan hasil kalkulator promo.",
    "",
    `Paket: ${data.packageName}`,
    `Masa berlangganan: ${data.months} bulan`,
    `Subtotal paket: ${formatCurrency(data.subtotal)}`,
    `Diskon: ${data.discountPercent}% (${formatCurrency(data.discountAmount)})`,
    `PPN 11%: ${formatCurrency(data.vat)}`,
    "Biaya instalasi: Diskusi via WhatsApp",
    `Estimasi total pembayaran paket: ${formatCurrency(data.total)}`,
    `Router: ${data.router}`,
    "",
    "Mohon dibantu cek area dan konfirmasi invoice resminya.",
  ].join("\n");

  calculatorResult.innerHTML = `
    <div class="result-summary">
      <div class="result-main">
        <span>Estimasi Total Pembayaran Paket</span>
        <strong>${formatCurrency(data.total)}</strong>
      </div>
      <div class="result-grid">
        <div class="result-item"><span>Paket</span><strong>${data.packageName}</strong></div>
        <div class="result-item"><span>Masa Promo</span><strong>${data.months} bulan</strong></div>
        <div class="result-item"><span>Subtotal Paket</span><strong>${formatCurrency(data.subtotal)}</strong></div>
        <div class="result-item"><span>Diskon</span><strong>${data.discountPercent}% atau ${formatCurrency(data.discountAmount)}</strong></div>
        <div class="result-item"><span>PPN 11%</span><strong>${formatCurrency(data.vat)}</strong></div>
        <div class="result-item"><span>Router</span><strong>${data.router}</strong></div>
      </div>
      <p class="result-note">Simulasi ini belum menjadi invoice resmi. Biaya instalasi silakan diskusi melalui WhatsApp dan nominal final mengikuti invoice resmi.</p>
      <a class="btn btn-gold result-wa" href="${buildWhatsAppUrl(message)}" target="_blank" rel="noopener">Kirim Hasil ke WhatsApp <span aria-hidden="true">↗</span></a>
    </div>
  `;
}

if (calcPackage && calcDuration) {
  calcPackage.addEventListener("change", () => {
    updateDurationOptions();
    clearError(calcPackage);
    clearError(calcDuration);
    renderEmptyResult();
  });

  calcDuration.addEventListener("change", () => clearError(calcDuration));
}


if (promoCalculator) {
  promoCalculator.addEventListener("reset", () => {
    window.setTimeout(() => {
      updateDurationOptions();
      renderEmptyResult();
      promoCalculator.querySelectorAll(".form-group").forEach((group) => group.classList.remove("invalid"));
      promoCalculator.querySelectorAll(".error-message").forEach((error) => {
        error.textContent = "";
      });
    }, 0);
  });

  promoCalculator.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedPackage = packageData[calcPackage.value];
    const selectedDuration = calcDuration.options[calcDuration.selectedIndex];
    const isPackageValid = validateSelect(calcPackage, "Paket");
    const isDurationValid = validateSelect(calcDuration, "Masa berlangganan");

    if (!isPackageValid || !isDurationValid || !selectedPackage) return;

    if (selectedPackage.group === "dedicated") {
      renderCustomResult();
      return;
    }

    const months = Number(calcDuration.value);
    const discountPercent = Number(selectedDuration.dataset.discount || 0);
    const subtotal = selectedPackage.monthly * months;
    const discountAmount = subtotal * (discountPercent / 100);
    const afterDiscount = subtotal - discountAmount;
    const vat = afterDiscount * 0.11;
    const total = afterDiscount + vat;

    renderCalculationResult({
      packageName: selectedPackage.name,
      monthly: selectedPackage.monthly,
      months,
      discountPercent,
      subtotal,
      discountAmount,
      vat,
      total,
      router: selectedPackage.router,
    });
  });
}

// Contact form validation and WhatsApp redirect
const leadForm = document.getElementById("leadForm");

function setError(field, message) {
  const formGroup = field.closest(".form-group");
  const errorMessage = formGroup ? formGroup.querySelector(".error-message") : null;

  if (formGroup) formGroup.classList.add("invalid");
  if (errorMessage) errorMessage.textContent = message;
}

function clearError(field) {
  const formGroup = field.closest(".form-group");
  const errorMessage = formGroup ? formGroup.querySelector(".error-message") : null;

  if (formGroup) formGroup.classList.remove("invalid");
  if (errorMessage) errorMessage.textContent = "";
}

function validateText(field, label, minimumLength = 2) {
  const value = field.value.trim();

  if (!value) {
    setError(field, `${label} wajib diisi.`);
    return false;
  }

  if (value.length < minimumLength) {
    setError(field, `${label} terlalu pendek.`);
    return false;
  }

  clearError(field);
  return true;
}

function validateSelect(field, label) {
  if (!field.value) {
    setError(field, `${label} wajib dipilih.`);
    return false;
  }

  clearError(field);
  return true;
}

if (leadForm) {
  const fields = leadForm.querySelectorAll("input, select");

  fields.forEach((field) => {
    field.addEventListener("input", () => clearError(field));
    field.addEventListener("change", () => clearError(field));
  });

  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name");
    const location = document.getElementById("location");
    const need = document.getElementById("need");
    const packageChoice = document.getElementById("package");

    const isNameValid = validateText(name, "Nama", 2);
    const isLocationValid = validateText(location, "Lokasi pemasangan", 3);
    const isNeedValid = validateSelect(need, "Kebutuhan");
    const isPackageValid = validateSelect(packageChoice, "Paket");

    if (!isNameValid || !isLocationValid || !isNeedValid || !isPackageValid) return;

    const message = [
      "Halo, saya ingin konsultasi pemasangan WiFi GlobalXtreme.",
      "",
      `Nama: ${name.value.trim()}`,
      `Lokasi pemasangan: ${location.value.trim()}`,
      `Kebutuhan: ${need.value}`,
      `Paket yang diminati: ${packageChoice.value}`,
    ].join("\n");

    window.open(buildWhatsAppUrl(message), "_blank", "noopener");
  });
}

// Back to top button
const backToTop = document.getElementById("backToTop");

function toggleBackToTop() {
  if (!backToTop) return;
  backToTop.classList.toggle("show", window.scrollY > 520);
}

window.addEventListener("scroll", toggleBackToTop, { passive: true });

toggleBackToTop();

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealElements.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

// Current year footer
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

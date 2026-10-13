const products = {
  vacuum: {
    eyebrow: "Pillow · Featured",
    title: "Vacuum-Compressed Pudding Pillow",
    image: "assets/pillow-vacuum.webp",
    alt: "Vacuum-Compressed Pudding Pillow with warm cream cover",
    description: "A softly supportive pillow with a latex-like hand feel and excellent recovery after compression. Vacuum packaging reduces transport volume, while the pillow quickly returns to its original shape after opening.",
    features: ["Latex-like feel", "Excellent recovery after compression", "Supportive, soft comfort", "Transport-friendly vacuum packaging"],
    meta: ["Pudding Pillow", "Vacuum compressed"]
  },
  pudding: {
    eyebrow: "Pillow",
    title: "Pudding Pillow",
    image: "assets/pillow-pudding.webp",
    alt: "Machine-washable Pudding Pillow with blue side panel",
    description: "An easy-care pillow with a clean white face and a distinctive blue side panel. Designed for everyday comfort and the convenience of machine washing.",
    features: ["Machine washable", "Blue side panel", "Soft everyday comfort", "Easy-care construction"],
    meta: ["Pudding Pillow", "Machine washable"]
  },
  "premium-pillow": {
    eyebrow: "Pillow · New",
    title: "New 0.3D Premium Comfort Pillow",
    image: "assets/pillow-premium-detail.jpg",
    orientation: "portrait",
    alt: "White six-box quilted premium comfort pillow",
    description: "A tailored pillow pairing a breathable cotton cover with cloud-soft 0.3D fiber filling. Six quilted boxes help keep the fill comfortably distributed, finished with an elegant piped edge.",
    features: ["100% cotton fabric", "0.3D fiber filling", "Soft and breathable", "Six-box quilted design", "Elegant piped edge"],
    meta: ["Cotton cover", "0.3D fill", "Six-box quilted"]
  },
  "double-piped": {
    eyebrow: "Pillow · Bestseller",
    title: "Double-Piped 0.3D Snowdown Fiber Pillow",
    image: "assets/pillow-double-piped-detail.jpg",
    orientation: "portrait",
    alt: "White Snowdown pillow with double blue piping",
    description: "Down-like softness with an airy, fluffy feel. Ultra-fine Snowdown fill delivers breathable comfort in an easy-care polyester cover with a crisp double-piped edge.",
    features: ["Down-like softness", "Fluffy and breathable", "Dust-free", "Easy care", "300T polyester cover"],
    meta: ["50 × 70 + 3 cm", "1200 g", "Item TK-251004"]
  },
  "cotton-pillow": {
    eyebrow: "Pillow",
    title: "Cotton 0.3D Snowdown Fiber Pillow",
    image: "assets/pillow-cotton.webp",
    alt: "White cotton Snowdown pillow with single piping",
    description: "A naturally breathable cotton shell wraps ultra-fine 0.3D Snowdown filling for gentle, down-like softness without the dust. A single piped edge keeps the look clean and refined.",
    features: ["100% cotton shell", "0.3D Snowdown fill", "Down-like softness", "Allergy-friendly", "Breathable and dust-free"],
    meta: ["Cotton shell", "Single piping"]
  },
  cloudloft: {
    eyebrow: "Comforter · Featured",
    title: "CloudLoft Comforter",
    image: "assets/comforter-cloudloft.webp",
    alt: "Lofty white CloudLoft comforter draped across a bed",
    description: "A social-media-inspired cloud comforter with approximately twice the loft. It is designed to feel lightweight yet warm, with a machine-washable construction that dries four times faster than regular fibers.",
    features: ["Approximately 2× loft", "Lightweight yet warm", "Dust-free and allergy-friendly", "4× faster drying", "Machine washable", "100% polyester knit"],
    meta: ["500 GSM", "750 GSM", "1000 GSM"]
  },
  "premium-quilt": {
    eyebrow: "Comforter",
    title: "0.3D Premium Comfort Quilt",
    image: "assets/comforter-premium.webp",
    alt: "White box-quilted premium comfort quilt on a softly lit bed",
    description: "A polished all-white quilt with a breathable cotton cover and soft 0.3D filling. Box quilting supports even distribution, while the piped edge gives the silhouette a tailored finish.",
    features: ["100% cotton fabric", "0.3D fiber filling", "Soft and breathable", "Box-quilted construction", "Elegant piped edge"],
    meta: ["Cotton cover", "0.3D fill"]
  },
  freshdry: {
    eyebrow: "Comforter",
    title: "FreshDry Cool Comfort Quilt",
    image: "assets/comforter-freshdry.webp",
    alt: "White FreshDry cool comfort quilt on a bright coastal bed",
    description: "FreshDry manages moisture in three steps: it absorbs, transfers, and releases. The result is breathable, all-season comfort that dries 85% faster than conventional fill.",
    features: ["Dries 85% faster than conventional fill", "Absorbs, transfers, and releases moisture", "Breathable comfort", "All-season use", "Machine washable"],
    meta: ["Moisture management", "All-season"]
  },
  "swiss-roll": {
    eyebrow: "Comforter · Most Loved",
    title: "Swiss Roll Comforter",
    image: "assets/comforter-swiss-roll.webp",
    alt: "Pink Swiss Roll comforter wrapped around a seated person",
    description: "A soft comforter with a graceful drape and playful palette. Resilient 2.8D fiber helps it stay fluffy and recover its form, while quick-dry performance keeps care simple.",
    features: ["Soft hand feel", "Graceful drape", "Quick-dry comfort", "Resilient 2.8D fiber"],
    meta: ["Butter Cream", "Strawberry Milk", "Taro Latte", "Dove Gray"]
  }
};

const fibers = {
  snowdown: {
    eyebrow: "Fiber technology",
    title: "0.3D Snowdown Fiber",
    image: "assets/fiber-snowdown.webp",
    alt: "A soft cloud of white 0.3D Snowdown fiber",
    description: "Snowdown is an ultra-fine down alternative engineered for generous, lightweight loft. Its 0.0018 mm fiber diameter is 50 times finer than human hair, creating a soft, airy filling designed for everyday ease.",
    features: ["0.0018 mm fiber diameter", "50 times finer than human hair", "Lightweight and fluffy", "Environmentally conscious", "Allergy-friendly", "Dust-free"],
    meta: ["0.3D", "Down alternative"]
  },
  silknova: {
    eyebrow: "Fiber technology",
    title: "2.8D Silknova Fiber",
    image: "assets/fiber-silknova-detail.webp",
    alt: "Fine white Silknova fiber stretched between fingers",
    description: "Silknova is a resilient, elastic fiber with a smooth hand feel and reliable recovery. It balances warmth and breathability, then adds washable, quick-drying performance for practical care.",
    features: ["85.2% warmth retention", "Dries 8× faster than cotton", "Dries 4× faster than ordinary fibers", "Resilient and elastic", "Soft, smooth, and breathable", "Washable and quick-drying"],
    meta: ["2.8D", "Quick-dry"]
  }
};

const dialog = document.querySelector("#detail-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogEyebrow = document.querySelector("#dialog-eyebrow");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector("#dialog-description");
const dialogFeatures = document.querySelector("#dialog-features");
const dialogMeta = document.querySelector("#dialog-meta");
const closeButton = dialog.querySelector(".dialog-close");
let lastTrigger = null;

function openDetail(item, trigger) {
  lastTrigger = trigger;
  dialogImage.src = item.image;
  dialogImage.alt = item.alt;
  dialog.classList.toggle("portrait-media", item.orientation === "portrait");
  dialogEyebrow.textContent = item.eyebrow;
  dialogTitle.textContent = item.title;
  dialogDescription.textContent = item.description;
  dialogFeatures.replaceChildren(...item.features.map(text => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }));
  dialogMeta.replaceChildren(...item.meta.map(text => {
    const span = document.createElement("span");
    span.textContent = text;
    return span;
  }));
  dialog.showModal();
  document.body.classList.add("dialog-open");
}

document.querySelectorAll("[data-product]").forEach(button => {
  button.addEventListener("click", () => openDetail(products[button.dataset.product], button));
});

document.querySelectorAll("[data-fiber]").forEach(button => {
  button.addEventListener("click", () => openDetail(fibers[button.dataset.fiber], button));
});

function closeDialog() {
  dialog.close();
  document.body.classList.remove("dialog-open");
  lastTrigger?.focus();
}

closeButton.addEventListener("click", closeDialog);
dialog.addEventListener("click", event => {
  const rect = dialog.getBoundingClientRect();
  const inside = event.clientX >= rect.left && event.clientX <= rect.right &&
    event.clientY >= rect.top && event.clientY <= rect.bottom;
  if (!inside) closeDialog();
});
dialog.addEventListener("cancel", event => {
  event.preventDefault();
  closeDialog();
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

document.querySelector("#copy-brief").addEventListener("click", async () => {
  const text = "Nuojiji product inquiry\n\nCollection / product:\nQuantity:\nTarget market:\nPreferred specification:\nTiming:\nAdditional notes:";
  const status = document.querySelector("#copy-status");
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = "Inquiry checklist copied.";
  } catch {
    status.textContent = "Copy unavailable. Include product, quantity, market, specification, and timing in your inquiry.";
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();

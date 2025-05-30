// WhatsApp contact information
export const WHATSAPP_NUMBER = "555189274761";
export const WHATSAPP_LINK = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`;

// Company information
export const COMPANY_INFO = {
  name: "Classul",
  foundedYear: 1971,
  address: "Rua Álvaro Chaves, 214 - Floresta, Porto Alegre - RS, 90220-040",
  phone: "(51) 3225-3965",
  whatsapp: "(51) 8927-4761",
  hours: "Segunda a sexta, das 9h às 18h",
  about: "A Classul está no mercado desde 1971. Especializada em placas de homenagem, inauguração, agradecimentos, formaturas e muito mais! Nossa missão é eternizar momentos especiais com produtos de qualidade e acabamento impecável."
};

// Navigation links
export const NAV_LINKS = [
  { name: "Início", path: "/" },
  { name: "Produtos", path: "/#produtos" },
  { name: "Sobre", path: "/#sobre" },
  { name: "Contato", path: "/#contato" }
];

// Social media links
export const SOCIAL_LINKS = [
  { name: "Facebook", url: "#", icon: "facebook" },
  { name: "Instagram", url: "#", icon: "instagram" },
  { name: "LinkedIn", url: "#", icon: "linkedin" }
];

// Product sizes for Placas de Homenagem
export const PLAQUE_SIZES = [
  { id: "9x14", label: "9x14cm" },
  { id: "12x17", label: "12x17cm" },
  { id: "14x20", label: "14x20cm" },
  { id: "16x25", label: "16x25cm" }
];

// Case colors for Placas de Homenagem
export const CASE_COLORS = [
  { id: "black", label: "Preto", color: "bg-black" },
  { id: "navy", label: "Azul Marinho", color: "bg-blue-900" },
  { id: "red", label: "Vermelho", color: "bg-red-700" }
];

// Hero section image and gradient (easily customizable)
export const HERO_IMAGE = {
  url: "https://brindideias.com.br/wp/wp-content/uploads/2024/12/Design-sem-nome-15.png",
  alt: "Placa de homenagem Classul",
  gradient: "bg-gradient-to-t from-primary/70 via-transparent to-transparent"
};

// About section image and overlay (easily customizable)
export const ABOUT_IMAGE = {
  url: "https://brindideias.com.br/wp/wp-content/uploads/2024/12/Design-sem-nome-1.png",
  alt: "Nossa história Classul",
  overlay: "bg-primary/10"
};

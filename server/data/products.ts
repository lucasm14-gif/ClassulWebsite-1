import { Product } from "../../client/src/types";

export const products: Product[] = [
  {
    id: "1",
    slug: "placas-homenagem",
    name: "Placas de Homenagem",
    shortDescription: "Eternize momentos especiais com nossas placas personalizadas.",
    description: "As placas de homenagem são uma forma elegante e duradoura de reconhecer conquistas, expressar gratidão ou comemorar ocasiões especiais. Cada placa é cuidadosamente produzida com materiais de alta qualidade e acabamento impecável.",
    images: [
      "https://brindideias.com.br/wp/wp-content/uploads/2024/12/Design-sem-nome-15.png",
      "https://brindideias.com.br/wp/wp-content/uploads/2024/12/Design-sem-nome-15.png",
      "https://brindideias.com.br/wp/wp-content/uploads/2024/12/Design-sem-nome-15.png"
    ],
    featured: true,
    options: {
      sizes: [
        { id: "9x14", label: "9x14cm" },
        { id: "12x17", label: "12x17cm" },
        { id: "14x20", label: "14x20cm" },
        { id: "16x25", label: "16x25cm" }
      ],
      colors: [
        { id: "black", label: "Preto", color: "bg-black" },
        { id: "navy", label: "Azul Marinho", color: "bg-blue-900" },
        { id: "red", label: "Vermelho", color: "bg-red-700" }
      ],
      hasQuantity: true
    }
  },
  {
    id: "2",
    slug: "trofeus",
    name: "Troféus",
    shortDescription: "Reconheça conquistas com troféus de alta qualidade.",
    description: "Nossos troféus são criados para destacar conquistas extraordinárias e celebrar vitórias. Disponíveis em diversos modelos e tamanhos, com opções de personalização para atender às suas necessidades.",
    images: [
      "https://images.unsplash.com/photo-1567427361984-0cbe7396fc6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586336900524-6e7d743a09b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    ],
    featured: true,
    options: {
      hasQuantity: true
    }
  },
  {
    id: "3",
    slug: "placas-inauguracao",
    name: "Placas de Inauguração",
    shortDescription: "Marque o início de seu negócio com uma placa elegante.",
    description: "Nossas placas de inauguração são desenvolvidas para marcar o começo de novos empreendimentos, construções e projetos. Feitas com materiais duráveis e de alta qualidade para resistir ao tempo.",
    images: [
      "https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573166953836-07b5826d39b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1571942676516-bcab84649e44?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    ],
    featured: true,
    options: {
      hasQuantity: true
    }
  },
  {
    id: "4",
    slug: "medalhas",
    name: "Medalhas",
    shortDescription: "Premie os melhores com medalhas de excelente acabamento.",
    description: "Medalhas personalizadas para premiações esportivas, acadêmicas ou corporativas. Disponíveis em diversos formatos, com opção de gravação personalizada para tornar o reconhecimento ainda mais especial.",
    images: [
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574509324730-7377033e93e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1587909209111-5097ee578ec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    ],
    featured: false,
    options: {
      hasQuantity: true
    }
  },
  {
    id: "5",
    slug: "pins",
    name: "Pins",
    shortDescription: "Pins personalizados para sua empresa ou evento.",
    description: "Pins personalizados para identificação corporativa, brindes ou colecionáveis. Produzidos com materiais de qualidade e acabamento impecável para representar sua marca com excelência.",
    images: [
      "https://images.unsplash.com/photo-1563290401-6eb49ae15e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1545231590-d0af0138d55a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1573215131483-9fcda5a1acf3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    ],
    featured: false,
    options: {
      hasQuantity: true
    }
  },
  {
    id: "6",
    slug: "bottons",
    name: "Bottons",
    shortDescription: "Bottons customizados para identificação e marketing.",
    description: "Bottons personalizados ideais para eventos, campanhas de marketing ou identificação. Produzidos em diversos tamanhos e formatos, com impressão de alta qualidade para destacar sua mensagem ou marca.",
    images: [
      "https://brindideias.com.br/wp/wp-content/uploads/2025/02/classul1-removebg-preview.png",
      "https://images.unsplash.com/photo-1588345450104-989024892695?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1590424263357-85833b920672?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    ],
    featured: false,
    options: {
      hasQuantity: true
    }
  }
];

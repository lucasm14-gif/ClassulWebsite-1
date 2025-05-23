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
      "https://brindideias.com.br/wp/wp-content/uploads/2025/04/Ouro_medalha__57619_zoom__92154_std-500x554-1.jpg",
      "https://brindideias.com.br/wp/wp-content/uploads/2025/04/Ouro_medalha__57619_zoom__92154_std-500x554-1.jpg",
      "https://brindideias.com.br/wp/wp-content/uploads/2025/04/Ouro_medalha__57619_zoom__92154_std-500x554-1.jpg"
    ],
    featured: false,
    options: {
      hasQuantity: true
    }
  },
  {
    id: "5",
    slug: "pins-e-bottons",
    name: "Pins e Bottons",
    shortDescription: "Pins e bottons personalizados para sua empresa ou evento.",
    description: "Pins e bottons personalizados para identificação corporativa, eventos, brindes ou colecionáveis. Produzidos com materiais de qualidade e acabamento impecável para representar sua marca com excelência.",
    images: [
      "https://brindideias.com.br/wp/wp-content/uploads/2025/02/classul1-removebg-preview.png",
      "https://images.unsplash.com/photo-1588345450104-989024892695?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1590424263357-85833b920672?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    ],
    featured: false,
    options: {
      hasQuantity: true
    }
  },
  {
    id: "6",
    slug: "placa-quadro-veludo",
    name: "Placa Quadro Fundo em Veludo",
    shortDescription: "Placas com acabamento elegante em veludo para sua empresa ou evento.",
    description: "Placas comemorativas com fundo em veludo, proporcionando um acabamento sofisticado e elegante. Ideal para homenagens especiais, certificados e reconhecimentos corporativos.",
    images: [
      "https://brindideias.com.br/wp/wp-content/uploads/2025/04/placa_fundo_vermelho__99938_zoom__76642_zoom-500x554-1.jpg",
      "https://brindideias.com.br/wp/wp-content/uploads/2025/04/placa_fundo_vermelho__99938_zoom__76642_zoom-500x554-1.jpg",
      "https://brindideias.com.br/wp/wp-content/uploads/2025/04/placa_fundo_vermelho__99938_zoom__76642_zoom-500x554-1.jpg"
    ],
    featured: false,
    options: {
      sizes: [
        { id: "9x14", label: "9x14cm" },
        { id: "12x17", label: "12x17cm" },
        { id: "14x20", label: "14x20cm" }
      ],
      colors: [
        { id: "burgundy", label: "Bordô", color: "bg-red-900" },
        { id: "navy", label: "Azul Marinho", color: "bg-blue-900" },
        { id: "black", label: "Preto", color: "bg-black" }
      ],
      hasQuantity: true
    }
  }
];

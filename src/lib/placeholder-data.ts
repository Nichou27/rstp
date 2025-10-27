import {
  Camera,
  Car,
  Code,
  Droplets,
  Hammer,
  HardHat,
  Paintbrush,
  Scissors,
  Wrench,
  Zap,
} from "lucide-react";

const professionals = [
  {
    id: "1",
    name: "El Taller de Pepito",
    description: "Trabajos de Pintura y albañilería",
    location: "Tupungato, Mendoza",
    imagesUrl: ["/placeholder.png", "/placeholder2.png"],
    rating: 4.5,
  },
  {
    id: "2",
    name: "Reparaciones Rápidas",
    description: "Servicios de Electricidad y Fontanería",
    location: "Mendoza Capital, Mendoza",
    imageUrl: ["/placeholder.png", "/placeholder2.png"],
    rating: 4.7,
  },
  {
    id: "3",
    name: "Servicios de Jardinería Juan",
    description: "Diseño y Mantenimiento de Jardines",
    location: "Godoy Cruz, Mendoza",
    imageUrl: ["/placeholder.png", "/placeholder2.png"],
    rating: 4.8,
  },
];

const services = [
  {
    id: 1,
    title: "Electricista",
    description:
      "Instalación y reparación de sistemas eléctricos para hogares y empresas.",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&h=200&fit=crop&crop=center",
    color: "bg-yellow-100 text-yellow-800",
    slug: "electricians",
  },
  {
    id: 2,
    title: "Gasista",
    description:
      "Servicios de instalación y mantenimiento de gas natural y envasado.",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center",
    color: "bg-blue-100 text-blue-800",
    slug: "gas-technicians",
  },
  {
    id: 3,
    title: "Ingeniero",
    description:
      "Consultoría técnica y supervisión de proyectos de construcción.",
    icon: HardHat,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center",
    color: "bg-green-100 text-green-800",
    slug: "engineers",
  },
  {
    id: 4,
    title: "Pintor",
    description:
      "Pintura interior y exterior, acabados decorativos y restauración.",
    icon: Paintbrush,
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=300&h=200&fit=crop&crop=center",
    color: "bg-purple-100 text-purple-800",
    slug: "painters",
  },
  {
    id: 5,
    title: "Plomero",
    description: "Reparación e instalación de sistemas de agua y desagües.",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=300&h=200&fit=crop&crop=center",
    color: "bg-cyan-100 text-cyan-800",
    slug: "plumbers",
  },
  {
    id: 6,
    title: "Carpintero",
    description: "Fabricación y reparación de muebles, estructuras de madera.",
    icon: Hammer,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop&crop=center",
    color: "bg-amber-100 text-amber-800",
    slug: "carpenters",
  },
  {
    id: 7,
    title: "Fotógrafo",
    description:
      "Servicios de fotografía profesional para eventos y comercial.",
    icon: Camera,
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=200&fit=crop&crop=center",
    color: "bg-pink-100 text-pink-800",
    slug: "photographers",
  },
  {
    id: 8,
    title: "Desarrollador",
    description:
      "Desarrollo de sitios web y aplicaciones móviles personalizadas.",
    icon: Code,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop&crop=center",
    color: "bg-indigo-100 text-indigo-800",
    slug: "developers",
  },
  {
    id: 9,
    title: "Peluquero",
    description:
      "Cortes de cabello, peinados y tratamientos capilares profesionales.",
    icon: Scissors,
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=200&fit=crop&crop=center",
    color: "bg-rose-100 text-rose-800",
    slug: "hairdressers",
  },
  {
    id: 10,
    title: "Mecánico",
    description: "Reparación y mantenimiento de vehículos y motores.",
    icon: Car,
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=200&fit=crop&crop=center",
    color: "bg-gray-100 text-gray-800",
    slug: "mechanics",
  },
];

const users = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  firstName: "María",
  lastName: "González",
  email: "maria.gonzalez@email.com",
  phoneNumber: "+54 261 123-4567",
  profileImage:
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
  bio: "Diseñadora gráfica con más de 5 años de experiencia en branding y marketing digital. Me especializo en crear identidades visuales únicas que conecten con tu audiencia.",
  isWorker: true,
  isVerified: true,
  rating: 4.8,
  totalReviews: 127,
  createdAt: new Date("2022-03-15"),
  updatedAt: new Date("2024-12-01"),
  direction: {
    street: "San Martín 1234",
    city: "Mendoza",
    province: "Mendoza",
    country: "Argentina",
  },
};

const userServices = [
  {
    id: "service-1",
    name: "Diseño de Logo Profesional",
    description:
      "Creación de logo único y profesional para tu marca, incluyendo manual de identidad básico con colores y tipografías.",
    price: 25000,
    duration: 7,
    imageUrl: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
    ],
    tags: ["Logo", "Branding", "Identidad Visual"],
    isActive: true,
    createdAt: new Date("2024-01-15"),
    category: { name: "Diseño Gráfico" },
  },
  {
    id: "service-2",
    name: "Diseño de Redes Sociales",
    description:
      "Pack completo de diseños para redes sociales: posts, stories, covers. Incluye plantillas editables.",
    price: 18000,
    duration: 5,
    imageUrl: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    ],
    tags: ["Social Media", "Instagram", "Facebook"],
    isActive: true,
    createdAt: new Date("2024-02-01"),
    category: { name: "Marketing Digital" },
  },
  {
    id: "service-3",
    name: "Tarjetas de Presentación",
    description:
      "Diseño profesional de tarjetas de presentación con acabados premium. Incluye archivos para impresión.",
    price: 8000,
    duration: 3,
    imageUrl: [
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
    ],
    tags: ["Tarjetas", "Impresión", "Corporativo"],
    isActive: true,
    createdAt: new Date("2024-01-20"),
    category: { name: "Material Impreso" },
  },
];

const service = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  title: "Clases de Guitarra Personalizadas",
  price: 5000,
  category: "Educación",
  description:
    "Ofrezco clases de guitarra personalizadas para todos los niveles. Con más de 10 años de experiencia enseñando, adapto cada lección a tu ritmo y objetivos musicales.",
  longDescription:
    "Mis clases incluyen teoría musical, técnica, lectura de partituras y tablaturas. Trabajo con diferentes estilos: rock, blues, jazz, clásico y folklore. Cada clase dura 60 minutos y incluye material de estudio personalizado.",
  features: [
    "Clases individuales de 60 minutos",
    "Material didáctico incluido",
    "Flexibilidad de horarios",
    "Primera clase de prueba gratis",
    "Seguimiento personalizado",
  ],
  images: [
    "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800",
    "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=800",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800",
  ],
  location: "Mendoza, Argentina",
  availability: "Lun-Vie: 14:00-20:00",
};

const provider = {
  name: "Carlos Rodríguez",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
  rating: 4.8,
  reviewCount: 47,
  memberSince: "2023",
  verified: true,
  responseTime: "2 horas",
  bio: "Músico profesional y profesor de guitarra con 15 años de experiencia. Graduado del Conservatorio Nacional.",
  totalServices: 3,
};

const reviews = [
  {
    id: 1,
    author: "María González",
    rating: 5,
    date: "2024-09-15",
    comment:
      "Excelente profesor, muy paciente y profesional. He aprendido muchísimo en poco tiempo.",
  },
  {
    id: 2,
    author: "Juan Pérez",
    rating: 5,
    date: "2024-08-22",
    comment:
      "Las clases son muy didácticas y el material de apoyo es de primera calidad.",
  },
  {
    id: 3,
    author: "Laura Martínez",
    rating: 4,
    date: "2024-07-10",
    comment:
      "Muy recomendable. Carlos se adapta perfectamente a tu nivel y objetivos.",
  },
];

export {
  professionals,
  services,
  users,
  userServices,
  service,
  provider,
  reviews,
};

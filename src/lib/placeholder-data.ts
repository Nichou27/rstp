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
  },
  {
    id: 5,
    title: "Plomero",
    description: "Reparación e instalación de sistemas de agua y desagües.",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=300&h=200&fit=crop&crop=center",
    color: "bg-cyan-100 text-cyan-800",
  },
  {
    id: 6,
    title: "Carpintero",
    description: "Fabricación y reparación de muebles, estructuras de madera.",
    icon: Hammer,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop&crop=center",
    color: "bg-amber-100 text-amber-800",
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
  },
  {
    id: 10,
    title: "Mecánico",
    description: "Reparación y mantenimiento de vehículos y motores.",
    icon: Car,
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=200&fit=crop&crop=center",
    color: "bg-gray-100 text-gray-800",
  },
];

export { professionals, services };

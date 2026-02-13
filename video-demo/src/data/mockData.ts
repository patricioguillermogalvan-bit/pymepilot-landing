export const salesData = [
  { month: "Ene", value: 120 },
  { month: "Feb", value: 145 },
  { month: "Mar", value: 132 },
  { month: "Abr", value: 178 },
  { month: "May", value: 195 },
  { month: "Jun", value: 210 },
  { month: "Jul", value: 245 },
  { month: "Ago", value: 268 },
  { month: "Sep", value: 290 },
  { month: "Oct", value: 315 },
  { month: "Nov", value: 342 },
  { month: "Dic", value: 380 },
];

export const alertas = [
  { id: 1, type: "dormido" as const, client: "Distribuidora López", days: 15 },
  { id: 2, type: "dormido" as const, client: "Ferretería Central", days: 22 },
  { id: 3, type: "stock" as const, client: "Stock bajo: MagSafe Pro 15W", days: 0 },
  { id: 4, type: "dormido" as const, client: "TechStore Sur", days: 30 },
];

export const clientes = [
  { name: "IEY Argentina", status: "activo" as const, lastOrder: "Hace 2 días", revenue: "$1.2M" },
  { name: "TechStore Buenos Aires", status: "activo" as const, lastOrder: "Hace 5 días", revenue: "$890K" },
  { name: "Distribuidora López", status: "dormido" as const, lastOrder: "Hace 15 días", revenue: "$650K" },
  { name: "Ferretería Central", status: "dormido" as const, lastOrder: "Hace 22 días", revenue: "$420K" },
  { name: "ElectroSur Mendoza", status: "activo" as const, lastOrder: "Hace 1 día", revenue: "$380K" },
  { name: "MegaCell Córdoba", status: "nuevo" as const, lastOrder: "Hoy", revenue: "$—" },
];

export const stockCritico = [
  { product: "MagSafe Pro 15W", stock: 3, min: 20 },
  { product: "Cable USB-C 2m", stock: 8, min: 50 },
  { product: "Funda iPhone 15", stock: 5, min: 30 },
];

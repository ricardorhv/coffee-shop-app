const categories = [
  {
    id: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
    name: 'Cafés Tradicionais'
  },
  {
    id: 'b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7',
    name: 'Cafés Especiais'
  },
  {
    id: 'c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8',
    name: 'Cafés Gelados'
  },
  {
    id: 'd4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9',
    name: 'Bebidas com Leite'
  },
  {
    id: 'e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0',
    name: 'Chás e Infusões'
  },
  {
    id: 'f6g7h8i9-j0k1-l2m3-n4o5-p6q7r8s9t0u1',
    name: 'Bebidas Especiais'
  }
]

const coffees = [
  {
    id: 'g7h8i9j0-k1l2-m3n4-o5p6-q7r8s9t0u1v2',
    name: 'Café Espresso',
    description: 'Café forte e encorpado, preparado com grãos selecionados.',
    price: 8.00,
    categoryId: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
    image: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=800'
  },
  {
    id: 'h8i9j0k1-l2m3-n4o5-p6q7-r8s9t0u1v2w3',
    name: 'Café Coado',
    description: 'Café suave preparado no método tradicional, com aroma marcante.',
    price: 7.00,
    categoryId: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
    image: 'https://images.unsplash.com/photo-1518685684148-9e9c3353a6d5?q=80&w=800'
  },
  {
    id: 'i9j0k1l2-m3n4-o5p6-q7r8-s9t0u1v2w3x4',
    name: 'Cappuccino Clássico',
    description: 'Espresso com leite vaporizado e espuma cremosa.',
    price: 12.00,
    categoryId: 'd4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9',
    image: 'https://images.unsplash.com/photo-1517256060242-3b3462d5a5f0?q=80&w=800'
  },
  {
    id: 'j0k1l2m3-n4o5-p6q7-r8s9-t0u1v2w3x4y5',
    name: 'Latte Macchiato',
    description: 'Leite cremoso com um toque de espresso em camadas.',
    price: 13.00,
    categoryId: 'd4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9',
    image: 'https://images.unsplash.com/photo-1517231928813-3d49e7e5947e?q=80&w=800'
  },
  {
    id: 'k1l2m3n4-o5p6-q7r8-s9t0-u1v2w3x4y5z6',
    name: 'Cold Brew',
    description: 'Café gelado de infusão a frio, refrescante e suave.',
    price: 14.00,
    categoryId: 'c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8',
    image: 'https://images.unsplash.com/photo-1523365291230-0f3a88f2eb3e?q=80&w=800'
  },
  {
    id: 'l2m3n4o5-p6q7-r8s9-t0u1-v2w3x4y5z6a7',
    name: 'Latte Gelado',
    description: 'Café com leite gelado, ideal para dias quentes.',
    price: 15.00,
    categoryId: 'c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8',
    image: 'https://images.unsplash.com/photo-1534693251-7d06e3bcd7a8?q=80&w=800'
  },
  {
    id: 'm3n4o5p6-q7r8-s9t0-u1v2-w3x4y5z6a7b8',
    name: 'Café Geisha',
    description: 'Café especial com notas florais e frutadas.',
    price: 25.00,
    categoryId: 'b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7',
    image: 'https://images.unsplash.com/photo-1593621833615-33e9d8764898?q=80&w=800'
  },
  {
    id: 'n4o5p6q7-r8s9-t0u1-v2w3-x4y5z6a7b8c9',
    name: 'Café Bourbon',
    description: 'Café especial com notas de chocolate e caramelo.',
    price: 22.00,
    categoryId: 'b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7',
    image: 'https://images.unsplash.com/photo-1511516412-5f2b07a89e8b?q=80&w=800'
  },
  {
    id: 'o -r8s9t0u1-v2w3-x4y5-z6a7b8c9d0e1f2',
    name: 'Chá Verde Matcha',
    description: 'Chá matcha cremoso com leite, rico em antioxidantes.',
    price: 18.00,
    categoryId: 'e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0',
    image: 'https://images.unsplash.com/photo-1519984009159-1c17f7d4a0e0?q=80&w=800'
  },
  {
    id: 's9t0u1v2-w3x4-y5z6-a7b8-c9d0e1f2g3h4',
    name: 'Chá de Hibisco',
    description: 'Infusão refrescante com sabor frutado e toque floral.',
    price: 10.00,
    categoryId: 'e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0',
    image: 'https://images.unsplash.com/photo-1599508709296-0e6b7e5d8f0c?q=80&w=800'
  },
  {
    id: 't0u1v2w3-x4y5-z6a7-b8c9-d0e1f2g3h4i5',
    name: 'Mocha Caramelo',
    description: 'Café com chocolate, caramelo e creme chantilly.',
    price: 16.00,
    categoryId: 'f6g7h8i9-j0k1-l2m3-n4o5-p6q7r8s9t0u1',
    image: 'https://images.unsplash.com/photo-1511920170033-f837db53d6c8?q=80&w=800'
  },
  {
    id: 'u1v2w3x4-y5z6-a7b8-c9d0-e1f2g3h4i5j6',
    name: 'Affogato',
    description: 'Espresso quente servido sobre uma bola de sorvete de baunilha.',
    price: 20.00,
    categoryId: 'f6g7h8i9-j0k1-l2m3-n4o5-p6q7r8s9t0u1',
    image: 'https://images.unsplash.com/photo-1514327605112-b887c0e449c6?q=80&w=800'
  }
]

export const data = {
  categories,
  coffees
}
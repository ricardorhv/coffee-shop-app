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
    image: 'https://images.unsplash.com/photo-1617799852831-614b910885e1?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'h8i9j0k1-l2m3-n4o5-p6q7-r8s9t0u1v2w3',
    name: 'Café Coado',
    description: 'Café suave preparado no método tradicional, com aroma marcante.',
    price: 7.00,
    categoryId: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
    image: 'https://images.unsplash.com/photo-1621302631614-71077f1535c1?q=80&w=1573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'i9j0k1l2-m3n4-o5p6-q7r8-s9t0u1v2w3x4',
    name: 'Cappuccino Clássico',
    description: 'Espresso com leite vaporizado e espuma cremosa.',
    price: 12.00,
    categoryId: 'd4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9',
    image: 'https://images.unsplash.com/photo-1588574982091-cf0c34ea0e4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'j0k1l2m3-n4o5-p6q7-r8s9-t0u1v2w3x4y5',
    name: 'Latte Macchiato',
    description: 'Leite cremoso com um toque de espresso em camadas.',
    price: 13.00,
    categoryId: 'd4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9',
    image: 'https://plus.unsplash.com/premium_photo-1674327105076-36c4419864cf?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'k1l2m3n4-o5p6-q7r8-s9t0-u1v2w3x4y5z6',
    name: 'Cold Brew',
    description: 'Café gelado de infusão a frio, refrescante e suave.',
    price: 14.00,
    categoryId: 'c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8',
    image: 'https://images.unsplash.com/photo-1611846516957-0c7abdbafc12?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'l2m3n4o5-p6q7-r8s9-t0u1-v2w3x4y5z6a7',
    name: 'Latte Gelado',
    description: 'Café com leite gelado, ideal para dias quentes.',
    price: 15.00,
    categoryId: 'c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8',
    image: 'https://images.unsplash.com/photo-1595244333063-a394c9cdd63f?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'm3n4o5p6-q7r8-s9t0-u1v2-w3x4y5z6a7b8',
    name: 'Café Geisha',
    description: 'Café especial com notas florais e frutadas.',
    price: 25.00,
    categoryId: 'b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7',
    image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'n4o5p6q7-r8s9-t0u1-v2w3-x4y5z6a7b8c9',
    name: 'Café Bourbon',
    description: 'Café especial com notas de chocolate e caramelo.',
    price: 22.00,
    categoryId: 'b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7',
    image: 'https://images.unsplash.com/photo-1632036361798-972e9a619429?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'o -r8s9t0u1-v2w3-x4y5-z6a7b8c9d0e1f2',
    name: 'Chá Verde Matcha',
    description: 'Chá matcha cremoso com leite, rico em antioxidantes.',
    price: 18.00,
    categoryId: 'e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0',
    image: 'https://images.unsplash.com/photo-1578874298704-7ae3f4499eb1?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 's9t0u1v2-w3x4-y5z6-a7b8-c9d0e1f2g3h4',
    name: 'Chá de Hibisco',
    description: 'Infusão refrescante com sabor frutado e toque floral.',
    price: 10.00,
    categoryId: 'e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0',
    image: 'https://images.unsplash.com/photo-1566925548937-ad62b79fad43?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 't0u1v2w3-x4y5-z6a7-b8c9-d0e1f2g3h4i5',
    name: 'Mocha Caramelo',
    description: 'Café com chocolate, caramelo e creme chantilly.',
    price: 16.00,
    categoryId: 'f6g7h8i9-j0k1-l2m3-n4o5-p6q7r8s9t0u1',
    image: 'https://images.unsplash.com/photo-1577209863447-ccd14fed6843?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'u1v2w3x4-y5z6-a7b8-c9d0-e1f2g3h4i5j6',
    name: 'Affogato',
    description: 'Espresso quente servido sobre uma bola de sorvete de baunilha.',
    price: 20.00,
    categoryId: 'f6g7h8i9-j0k1-l2m3-n4o5-p6q7r8s9t0u1',
    image: 'https://images.unsplash.com/photo-1473923377535-0002805f57e8?q=80&w=1608&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

export const data = {
  categories,
  coffees
}
import { WoodMaterial, FinishType, UpholsteryType, CatalogItem, Testimonial } from '../types';

export const WOOD_MATERIALS: WoodMaterial[] = [
  {
    id: 'teak',
    name: 'Premium Teak (Sagwan)',
    description: 'Golden-brown wood with straight grain. Highly durable, water-resistant, and termite-proof.',
    colorHex: '#C18A4F',
    pricePerSqFt: 180,
    origin: 'Cental India',
    grain: 'Dense & Distinct'
  },
  {
    id: 'walnut',
    name: 'Dark Walnut',
    description: 'Rich dark chocolate tones with striking wavy grain patterns. Offers an ultra-luxurious, modern finish.',
    colorHex: '#523A28',
    pricePerSqFt: 220,
    origin: 'North America',
    grain: 'Flowing & Wavy'
  },
  {
    id: 'sheesham',
    name: 'Indian Rosewood (Sheesham)',
    description: 'Beautiful reddish-brown chestnut shades. Extremely tough, with highly rich, dramatic grain contrasts.',
    colorHex: '#8C4D26',
    pricePerSqFt: 140,
    origin: 'Rajasthan',
    grain: 'Interlocking & Bold'
  },
  {
    id: 'oak',
    name: 'White Ash / Golden Oak',
    description: 'Light cream to golden-amber wood. Heavy, strong, and perfect for modern Scandinavian interior styles.',
    colorHex: '#E5C69D',
    pricePerSqFt: 155,
    origin: 'Europe',
    grain: 'Consistent & Fine'
  }
];

export const FINISH_TYPES: FinishType[] = [
  {
    id: 'natural',
    name: 'Natural Danish Oil',
    description: 'Zero gloss, deep penetration that accentuates the pure raw texture and rich grain of the wood.',
    priceMultiplier: 1.0
  },
  {
    id: 'matte',
    name: 'Satin Matte Premium',
    description: 'A smooth, modern non-reflective layer that shields the wood while retaining its original raw elegance.',
    priceMultiplier: 1.08
  },
  {
    id: 'gloss',
    name: 'Royal High Gloss Polyurethane',
    description: 'A brilliant, mirror-like protective shield that catches light and enriches deep wood tones.',
    priceMultiplier: 1.15
  },
  {
    id: 'vintage',
    name: 'Vintage Mahogany Stain',
    description: 'An antique, hand-rubbed pigment stain that adds depth, giving the timber a majestic ancestral soul.',
    priceMultiplier: 1.10
  }
];

export const UPHOLSTERY_OPTIONS: UpholsteryType[] = [
  {
    id: 'ivory_boucle',
    name: 'Cosy Bouclé',
    colorName: 'Ivory Cream',
    colorHex: '#F5EFEB',
    material: 'Textured Wool Loop',
    extraCost: 4500
  },
  {
    id: 'indigo_velvet',
    name: 'Royal Velvet',
    colorName: 'Midnight Indigo',
    colorHex: '#1B365D',
    material: 'Plush Micro-Velvet',
    extraCost: 6000
  },
  {
    id: 'forest_linen',
    name: 'Organic Linen',
    colorName: 'Forest Sage',
    colorHex: '#3D5245',
    material: '100% Organic Flax Linen',
    extraCost: 3500
  },
  {
    id: 'cognac_leather',
    name: 'Heritage Leather',
    colorName: 'Cognac Amber',
    colorHex: '#8E4A23',
    material: 'Top-grain Nappa Leatherette',
    extraCost: 9500
  },
  {
    id: 'charcoal_canvas',
    name: 'Durable Canvas',
    colorName: 'Slate Charcoal',
    colorHex: '#3A3B3C',
    material: 'Heavy-duty Duck Cotton',
    extraCost: 2000
  }
];

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: 'cat-sofa-1',
    name: 'Virat Chesterfield Royal Sofa',
    category: 'living',
    description: 'Our signature handcrafted Chesterfield sofa features deeply buttoned upholstery, rolled arms, and exquisite Teak wood bun feet.',
    basePrice: 58000,
    features: ['High-density orthopaedic foam core', 'Double-dowel solid wood frame jointing', 'Elegant hand-tucked tufts'],
    dimensions: { w: 86, d: 38, h: 32 },
    imageType: 'sofa'
  },
  {
    id: 'cat-table-1',
    name: 'Imperial 6-Seater Live-Edge Dining Table',
    category: 'dining',
    description: 'A majestic statement piece crafted from a solid slab of premium wood, preserving its natural organic edges. Accompanied by 6 upholstered comfort chairs.',
    basePrice: 84000,
    features: ['Single-slab tabletop thickness: 2 inches', 'Sturdy powder-coated metal legs', 'Completely hand-polished waterproof sealant'],
    dimensions: { w: 72, d: 36, h: 30 },
    imageType: 'table'
  },
  {
    id: 'cat-bed-1',
    name: 'Regal Poster Canopy Bed',
    category: 'bedroom',
    description: 'An elegant four-poster dream bed handcrafted with grand wooden pillars, a clean headboard panel, and hidden joint reinforced slate support.',
    basePrice: 75000,
    features: ['Solid blockboard platform foundation', 'Zero squeak noise dampening design', 'Hand-turned elegant pillars'],
    dimensions: { w: 84, d: 78, h: 80 },
    imageType: 'bed'
  },
  {
    id: 'cat-desk-1',
    name: 'Artisan Executive Walnut Bureau',
    category: 'office',
    description: 'A modern, ergonomic writing and computing desk designed with spacious drawers, brass pull accents, and a smart integrated wire management slot.',
    basePrice: 42000,
    features: ['3 soft-close hardware drawers', 'Precision cable organizer grommet', 'Velvet-lined document compartment'],
    dimensions: { w: 60, d: 28, h: 30 },
    imageType: 'desk'
  },
  {
    id: 'cat-cabinet-1',
    name: 'Ancestral Sheesham Glass Sideboard',
    category: 'dining',
    description: 'A beautiful credenza featuring intricate wood grain patterns, glass display doors, adjustable shelves, and soft-close safety hinges.',
    basePrice: 49000,
    features: ['Tempered safety glass window panels', 'Heavy magnetic door closures', 'Adjustable internal solid wood shelves'],
    dimensions: { w: 66, d: 18, h: 34 },
    imageType: 'cabinet'
  },
  {
    id: 'cat-bed-2',
    name: 'Nordic Low-Profile Floating Bed',
    category: 'bedroom',
    description: 'A sleek, minimalist low-slung bed featuring a wide integrated headboard shelf, ambient backlight channel, and hidden support legs creating a floating visual effect.',
    basePrice: 62000,
    features: ['Integrated double nightstand ledges', 'Hidden support beam structures', 'Built-in warm LED power channels'],
    dimensions: { w: 80, d: 82, h: 28 },
    imageType: 'bed'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Vikram Aditya Rathore',
    role: 'Homeowner',
    rating: 5,
    text: 'We commissioned Virat Furniture to build our custom 8-seater dining table and a Chesterfield sofa set. The craftsmanship is flawless. The Teak wood feels solid and the hand-polished finish is incredibly rich.',
    location: 'Jaipur',
    avatarLetter: 'V',
    date: '2 months ago'
  },
  {
    id: 't2',
    name: 'Pooja Sharma',
    role: 'Interior Architect',
    rating: 5,
    text: 'As an interior designer, I am highly meticulous about wood quality and joints. The team at Virat Furniture built customized floating platform beds and desks for my luxury villa project. Their precision, wood seasoning, and timely installation exceeded my expectations.',
    location: 'New Delhi',
    avatarLetter: 'P',
    date: '1 month ago'
  },
  {
    id: 't3',
    name: 'Rajesh Malhotra',
    role: 'Villa Owner',
    rating: 5,
    text: 'Replaced my old living room furniture with Virat’s custom Dark Walnut credenza and sofa. The wood grain on the walnut is magical. Excellent customer support, they sent photos of the woodwork at various stages!',
    location: 'Mumbai',
    avatarLetter: 'R',
    date: '3 weeks ago'
  }
];

export const FAQS = [
  {
    q: 'What kind of wood do you use?',
    a: 'We use 100% solid, fully seasoned and chemically treated wood. Our primary species are Premium Teak (Sagwan), Dark Walnut, Indian Rosewood (Sheesham), and White Ash. We do not use MDF, particleboard, or cheap veneer.'
  },
  {
    q: 'Do you customize sizes and designs?',
    a: 'Yes, customization is our core expertise! Our online interactive Configurator lets you adjust dimensions and materials. If you have a specific sketch or reference photo, you can share it with us via the consultation form.'
  },
  {
    q: 'How long does it take to craft a custom piece?',
    a: 'Depending on the design complexity and drying/polish times, standard custom orders take between 15 to 25 days to craft. Hand-rubbed finishes require multiple curing days for maximum longevity.'
  },
  {
    q: 'Do you offer a warranty?',
    a: 'Yes! All Virat Furniture products come with a comprehensive 5-Year Structural Warranty covering wood seasoning, joint structural integrity, termites, and manufacturing defects.'
  }
];

export interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  processSteps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  iconName: 'carpenter' | 'compass' | 'shield' | 'hammer';
  benefits: string[];
  startingPrice: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'bespoke-sofas',
    name: 'Bespoke Solid Teakwood Sofa Sets',
    shortDescription: 'Custom handcrafted Chesterfield and classic sectional sofas carved from seasoned CP Teak with premium upholstery options.',
    longDescription: 'Our signature lounge service. Master carpenters shape seasoned Central Province (CP) Teak into elegant Chesterfield, modern minimalist, or royal L-shaped sectional sofas. Each piece is reinforced with traditional mortise-and-tenon interlocking joints, layered with high-density orthopedic memory foam, and wrapped in premium fabrics like bouclé, Belgian linen, or premium faux leather.',
    iconName: 'carpenter',
    startingPrice: '₹45,000',
    slug: 'bespoke-sofas',
    seoTitle: 'Custom Solid Teakwood Sofas Manufacturer Surat | Virat Furniture',
    seoDescription: 'Handcrafted premium seasoned teak wood sofas in Surat. Custom density foam, traditional interlocking joints, and luxury Italian fabric options with 10-year warp warranty.',
    benefits: [
      'Individually seasoned timber with 8-12% moisture control',
      'Choose from 300+ luxury Italian upholstery fabrics',
      'Traditional Mortise-and-Tenon joint reinforcements',
      'High-resilience orthopedic foam layers'
    ],
    processSteps: [
      { title: 'Aesthetic Sketching', desc: 'Design coordination and material mapping based on your room width.' },
      { title: 'Timber Curing', desc: '45-day slow moisture curing to secure CP Teak against climate splits.' },
      { title: 'Artisan Joinery', desc: 'Traditional interlocking hand-joinery without weak metal brackets.' },
      { title: 'Upholstery Fitting', desc: 'Symmetrical hand-tufting and dust protection lining application.' }
    ],
    faqs: [
      { q: 'What fabric materials are available?', a: 'We offer heavy-duty premium velvet, stain-resistant textured bouclé, Belgian flax linen, and Italian leatherette.' },
      { q: 'Does it come with a warranty?', a: 'Yes, all our solid wood sofa frames are backed by a 10-year structural and termite-free warranty.' }
    ]
  },
  {
    id: 'live-edge-tables',
    name: 'Premium Live-Edge Solid Dining Tables',
    shortDescription: 'Monolithic single-slab wood tables exhibiting raw, natural organic edge profiles and hand-rubbed wax finish.',
    longDescription: 'Dine in the majestic presence of raw nature. We source heavy single-slab tree trunks of dark walnut, premium teak, and Indian rosewood (Sheesham) to build luxury live-edge dining tables. Each slab highlights organic curves, natural knots, and wild grain contrasts, sealed with a crystalline moisture-proof barrier that preserves the raw wooden fibers.',
    iconName: 'carpenter',
    startingPrice: '₹55,000',
    slug: 'live-edge-tables',
    seoTitle: 'Bespoke Live-Edge Solid Wood Dining Tables Surat | Virat Furniture',
    seoDescription: 'Premium natural single-slab walnut, rosewood, and teak dining tables in Surat. Eco-friendly hand-rubbed finishes with heavy iron cast bases.',
    benefits: [
      'Completely unique organic live-edge contours',
      'Slabs cured in advanced dry chambers for zero warping',
      'Stains protected by crystalline spill-shield technology',
      'Heavy powder-coated structural steel support legs'
    ],
    processSteps: [
      { title: 'Slab Auditing', desc: 'Examine raw timber slabs live at our experience center in Surat.' },
      { title: 'Hand-Planer Flattening', desc: 'Precise multi-stage sanding to achieve a flat, glass-smooth surface.' },
      { title: 'Natural Crack Sealing', desc: 'Fill beautiful natural fissures with premium high-clarity resin.' },
      { title: 'Danish Oil Rub', desc: 'Apply traditional hand-rubbed Danish oil for natural wood depth.' }
    ],
    faqs: [
      { q: 'Are these slabs made of jointed wood?', a: 'No, our premium live-edge collection consists of authentic single-slab monolithic solid wood trunks.' },
      { q: 'Is the surface heat and spill resistant?', a: 'Yes, we apply an invisible hydrophobic satin coating that protects against hot dishes and liquid spills.' }
    ]
  },
  {
    id: 'royal-canopy-beds',
    name: 'Heritage Royal Poster Canopy Beds',
    shortDescription: 'Sturdy four-poster canopy beds made of dense Sagwan wood with hand-turned pillars and noiseless bases.',
    longDescription: 'Turn your master suite into a regal sanctuary. Carved from dense Indian Sagwan (Teakwood), our poster canopy beds are highly admired for their heavy, squeak-free timber pillars, hand-turned decorative posts, and heavy-duty structural headboards. The platform base uses fully interlocking timber beams, engineered to handle heavy orthopedic mattresses without sagging.',
    iconName: 'carpenter',
    startingPrice: '₹68,000',
    slug: 'royal-canopy-beds',
    seoTitle: 'Custom Teakwood Four-Poster Canopy Beds Surat | Virat Furniture',
    seoDescription: 'Handcrafted royal canopy and poster beds made of Indian Sagwan in Surat. Zero-squeak interlocking timber platform and custom height settings.',
    benefits: [
      'Grand hand-turned solid Teak wood pillars',
      'Fully interlocking zero-squeak frame engineering',
      'Custom headboard leatherette or fabric panelings',
      'Termite-proof organic borate chamber curing'
    ],
    processSteps: [
      { title: 'Pillar Crafting', desc: 'Hand-turning thick teak logs on precision wood lathes.' },
      { title: 'Zero-Squeak Aligning', desc: 'Perfect fitting of interlocking support channels.' },
      { title: 'Headboard Polish', desc: 'Multi-coat hand polish in satin-matte or high-gloss.' },
      { title: 'On-Site Installation', desc: 'White-glove assembly in your bedroom by veteran technicians.' }
    ],
    faqs: [
      { q: 'Can the height of the canopy pillars be customized?', a: 'Yes! We customize pillar height to match your bedroom ceiling clearance perfectly.' },
      { q: 'Is bed storage available inside the frame?', a: 'Yes, we offer custom hydraulic gas-lift storage drawers crafted in marine-grade birch.' }
    ]
  },
  {
    id: 'executive-desks',
    name: 'Ergonomic Solid Wood Executive Desks',
    shortDescription: 'Authoritative study desks with integrated magnetic cable organizers and soft-close leather-lined drawers.',
    longDescription: 'Bring classic professional warmth to your corporate workspace or luxury home library. Our custom desks are crafted from dense American dark walnut or prime white ash, featuring spacious ergonomic worktops, hidden wire grommets, magnetic cable guides, and velvet- or leatherette-lined drawers with luxury Blum soft-closing drawer rails.',
    iconName: 'hammer',
    startingPrice: '₹35,000',
    slug: 'executive-desks',
    seoTitle: 'Bespoke Walnut & Ash Executive Office Desks Surat | Virat Furniture',
    seoDescription: 'Ergonomic luxury wooden writing desks and boardroom desks in Surat. Features integrated power slots, soft-close hardware, and high-scratch resistance.',
    benefits: [
      'Concealed magnetic cord management routes',
      'Blum soft-closing under-mount silent drawer slides',
      'Ultra-durable anti-scratch polyurethane coats',
      'Ergonomic depth adjustments for monitor arms'
    ],
    processSteps: [
      { title: 'Consulting Wire Paths', desc: 'Plan your desk layout based on monitor, laptop, and charger positions.' },
      { title: 'Hardwood Engineering', desc: 'Reinforced wood joints to support multi-monitor monitor clamps.' },
      { title: 'Fitted Accessory Inlays', desc: 'Precise embedding of leather writing pads and gold-brushed grommets.' },
      { title: 'Premium Curing & Polish', desc: 'Tough scratch-resistant polyurethanes applied for heavy daily use.' }
    ],
    faqs: [
      { q: 'Can I add a built-in wireless charger?', a: 'Absolutely, we can embed Qi-certified wooden wireless charging pads flush with the desktop.' },
      { q: 'Does the wood warp near AC vents?', a: 'Our wood is slow-seasoned to 8% moisture levels, meaning it remains stable and warp-free even in AC-heavy offices.' }
    ]
  },
  {
    id: 'wooden-temples',
    name: 'Bespoke Hand-Carved Pooja Mandirs',
    shortDescription: 'Traditionally crafted home temples made of sacred Teakwood with exquisite floral carvings and brass details.',
    longDescription: 'Establish a divine spiritual center in your home. Our master carvers sculpt premium, sacred Sagwan wood into magnificent home temples, following traditional Vastu design plans. These mandirs feature exquisite hand-carved peacocks, floral patterns, spacious solid wood drawers for pooja accessories, and brass bell hooks.',
    iconName: 'carpenter',
    startingPrice: '₹18,000',
    slug: 'wooden-temples',
    seoTitle: 'Custom Hand-Carved Teak Pooja Mandirs Surat | Virat Furniture',
    seoDescription: 'Artisanal solid wood home temples and Pooja mandir manufacturers in Surat. Custom sizes, Vastu compliance, and intricate traditional carvings.',
    benefits: [
      '100% sacred seasoned Teakwood (Sagwan)',
      'Intricate traditional hand carvings by hereditary sculptors',
      'Integrated LED illumination and brass accessory hooks',
      'Vastu-compliant dimensions and drawer storage layouts'
    ],
    processSteps: [
      { title: 'Vastu Planning', desc: 'Select layout dimensions conforming to traditional sacred geometry.' },
      { title: 'Relief Carving', desc: 'Delicate hand carving of pillars, arches, and dome canopies.' },
      { title: 'Accessory Integration', desc: 'Install sliding trays for incense and heavy-duty storage drawers.' },
      { title: 'Natural Gold Accentuation', desc: 'Apply organic non-toxic finishes with optional real gold leaf highlights.' }
    ],
    faqs: [
      { q: 'Are these mandirs wall-mountable?', a: 'Yes, we customize mandirs for both floor standing and heavy-duty concrete wall-mounting layouts.' },
      { q: 'Can I choose a dark walnut or white ash finish?', a: 'Yes, we provide natural teak, dark antique walnut, and classic white distressed paint finishes.' }
    ]
  },
  {
    id: 'antique-restoration',
    name: 'Heritage Wooden Antique Restoration',
    shortDescription: 'Multi-stage wood stripping, organic termite protection, and hand-rubbed wax finish for family heirlooms.',
    longDescription: 'Restore the glorious historic charm of your ancestral furniture. Our senior carpenters delicately sand down decayed plastic varnishes from vintage cabinets, sofas, and dining tables. We vaccum-treat core wood fibers against termites and restore the timber to its raw colors using traditional linseed oils and natural organic beeswax.',
    iconName: 'shield',
    startingPrice: '₹9,000',
    slug: 'antique-restoration',
    seoTitle: 'Bespoke Antique Wood Restoration & Refinishing Surat | Virat Furniture',
    seoDescription: 'Restore family heirloom teak and rosewood furniture in Surat. Multi-coat hand-rubbed Danish oil and organic non-toxic termite shielding.',
    benefits: [
      'Chemical-free wood stripping protecting fine timber lines',
      'Penetrative organic borate vacuum insect protection',
      'Restores authentic natural deep timber color variations',
      'Hand-rubbed linseed oil and beeswax sealing'
    ],
    processSteps: [
      { title: 'Damage Audit', desc: 'We inspect for structural wood cracks, loose joints, and pest networks.' },
      { title: 'Delicate Sanding', desc: 'Hand sanding down to the original raw wood layer without fiber stress.' },
      { title: 'Pest Extermination', desc: 'Vacuum treating cavities with natural organic borate salts.' },
      { title: 'Hand-Wax Polishing', desc: 'Layering organic beeswax to establish a soft satin heritage shine.' }
    ],
    faqs: [
      { q: 'Can you restore cracked or missing carvings?', a: 'Yes, our hereditary sculptors can carve and seamlessly graft matching wood segments onto old furniture.' },
      { q: 'Do you transport the piece to your Surat workshop?', a: 'For deep sanding and pest treatments, we safely transport pieces to our Ichchhapore facility.' }
    ]
  },
  {
    id: 'spatial-planning',
    name: 'Whole-Home Timber Spatial Planning',
    shortDescription: 'Complimentary on-site laser measurements and detailed layout drafts for cohesive wooden interior suites.',
    longDescription: 'Overcome the stress of mismatched furniture. Our certified space planning architects visit your residence in Surat equipped with high-precision sub-millimeter laser diagnostics. We map out ideal walkways, sunlight directions, and doorway clearings, drawing a unified furniture package so your beds, dining consoles, and couches fit seamlessly.',
    iconName: 'compass',
    startingPrice: 'Complimentary',
    slug: 'spatial-planning',
    seoTitle: 'Complimentary Home Spatial Furniture Planning Surat | Virat Furniture',
    seoDescription: 'Free on-site laser measurements, wood stain matching, and 2D spatial layouts for cohesive whole-home solid wood furniture styling.',
    benefits: [
      'Complimentary on-site laser measurement checks in Surat',
      'Live tactile wood block sampling under your home lights',
      'Consolidated bulk quote and custom structural design blueprints',
      'Guaranteed fit layout with no blocked walkways'
    ],
    processSteps: [
      { title: 'Schedule Consultation', desc: 'Choose a preferred time for our senior design architect to inspect your home.' },
      { title: 'Laser Diagnostics', desc: 'Capture precise architectural layouts with advanced laser meters.' },
      { title: 'Timber Stain Auditing', desc: 'Inspect different wood species and gloss stains live in your rooms.' },
      { title: 'Layout Drafting', desc: 'Receive custom furniture spacing plans and materials estimate.' }
    ],
    faqs: [
      { q: 'Is this home survey visit really free?', a: 'Yes, our on-site measurement and consultation are entirely free of cost within Surat.' },
      { q: 'Do you provide AutoCAD layout drafts?', a: 'Yes, we provide 2D spacing layout diagrams for your master rooms and dining halls.' }
    ]
  },
  {
    id: 'heritage-jhulas',
    name: 'Bespoke Royal Rosewood Swings (Jhulas)',
    shortDescription: 'Exquisite hand-carved ceiling or frame-standing indoor swings in seasoned rosewood with solid brass chains.',
    longDescription: 'Celebrate traditional Indian luxury in your veranda or living hall. Our heritage Jhulas are sculpted from seasoned Indian Rosewood (Sheesham) or CP Teak. They feature deep, hand-carved base backs, broad seating cushions covered in plush rich velvet, and heavy gold-polished solid brass chains with integrated peacock-shaped joints.',
    iconName: 'carpenter',
    startingPrice: '₹42,000',
    slug: 'heritage-jhulas',
    seoTitle: 'Custom Hand-Carved Rosewood Swings & Jhulas Surat | Virat Furniture',
    seoDescription: 'Handcrafted premium solid wood swings and indoor Jhulas in Surat. Premium brass chains, rich carvings, and heavy load-tested structures.',
    benefits: [
      'Solid heavy-duty frame load tested up to 450 kilograms',
      'Exquisite hand-carved base planks in Sheesham wood',
      'Interlocking load-bearing hanger hooks with brass ball-bearings',
      'Stain-resistant velvet upholstery padding'
    ],
    processSteps: [
      { title: 'Frame Load Mapping', desc: 'Calculate ceiling load points or design self-standing wooden frames.' },
      { title: 'Artisan Carving', desc: 'Detailed hand engraving of base handles and support columns.' },
      { title: 'High-Strength Buffing', desc: 'Sanding and coating base elements in weather-proof PU coatings.' },
      { title: 'Chain Calibration', desc: 'Measuring and assembling gold-polished solid brass chains.' }
    ],
    faqs: [
      { q: 'Can these swings be mounted directly to the ceiling?', a: 'Yes, we provide heavy-duty expansion ceiling anchors and coordinate with structural engineers.' },
      { q: 'Are self-standing A-frame Jhulas available?', a: 'Yes, we build self-standing solid wood frames so you can move the Jhula freely.' }
    ]
  },
  {
    id: 'solid-bookcases',
    name: 'Custom Hardwood Library Bookcases',
    shortDescription: 'Tall floor-to-ceiling wooden bookshelves with adjustable shelving slots and sliding glass panel doors.',
    longDescription: 'Establish an intellectual treasury for your home library or corporate reading room. Built from solid White Ash or seasoned Rosewood, our bookcases handle heavy encyclopedias without bowing. These feature smart brass-adjustable pins, tempered glass sliding panels, and spacious lower base drawers for secure document folder storage.',
    iconName: 'hammer',
    startingPrice: '₹28,000',
    slug: 'solid-bookcases',
    seoTitle: 'Custom Solid Wood Bookshelves & Library Cabinets Surat | Virat Furniture',
    seoDescription: 'Floor-to-ceiling heavy-duty solid wood bookcases in Surat. Adjustable shelves, tempered glass doors, and modular expansion options.',
    benefits: [
      'Heavy solid timber shelves that never sag under weight',
      'Adjustable shelf pins with 1-inch increments',
      'Sleek sliding doors with dust-seal rubber liners',
      'Classic colonial or minimalist modern design'
    ],
    processSteps: [
      { title: 'Space Evaluation', desc: 'Assess wall height clearances, skirting boards, and plug outlets.' },
      { title: 'Load Calculation', desc: 'Optimize structural dividers based on your volume of books.' },
      { title: 'Peg Boring & Assembly', desc: 'Drilling precise adjustable slots and fitting tempered glass.' },
      { title: 'Dovetail Jointing', desc: 'Traditional joinery of lower storage boxes and final wood staining.' }
    ],
    faqs: [
      { q: 'Can you build floor-to-ceiling wall libraries?', a: 'Yes, we specialize in modular wall libraries with matching wooden ladders and brass rails.' },
      { q: 'Are the glass doors safe for children?', a: 'We use premium, high-strength 8mm tempered glass panels for absolute household safety.' }
    ]
  },
  {
    id: 'tv-consoles',
    name: 'Bespoke Floating TV Entertainment Consoles',
    shortDescription: 'Minimalist solid wood wall-mounted TV consoles with integrated power routing and mesh media slots.',
    longDescription: 'Reclaim your media lounge space with structured luxury. Our floating or standing TV units are carved from premium dark walnut or white ash. They are designed with mesh door paneling to allow remote control IR rays to pass through, concealed cable management routes, and soft-close drop-front storage drawers for game consoles.',
    iconName: 'hammer',
    startingPrice: '₹22,000',
    slug: 'tv-consoles',
    seoTitle: 'Custom Solid Wood TV Entertainment Units Surat | Virat Furniture',
    seoDescription: 'Bespoke walnut and teak TV entertainment centers in Surat. Cable routing slots, IR-permeable doors, and secure floating mount fittings.',
    benefits: [
      'Concealed cable routes for a cordless, tidy wall',
      'Remote-friendly mesh or tinted glass doors',
      'Heavy-duty floating metal wall brackets',
      'Soft-opening gas piston hinges'
    ],
    processSteps: [
      { title: 'Port Planning', desc: 'Assess power outlet heights and specify media box sizes.' },
      { title: 'Cabinet Shaping', desc: 'Structure drawers using fine dovetail joinery in ash or teak.' },
      { title: 'IR Mesh Insertion', desc: 'Inlay premium wood grilles or speaker fabric.' },
      { title: 'Safety Wall Anchoring', desc: 'Mount utilizing thick steel brackets to handle hefty equipment loads.' }
    ],
    faqs: [
      { q: 'What is the load limit of the floating units?', a: 'Our floating consoles are anchored into brick walls and load tested to safely hold up to 120 kg.' },
      { q: 'Can you customize sizes for 85-inch TVs?', a: 'Yes, we customize console lengths from 4 feet to 12 feet to balance large screens.' }
    ]
  },
  {
    id: 'wooden-paneling',
    name: 'Architectural Solid Wood Wall Paneling',
    shortDescription: 'Acoustic-friendly grooved timber panels and vertical fluted slats for luxury focal walls.',
    longDescription: 'Establish majestic dimensional textures inside your bedrooms, home theaters, or office backdrops. We craft custom architectural wall panels using fluted teak slats or geometric walnut blocks. These panels provide natural acoustic diffusion, conceal wiring channels, and elevate ordinary walls into high-end works of art.',
    iconName: 'compass',
    startingPrice: '₹350/sqft',
    slug: 'wooden-paneling',
    seoTitle: 'Luxury Fluted Timber Wall Paneling Surat | Virat Furniture',
    seoDescription: 'Acoustically sound fluted wood panels and bespoke teak wall paneling in Surat. Concealed wiring and moisture-insulated frameworks.',
    benefits: [
      'Natural warmth and sound dampening',
      'Hidden wire conduits and power plug slots',
      'Moisture-insulated backing frame protects against dampness',
      'Durable premium stains matching your furniture'
    ],
    processSteps: [
      { title: 'Acoustic Mapping', desc: 'Audit wall dimensions, damp spots, and sound reflection zones.' },
      { title: 'Moisture Barrier Install', desc: 'Apply protective insulation sheets behind the main grid.' },
      { title: 'Fluted Slat Profiling', desc: 'Precision routing of tongue-and-groove teakwood panels.' },
      { title: 'Seamless Anchoring', desc: 'Mount panels with hidden pneumatic fasteners.' }
    ],
    faqs: [
      { q: 'Does moisture behind the wall affect the wood?', a: 'We install a thick damp-proof membrane and a treated plywood grid to isolate the solid wood slats.' },
      { q: 'Can it be installed in home theaters?', a: 'Yes, it provides outstanding high-frequency sound diffusion and professional acoustic quality.' }
    ]
  },
  {
    id: 'modular-wardrobes',
    name: 'Premium Modular Solid Wood Wardrobes',
    shortDescription: 'Luxury walk-in closet structures made of solid ash and cedar wood with built-in LED lighting.',
    longDescription: 'Organize your apparel inside premium custom wardrobes. We construct custom slide-door or open-walk-in closets using aromatic red cedar lining to repel moths and solid White Ash for structural pillars. Features include glass jewelry shelves, leather-wrapped tie racks, luxury pull-out trays, and motion-activated inner closet LED lighting.',
    iconName: 'hammer',
    startingPrice: '₹95,000',
    slug: 'modular-wardrobes',
    seoTitle: 'Bespoke Solid Wood Wardrobes & Walk-In Closets Surat | Virat Furniture',
    seoDescription: 'Premium cedar-lined modular wardrobes in Surat. Motion-sensor LEDs, soft-close hardware, and bespoke layout arrangements.',
    benefits: [
      'Aromatic cedar wood linings that naturally deter insects',
      'Motion-activated warm LED bar lighting tracks',
      'Sleek sliding glass drawers and felt jewelry boxes',
      'Modular layouts tailored to your exact wardrobe count'
    ],
    processSteps: [
      { title: 'Wardrobe Audit', desc: 'Analyze your hanging space, drawer count, and accessory layout.' },
      { title: 'Solid Pillar Framing', desc: 'Construct heavy cabinetry grids in premium White Ash.' },
      { title: 'LED Track Routing', desc: 'Embed power routes, touch sensors, and safety micro-switches.' },
      { title: 'Soft-Close Assembling', desc: 'Install silent hydraulic door slides and custom handles.' }
    ],
    faqs: [
      { q: 'Can you customize the inner drawer configuration?', a: 'Absolutely. We configure drawers, tie racks, saree hanging bars, and vaults exactly as you specify.' },
      { q: 'Are sliding door mechanisms warrantied?', a: 'Yes, we use certified soft-close German sliding tracks with a 5-year replacement warranty.' }
    ]
  },
  {
    id: 'vanity-dressers',
    name: 'Luxury Vanity Dressers with Hidden Vaults',
    shortDescription: 'Fine dressing tables in teakwood featuring tri-fold vanity mirrors and concealed jewelry compartments.',
    longDescription: 'Begin your morning inside an elegant, clutter-free sanctuary. Our bespoke dressing vanity tables are mastercrafted from golden CP Teak. They boast spacious tabletop glass, soft-close drawers lined with protective suede, custom gold-finished hardware, and secret pop-out wooden vaults to store your fine valuables.',
    iconName: 'carpenter',
    startingPrice: '₹32,000',
    slug: 'vanity-dressers',
    seoTitle: 'Custom Solid Wood Vanity Dressing Tables Surat | Virat Furniture',
    seoDescription: 'Suede-lined vanity tables in Surat. Tri-fold mirrors, secret compartments, and bespoke luxury cosmetic organization slots.',
    benefits: [
      'Secret custom wood push-to-open safety compartments',
      'Tri-fold multi-angle high-clarity vanity mirrors',
      'Suede-lined drawers organizing delicate cosmetics',
      'Matching ergonomic padded solid wood stool'
    ],
    processSteps: [
      { title: 'Blueprint Mapping', desc: 'Identify ideal mirror positions and drawer configurations.' },
      { title: 'Secret Vault Joinery', desc: 'Conceal safe click-release compartments within panels.' },
      { title: 'Mirror Mounting', desc: 'Integrate custom solid wood mirror frames and hinges.' },
      { title: 'Velvet Lining', desc: 'Affix rich velvet drawer linings and brass ring-pull hardware.' }
    ],
    faqs: [
      { q: 'How does the hidden compartment operate?', a: 'It utilizes a fully integrated magnetic pressure latch system hidden behind a dummy panel.' },
      { q: 'Can we install Hollywood LED vanity bulbs?', a: 'Yes, we can pre-wire the mirror frame to mount professional dimmable LED vanity bulbs.' }
    ]
  },
  {
    id: 'bar-cabinets',
    name: 'Bespoke Solid Wood Bar Cabinets & Counters',
    shortDescription: 'Colonial-style cocktail bars featuring wine glass hanging racks and integrated refrigerator slots.',
    longDescription: 'Establish an exquisite entertaining focal point in your home. Our custom home bar suites are crafted from dark Sheesham wood or American Walnut. They include heavy-duty stemware slots for crystal glasses, brass footrests, pull-out slicing boards, custom wine display lattices, and integrated ventilation slots for under-counter wine coolers.',
    iconName: 'hammer',
    startingPrice: '₹48,000',
    slug: 'bar-cabinets',
    seoTitle: 'Custom Solid Wood Home Bar Cabinets Surat | Virat Furniture',
    seoDescription: 'Bespoke walnut and sheesham home bars in Surat. Wine racks, solid brass footrests, and ventilation slots for mini-fridges.',
    benefits: [
      'Solid copper or brass heavy-duty footrest rails',
      'Specially cured wood surfaces that resist alcohol stains',
      'Stemware hanger racks storing up to 24 wine glasses',
      'Ventilated cavities for compact wine chillers'
    ],
    processSteps: [
      { title: 'Chiller Dimensioning', desc: 'Measure your specific mini-fridge size and heat ventilation outlets.' },
      { title: 'Lattice Woodworking', desc: 'Craft precision diagonal wine bottle display compartments.' },
      { title: 'Alcohol Spill Coating', desc: 'Seal countertops with specialized chemical-resistant varnishes.' },
      { title: 'Brass Rail Mounting', desc: 'Affix robust ground-anchored brass footrest bars.' }
    ],
    faqs: [
      { q: 'Is the wood counter protected from glass sweat and liquor spills?', a: 'Yes, we coat bar counters with advanced marine-grade, food-safe polyurethanes that handle water and alcohol sweat.' },
      { q: 'Do you build barstools as well?', a: 'Yes! We construct matching wood barstools with swivel-top bearings and custom heights.' }
    ]
  },
  {
    id: 'door-carving',
    name: 'Artisanal Hand-Carved Entrance Doors',
    shortDescription: 'Heavy double doors in CP Teakwood boasting 3D relief carvings and security reinforcements.',
    longDescription: 'Command grand architectural authority right at your threshold. We construct heavy-set double doors from old-growth CP Teakwood (Sagwan), hand-sculpting them with magnificent Vastu deities, sunburst patterns, or modern abstract motifs. At 50mm thick, these doors are warp-proof and built to secure heavy multi-bolt locks.',
    iconName: 'carpenter',
    startingPrice: '₹38,000',
    slug: 'door-carving',
    seoTitle: 'Hand-Carved Solid Teakwood Entrance Doors Surat | Virat Furniture',
    seoDescription: 'Bespoke 3D hand-carved entrance doors in Surat. CP Teak construction, robust thickness, and moisture-proof outer seals.',
    benefits: [
      'Heavy 50mm thick seasoned CP Teakwood build',
      'Artisanal 3D deep-sculpted traditional relief panels',
      'Warp-free wood cured to endure hot coastal sun and monsoon rain',
      'Custom pre-bored cavities for digital door locks'
    ],
    processSteps: [
      { title: 'Timber Slab Auditing', desc: 'Select ultra-dense, old-growth teak planks for structural density.' },
      { title: 'Art Relief Mapping', desc: 'Transfer detailed carving layouts from design papers to wood.' },
      { title: 'Chisel Sculpting', desc: 'Days of exquisite hand chiseling by senior hereditary sculptors.' },
      { title: 'Outer Shield Sealing', desc: 'Coat with weather-resistant UV-filtering marine varnishes.' }
    ],
    faqs: [
      { q: 'Do you provide the door frame too?', a: 'Yes, we manufacture matching thick solid-wood door frames (Chowkhat) with matching carvings.' },
      { q: 'Are these doors compatible with digital smart locks?', a: 'Yes, we pre-bore lock holes to match smart digital lock specifications.' }
    ]
  },
  {
    id: 'kids-bunkbeds',
    name: 'Kids Solid Wood Bunk Beds & Desks',
    shortDescription: 'Safe, rounded bunk beds made of white ash with built-in slide-out study tables.',
    longDescription: 'Nurture child development inside a safe, creative playroom. Our children’s bunk bed complexes are crafted from non-toxic, heavily rounded White Ash timber. They are built without sharp corners or dangerous chemical solvents, integrating slide-out drawers, secure climbing stairs with wide treads, and collapsible homework desks.',
    iconName: 'carpenter',
    startingPrice: '₹34,000',
    slug: 'kids-bunkbeds',
    seoTitle: 'Safe Solid Wood Kids Bunk Beds Surat | Virat Furniture',
    seoDescription: 'Non-toxic, heavily rounded white ash bunk beds in Surat. Built-in stairs, storage drawers, and organic water-based seals.',
    benefits: [
      '100% round-profile wood corners preventing bruises',
      'Certified non-toxic, organic water-based clear seals',
      'Extra-wide stair treads with anti-slip grooves',
      'Integrated pull-out study tables and toy trunks'
    ],
    processSteps: [
      { title: 'Nursery Spacing', desc: 'Check ceiling height and select single or double bunk configurations.' },
      { title: 'Rounded Profiling', desc: 'Machine sanding every edge to a smooth, circular profile.' },
      { title: 'Safety Barrier Boring', desc: 'Boring extra-tall guard rails to ensure secure child sleep.' },
      { title: 'Eco-Seal Application', desc: 'Coating with food-grade plant oils and natural plant varnishes.' }
    ],
    faqs: [
      { q: 'What is the weight capacity of the upper bunk?', a: 'The upper bunk frame is reinforced with heavy cross-beams to easily support up to 150 kg.' },
      { q: 'Can the bunk beds be separated into two single beds later?', a: 'Yes! We engineer modular demountable connectors so you can convert them into independent single beds.' }
    ]
  },
  {
    id: 'acoustic-studios',
    name: 'Acoustic Wood Paneling & Diffusers',
    shortDescription: 'Professional hardwood sound diffusers and acoustic paneling for music studios and home theaters.',
    longDescription: 'Optimize auditory clarity in your recording room or home cinema. We construct precision wood sound diffusors, QRD diffusers, and bass traps using seasoned maple and teak. These panels are engineered to reflect, scatter, and absorb sound frequencies, balancing dry echoes while adding rich heritage warmth.',
    iconName: 'compass',
    startingPrice: '₹45,000',
    slug: 'acoustic-studios',
    seoTitle: 'Bespoke Acoustic Wood Diffusers Surat | Virat Furniture',
    seoDescription: 'Professional studio-grade timber sound diffusers in Surat. Custom QRD math calibrations, hardwood casing, and elegant wall-mounting.',
    benefits: [
      'Scientifically calculated QRD acoustic scatter grids',
      'Built in solid seasoned maple and teak wood',
      'Concealed dry-mount wall brackets',
      'Stunning organic visual geometry'
    ],
    processSteps: [
      { title: 'Frequency Check', desc: 'Calculate primary echo points and sound flutter frequencies.' },
      { title: 'Precision Block Cutting', desc: 'Routing dimensional wood blocks to sub-millimeter depths.' },
      { title: 'Assembling Scatter Grids', desc: 'Hand assembly of blocks into structural acoustic modules.' },
      { title: 'Natural Matte Finishing', desc: 'Apply a raw oil rub that preserves sound absorption properties.' }
    ],
    faqs: [
      { q: 'How do you mount these panels?', a: 'They are mounted using industrial z-clips on the wall, allowing you to rearrange or relocate them easily.' },
      { q: 'Is this suitable for corporate boardrooms?', a: 'Absolutely, it dampens chatter noise and ensures crystal-clear zoom meetings.' }
    ]
  },
  {
    id: 'spill-shielding',
    name: 'Crystalline Spill Shield Protection',
    shortDescription: 'Advanced hydrophobic coating application to protect high-use dining tables from grease, water, and heat.',
    longDescription: 'Shield your prized solid wood investment from daily kitchen accidents. Our proprietary Crystalline Spill Shield is a multi-stage nano-ceramic polyurethane treatment applied under clinical dust-free conditions. It locks out water sweat from cold glasses, hot coffee mugs, grease, and curry stains without altering the wood’s natural raw texture.',
    iconName: 'shield',
    startingPrice: '₹8,500',
    slug: 'spill-shielding',
    seoTitle: 'Hydrophobic Crystalline Wood Spill Shield Surat | Virat Furniture',
    seoDescription: 'Premium liquid-proof nano-ceramic wood coating in Surat. Protects solid dining tables from hot pots, water sweat, and curry stains.',
    benefits: [
      '100% hydrophobic liquid sweat repellency',
      'Heat resistant against hot pots up to 180°C',
      'Maintains natural raw wood texture feel',
      'Completely food-safe and organic'
    ],
    processSteps: [
      { title: 'Micro Sanding', desc: 'Remove old wax residues and open microscopic wood pores.' },
      { title: 'Nano-Ceramic Spray', desc: 'Apply our specialized crystalline polymer formula in an airtight booth.' },
      { title: 'Thermal Curing', desc: 'Slow infrared heating to bond the protective coat with wood cells.' },
      { title: 'Satin Buffing', desc: 'Buff with ultra-fine pads to achieve a rich matte finish.' }
    ],
    faqs: [
      { q: 'Will my wood dining table look glossy or plastic?', a: 'No, our spill shield has a satin-matte formulation that is completely invisible to the eyes.' },
      { q: 'How long does this protection last?', a: 'A single professional application protects high-use tables for up to 8 years.' }
    ]
  },
  {
    id: 'walnut-credenzas',
    name: 'Bespoke Solid Walnut Credenzas',
    shortDescription: 'Mid-century modern sideboards made of American dark walnut wood with push-to-open flat door panels.',
    longDescription: 'Introduce sophisticated mid-century aesthetics into your dining hall or foyer. Handcrafted from prime imported American Dark Walnut, our minimalist credenzas feature grain-matched door faces, push-to-open hardware, spacious adjustable shelves, and slender solid wood legs reinforced with hidden internal metal plates.',
    iconName: 'carpenter',
    startingPrice: '₹38,000',
    slug: 'walnut-credenzas',
    seoTitle: 'Bespoke Dark Walnut Sideboards & Credenzas Surat | Virat Furniture',
    seoDescription: 'Mid-century modern solid walnut credenzas in Surat. Grain-matched doors, push-to-open drawers, and slender timber legs.',
    benefits: [
      'Matched walnut grain flows across all front doors',
      'Push-to-open hardware eliminating cluttering external pulls',
      'Heavy-duty internal leg bracing plates',
      'Adjustable internal shelves lining broad cabinets'
    ],
    processSteps: [
      { title: 'Grain Matching', desc: 'Selecting adjacent wood planks from the same log for matching grain lines.' },
      { title: 'Cabinet Joinery', desc: 'Crafting the outer carcass utilizing precise mitered joints.' },
      { title: 'Leg Bracing', desc: 'Boring angled leg sockets and reinforcing them with steel.' },
      { title: 'Danish Linseed Rub', desc: 'A rich satin finish highlighting walnut’s dark charcoal tones.' }
    ],
    faqs: [
      { q: 'What are the standard dimensions?', a: 'Standard lengths are 5 feet, 6 feet, and 7 feet, with custom depths of 18 inches.' },
      { q: 'Can we run power cables inside for record players?', a: 'Yes! We pre-drill neat wire slots in the back panel upon your request.' }
    ]
  },
  {
    id: 'dovetail-shoebenches',
    name: 'Dovetail Shoebox Storage Benches',
    shortDescription: 'Heavy hallway benches in White Ash wood with integrated ventilated boot drawers.',
    longDescription: 'Establish order right inside your home entrance. Crafted with sturdy traditional interlocking dovetail joints from White Ash, these entryway seating benches feature wide, comfortable seat planks, gas-piston storage lids, and lower compartments with slatted wooden vents to keep boots fully dry and fresh.',
    iconName: 'hammer',
    startingPrice: '₹14,000',
    slug: 'dovetail-shoebenches',
    seoTitle: 'Bespoke Solid Wood Entryway Shoe Benches Surat | Virat Furniture',
    seoDescription: 'Dovetail jointed entryway shoe organizer benches in Surat. Ashwood construction, ventilated shelves, and soft-close safety lids.',
    benefits: [
      'Intricate interlocking traditional dovetail corner joints',
      'Gas-spring safety lid dampers prevent slammed fingers',
      'Ventilated lower slatted shelves keeping boots dry',
      'Supports sitting weights up to 200 kilograms'
    ],
    processSteps: [
      { title: 'Joint Profiling', desc: 'Hand cutting matching dovetail joints for structural corners.' },
      { title: 'Vent Slat Milling', desc: 'Creating open wood grilles for fresh air circulation.' },
      { title: 'Piston Calibrating', desc: 'Installing soft-close hydraulic lid arms.' },
      { title: 'Satin PU Coating', desc: 'Seal raw wood from damp shoes using moisture-proof sealants.' }
    ],
    faqs: [
      { q: 'Are these safe for toddlers?', a: 'Yes, our soft-close hydraulic dampers prevent the heavy wood seat lid from slamming down on little fingers.' },
      { q: 'Can we add a custom cushion?', a: 'Yes, we offer custom-fit seat cushions wrapped in heavy-duty linen fabrics.' }
    ]
  },
  {
    id: 'wooden-decking',
    name: 'Balcony Wood Decking & Interlocking Tiles',
    shortDescription: 'Weather-proof teakwood interlocking tiles and structural wood decking for luxury patios.',
    longDescription: 'Convert your concrete balcony into a warm, wood-infused outdoor sanctuary. We profile premium seasoned teak wood into weather-proof decking boards and interlocking deck tiles. Cured with water-repelling deck oils, they resist rain rot, heavy UV sun exposure, and pest infestation.',
    iconName: 'compass',
    startingPrice: '₹220/sqft',
    slug: 'wooden-decking',
    seoTitle: 'Weatherproof Teak Balcony Wood Decking Surat | Virat Furniture',
    seoDescription: 'Premium interlocking teak wood tiles and balcony deck layouts in Surat. Cured with anti-UV deck oils for long-lasting outdoor use.',
    benefits: [
      '100% genuine water-repellent seasoned Teak wood',
      'Advanced anti-UV outdoor protective sealants',
      'Smart water drainage backing grid design',
      'Simple interlocking tiles, easy to clean'
    ],
    processSteps: [
      { title: 'Drainage Survey', desc: 'Check floor leveling and calculate rainwater slope angles.' },
      { title: 'Pest Guard Coat', desc: 'Deep-treating raw teak slats with water-proofing compounds.' },
      { title: 'Backing Mesh Assembly', desc: 'Fasten slats to industrial plastic interlocking drainage grids.' },
      { title: 'Balcony Layout', desc: 'Lay tiles on-site and cut custom perimeter fits.' }
    ],
    faqs: [
      { q: 'Does standing rainwater rot the wood?', a: 'Our decking tiles feature a elevated plastic mesh base that allows rainwater to drain freely underneath.' },
      { q: 'How do we clean the balcony?', a: 'You can hose down the wood tiles or lift them up easily for routine spring cleaning.' }
    ]
  },
  {
    id: 'velvet-headboards',
    name: 'Premium Tufted Velvet Headboards',
    shortDescription: 'Exquisite deep diamond-tufted custom headboards upholstered in heavy velvet fabrics.',
    longDescription: 'Introduce luxurious comfort right behind your pillows. We craft extra-tall wall-mounted or bed-fixed headboards upholstered with high-density foam, wrapped in thick royal velvet, and hand-tufted in classic diamond patterns using fabric-matched tufted buttons.',
    iconName: 'carpenter',
    startingPrice: '₹19,000',
    slug: 'velvet-headboards',
    seoTitle: 'Custom Diamond Tufted Velvet Headboards Surat | Virat Furniture',
    seoDescription: 'Bespoke bed headboards upholstered in premium velvet in Surat. High-density padding, diamond hand-tufting, and wall-mounting options.',
    benefits: [
      'Luxurious deep diamond hand-tufting detailing',
      'Thick high-resilience memory foam back padding',
      'Includes heavy-duty flush mount wall cleats',
      'Choose from royal velvet, suede, or Belgian linen'
    ],
    processSteps: [
      { title: 'Foam Layering', desc: 'Laminate high-density foam slabs onto heavy birch backing boards.' },
      { title: 'Tuft Hole Drilling', desc: 'Map out grid patterns and bore thread conduits.' },
      { title: 'Velvet Tensioning', desc: 'Pulling velvet fabric symmetrically to establish deep fold creases.' },
      { title: 'Clean Edge Tailoring', desc: 'Wrapping back corners and attaching structural wall hanger plates.' }
    ],
    faqs: [
      { q: 'Can you mount this to my existing bed frame?', a: 'Yes! We construct custom wood attachment brackets that connect directly to your bed posts.' },
      { q: 'What is the standard height?', a: 'We construct heights from 3 feet to 7 feet for grand floor-to-ceiling focal backdrops.' }
    ]
  },
  {
    id: 'carved-bench-seating',
    name: 'Heritage Hand-Carved Dining Benches',
    shortDescription: 'Solid wood dining benches carved in teakwood with traditional Gujarati style relief backrests.',
    longDescription: 'Offer conversational seating at your dining table. Our bespoke dining benches are sculpted from CP Teakwood to match our luxury dining tables. They feature sturdy block legs, contoured seat curves for sitting comfort, and an optional backrest boasting hand-carved floral openwork.',
    iconName: 'carpenter',
    startingPrice: '₹16,500',
    slug: 'carved-bench-seating',
    seoTitle: 'Custom Hand-Carved Teakwood Dining Benches Surat | Virat Furniture',
    seoDescription: 'Heritage solid wood benches with relief backrests in Surat. Traditional Sagwan construction, contoured seats, and robust joinery.',
    benefits: [
      'Contoured seat surface for comfortable dining posture',
      'Heavy-set block legs reinforced with solid bracing',
      'Carved backrest option with exquisite traditional openwork',
      'Seamless match with Teak or Rosewood dining tables'
    ],
    processSteps: [
      { title: 'Contour Sanding', desc: 'Sanding deep seat valleys for ergonomic body weight distribution.' },
      { title: 'Tenon Leg Jointing', desc: 'Fitting thick bench legs into matching hand-cut seat mortises.' },
      { title: 'Backrest Chiseling', desc: 'Hand sculpting intricate floral openwork designs.' },
      { title: 'Polyurethane Shielding', desc: 'Coated with tough polyurethanes to survive direct dining spills.' }
    ],
    faqs: [
      { q: 'Does a bench save more space than chairs?', a: 'Yes, dining benches can slide completely underneath the table when not in use, freeing up walkway space.' },
      { q: 'Can it be customized with upholstered padding?', a: 'Absolutely, we can craft a plush upholstered seat wrapped in premium bouclé or linen.' }
    ]
  },
  {
    id: 'executive-boardrooms',
    name: 'Bespoke Boardroom Conference Tables',
    shortDescription: 'Grand solid wood meeting tables up to 16 feet long with central embedded media power hubs.',
    longDescription: 'Establish collaborative prestige inside your corporate boardroom. Our conference tables are engineered from prime American Oak or seasoned CP Teakwood slabs up to 16 feet in length. They feature centralized metal flip-top boxes, hollow wire-routing base columns, and scratch-resistant matte PU coatings.',
    iconName: 'hammer',
    startingPrice: '₹85,000',
    slug: 'executive-boardrooms',
    seoTitle: 'Bespoke Solid Wood Boardroom Tables Surat | Virat Furniture',
    seoDescription: 'Grand executive meeting tables up to 16 feet in length in Surat. Custom central power boxes, cable lanes, and high-scratch resistance.',
    benefits: [
      'Supports lengths from 8 feet up to 16 feet',
      'Central brushed aluminum flip-up media boxes',
      'Hollow wood base columns neatly organizing heavy cables',
      'Heavy-duty scratch-resistant polyurethane finish'
    ],
    processSteps: [
      { title: 'Size Assessment', desc: 'Analyze room walkways and plan correct seating clearances.' },
      { title: 'Timber Slab Jointing', desc: 'Aligning wide wood planks using hidden high-strength alignment pins.' },
      { title: 'Media Box Routing', desc: 'CNC cutting central desktop cutouts for power panels.' },
      { title: 'Base Assembling', desc: 'Mounting structural pedestal bases with internal wiring channels.' }
    ],
    faqs: [
      { q: 'How do you transport such long tables?', a: 'They are built as modular sub-assemblies and safely joined on-site using heavy structural connector bolts.' },
      { q: 'Can you install HDMI and USB hubs?', a: 'Yes, we can pre-install modern flush-mount pop-up connectivity hubs.' }
    ]
  },
  {
    id: 'room-dividers',
    name: 'Hardwood Partition Screens & Dividers',
    shortDescription: 'Colonial folding room partition panels carved from seasoned rosewood with brass hinge connections.',
    longDescription: 'Divide your open-plan living areas with architectural elegance. Our folding partitions are handcrafted from dense Sheesham wood. They are constructed as multi-panel screens with hand-carved lattice openwork (Jali designs) and joined using high-quality anti-rust brass hinges.',
    iconName: 'carpenter',
    startingPrice: '₹12,500',
    slug: 'room-dividers',
    seoTitle: 'Bespoke Hand-Carved Rosewood Partition Screens Surat | Virat Furniture',
    seoDescription: 'Colonial folding room dividers and Jali wood screens in Surat. Authentic rosewood carving, brass hinges, and self-standing frames.',
    benefits: [
      'Intricate floral Jali wood lattice openwork',
      'Premium Rosewood (Sheesham) timber density and weight',
      'Solid rust-proof brass folding hinges',
      'Compact folding design, simple to relocate'
    ],
    processSteps: [
      { title: 'Jali Drawing', desc: 'Creating symmetric geometric or floral lattice blueprints.' },
      { title: 'Fretwork Boring', desc: 'Boring start holes and delicate scroll sawing to reveal lattices.' },
      { title: 'Panel Calibrating', desc: 'Ensuring all three or four panels are perfectly flat and aligned.' },
      { title: 'Hinge Mortising', desc: 'Chiseling shallow hinge pockets and screwing solid brass hinges.' }
    ],
    faqs: [
      { q: 'How many folding panels are included?', a: 'Our standard dividers come with 3 panels or 4 panels, with custom expansion panels upon request.' },
      { q: 'Can it stand stably on heavy carpets?', a: 'Yes, the dense weight of rosewood provides excellent structural stability on both carpets and tiles.' }
    ]
  },
  {
    id: 'floating-shelving',
    name: 'Custom Floating Solid Wood Shelves',
    shortDescription: 'Sleek, minimalist floating wall planks with completely hidden internal structural steel rod mounts.',
    longDescription: 'Display books and fine collectibles on clean, wall-hovering timber. We route solid slabs of CP Teak, american Oak, or Dark Walnut into minimalist floating shelves. Each shelf is pre-bored to slide over heavy internal steel bracket bars that disappear into your wall.',
    iconName: 'hammer',
    startingPrice: '₹6,500',
    slug: 'floating-shelving',
    seoTitle: 'Custom Minimalist Floating Solid Wood Shelves Surat | Virat Furniture',
    seoDescription: 'Bespoke floating timber planks in Surat. Hidden steel wall brackets, seasoned teak and oak construction, and high load capacity.',
    benefits: [
      'Completely invisible internal heavy steel bracket rods',
      'Thick-profile seasoned teak, oak, or walnut slabs',
      'Pre-grooved rear face to sit completely flush against plaster walls',
      'Satin-matte finish highlighting natural timber grains'
    ],
    processSteps: [
      { title: 'Thickness Slicing', desc: 'Cutting solid wood blocks to clean 1.5-inch or 2-inch profiles.' },
      { title: 'Deep Rod Boring', desc: 'Precision boring 8-inch deep straight holes into shelf rears.' },
      { title: 'Wall Anchoring', desc: 'Drilling concrete walls and inserting heavy steel support brackets.' },
      { title: 'Slide Fitting', desc: 'Sliding shelves onto rods and securing with tiny hidden lock screws.' }
    ],
    faqs: [
      { q: 'What is the load capacity of these shelves?', a: 'When anchored into concrete block walls, they easily hold up to 30 kg per running foot.' },
      { q: 'Do you make custom lengths?', a: 'Yes, we manufacture custom lengths from 1.5 feet up to 6 feet.' }
    ]
  },
  {
    id: 'pegged-seating',
    name: 'Traditional Pegged Entryway Benches',
    shortDescription: 'Country-style solid wood entryway benches with round timber pegs and lower shoe storage slots.',
    longDescription: 'Establish classic rustic warmth inside your foyer or porch. Crafted from light White Ash or Teak wood, these benches are assembled using traditional round timber dowels and wedge pegs instead of metallic screws. Features include bottom boot rack slots and matching coat-hanging wood rails.',
    iconName: 'carpenter',
    startingPrice: '₹15,000',
    slug: 'pegged-seating',
    seoTitle: 'Traditional Pegged Solid Wood Entryway Benches Surat | Virat Furniture',
    seoDescription: 'Rustic-style timber dowel pegged benches in Surat. Ashwood and teakwood construction, boot racks, and matching peg rails.',
    benefits: [
      '100% metal-free traditional wood dowel and peg joinery',
      'Rustic country-style design with rounded timber legs',
      'Convenient bottom rack to store damp slippers',
      'Sealed in water-resistant organic Danish wax coatings'
    ],
    processSteps: [
      { title: 'Dowel Turning', desc: 'Shaping dense hickory wood pegs on a lathe for tight friction fit.' },
      { title: 'Socket Boring', desc: 'Boring circular interlocking mortises into the thick seat plank.' },
      { title: 'Wedge Hammering', desc: 'Driving split-ends and wood wedges into dowels to secure joints.' },
      { title: 'Friction Sanding', desc: 'Hand sanding joints completely flush with the surrounding surface.' }
    ],
    faqs: [
      { q: 'Does this bench contain metal screws?', a: 'No, this premium line is crafted strictly utilizing traditional timber pegs and friction wedge joints.' },
      { q: 'Can it be placed in outdoor verandas?', a: 'Yes, when coated with our weather-proof oil finish, it handles outdoor patio use.' }
    ]
  },
  {
    id: 'wood-polishing-sp',
    name: 'Premium Timber Polishing & Oil Buffing',
    shortDescription: 'Multi-stage heritage polyurethane refinishing and traditional hand-rubbed linseed oil wax rub.',
    longDescription: 'Bring rich grain contrast and velvet touch back to dry, faded wood furniture. Our specialized refinishing team sands down old yellowed coatings, vacuums deep wood pores, and applies layers of premium German polyurethane (satin or high-gloss) or hand-rubs organic Danish flaxseed oils.',
    iconName: 'shield',
    startingPrice: '₹6,500',
    slug: 'wood-polishing-sp',
    seoTitle: 'Premium Solid Wood Polishing & Oil Buffing Surat | Virat Furniture',
    seoDescription: 'Expert furniture polishing and polyurethane coating in Surat. Hand-rubbed Danish oils, wax buffing, and scratch-resistant sealers.',
    benefits: [
      'Sands down old decaying varnishes with zero fiber stress',
      'Layers premium non-yellowing German polyurethane',
      'Traditional hand-rubbed linseed oils and organic wax',
      'Brings deep wood grain highlights back to life'
    ],
    processSteps: [
      { title: 'Wood Cleaning', desc: 'Dissolving old grease residues and wax built-up from panel cracks.' },
      { title: 'Sanding Grids', desc: 'Sequential sanding using 120-grit up to fine 600-grit papers.' },
      { title: 'Stain Tuning', desc: 'Applying organic pigments to unify sun-faded timber color shades.' },
      { title: 'Polyurethane Spraying', desc: 'Spraying multiple micro-layers of protective clear polyurethane.' }
    ],
    faqs: [
      { q: 'What is the difference between PU and Melamine polish?', a: 'PU (Polyurethane) is highly elastic and UV-stable, meaning it does not yellow or crack like cheap melamine varnish.' },
      { q: 'Do you polish on-site at our home?', a: 'Yes, we complete minor touch-ups and hand-rubbed oil buffing directly at your residence using low-odor compounds.' }
    ]
  },
  {
    id: 'termite-shielding-sp',
    name: 'Vacuum-Chamber Organic Termite Shielding',
    shortDescription: 'Deep penetrative non-toxic borate vacuum treatments protecting furniture core against woodworms.',
    longDescription: 'Defend your valuable timber investment from devastating woodworms and termites. We utilize advanced pressurized vacuum chambers to force natural borate mineral salts deep into the heartwood fibers of raw logs, establishing a lifelong barrier that is completely non-toxic to children and pets.',
    iconName: 'shield',
    startingPrice: '₹7,500',
    slug: 'termite-shielding-sp',
    seoTitle: 'Pressurized Organic Termite Wood Treatment Surat | Virat Furniture',
    seoDescription: 'Non-toxic borate-based wood termite shielding in Surat. Life-long core heartwood protection against pests and wood beetles.',
    benefits: [
      'Forces borate mineral salts deep into dense heartwood cells',
      '100% non-toxic, odorless, child- and pet-safe mineral salts',
      'Permanent lifecycle core defense against termites and beetles',
      'Does not alter the visual wood stain behavior'
    ],
    processSteps: [
      { title: 'Vacuum Evacuation', desc: 'Placing raw planks inside steel chambers and drawing out core wood moisture.' },
      { title: 'Pressurized Flood', desc: 'Flooding chambers with rich liquid borate mineral formulas.' },
      { title: 'Cellular Penetration', desc: 'Applying high pressure to force salts deep into dense heartwood cells.' },
      { title: 'Slow Curing', desc: 'Gradually drying lumber back to stable moisture percentages.' }
    ],
    faqs: [
      { q: 'Is this treatment safe for baby cribs and dining tables?', a: 'Absolutely. Natural borate is an odorless mineral salt that is completely non-toxic to humans and pets.' },
      { q: 'How long does this termite defense last?', a: 'Because it bonds deep inside the heartwood cells, a single treatment protects the timber permanently.' }
    ]
  },
  {
    id: 'curved-teak-swing',
    name: 'Curved Teak Balcony Swings',
    shortDescription: 'Sleek, modern weather-resistant outdoor balcony swings carved in seasoned golden teak wood.',
    longDescription: 'Indulge in gentle evening breezes on your high-rise Surat balcony. We shape seasoned golden Teakwood into sleek, modern curved swings, suspended using robust braided stainless steel wire ropes or solid brass chains with integrated weatherproof bearings.',
    iconName: 'carpenter',
    startingPrice: '₹24,000',
    slug: 'curved-teak-swing',
    seoTitle: 'Custom Curved Teak Balcony Swings Surat | Virat Furniture',
    seoDescription: 'Weatherproof solid teak wood balcony swings in Surat. Braided steel suspension cables, rounded contours, and outdoor oil seals.',
    benefits: [
      '100% seasoned golden Teakwood (Sagwan) construction',
      'Heavy marine-grade braided stainless steel wires',
      'Sleek modern curved contours supporting comfortable sitting',
      'Sealed with deep-penetrating teak deck oils'
    ],
    processSteps: [
      { title: 'Contouring Planks', desc: 'Carving comfortable curved seat profiles from thick teak planks.' },
      { title: 'Core Bolt Boring', desc: 'Drilling horizontal bores for heavy-duty steel hanger bars.' },
      { title: 'Balcony Oil Coating', desc: 'Soaking timber in marine teak oils to guard against humidity.' },
      { title: 'Cables & Anchors Install', desc: 'Suspending bench with load-tested braided stainless steel cables.' }
    ],
    faqs: [
      { q: 'Does this swing handle direct rain exposure?', a: 'Yes, golden Teakwood is naturally rich in organic protective oils, and when cured with outdoor deck oils, it resists direct monsoon rain.' },
      { q: 'Is it easy to remove during heavy storms?', a: 'Yes, the suspension wires feature quick-release threaded steel carabiners.' }
    ]
  }
];

// Product catalog for Paradise Nursery.
// Each plant has an id, name, price, category, a short blurb, and
// "illustration" props (variant + colors) used by <PlantIllustration />
// to render a consistent, hand-drawn-style SVG thumbnail with no external
// image assets.

export const categories = [
  {
    id: 'air-purifying',
    label: 'Air-Purifying Plants',
    tagline: 'Quietly filtering the air while you sleep, work, and live.',
  },
  {
    id: 'fragrant-flowering',
    label: 'Aromatic & Flowering Plants',
    tagline: 'Scent and color for windowsills that want to show off.',
  },
  {
    id: 'low-maintenance',
    label: 'Low-Maintenance Succulents',
    tagline: 'Thrives on neglect. Perfect for first-time plant parents.',
  },
];

export const plants = [
  // --- Air-Purifying ---
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    price: 18,
    category: 'air-purifying',
    blurb: 'Upright, sculptural leaves that tolerate almost any light.',
    illustration: { variant: 'blade', leaf: '#4F7A52', pot: '#B9714A' },
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily',
    price: 22,
    category: 'air-purifying',
    blurb: 'Glossy leaves and white blooms; tells you when it\u2019s thirsty.',
    illustration: { variant: 'bloom', leaf: '#3E6B4A', pot: '#C97B84' },
  },
  {
    id: 'spider-plant',
    name: 'Spider Plant',
    price: 15,
    category: 'air-purifying',
    blurb: 'Fast-growing and forgiving, with cascading striped leaves.',
    illustration: { variant: 'cascade', leaf: '#6E9B5E', pot: '#D4A24C' },
  },
  {
    id: 'boston-fern',
    name: 'Boston Fern',
    price: 20,
    category: 'air-purifying',
    blurb: 'Lush, feathery fronds for a humid bathroom or shaded corner.',
    illustration: { variant: 'fern', leaf: '#356148', pot: '#8FA98A' },
  },
  {
    id: 'areca-palm',
    name: 'Areca Palm',
    price: 28,
    category: 'air-purifying',
    blurb: 'A statement palm that brings a breezy, tropical feel indoors.',
    illustration: { variant: 'palm', leaf: '#4B8054', pot: '#B9714A' },
  },
  {
    id: 'rubber-plant',
    name: 'Rubber Plant',
    price: 24,
    category: 'air-purifying',
    blurb: 'Broad, waxy leaves in deep burgundy-green. A bold focal point.',
    illustration: { variant: 'broadleaf', leaf: '#2F4A34', pot: '#D4A24C' },
  },

  // --- Fragrant & Flowering ---
  {
    id: 'jasmine',
    name: 'Jasmine',
    price: 19,
    category: 'fragrant-flowering',
    blurb: 'Star-shaped white flowers with an unmistakably sweet scent.',
    illustration: { variant: 'vine-bloom', leaf: '#4F7A52', pot: '#E4A5A0' },
  },
  {
    id: 'lavender',
    name: 'Lavender',
    price: 16,
    category: 'fragrant-flowering',
    blurb: 'Silvery stems topped with calming purple spikes.',
    illustration: { variant: 'spike', leaf: '#7A8F6B', pot: '#8FA98A' },
  },
  {
    id: 'gardenia',
    name: 'Gardenia',
    price: 26,
    category: 'fragrant-flowering',
    blurb: 'Rich, creamy blooms against dark, glossy foliage.',
    illustration: { variant: 'bloom', leaf: '#2F4A34', pot: '#F1EAD9' },
  },
  {
    id: 'rose-geranium',
    name: 'Rose Geranium',
    price: 17,
    category: 'fragrant-flowering',
    blurb: 'Scalloped leaves that smell like roses when brushed.',
    illustration: { variant: 'broadleaf', leaf: '#5E8A55', pot: '#C97B84' },
  },
  {
    id: 'orchid',
    name: 'Orchid',
    price: 32,
    category: 'fragrant-flowering',
    blurb: 'Elegant arching stems with long-lasting, exotic blooms.',
    illustration: { variant: 'vine-bloom', leaf: '#3E6B4A', pot: '#D4A24C' },
  },
  {
    id: 'hibiscus',
    name: 'Hibiscus',
    price: 21,
    category: 'fragrant-flowering',
    blurb: 'Big, showy trumpet flowers that open fresh every morning.',
    illustration: { variant: 'bloom', leaf: '#4B8054', pot: '#E4A5A0' },
  },

  // --- Low-Maintenance Succulents ---
  {
    id: 'aloe-vera',
    name: 'Aloe Vera',
    price: 14,
    category: 'low-maintenance',
    blurb: 'Plump, spiky leaves full of soothing gel. Barely needs water.',
    illustration: { variant: 'rosette', leaf: '#6E9B5E', pot: '#B9714A' },
  },
  {
    id: 'echeveria',
    name: 'Echeveria',
    price: 12,
    category: 'low-maintenance',
    blurb: 'A perfect rosette of dusty blue-green petals.',
    illustration: { variant: 'rosette', leaf: '#8FA98A', pot: '#D4A24C' },
  },
  {
    id: 'jade-plant',
    name: 'Jade Plant',
    price: 18,
    category: 'low-maintenance',
    blurb: 'Chunky, coin-shaped leaves said to bring good luck.',
    illustration: { variant: 'broadleaf', leaf: '#4F7A52', pot: '#8FA98A' },
  },
  {
    id: 'zebra-haworthia',
    name: 'Zebra Haworthia',
    price: 13,
    category: 'low-maintenance',
    blurb: 'Small striped rosettes that thrive on a sunny desk.',
    illustration: { variant: 'rosette', leaf: '#356148', pot: '#C97B84' },
  },
  {
    id: 'string-of-pearls',
    name: 'String of Pearls',
    price: 16,
    category: 'low-maintenance',
    blurb: 'Trailing beaded stems, lovely spilling from a shelf.',
    illustration: { variant: 'cascade', leaf: '#6E9B5E', pot: '#F1EAD9' },
  },
  {
    id: 'barrel-cactus',
    name: 'Barrel Cactus',
    price: 15,
    category: 'low-maintenance',
    blurb: 'A round, ribbed cactus that asks for almost nothing.',
    illustration: { variant: 'blade', leaf: '#3E6B4A', pot: '#D4A24C' },
  },
];

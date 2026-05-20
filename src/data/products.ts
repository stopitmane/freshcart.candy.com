import type { Product } from '../types';

export const products: Product[] = [
  { id: 1,  name: 'Ofada Rice (5kg)',          category: 'Grains',     price: 4500, originalPrice: 5200, rating: 4.8, reviews: 320, badge: 'sale',    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80', description: 'Authentic aromatic Nigerian brown rice from Ogun State.',       unit: '5kg bag' },
  { id: 2,  name: 'Chicken Breast (1kg)',       category: 'Proteins',   price: 4200, rating: 4.7, reviews: 215, badge: 'popular', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500&q=80', description: 'Fresh boneless chicken breast, hygienically packed.',           unit: '1kg pack' },
  { id: 3,  name: 'Fresh Tomatoes (1kg)',       category: 'Vegetables', price: 850,  rating: 4.6, reviews: 198, image: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=500&q=80', description: 'Ripe farm-fresh tomatoes from Jos Plateau.',                    unit: '1kg' },
  { id: 4,  name: 'Red Palm Oil (5L)',          category: 'Oils',       price: 6800, originalPrice: 7500, rating: 4.9, reviews: 180, badge: 'sale', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&q=80', description: 'Pure unrefined palm oil from Edo State.',                      unit: '5L bottle' },
  { id: 5,  name: 'Garri Ijebu (10kg)',         category: 'Grains',     price: 7500, rating: 4.7, reviews: 290, badge: 'popular', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&q=80', description: 'Sour and crunchy Ijebu garri — best soaked or as eba.',       unit: '10kg bag' },
  { id: 6,  name: 'Fresh Pepper Mix (500g)',    category: 'Spices',     price: 900,  rating: 4.3, reviews: 145, badge: 'new',     image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500&q=80', description: 'Mixed tatashe, scotch bonnet, and green pepper.',             unit: '500g pack' },
  { id: 7,  name: 'Mackerel Fish (2 pieces)',   category: 'Proteins',   price: 2800, rating: 4.5, reviews: 167, image: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=500&q=80', description: 'Fresh Atlantic mackerel, ideal for Nigerian soups and frying.',  unit: '2 pieces' },
  { id: 8,  name: 'Groundnut Oil (3L)',         category: 'Oils',       price: 5200, rating: 4.6, reviews: 132, image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=500&q=80', description: 'Cold-pressed groundnut oil from Kano. Light and clean.',         unit: '3L bottle' },
  { id: 9,  name: 'Spinach (Efo) 500g',         category: 'Vegetables', price: 600,  rating: 4.4, reviews: 98,  badge: 'new',     image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&q=80', description: 'Fresh green spinach leaves, washed and ready to cook.',         unit: '500g' },
  { id: 10, name: 'Zobo Drink (1.5L)',           category: 'Drinks',     price: 1200, rating: 4.8, reviews: 256, badge: 'popular', image: 'https://images.unsplash.com/photo-1542444459-b5f3d3fb6b49?w=500&q=80', description: 'Chilled hibiscus drink with ginger and cloves.',                unit: '1.5L bottle' },
  { id: 11, name: 'Dried Ugu Leaves (200g)',    category: 'Vegetables', price: 1200, rating: 4.5, reviews: 113, image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&q=80', description: 'Sun-dried fluted pumpkin leaves retaining full nutrients.',        unit: '200g pack' },
  { id: 12, name: 'Cow Leg (Ponmo) 500g',       category: 'Proteins',   price: 1800, rating: 4.4, reviews: 87,  image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&q=80', description: 'Cleaned and prepped cow leg — ready for your pepper soup.',      unit: '500g' },
];

export const banners = [
  { title: 'Super Value Deals', subtitle: 'Save up to 30% on selected items', cta: 'Shop Now', color: '#1a7a4a', bg: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=80' },
  { title: 'Fresh Proteins Daily', subtitle: 'Chicken, fish & meat delivered fresh', cta: 'See Proteins', color: '#b45309', bg: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=900&q=80' },
  { title: 'Free Delivery', subtitle: 'On orders over ₦10,000 within Lagos', cta: 'Order Now', color: '#1d4ed8', bg: 'https://images.unsplash.com/photo-1506617564039-2f3b650b7010?w=900&q=80' },
];

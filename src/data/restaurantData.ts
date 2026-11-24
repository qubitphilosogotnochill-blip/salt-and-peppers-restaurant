export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  badge?: string;
  isSpecial?: boolean;
}

export interface MenuSubcategory {
  title: string;
  items: MenuItem[];
}

export interface MenuBookletPage {
  id: number;
  pageNumber: number;
  title: string;
  category: string;
  subtitle: string;
  image: string;
  originalImage: string;
  subcategories: MenuSubcategory[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "ambiance" | "dishes" | "experience";
  image: string;
  description: string;
}

export const RESTAURANT_DATA = {
  name: "SALT AND PEPPERS",
  tagline: "Good Food. Great Mood.",
  subtitle: "Pure Vegetarian & Family Restaurant",
  concept: "Modern Indian Bistro • Warm Rustic • Contemporary Dining",
  
  // Exact provided details
  address: {
    line1: "H.No. 1629, Ground Floor, Pole No. 3",
    line2: "Najafgarh Thana Road",
    area: "Najafgarh",
    city: "New Delhi",
    state: "Delhi",
    postalCode: "110043",
    country: "India",
    full: "H.No. 1629, Ground Floor, Pole No. 3, Najafgarh Thana Road, Najafgarh, New Delhi, Delhi – 110043, India.",
  },
  
  contact: {
    phone: "+91 96259 52699",
    phoneTel: "tel:+919625952699",
    displayPhone: "+91 96259 52699",
    email: "info@saltandpeppers.in", // Placeholder clearly editable
    emailPlaceholder: "XYZ (Placeholder)",
  },

  // Hours
  hours: {
    display: "Mon - Sun: 11:00 AM – 11:00 PM",
    days: "Monday to Sunday",
    time: "11:00 AM – 11:00 PM",
    daysShort: "All 7 Days",
  },
  
  // Official Google Maps Links
  maps: {
    listingUrl: "https://share.google/PhbnILm13N3T2DyCr",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=H.No.%201629%2C%20Ground%20Floor%2C%20Pole%20No.%203%2C%20Najafgarh%20Thana%20Road%2C%20Najafgarh%2C%20New%20Delhi%2C%20Delhi%20110043%2C%20India",
    // Embed URL for Najafgarh Thana Road location
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7663486150244!2d76.9806443!3d28.6067713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d057a6e1337c7%3A0x6a2c26d2460df06a!2sNajafgarh%20Thana%20Rd%2C%20Najafgarh%2C%20Delhi%2C%20110043!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    coordinates: {
      latitude: 28.6092,
      longitude: 76.9842,
    },
  },

  // SEO & Business Meta
  seo: {
    siteUrl: "https://saltandpeppers.in",
    primaryLocation: "Najafgarh, Delhi, India",
    cuisineTypes: [
      "North Indian",
      "Chinese",
      "South Indian",
      "Italian",
      "Fast Food",
      "Snacks",
      "Desserts",
      "Beverages",
      "Mocktails",
      "Shakes",
    ],
    servesCuisine: [
      "North Indian",
      "Chinese",
      "South Indian",
      "Italian",
      "Fast Food",
      "Continental",
    ],
    dietary: "100% Pure Vegetarian",
    priceRange: "₹₹ (₹200 - ₹500 per person)",
  },

  // Why Salt and Peppers? (Exact 5 requirement cards)
  whyChooseUs: [
    {
      title: "Pure Vegetarian Food",
      subtitle: "100% Shuddh Shakahari",
      description: "Dedicated pure vegetarian kitchen prepared with supreme hygiene, freshest ingredients, and authentic traditional cooking practices.",
      icon: "Leaf",
    },
    {
      title: "Variety of Cuisines",
      subtitle: "Global & Regional Flavours",
      description: "From royal North Indian gravies and aromatic tandoor breads to South Indian dosas, sizzling Chinese, and cheesy Italian pizzas.",
      icon: "UtensilsCrossed",
    },
    {
      title: "Something for Every Craving",
      subtitle: "Comprehensive Menu",
      description: "Over 150+ authentic delicacies including thalis, momos, kathi rolls, artisanal pastas, creamy shakes, refreshing mocktails, and ice creams.",
      icon: "Sparkles",
    },
    {
      title: "Family-Friendly Dining",
      subtitle: "Warm & Welcoming Ambiance",
      description: "Comfortable seating, warm rustic woven lamps, ambient lighting, and hospitable service designed for family dinners and festive get-togethers.",
      icon: "Users",
    },
    {
      title: "Delicious Food Experiences",
      subtitle: "Crafted with Passion",
      description: "Every recipe is perfected for balanced flavours, generous portions, crisp freshness, and a memorable dining experience in Najafgarh.",
      icon: "HeartHandshake",
    },
  ],

  // Gallery Items using actual restaurant photos
  gallery: [
    {
      id: "dining-bar",
      title: "Modern Dining & Bar Counter",
      category: "ambiance",
      image: "/images/restaurant/salt-peppers-dining-bar.jpg",
      description: "Comfortable seating with rustic wooden dining tables, ambient wall plates, and modern beverage counter.",
    },
    {
      id: "lighting-ambiance",
      title: "Warm Rustic Ambiance",
      category: "ambiance",
      image: "/images/restaurant/salt-peppers-interior-ambiance.jpg",
      description: "Artisanal handwoven basket pendant lights casting a warm, welcoming glow over plush booth seating.",
    },
    {
      id: "chaap-platter",
      title: "Signature Tandoori Chaap Platter",
      category: "dishes",
      image: "/images/restaurant/salt-peppers-signature-chaap-platter.jpg",
      description: "Char-grilled Soya Chaap skewers seasoned with aromatic herbs, served with crisp pickled onion rings and mint dip.",
    },
  ] as GalleryItem[],

  // Menu Booklet: 12 Real Menu Pages
  menuBooklet: [
    {
      id: 1,
      pageNumber: 1,
      category: "STARTERS",
      title: "Starters & Special Veg Kababs",
      subtitle: "Tandoori starters, paneer tikkas, and royal vegetarian kababs",
      image: "/images/menu/menu-01-starters-kababs.jpg",
      originalImage: "/images/original/media_1795535180662_4113c30c.jpg",
      subcategories: [
        {
          title: "Veg Snacks & Tandoori Starters",
          items: [
            { name: "Paneer Tikka", price: "₹259" },
            { name: "Paneer Malai Tikka", price: "₹269" },
            { name: "Achari Paneer Tikka", price: "₹269" },
            { name: "Peri Peri Paneer Tikka", price: "₹269" },
            { name: "Paneer Pahadi Tikka", price: "₹269" },
            { name: "Malai Soya Chaap", price: "₹269" },
            { name: "Achari Soya Chaap", price: "₹269" },
            { name: "Masala Soya Chaap", price: "₹269" },
            { name: "Tandoori Soya Chaap", price: "₹259" },
            { name: "Afghani Soya Chaap", price: "₹269" },
            { name: "Dahi Ke Sholey", price: "₹229" },
            { name: "Mushroom Tikka", price: "₹249" },
            { name: "Mushroom Stuffed", price: "₹269" },
            { name: "S&P Spl. Paneer Tikka Bhatti", price: "₹279", isSpecial: true, badge: "Chef's Special" },
            { name: "Tandoori Broccoli", price: "₹299" },
            { name: "S&P Spl Veg Platter", price: "₹349", description: "Paneer Tikka 3pc, Malai Chaap 3pc, Tandoori Mushroom 3pc, Hara Bhara Kabab 3pc", isSpecial: true, badge: "Platter" },
          ],
        },
        {
          title: "Special Veg Kabab's",
          items: [
            { name: "Nargish Kabab", price: "₹219" },
            { name: "Paneer Makhmali Kabab", price: "₹269" },
            { name: "Paneer Papdi Kabab", price: "₹259" },
            { name: "Veg Chilly Milli Kabab", price: "₹229" },
            { name: "Paneer Pahadi Kabab", price: "₹259" },
            { name: "Dil Ruba Kabab", price: "₹219" },
            { name: "Bhara Sheekh Kabab", price: "₹229" },
            { name: "Dahi Ke Kabab", price: "₹219" },
            { name: "Cheese & Corn Kabab", price: "₹269" },
          ],
        },
      ],
    },
    {
      id: 2,
      pageNumber: 2,
      category: "CHINESE",
      title: "Soups, Snacks & Chinese Gravy",
      subtitle: "Steaming soups, crispy appetizers, and savory gravies",
      image: "/images/menu/menu-02-soups-chinese-snacks.jpg",
      originalImage: "/images/original/media_1795535180662_d9247b8d.jpg",
      subcategories: [
        {
          title: "Soups Veg",
          items: [
            { name: "Tomato Soup", price: "₹90" },
            { name: "Veg Sweet Corn Soup", price: "₹109" },
            { name: "Veg Manchow Soup", price: "₹109" },
            { name: "Veg Hot & Sour Soup", price: "₹109" },
            { name: "Mix Veg Soup", price: "₹109" },
            { name: "Lemon Coriander Soup", price: "₹109" },
          ],
        },
        {
          title: "Snacks",
          items: [
            { name: "French Fries", price: "₹99" },
            { name: "Peri Peri Fries", price: "₹119" },
            { name: "Chilli Potato", price: "₹189" },
            { name: "Honey Chilli Potato", price: "₹199" },
            { name: "Veg Salt & Pepper Dry", price: "₹229", badge: "Signature" },
            { name: "Veg Manchurian Dry", price: "₹219" },
            { name: "Chilli Paneer Dry", price: "₹229" },
            { name: "Chilli Mushroom", price: "₹259" },
            { name: "Chilli Chaap", price: "₹199" },
            { name: "Chilli Gobhi", price: "₹189" },
            { name: "Mushroom Baby Corn Stir Fry", price: "₹249" },
            { name: "Crispy Corn", price: "₹199" },
            { name: "Masala Corn", price: "₹199" },
            { name: "Chinese Platter", price: "₹349", description: "Noodles, Chilli Potato, Manchurian Dry, Spring Roll", isSpecial: true, badge: "Platter" },
          ],
        },
        {
          title: "Chinese Gravy",
          items: [
            { name: "Veg Manchurian Gravy", price: "₹239" },
            { name: "Chilli Paneer Gravy", price: "₹249" },
            { name: "Vegetable Hot Garlic Sauce", price: "₹239" },
            { name: "Mushroom Baby Corn Ginger Garlic Sauce", price: "₹259" },
          ],
        },
      ],
    },
    {
      id: 3,
      pageNumber: 3,
      category: "CHINESE",
      title: "Chinese Combos, Noodles & Fried Rice",
      subtitle: "Wok-tossed noodles, aromatic fried rice, and family combos",
      image: "/images/menu/menu-03-chinese-combos-noodles.jpg",
      originalImage: "/images/original/media_1795535180661_1a78178d.jpg",
      subcategories: [
        {
          title: "Chinese Combo",
          items: [
            { name: "Fried Rice + Manchurian", price: "₹219" },
            { name: "Fried Rice + Chilli Paneer", price: "₹249" },
            { name: "Veg Noodles + Manchurian", price: "₹239" },
            { name: "Veg Hot Garlic Sauce + Rice/Noodles", price: "₹259" },
            { name: "Mushroom Baby Corn Ginger Garlic Sauce", price: "₹279" },
          ],
        },
        {
          title: "Chinese Family Combo",
          items: [
            { name: "Veg Combo", price: "₹399", description: "Veg Momos (4pcs) + Veg Noodles (Half) + Veg Fried Rice (Half) + Veg Manchurian (Half) + Coke 750 ML", badge: "Best Value" },
            { name: "Paneer Combo", price: "₹499", description: "Paneer Momos (4pcs) + Paneer Noodles (Half) + Paneer Manchurian (Half) + Chilli Potato (Half) + Coke 750 ML", badge: "Family Special" },
          ],
        },
        {
          title: "Noodles",
          items: [
            { name: "Veg Noodles", price: "₹169" },
            { name: "Butter Garlic Noodles", price: "₹179" },
            { name: "Paneer Noodles", price: "₹189" },
            { name: "Chilli Garlic Noodles", price: "₹189" },
            { name: "Singapuri Veg Noodles", price: "₹199" },
            { name: "Veg Schezwan Noodles", price: "₹199" },
            { name: "Hakka Veg Noodles", price: "₹199" },
          ],
        },
        {
          title: "Fried Rice",
          items: [
            { name: "Veg Fried Rice", price: "₹169" },
            { name: "Paneer Fried Rice", price: "₹199" },
            { name: "Lemon Fried Rice", price: "₹199" },
            { name: "Butter Paneer Fried Rice", price: "₹189" },
            { name: "Butter Garlic Fried Rice", price: "₹179" },
            { name: "Singapuri Veg Fried Rice", price: "₹199" },
            { name: "Spl. Mix Veg Fried Rice", price: "₹219" },
          ],
        },
      ],
    },
    {
      id: 4,
      pageNumber: 4,
      category: "ROLLS AND DIMSUM",
      title: "Rolls, Kathi Rolls & Dimsum",
      subtitle: "Crispy rolls, stuffed kathi rolls, and handcrafted momos",
      image: "/images/menu/menu-04-rolls-dimsum.jpg",
      originalImage: "/images/original/media_1795535180664_0e606de4.jpg",
      subcategories: [
        {
          title: "Roll's",
          items: [
            { name: "Veg Spring Roll", price: "₹169" },
            { name: "Cheese & Corn Roll", price: "₹209" },
            { name: "Cigar Roll", price: "₹229" },
          ],
        },
        {
          title: "Kathi Roll's",
          items: [
            { name: "Veg Kathi Roll", price: "₹169" },
            { name: "Paneer Tikka Kathi Roll", price: "₹189" },
            { name: "Schezwan Chilli Kathi Roll", price: "₹199" },
            { name: "Malai Chaap Roll", price: "₹189" },
            { name: "Chatpata Chaap Roll", price: "₹179" },
            { name: "Achari Chaap Roll", price: "₹189" },
            { name: "Afghani Chaap Roll", price: "₹189" },
            { name: "Pudina Chaap Roll", price: "₹189" },
          ],
        },
        {
          title: "Dimsum (Momos)",
          items: [
            { name: "Steam Momos", price: "Veg ₹119 / Paneer ₹149" },
            { name: "Kurkure Momos", price: "Veg ₹159 / Paneer ₹189" },
            { name: "Fried Momos", price: "Veg ₹139 / Paneer ₹159" },
            { name: "Tandoori Momos", price: "Veg ₹159 / Paneer ₹189" },
            { name: "Veg Gravy Momos", price: "Veg ₹169 / Paneer ₹199" },
            { name: "Crispy Cutting Momos (Spl.)", price: "Veg ₹169 / Paneer ₹199", isSpecial: true, badge: "Must Try" },
            { name: "Butter Garlic Momos", price: "Veg ₹139 / Paneer ₹159" },
          ],
        },
      ],
    },
    {
      id: 5,
      pageNumber: 5,
      category: "ITALIAN AND FAST FOOD",
      title: "Italian Pizza, Burger & Sandwiches",
      subtitle: "Stone-baked pizzas, juicy veggie burgers, and grilled sandwiches",
      image: "/images/menu/menu-05-pizza-burger-sandwiches.jpg",
      originalImage: "/images/original/media_1795535180658_1b48ff1a.jpg",
      subcategories: [
        {
          title: "Pizza (Medium)",
          items: [
            { name: "Margherita Pizza", price: "₹149" },
            { name: "Cheese Capsicum Onion Pizza", price: "₹199" },
            { name: "Farm Delight Pizza", price: "₹230" },
            { name: "Tandoori Paneer Pizza", price: "₹299" },
            { name: "Veggie Supreme Pizza", price: "₹349" },
            { name: "Cheese & Corn Pizza", price: "₹169" },
            { name: "Pineapple Corn & Jalapeno", price: "₹349" },
          ],
        },
        {
          title: "Burger",
          items: [
            { name: "Tangy Aloo Tikki Burger", price: "₹89" },
            { name: "Veggie Burger", price: "₹99" },
            { name: "Paneer Patty Burger", price: "₹119" },
            { name: "Cheese Patty Burger", price: "₹149" },
          ],
        },
        {
          title: "Sandwich",
          items: [
            { name: "Veg Extra Vaganza Sandwich", price: "₹150" },
            { name: "Tandoori Paneer Sandwich", price: "₹189" },
            { name: "Paneer Tikka Sandwich", price: "₹189" },
            { name: "Club Sandwich", price: "₹180" },
          ],
        },
      ],
    },
    {
      id: 6,
      pageNumber: 6,
      category: "ITALIAN AND FAST FOOD",
      title: "Pulao, Rice Combos, Garlic Bread & Pasta",
      subtitle: "Comfort rice bowls, aromatic biryanis, and rich saucy pastas",
      image: "/images/menu/menu-06-rice-combos-pasta.jpg",
      originalImage: "/images/original/media_1795535180658_fbd9998f.jpg",
      subcategories: [
        {
          title: "Pulao & Rice",
          items: [
            { name: "Plain Rice", price: "₹129" },
            { name: "Jeera Rice", price: "₹149" },
            { name: "Matar Pulao / Veg Pulao", price: "₹179" },
            { name: "Navratan Pulao", price: "₹249" },
            { name: "Veg Biryani With Raita", price: "₹219" },
            { name: "Paneer Biryani With Raita", price: "₹249" },
          ],
        },
        {
          title: "Rice Combo",
          items: [
            { name: "Chole Rice", price: "₹199" },
            { name: "Rajma Rice", price: "₹199" },
            { name: "Dal Makhani Rice", price: "₹219" },
            { name: "Shahi Paneer Rice", price: "₹229" },
          ],
        },
        {
          title: "Garlic Bread",
          items: [
            { name: "Garlic Bread", price: "₹89" },
            { name: "Cheese Garlic Bread", price: "₹109" },
            { name: "Stuff Garlic Bread", price: "₹149" },
          ],
        },
        {
          title: "Pasta",
          items: [
            { name: "White Sauce Pasta", price: "₹209" },
            { name: "Red Sauce Pasta", price: "₹199" },
            { name: "Pink Sauce Pasta (mix)", price: "₹219" },
          ],
        },
      ],
    },
    {
      id: 7,
      pageNumber: 7,
      category: "INDIAN",
      title: "Indian Main Course",
      subtitle: "Rich curries, royal paneer creations, and slow-cooked dal",
      image: "/images/menu/menu-07-indian-main-course.jpg",
      originalImage: "/images/original/media_1795535180667_e2fdb6c9.jpg",
      subcategories: [
        {
          title: "Indian Main Course Specialties",
          items: [
            { name: "Dum Aloo Banarasi", price: "₹289" },
            { name: "Yellow Dal Tadka", price: "₹219" },
            { name: "Veg Navratan Korma", price: "₹239" },
            { name: "Mix Veg Sajni", price: "Half ₹169 / Full ₹269" },
            { name: "Rajma Raseela", price: "Half ₹159 / Full ₹249" },
            { name: "Chana Masala", price: "Half ₹159 / Full ₹249" },
            { name: "Dal Makhani", price: "Half ₹169 / Full ₹269", badge: "House Special" },
            { name: "Shahi Paneer", price: "Half ₹199 / Full ₹299" },
            { name: "Matar Paneer", price: "Half ₹189 / Full ₹289" },
            { name: "Kadhai Paneer", price: "Half ₹189 / Full ₹289" },
            { name: "Paneer Butter Masala", price: "Half ₹189 / Full ₹289" },
            { name: "Paneer Tikka Butter Masala", price: "Half ₹199 / Full ₹299" },
            { name: "S&P Spl. Village Handi Paneer", price: "₹319", isSpecial: true, badge: "Chef's Signature" },
            { name: "Paneer Lababdar", price: "Half ₹209 / Full ₹309" },
            { name: "Paneer Do Pyaza", price: "Half ₹199 / Full ₹299" },
            { name: "Paneer Bhurji", price: "₹289" },
            { name: "Palak Paneer", price: "Half ₹179 / Full ₹279" },
            { name: "Sarso Ka Saag (seasonal)", price: "₹240" },
            { name: "Bhindi Masala (seasonal)", price: "₹240" },
            { name: "Malai Kofta", price: "₹299" },
            { name: "Tawa Chaap", price: "Half ₹189 / Full ₹299" },
            { name: "Masala Soya Chaap", price: "Half ₹199 / Full ₹299" },
            { name: "Chaap Do Pyaza", price: "Half ₹199 / Full ₹299" },
            { name: "Matar Mushroom", price: "Half ₹189 / Full ₹299" },
            { name: "Mushroom Masala", price: "Half ₹189 / Full ₹289" },
            { name: "Mushroom Do Pyaza", price: "Half ₹189 / Full ₹299" },
            { name: "Methi Matar Handi", price: "Half ₹209 / Full ₹309" },
          ],
        },
      ],
    },
    {
      id: 8,
      pageNumber: 8,
      category: "INDIAN",
      title: "Breads, Naan & Parathas",
      subtitle: "Clay oven tandoori rotis, garlic naans, and stuffed parathas",
      image: "/images/menu/menu-08-breads-naan-parathas.jpg",
      originalImage: "/images/original/media_1795535180666_c2e0109c.jpg",
      subcategories: [
        {
          title: "Tandoori Breads & Naans",
          items: [
            { name: "Tandoori Roti", price: "₹15" },
            { name: "Tandoori Butter Roti", price: "₹20" },
            { name: "Tawa Roti", price: "₹15" },
            { name: "Tawa Butter Roti", price: "₹20" },
            { name: "Garlic Roti", price: "₹30" },
            { name: "Missi Roti", price: "₹40" },
            { name: "Onion Missi Roti", price: "₹45" },
            { name: "Rumali Roti", price: "₹20" },
            { name: "Plain Naan", price: "₹35" },
            { name: "Butter Naan", price: "₹40" },
            { name: "Aloo Naan", price: "₹65" },
            { name: "Garlic Naan", price: "₹60" },
            { name: "Kandhari Naan", price: "₹90" },
            { name: "Stuff Naan", price: "₹80" },
          ],
        },
        {
          title: "Parathas",
          items: [
            { name: "Lachha Paratha", price: "₹45" },
            { name: "Pudhina Paratha", price: "₹55" },
            { name: "Green Chilli Paratha", price: "₹55" },
            { name: "Stuff Paratha", price: "₹70" },
            { name: "Paneer Paratha", price: "₹80" },
            { name: "Aloo Paratha", price: "₹60" },
            { name: "Aloo Pyaz Paratha", price: "₹70" },
          ],
        },
      ],
    },
    {
      id: 9,
      pageNumber: 9,
      category: "INDIAN",
      title: "Deluxe Thali, Salad & Raita",
      subtitle: "Wholesome Indian platters, roasted papads, and cooling raitas",
      image: "/images/menu/menu-09-thali-salads-raita.jpg",
      originalImage: "/images/original/media_1795535180638_5da61514.jpg",
      subcategories: [
        {
          title: "Thali Specialties",
          items: [
            {
              name: "Deluxe Thali",
              price: "₹269",
              description: "Dal Makhani + Shahi Paneer + 2 Butter Roti + 1 Raita + Rice + Salad",
              badge: "Popular",
            },
            {
              name: "Super Deluxe Thali",
              price: "₹369",
              description: "Dal Makhani + Shahi Paneer + Mix Veg + 2 Butter Roti + 1 Butter Naan + 1 Raita + Salad + Rice + 1 Sweet",
              isSpecial: true,
              badge: "Royal Feast",
            },
          ],
        },
        {
          title: "Papad",
          items: [
            { name: "Fried Papad", price: "₹39" },
            { name: "Roasted Papad", price: "₹39" },
            { name: "Masala Papad", price: "₹49" },
          ],
        },
        {
          title: "Salad & Raita",
          items: [
            { name: "Green Salad", price: "₹79" },
            { name: "Kachumber Salad", price: "₹99" },
            { name: "Russian Salad", price: "₹99" },
            { name: "Plain Dahi", price: "₹79" },
            { name: "Plain Raita", price: "₹89" },
            { name: "Boondi Raita", price: "₹99" },
            { name: "Mix Veg Raita", price: "₹109" },
            { name: "Pineapple Raita", price: "₹129" },
          ],
        },
      ],
    },
    {
      id: 10,
      pageNumber: 10,
      category: "SOUTH INDIAN",
      title: "South Indian, Drinks & Desserts",
      subtitle: "Golden crispy dosas, fluffy idlis, hot teas, and sweets",
      image: "/images/menu/menu-10-south-indian-desserts.jpg",
      originalImage: "/images/original/media_1795535180606_9c742294.jpg",
      subcategories: [
        {
          title: "South Indian",
          items: [
            { name: "Plain Dosa", price: "₹149" },
            { name: "Onion Masala Dosa", price: "₹179" },
            { name: "Masala Dosa", price: "₹179" },
            { name: "Paneer Masala Dosa", price: "₹199" },
            { name: "Idli Sambar (2 Pc)", price: "₹99" },
            { name: "Onion Uttapam", price: "₹119" },
            { name: "Mix Veg Uttapam", price: "₹129" },
          ],
        },
        {
          title: "Traditional Drinks",
          items: [
            { name: "Cold Drinks", price: "on MRP" },
            { name: "Mineral Water", price: "on MRP" },
            { name: "Tadka Chach", price: "₹89" },
            { name: "Sweet Lassi", price: "₹99" },
            { name: "Mango Lassi", price: "₹119" },
          ],
        },
        {
          title: "Deserts",
          items: [
            { name: "Gulab Jamun", price: "₹40" },
            { name: "Gajar Halwa (Seasonal)", price: "₹99" },
          ],
        },
        {
          title: "Hot Beverages",
          items: [
            { name: "Tea", price: "₹30" },
            { name: "Hot Coffee", price: "₹79" },
            { name: "Lemon Tea", price: "₹49" },
          ],
        },
      ],
    },
    {
      id: 11,
      pageNumber: 11,
      category: "MOCKTAILS AND SHAKES",
      title: "Mocktails & Thick Shakes",
      subtitle: "Refreshing chilled mocktails, craft sodas, and creamy thick shakes",
      image: "/images/menu/menu-11-mocktails-shakes.jpg",
      originalImage: "/images/original/media_1795535180658_a3fa8827.jpg",
      subcategories: [
        {
          title: "Mocktails",
          items: [
            { name: "Virgin Mojito", price: "₹149" },
            { name: "Masala Cola Mojito", price: "₹149" },
            { name: "Bubblegum Blast", price: "₹149" },
            { name: "Aqua Blue", price: "₹149" },
            { name: "Apple Zing", price: "₹149" },
            { name: "Watermelon Delight", price: "₹149" },
            { name: "Kiwi Kick", price: "₹149" },
            { name: "Pina Colada", price: "₹199" },
            { name: "Fresh Lime Soda", price: "₹89" },
            { name: "Lemon Iced Tea", price: "₹99" },
            { name: "Jain Shikanji", price: "₹89" },
          ],
        },
        {
          title: "Shakes",
          items: [
            { name: "Cold Coffee", price: "₹139" },
            { name: "Dark Fantasy Shake", price: "₹159" },
            { name: "Oreo Shake", price: "₹159" },
            { name: "Kitkat Milkshake", price: "₹159" },
            { name: "Chocolate Milk Shake", price: "₹159" },
            { name: "Vanilla Milk Shake", price: "₹159" },
            { name: "Strawberry Shake", price: "₹159" },
            { name: "Butterscotch", price: "₹159" },
          ],
        },
      ],
    },
    {
      id: 12,
      pageNumber: 12,
      category: "DESSERTS",
      title: "Ice Cream Delights",
      subtitle: "Rich, creamy scoops and gourmet sundaes (All ₹80/-)",
      image: "/images/menu/menu-12-ice-cream.jpg",
      originalImage: "/images/original/media_1795535180638_b6575dc1.jpg",
      subcategories: [
        {
          title: "Ice Cream Scoops (₹80/- Each)",
          items: [
            { name: "Vanilla", price: "₹80" },
            { name: "Chunky Vanilla Delight", price: "₹80" },
            { name: "American Nuts", price: "₹80" },
            { name: "Belgium Choco Chip", price: "₹80" },
            { name: "Butterscotch", price: "₹80" },
            { name: "Strawberry", price: "₹80" },
            { name: "Badam Pista", price: "₹80" },
            { name: "Coffee & Cream", price: "₹80" },
            { name: "Chocolate Chips", price: "₹80" },
            { name: "Tooti Frooti", price: "₹80" },
            { name: "Gulab Ice Cream", price: "₹80" },
            { name: "Black Currant", price: "₹80" },
            { name: "Choco Rock", price: "₹80" },
            { name: "Pineapple", price: "₹80" },
            { name: "Mango Asli Aam", price: "₹80" },
            { name: "Paan", price: "₹80" },
            { name: "Cream & Cookies", price: "₹80" },
            { name: "Bubblegum", price: "₹80" },
          ],
        },
      ],
    },
  ] as MenuBookletPage[],

  // Grouped Menu Navigation Categories (as requested in Section 06.B)
  navCategories: [
    {
      name: "INDIAN",
      description: "Royal North Indian curries, handi specials, tandoori breads, deluxe thalis & pulavs",
      subItems: ["Indian Main Course", "Breads", "Pulao", "Rice Combo", "Deluxe Thali", "Papad", "Salad & Raita"],
      pageIndices: [6, 7, 8], // 0-based index: pages 7, 8, 9
    },
    {
      name: "CHINESE",
      description: "Crispy appetizers, wok-tossed noodles, fried rice, soups & rich gravies",
      subItems: ["Chinese Combo", "Noodles", "Fried Rice", "Soups", "Snacks", "Chinese Gravy"],
      pageIndices: [1, 2], // pages 2, 3
    },
    {
      name: "ITALIAN AND FAST FOOD",
      description: "Stone-baked pizzas, hearty burgers, grilled sandwiches, pastas & garlic breads",
      subItems: ["Pizza", "Burger", "Sandwich", "Garlic Bread", "Pasta"],
      pageIndices: [4, 5], // pages 5, 6
    },
    {
      name: "STARTERS",
      description: "Tandoori paneer tikkas, soya chaap varieties, mushroom tikkas & special kababs",
      subItems: ["Veg Snacks", "Special Veg Kababs"],
      pageIndices: [0], // page 1
    },
    {
      name: "ROLLS AND DIMSUM",
      description: "Crispy rolls, spicy kathi rolls, and steamed/tandoori momo dimsums",
      subItems: ["Rolls", "Kathi Rolls", "Dimsums"],
      pageIndices: [3], // page 4
    },
    {
      name: "SOUTH INDIAN",
      description: "Crispy dosas, fluffy idlis, and traditional uttapams served with sambar and chutneys",
      subItems: ["Plain Dosa", "Onion Masala Dosa", "Masala Dosa", "Paneer Masala Dosa", "Idli Sambar", "Uttapam"],
      pageIndices: [9], // page 10
    },
    {
      name: "BEVERAGES",
      description: "Tadka chach, sweet & mango lassi, cold drinks, masala chai & hot coffee",
      subItems: ["Cold Drinks", "Mineral Water", "Tadka Chach", "Sweet Lassi", "Mango Lassi", "Tea", "Coffee", "Lemon Tea"],
      pageIndices: [9], // page 10
    },
    {
      name: "DESSERTS",
      description: "Warm gulab jamun, seasonal gajar halwa, and 18 flavours of gourmet ice creams",
      subItems: ["Gulab Jamun", "Gajar Halwa", "Ice Cream"],
      pageIndices: [9, 11], // pages 10, 12
    },
    {
      name: "MOCKTAILS AND SHAKES",
      description: "Handcrafted mocktails, fizzy fruit coolers, and rich gourmet milkshakes",
      subItems: [
        "Virgin Mojito", "Masala Cola Mojito", "Bubblegum Blast", "Aqua Blue", "Apple Zing",
        "Watermelon Delight", "Kiwi Kick", "Pina Colada", "Fresh Lime Soda", "Lemon Iced Tea",
        "Jain Shikanji", "Cold Coffee", "Dark Fantasy Shake", "Oreo Shake", "Kitkat Milkshake",
        "Chocolate Milk Shake", "Vanilla Milk Shake", "Strawberry Shake", "Butterscotch"
      ],
      pageIndices: [10], // page 11
    },
  ],
};

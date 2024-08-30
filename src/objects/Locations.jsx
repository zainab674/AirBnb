

const Locations = [
    { city: 'New York', type: 'Museum tours', category: 'Arts & culture', popular: true },
    { city: 'Paris', type: 'Art gallery', category: 'Arts & culture', popular: true },
    { city: 'Florence', type: 'Opera house', category: 'Arts & culture', popular: false },
    { city: 'Vienna', type: 'Classical concert halls', category: 'Arts & culture', popular: true },
    { city: 'Kyoto', type: 'Traditional tea houses', category: 'Arts & culture', popular: true },
    { city: 'Rome', type: 'Historical landmarks', category: 'Arts & culture', popular: true },
    { city: 'Berlin', type: 'Contemporary art spaces', category: 'Arts & culture', popular: false },
    { city: 'London', type: 'West End theatres', category: 'Arts & culture', popular: true },
    { city: 'Istanbul', type: 'Historic mosques', category: 'Arts & culture', popular: true },
    { city: 'Barcelona', type: 'Architectural tours', category: 'Arts & culture', popular: true }
    , { city: 'Los Angeles', type: 'Film studios', category: 'Arts & culture', popular: true }
    , { city: 'Mexico City', type: 'Cultural festivals', category: 'Arts & culture', popular: false }
    , { city: 'Amsterdam', type: 'Canal museums', category: 'Arts & culture', popular: true }
    , { city: 'Cairo', type: 'Pyramids and museums', category: 'Arts & culture', popular: true }
    , { city: 'Athens', type: 'Ancient ruins', category: 'Arts & culture', popular: true }
    , { city: 'Moscow', type: 'Ballet theatres', category: 'Arts & culture', popular: true }
    , { city: 'Lisbon', type: 'Fado music venues', category: 'Arts & culture', popular: false }
    , { city: 'Prague', type: 'Medieval architecture', category: 'Arts & culture', popular: true }
    , { city: 'Buenos Aires', type: 'Tango dance halls', category: 'Arts & culture', popular: true }
    , { city: 'Tokyo', type: 'Kabuki theatres', category: 'Arts & culture', popular: true }
    , { city: 'Canmore', type: 'Condo rentals', category: 'Mountains', popular: true },
    { city: 'Benalmádena', type: 'Beach house rentals', category: 'Beach', popular: false },
    { city: 'Marbella', type: 'Beachfront rentals', category: 'Beach', popular: true },
    { city: 'Mijas', type: 'Apartment rentals', category: 'Unique stays', popular: false },
    { city: 'Prescott', type: 'Cabin rentals', category: 'Mountains', popular: false },
    { city: 'Scottsdale', type: 'Pet-friendly rentals', category: 'Unique stays', popular: true },
    { city: 'Tucson', type: 'House rentals', category: 'Mountains', popular: false },
    { city: 'Jasper', type: 'Cabin rentals', category: 'Mountains', popular: true },
    { city: 'Mountain View', type: 'Cabin rentals', category: 'Mountains', popular: false },
    { city: 'Devonport', type: 'Cottage rentals', category: 'Unique stays', popular: false },
    { city: 'Mallacoota', type: 'Beach house rentals', category: 'Beach', popular: false },
    { city: 'Ibiza', type: 'Vacation rentals', category: 'Beach', popular: true },
    { city: 'Anaheim', type: 'House rentals', category: 'Unique stays', popular: false },
    { city: 'Monterey', type: 'Condo rentals', category: 'Unique stays', popular: false },
    { city: 'Paso Robles', type: 'House rentals', category: 'Unique stays', popular: false },
    { city: 'Santa Barbara', type: 'Pet-friendly rentals', category: 'Unique stays', popular: true },
    { city: 'Sonoma', type: 'Pet-friendly rentals', category: 'Unique stays', popular: false },
    // Outdoors
    { city: 'Banff', type: 'Hiking trails', category: 'Outdoors', popular: true },
    { city: 'Moab', type: 'Rock climbing', category: 'Outdoors', popular: true },
    { city: 'Yosemite', type: 'Camping spots', category: 'Outdoors', popular: true },
    { city: 'Sedona', type: 'Jeep tours', category: 'Outdoors', popular: false },
    { city: 'Aspen', type: 'Skiing', category: 'Outdoors', popular: true },
    { city: 'Zion', type: 'Canyoneering', category: 'Outdoors', popular: true },
    { city: 'Glacier National Park', type: 'Wildlife viewing', category: 'Outdoors', popular: true },
    { city: 'Big Sur', type: 'Coastal hikes', category: 'Outdoors', popular: false },
    { city: 'Lake Tahoe', type: 'Snowshoeing', category: 'Outdoors', popular: true },
    { city: 'Joshua Tree', type: 'Stargazing', category: 'Outdoors', popular: true },

    // Mountains
    { city: 'Canmore', type: 'Condo rentals', category: 'Mountains', popular: true },
    { city: 'Whistler', type: 'Chalet stays', category: 'Mountains', popular: true },
    { city: 'Breckenridge', type: 'Ski resorts', category: 'Mountains', popular: true },
    { city: 'Chamonix', type: 'Mountain lodges', category: 'Mountains', popular: true },
    { city: 'Zermatt', type: 'Alpine hotels', category: 'Mountains', popular: true },
    { city: 'Telluride', type: 'Cabin rentals', category: 'Mountains', popular: false },
    { city: 'St. Moritz', type: 'Luxury chalets', category: 'Mountains', popular: true },
    { city: 'Banff', type: 'Mountain cottages', category: 'Mountains', popular: false },
    { city: 'Aspen', type: 'Lodge stays', category: 'Mountains', popular: true },
    { city: 'Mammoth Lakes', type: 'Ski-in/ski-out condos', category: 'Mountains', popular: true },

    // Beach
    { city: 'Malibu', type: 'Beachfront rentals', category: 'Beach', popular: true },
    { city: 'Maui', type: 'Oceanview condos', category: 'Beach', popular: true },
    { city: 'Miami', type: 'Beach houses', category: 'Beach', popular: true },
    { city: 'Santorini', type: 'Cliffside villas', category: 'Beach', popular: true },
    { city: 'Tulum', type: 'Eco-friendly cabanas', category: 'Beach', popular: false },
    { city: 'Bondi Beach', type: 'Surf lodges', category: 'Beach', popular: true },
    { city: 'Phuket', type: 'Luxury resorts', category: 'Beach', popular: false },
    { city: 'Bora Bora', type: 'Overwater bungalows', category: 'Beach', popular: true },
    { city: 'Cabo San Lucas', type: 'Beach resorts', category: 'Beach', popular: true },
    { city: 'Barbados', type: 'Seaside cottages', category: 'Beach', popular: true },

    // Unique Stays
    { city: 'Reykjavik', type: 'Glass igloos', category: 'Unique stays', popular: true },
    { city: 'Cappadocia', type: 'Cave hotels', category: 'Unique stays', popular: false },
    { city: 'Lapland', type: 'Ice hotels', category: 'Unique stays', popular: false },
    { city: 'Marrakech', type: 'Riads', category: 'Unique stays', popular: false },
    { city: 'Queenstown', type: 'Treehouse lodges', category: 'Unique stays', popular: false },
    { city: 'Petra', type: 'Desert camps', category: 'Unique stays', popular: false },
    { city: 'Santorini', type: 'Windmill houses', category: 'Unique stays', popular: true },
    { city: 'Kyoto', type: 'Traditional ryokans', category: 'Unique stays', popular: true },
    { city: 'Salar de Uyuni', type: 'Salt hotels', category: 'Unique stays', popular: true },
    { city: 'Yellowstone', type: 'Ranch stays', category: 'Unique stays', popular: true }
];

export default Locations;
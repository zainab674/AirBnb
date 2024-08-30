import IconMap from "./cardIcons";

const Cards = [
    {
        id: 1,
        image: "https://media.istockphoto.com/id/1408146514/photo/minimalistic-modern-private-house-exterior-in-pink-with-flamingos.jpg?s=612x612&w=0&k=20&c=eBUQw8rdxo5bvxnl6EUcQWkJ0WwqTv6UNTcqrOI74Dg=",
        live: true,
        title: "Sleepover at Polly Pocket’s Compact",
        type: 'Icons',
        host: {
            id: 1,
            image: "https://www.w3schools.com/w3images/nature.jpg",
            name: "Polly",
            keyword: "adventurous",
            city: "San Francisco",
            country: "USA",
            totalYears: 10,
            identity: 112223344,
            number: 1112222,
            description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride..",
            places: [1, 2, 3]
        },
        hostId: 1,
        city: "San Francisco",
        country: "USA",
        past: true,
        price: "89",
        guestrooms: 1,
        beds: 2,
        bedrooms: 1,
        baths: 1,
        closingDate: "2024-09-30",
        activities: [
            { icon: IconMap.FaRegStar, name: "Picnic in the Garden", description: "Enjoy a relaxing picnic in the beautifully manicured garden." },
            { icon: IconMap.PiCoatHangerThin, name: "Movie Night", description: "Watch your favorite movies in a cozy setting." },
            { icon: IconMap.BsJournalAlbum, name: "DIY Crafts", description: "Get creative with various craft projects." },
            { icon: IconMap.CiForkAndKnife, name: "Board Games", description: "Play a selection of board games with your friends." },

        ],
        shortDescription: "Experience a fun-filled sleepover at a charming compact, perfect for a cozy getaway.",
        whatYoullDo: "90s kids rule at sleepovers. But you already knew that. So I wanted this sleepover to feel like you're still actually in the '90s! Just picture it-crafting, throwback snacks, Polaroid cameras... it's going to be AMAZING. Basically, I turned my Slumber Party Fun compact into a time machine where your imagination can run wild. Because there's no greater adventure than the one you create for yourself",
        location: { latitude: 37.7749, longitude: -122.4194 },
        images: [
            "https://media.istockphoto.com/id/1408146514/photo/minimalistic-modern-private-house-exterior-in-pink-with-flamingos.jpg?s=612x612&w=0&k=20&c=eBUQw8rdxo5bvxnl6EUcQWkJ0WwqTv6UNTcqrOI74Dg=",
            "https://cdn.openart.ai/published/9ohAD2ktCjGkZWAOLxle/le4zwnzr_BIsd_1024.webp",
            " https://images.squarespace-cdn.com/content/v1/603879fa0773aa458e567927/1706711476458-AIWCVV1X6VUZX9KJX26Z/Cover+Image.JPG",
            " https://assets.teenvogue.com/photos/58e3b07d9093dd2fbd6babca/16:9/w_2560%2Cc_limit/47a2da2a-0193-4e88-b99d-1bca2d7c6235.jpg",
            " https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/at%2Fhouse%20tours%2F2022-07%2FAdora%2F09_Apartment_Therapy_House_of_Adora",


        ],
        amenities: [
            { icon: IconMap.PiMountains, name: "Mountain view" },
            { icon: IconMap.GiGardeningShears, name: "Garden view" },
            { icon: IconMap.CiWifiOn, name: "Wifi" },
            { icon: IconMap.BsPersonWorkspace, name: "Dedicated workspace" },

            { icon: IconMap.PiHairDryerBold, name: "Hair dryer " },
            { icon: IconMap.MdCleaningServices, name: "Cleaning products" },
            { icon: IconMap.LiaWineBottleSolid, name: "Shampoo" },
            { icon: IconMap.LiaPrescriptionBottleSolid, name: "Conditioner " },

            { icon: IconMap.FaSoap, name: "Body soap" },
            { icon: IconMap.BiDetail, name: "Bidet " },

            { icon: IconMap.CgSmartHomeRefrigerator, name: "Refrigerator" },

            { icon: IconMap.MdMicrowave, name: "Microwave" },
            { icon: IconMap.GiCampCookingPot, name: "Cooking basics" },
            { icon: IconMap.BiDish, name: "Dishes and silverware" },
            { icon: IconMap.GiGasStove, name: "Gas stove" },
            { icon: IconMap.GiWaterFlask, name: "Hot water kettle" },
            { icon: IconMap.GiToaster, name: "Toaster" },
            { icon: IconMap.FaBowlRice, name: "Rice maker" },
            { icon: IconMap.MdBrunchDining, name: "Dining table" },
            { icon: IconMap.GiCryptEntrance, name: "Private entrance" },
            { icon: IconMap.MdOutlineBalcony, name: "Private patio or balcony" },
            { icon: IconMap.GiUndergroundCave, name: "backyard" },
            { icon: IconMap.TbBeach, name: "Outdoor" },
            { icon: IconMap.BsJournalAlbum, name: "Outdoor dining area" },
            { icon: IconMap.FaParking, name: "parking" },


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                star: 5,
                comment: "Excellent service and wonderful experience!"
            },
            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                star: 4,
                comment: "Great place, but a bit pricey."
            },
            {
                name: "Carlos García",
                city: "Madrid",
                country: "Spain",
                date: "2024-08-27",
                star: 3,
                comment: "Average experience, not as good as expected."
            },
            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic! Will definitely come back."
            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                star: 2,
                comment: "Disappointing. Service could be improved."
            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                star: 4,
                comment: "Good atmosphere and friendly staff."
            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                star: 5,
                comment: "Amazing food and great service!"
            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                star: 3,
                comment: "Decent place but the food was a bit bland."
            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                star: 4,
                comment: "Lovely spot with a vibrant atmosphere."
            },
            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                star: 5,
                comment: "Outstanding experience, highly recommended!"
            },
            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                star: 4,
                comment: "Great place to visit, will return soon."
            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                star: 3,
                comment: "Nice ambiance, but the service was slow."
            },
            {
                name: "Michael Nguyen",
                city: "Ho Chi Minh City",
                country: "Vietnam",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic food and very welcoming staff!"
            },
            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                star: 2,
                comment: "Not impressed with the food quality."
            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                star: 4,
                comment: "Great ambiance and lovely menu options."
            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                star: 5,
                comment: "Wonderful experience and delicious food!"
            }
        ]

    },
    {
        id: 2,
        image: " https://images.squarespace-cdn.com/content/v1/603879fa0773aa458e567927/1706711476458-AIWCVV1X6VUZX9KJX26Z/Cover+Image.JPG",
        live: true,
        title: "Playdate at Polly Pocket’s Compact",
        type: 'Icons',
        host: {
            id: 1,
            image: "https://www.w3schools.com/w3images/nature.jpg",
            name: "Polly",
            keyword: "adventurous",
            city: "San Francisco",
            country: "USA",
            totalYears: 10,
            identity: 112223344,
            number: 1112222,
            description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride..",
            places: [1, 2, 3]
        },
        hostId: 1,
        price: 35,
        city: "Los Angeles",
        country: "USA",
        guestrooms: 1,
        beds: 1,
        bedrooms: 1,
        baths: 1,
        closingDate: "2024-10-15",
        activities: [
            { icon: IconMap.IoBedOutline, name: "City Tour", description: "Explore the vibrant city of Los Angeles with a guided tour." },
            { icon: IconMap.BsJournalAlbum, name: "Food Truck Festival", description: "Taste a variety of dishes from local food trucks." },
            { icon: IconMap.CiHeart, name: "Art Gallery Visit", description: "Visit local art galleries and appreciate contemporary art." },
            { icon: IconMap.CiLock, name: "Live Music", description: "Experience live music performances at a nearby venue." },
        ],
        shortDescription: "Join Polly Pocket for a fun playdate in the heart of Los Angeles.",
        whatYoullDo: "90s kids rule at sleepovers. But you already knew that. So I wanted this sleepover to feel like you're still actually in the '90s! Just picture it-crafting, throwback snacks, Polaroid cameras... it's going to be AMAZING. Basically, I turned my Slumber Party Fun compact into a time machine where your imagination can run wild. Because there's no greater adventure than the one you create for yourself",
        location: { latitude: 34.0522, longitude: -118.2437 },
        images: [
            " https://images.squarespace-cdn.com/content/v1/603879fa0773aa458e567927/1706711476458-AIWCVV1X6VUZX9KJX26Z/Cover+Image.JPG",
            " https://a0.muscache.com/im/pictures/a60344f3-dce5-4245-9212-0d0906bc5f75.jpg?im_w=720 ",
            " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNG3J14Qn9xh7qWV46gGzdddbtihXylcEK-_dccWrgLjJMDDx_R8JowYjz_auUQ_fPg0c&usqp=CAU ",
            " https://a0.muscache.com/im/pictures/miso/Hosting-702779958820689666/original/7ca27611-8135-415b-8b0f-2a67534212db.jpeg?im_w=720 ",
            " https://a0.muscache.com/im/pictures/miso/Hosting-702779958820689666/original/57413f12-9b14-44cd-a369-568bb3f3603e.jpeg ",

        ],
        amenities: [

            { icon: IconMap.FaRegStar, name: "Hot water" },
            { icon: IconMap.GiLiquidSoap, name: "Shower gel" },

            { icon: IconMap.BiSolidWasher, name: "Washer " },
            { icon: IconMap.FaRegStar, name: "Essentials " },
            { icon: IconMap.TbHanger, name: "Hangers" },
            { icon: IconMap.GiPillow, name: "Extra pillows and blankets " },

            { icon: IconMap.TbIroning1, name: "Iron " },
            { icon: IconMap.BiCloset, name: "closet " },
            { icon: IconMap.FaTv, name: "HDTV" },
            { icon: IconMap.FaHotTub, name: "Ceiling fan" },
            { icon: IconMap.FaFan, name: "Portable fans" },
            { icon: IconMap.TbTheater, name: "Portable heater" },
            { icon: IconMap.CgSmartHomeRefrigerator, name: "Refrigerator" },

            { icon: IconMap.MdMicrowave, name: "Microwave" },
            { icon: IconMap.GiCampCookingPot, name: "Cooking basics" },
            { icon: IconMap.BiDish, name: "Dishes and silverware" },
            { icon: IconMap.GiGasStove, name: "Gas stove" },
            { icon: IconMap.GiWaterFlask, name: "Hot water kettle" },
            { icon: IconMap.GiToaster, name: "Toaster" },
            { icon: IconMap.FaBowlRice, name: "Rice maker" },
            { icon: IconMap.MdBrunchDining, name: "Dining table" },
            { icon: IconMap.GiCryptEntrance, name: "Private entrance" },
            { icon: IconMap.MdOutlineBalcony, name: "Private patio or balcony" },
            { icon: IconMap.GiUndergroundCave, name: "backyard" },
            { icon: IconMap.TbBeach, name: "Outdoor" },
            { icon: IconMap.BsJournalAlbum, name: "Outdoor dining area" },
            { icon: IconMap.FaParking, name: "parking" },


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                star: 5,
                comment: "Excellent service and wonderful experience!"
            },
            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                star: 4,
                comment: "Great place, but a bit pricey."
            },
            {
                name: "Carlos García",
                city: "Madrid",
                country: "Spain",
                date: "2024-08-27",
                star: 3,
                comment: "Average experience, not as good as expected."
            },
            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic! Will definitely come back."
            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                star: 2,
                comment: "Disappointing. Service could be improved."
            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                star: 4,
                comment: "Good atmosphere and friendly staff."
            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                star: 5,
                comment: "Amazing food and great service!"
            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                star: 3,
                comment: "Decent place but the food was a bit bland."
            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                star: 4,
                comment: "Lovely spot with a vibrant atmosphere."
            },
            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                star: 5,
                comment: "Outstanding experience, highly recommended!"
            },
            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                star: 4,
                comment: "Great place to visit, will return soon."
            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                star: 3,
                comment: "Nice ambiance, but the service was slow."
            },
            {
                name: "Michael Nguyen",
                city: "Ho Chi Minh City",
                country: "Vietnam",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic food and very welcoming staff!"
            },
            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                star: 2,
                comment: "Not impressed with the food quality."
            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                star: 4,
                comment: "Great ambiance and lovely menu options."
            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                star: 5,
                comment: "Wonderful experience and delicious food!"
            }
        ]
    },
    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaRxekCYAF-YZ4lH-nhwNWr1K_C3gsEODSw&s ",
        live: true,
        title: "Go VIP with Kevin Hart",
        type: 'Icons',
        host: {
            id: 1,
            image: "https://www.w3schools.com/w3images/nature.jpg",
            name: "Polly",
            keyword: "adventurous",
            city: "San Francisco",
            country: "USA",
            totalYears: 10,
            identity: 112223344,
            number: 1112222,
            description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride..",
            places: [1, 2, 3]
        },
        hostId: 1,
        price: 76,
        city: "New York",
        country: "USA",
        guestrooms: 2,
        beds: 3,
        bedrooms: 2,
        baths: 2,
        closingDate: "2024-08-30",
        activities: [
            { icon: IconMap.FaRegStar, name: "Comedy Show", description: "Enjoy a live comedy performance by Kevin Hart." },
            { icon: IconMap.FaShower, name: "Q&A Session", description: "Participate in a Q&A session with the comedian." },
            { icon: IconMap.MdOutlineBathtub, name: "Backstage Tour", description: "Get an exclusive backstage tour of the event venue." },
            { icon: IconMap.BsStars, name: "Meet & Greet", description: "Meet Kevin Hart and get an autograph." },
            { icon: IconMap.TbBeach, name: "Dinner with Kevin", description: "Have dinner with Kevin Hart and other VIP guests." },
        ],
        shortDescription: "Experience a VIP event with Kevin Hart, including comedy shows and exclusive access.",
        whatYoullDo: "Attend a comedy show, enjoy backstage access, and meet Kevin Hart in person.",
        location: { latitude: 40.7128, longitude: -74.0060 },
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaRxekCYAF-YZ4lH-nhwNWr1K_C3gsEODSw&s ",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlQojs_d9W0KUoALTsNGB4z2QvrKk670Bgiw&s ",
            "https://www.hospitalitycentre.co.uk/wp-content/uploads/2022/12/Kevin-Hart-VIP-Packages.jpg",
            " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgNYZFuS2J7E2qLyB5kGVdhdvwSev80N8R9g&s  ",
            "  https://www.wikihow.com/images/thumb/3/34/Meet-Kevin-Hart-Step-1.jpeg/v4-460px-Meet-Kevin-Hart-Step-1.jpeg ",

        ],
        amenities: [
            { icon: IconMap.MdMicrowave, name: "Microwave" },
            { icon: IconMap.GiCampCookingPot, name: "Cooking basics" },
            { icon: IconMap.BiDish, name: "Dishes and silverware" },
            { icon: IconMap.GiGasStove, name: "Gas stove" },
            { icon: IconMap.GiWaterFlask, name: "Hot water kettle" },
            { icon: IconMap.GiToaster, name: "Toaster" },
            { icon: IconMap.FaBowlRice, name: "Rice maker" },
            { icon: IconMap.MdBrunchDining, name: "Dining table" },
            { icon: IconMap.GiCryptEntrance, name: "Private entrance" },
            { icon: IconMap.MdOutlineBalcony, name: "Private patio or balcony" },

            { icon: IconMap.TbHanger, name: "Hangers" },
            { icon: IconMap.GiPillow, name: "Extra pillows and blankets " },

            { icon: IconMap.TbIroning1, name: "Iron " },
            { icon: IconMap.BiCloset, name: "closet " },
            { icon: IconMap.FaTv, name: "HDTV" },
            { icon: IconMap.FaHotTub, name: "Ceiling fan" },
            { icon: IconMap.FaFan, name: "Portable fans" },
            { icon: IconMap.TbTheater, name: "Portable heater" },
            { icon: IconMap.CgSmartHomeRefrigerator, name: "Refrigerator" },


            { icon: IconMap.GiUndergroundCave, name: "backyard" },
            { icon: IconMap.TbBeach, name: "Outdoor" },
            { icon: IconMap.BsJournalAlbum, name: "Outdoor dining area" },
            { icon: IconMap.FaParking, name: "parking" },


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                star: 5,
                comment: "Excellent service and wonderful experience!"
            },
            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                star: 4,
                comment: "Great place, but a bit pricey."
            },
            {
                name: "Carlos García",
                city: "Madrid",
                country: "Spain",
                date: "2024-08-27",
                star: 3,
                comment: "Average experience, not as good as expected."
            },
            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic! Will definitely come back."
            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                star: 2,
                comment: "Disappointing. Service could be improved."
            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                star: 4,
                comment: "Good atmosphere and friendly staff."
            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                star: 5,
                comment: "Amazing food and great service!"
            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                star: 3,
                comment: "Decent place but the food was a bit bland."
            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                star: 4,
                comment: "Lovely spot with a vibrant atmosphere."
            },
            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                star: 5,
                comment: "Outstanding experience, highly recommended!"
            },
            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                star: 4,
                comment: "Great place to visit, will return soon."
            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                star: 3,
                comment: "Nice ambiance, but the service was slow."
            },
            {
                name: "Michael Nguyen",
                city: "Ho Chi Minh City",
                country: "Vietnam",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic food and very welcoming staff!"
            },
            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                star: 2,
                comment: "Not impressed with the food quality."
            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                star: 4,
                comment: "Great ambiance and lovely menu options."
            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                star: 5,
                comment: "Wonderful experience and delicious food!"
            }
        ]

    },
    {
        id: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXi9ETx17lNuaapQZ7G16WNl3chpLWpq5Q-w&s",
        live: false,
        title: "Join a living room session with Doja",
        type: 'Icons',
        past: true,
        host: {
            id: 2,
            image: "https://www.w3schools.com/w3images/fjords.jpg",
            name: "John",
            keyword: "relaxing",
            city: "Reykjavik",
            country: "Iceland",
            totalYears: 5,
            identity: 223344556,
            number: 2223333,
            description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride..",
            places: [4, 5]
        },
        hostId: 2,
        city: "Austin",
        country: "USA",
        isComingSoon: true,
        coming: "October",
        guestrooms: 1,
        beds: 1,
        bedrooms: 1,
        baths: 1,
        closingDate: "2024-12-01",
        activities: [
            { icon: IconMap.PiCoatHangerThin, name: "Live Music Session", description: "Join Doja Cat for an exclusive live music session." },
            { icon: IconMap.BsJournalAlbum, name: "Interactive Q&A", description: "Engage in an interactive Q&A with the artist." },
            { icon: IconMap.CiForkAndKnife, name: "Behind-the-Scenes", description: "Get a behind-the-scenes look at Doja's creative process." },
            { icon: IconMap.IoHomeOutline, name: "Exclusive Merch", description: "Access exclusive merchandise only available to attendees." },
            { icon: IconMap.FaShower, name: "Virtual Meet & Greet", description: "Participate in a virtual meet & greet with Doja Cat." },
        ],
        shortDescription: "Be part of an exclusive living room session with Doja Cat, featuring live music and more.",
        whatYoullDo: "Experience a live session, Q&A, and exclusive content with Doja Cat.",
        location: { latitude: 30.2672, longitude: -97.7431 },
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXi9ETx17lNuaapQZ7G16WNl3chpLWpq5Q-w&s",
            "https://about.fb.com/wp-content/uploads/2024/01/Doja-Cat-VR_Header.jpg?fit=1920%2C1080",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn5ZDmlrONEVqwxW53oxyiiIENPLIJ9wE6fg&s",
            "https://i2-prod.walesonline.co.uk/incoming/article29094218.ece/ALTERNATES/s615/0_GettyImages-2149616614.jpg",
            "https://static.wixstatic.com/media/c3a587_1faf1a24c0a242b385549cecc8e97ef7~mv2.jpg/v1/fill/w_1480,h_832,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c3a587_1faf1a24c0a242b385549cecc8e97ef7~mv2.jpg"
        ],
        amenities: [


            { icon: IconMap.TbIroning1, name: "Iron " },
            { icon: IconMap.BiCloset, name: "closet " },
            { icon: IconMap.FaTv, name: "HDTV" },
            { icon: IconMap.FaHotTub, name: "Ceiling fan" },
            { icon: IconMap.FaFan, name: "Portable fans" },
            { icon: IconMap.TbTheater, name: "Portable heater" },
            { icon: IconMap.CgSmartHomeRefrigerator, name: "Refrigerator" },

            { icon: IconMap.MdMicrowave, name: "Microwave" },
            { icon: IconMap.GiCampCookingPot, name: "Cooking basics" },
            { icon: IconMap.BiDish, name: "Dishes and silverware" },
            { icon: IconMap.GiGasStove, name: "Gas stove" },
            { icon: IconMap.GiWaterFlask, name: "Hot water kettle" },
            { icon: IconMap.GiToaster, name: "Toaster" },
            { icon: IconMap.FaBowlRice, name: "Rice maker" },
            { icon: IconMap.MdBrunchDining, name: "Dining table" },
            { icon: IconMap.GiCryptEntrance, name: "Private entrance" },
            { icon: IconMap.MdOutlineBalcony, name: "Private patio or balcony" },
            { icon: IconMap.GiUndergroundCave, name: "backyard" },
            { icon: IconMap.TbBeach, name: "Outdoor" },
            { icon: IconMap.BsJournalAlbum, name: "Outdoor dining area" },
            { icon: IconMap.FaParking, name: "parking" },


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                star: 5,
                comment: "Excellent service and wonderful experience!"
            },
            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                star: 4,
                comment: "Great place, but a bit pricey."
            },
            {
                name: "Carlos García",
                city: "Madrid",
                country: "Spain",
                date: "2024-08-27",
                star: 3,
                comment: "Average experience, not as good as expected."
            },
            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic! Will definitely come back."
            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                star: 2,
                comment: "Disappointing. Service could be improved."
            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                star: 4,
                comment: "Good atmosphere and friendly staff."
            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                star: 5,
                comment: "Amazing food and great service!"
            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                star: 3,
                comment: "Decent place but the food was a bit bland."
            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                star: 4,
                comment: "Lovely spot with a vibrant atmosphere."
            },
            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                star: 5,
                comment: "Outstanding experience, highly recommended!"
            },
            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                star: 4,
                comment: "Great place to visit, will return soon."
            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                star: 3,
                comment: "Nice ambiance, but the service was slow."
            },
            {
                name: "Michael Nguyen",
                city: "Ho Chi Minh City",
                country: "Vietnam",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic food and very welcoming staff!"
            },
            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                star: 2,
                comment: "Not impressed with the food quality."
            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                star: 4,
                comment: "Great ambiance and lovely menu options."
            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                star: 5,
                comment: "Wonderful experience and delicious food!"
            }
        ]
    },
    {
        id: 5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyL0_MIAL44LqwxoiDy9CMdlgFyhThNoIoRA&s",
        live: false,
        title: "Discover the Secrets of the Mountains",
        type: "Icons",
        host: {
            id: 2,
            image: "https://www.w3schools.com/w3images/fjords.jpg",
            name: "John",
            keyword: "relaxing",
            city: "Reykjavik",
            country: "Iceland",
            totalYears: 5,
            identity: 223344556,
            number: 2223333,
            description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride..",
            places: [4, 5]
        },
        hostId: 2,
        isComingSoon: true,
        coming: "November",
        city: "Denver",
        country: "USA",
        guestrooms: 2,
        beds: 4,
        bedrooms: 2,
        baths: 2,
        closingDate: "2024-11-15",
        activities: [
            { icon: IconMap.MdOutlineBathtub, name: "Mountain Hiking", description: "Explore beautiful mountain trails with an experienced guide." },
            { icon: IconMap.CiTrophy, name: "Wildlife Viewing", description: "Spot local wildlife and learn about their habitats." },
            { icon: IconMap.CiDesktop, name: "Rock Climbing", description: "Try rock climbing with all the necessary equipment provided." },

        ],
        shortDescription: "Join us for a mountain adventure, exploring trails and enjoying nature's beauty.",
        whatYoullDo: "Hike, climb, and experience the natural wonders of the mountains with guided activities.",
        location: { latitude: 39.7392, longitude: -104.9903 },
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyL0_MIAL44LqwxoiDy9CMdlgFyhThNoIoRA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqRds4zqwoMYNP1TXOb18GJLZBK_rkzPNA7jvTWEDBP8wccWjPpdNdJO04kC61v6Qh2Cs&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3iTUu7UeRs0G5N3E089c3AkY1X3T767SWfi4WkKDXXqZrfdrjZb0YRvydIU_ZRHNG9QU&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKYnUnAFiHXhNyvHD4cy022uHjTsGB8dCyzArp0i1agPWQjHGI5aZZ7z3HzRk6BCBbSo&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNWxzCdHRGVQoEy9n09g0gfbrnrIvI5KBugb5hBTky9mE6Cp3XrXec7zpDOK6MNyXCdX8&usqp=CAU"
        ],
        amenities: [
            { icon: IconMap.PiMountains, name: "Mountain view" },
            { icon: IconMap.GiGardeningShears, name: "Garden view" },
            { icon: IconMap.CiWifiOn, name: "Wifi" },
            { icon: IconMap.BsPersonWorkspace, name: "Dedicated workspace" },


            { icon: IconMap.FaHotTub, name: "Ceiling fan" },
            { icon: IconMap.FaFan, name: "Portable fans" },
            { icon: IconMap.TbTheater, name: "Portable heater" },
            { icon: IconMap.CgSmartHomeRefrigerator, name: "Refrigerator" },

            { icon: IconMap.MdMicrowave, name: "Microwave" },
            { icon: IconMap.GiCampCookingPot, name: "Cooking basics" },
            { icon: IconMap.BiDish, name: "Dishes and silverware" },
            { icon: IconMap.GiGasStove, name: "Gas stove" },
            { icon: IconMap.GiWaterFlask, name: "Hot water kettle" },
            { icon: IconMap.GiToaster, name: "Toaster" },
            { icon: IconMap.FaBowlRice, name: "Rice maker" },
            { icon: IconMap.MdBrunchDining, name: "Dining table" },
            { icon: IconMap.GiCryptEntrance, name: "Private entrance" },
            { icon: IconMap.MdOutlineBalcony, name: "Private patio or balcony" },
            { icon: IconMap.GiUndergroundCave, name: "backyard" },
            { icon: IconMap.TbBeach, name: "Outdoor" },
            { icon: IconMap.BsJournalAlbum, name: "Outdoor dining area" },
            { icon: IconMap.FaParking, name: "parking" },


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                star: 5,
                comment: "Excellent service and wonderful experience!"
            },
            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                star: 4,
                comment: "Great place, but a bit pricey."
            },
            {
                name: "Carlos García",
                city: "Madrid",
                country: "Spain",
                date: "2024-08-27",
                star: 3,
                comment: "Average experience, not as good as expected."
            },
            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic! Will definitely come back."
            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                star: 2,
                comment: "Disappointing. Service could be improved."
            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                star: 4,
                comment: "Good atmosphere and friendly staff."
            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                star: 5,
                comment: "Amazing food and great service!"
            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                star: 3,
                comment: "Decent place but the food was a bit bland."
            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                star: 4,
                comment: "Lovely spot with a vibrant atmosphere."
            },
            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                star: 5,
                comment: "Outstanding experience, highly recommended!"
            },
            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                star: 4,
                comment: "Great place to visit, will return soon."
            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                star: 3,
                comment: "Nice ambiance, but the service was slow."
            },
            {
                name: "Michael Nguyen",
                city: "Ho Chi Minh City",
                country: "Vietnam",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic food and very welcoming staff!"
            },
            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                star: 2,
                comment: "Not impressed with the food quality."
            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                star: 4,
                comment: "Great ambiance and lovely menu options."
            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                star: 5,
                comment: "Wonderful experience and delicious food!"
            }
        ]
    },
    {
        id: 6,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRXq--SA1eysGbJ-BLqYwVwkVOX5rgJa1Eqg&s",
        live: false,
        title: "Virtual Tour of Iconic Bridges",
        type: 'Icons',
        host: {
            id: 3,
            image: "https://www.w3schools.com/w3images/lights.jpg",
            name: "Maria",
            keyword: "cultural",
            city: "Rome",
            country: "Italy",
            totalYears: 8,
            identity: 334455667,
            number: 3334444,
            description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride..",
            places: [6, 7, 8]
        },
        hostId: 3,
        isComingSoon: true,
        coming: "March",
        city: "San Francisco",
        country: "USA",
        guestrooms: 1,
        beds: 1,
        bedrooms: 1,
        baths: 1,
        closingDate: "2024-10-10",
        activities: [
            { icon: IconMap.FaRegStar, name: "Virtual Bridge Walk", description: "Experience iconic bridges through a virtual tour." },
            { icon: IconMap.CiCalendarDate, name: "Interactive Q&A", description: "Engage with experts about bridge engineering." },
            { icon: IconMap.BsStars, name: "Historical Insights", description: "Learn about the history and significance of famous bridges." },

        ],
        shortDescription: "Join a virtual tour exploring the world’s most iconic bridges from the comfort of your home.",
        whatYoullDo: "Experience a guided virtual tour, engage in interactive sessions, and learn about bridge design.",
        location: { latitude: 37.7749, longitude: -122.4194 },
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRXq--SA1eysGbJ-BLqYwVwkVOX5rgJa1Eqg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgn7xjnXhznFPgwBdevelmUphzSJujpXh3Xg&s",
            "https://cdn.londonandpartners.com/visit/london-organisations/thames-bridges-various/86837-640x360-millennium-bridge-640.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Cqn74VRuvD0LHXU0VYqAc2Wt9C4SI3lK1g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp0gyvLWjqzdaFUt7SKdabdTECBc2jhwrG3FUlLAiWmTdMWQVW_LeyWSt8vorU8IqAZmk&usqp=CAU"
        ],
        amenities: [
            { icon: IconMap.FaBowlRice, name: "Rice maker" },
            { icon: IconMap.MdBrunchDining, name: "Dining table" },
            { icon: IconMap.GiCryptEntrance, name: "Private entrance" },
            { icon: IconMap.MdOutlineBalcony, name: "Private patio or balcony" },
            { icon: IconMap.GiUndergroundCave, name: "backyard" },
            { icon: IconMap.TbBeach, name: "Outdoor" },
            { icon: IconMap.BsJournalAlbum, name: "Outdoor dining area" },
            { icon: IconMap.FaParking, name: "parking" },
            { icon: IconMap.PiMountains, name: "Mountain view" },
            { icon: IconMap.GiGardeningShears, name: "Garden view" },
            { icon: IconMap.CiWifiOn, name: "Wifi" },
            { icon: IconMap.BsPersonWorkspace, name: "Dedicated workspace" },

            { icon: IconMap.PiHairDryerBold, name: "Hair dryer " },
            { icon: IconMap.MdCleaningServices, name: "Cleaning products" },
            { icon: IconMap.LiaWineBottleSolid, name: "Shampoo" },
            { icon: IconMap.LiaPrescriptionBottleSolid, name: "Conditioner " },

            { icon: IconMap.FaSoap, name: "Body soap" },
            { icon: IconMap.BiDetail, name: "Bidet " },
            { icon: IconMap.FaRegStar, name: "Hot water" },
            { icon: IconMap.GiLiquidSoap, name: "Shower gel" },



            { icon: IconMap.MdMicrowave, name: "Microwave" },
            { icon: IconMap.GiCampCookingPot, name: "Cooking basics" },
            { icon: IconMap.BiDish, name: "Dishes and silverware" },
            { icon: IconMap.GiGasStove, name: "Gas stove" },
            { icon: IconMap.GiWaterFlask, name: "Hot water kettle" },
            { icon: IconMap.GiToaster, name: "Toaster" },



        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                star: 5,
                comment: "Excellent service and wonderful experience!"
            },
            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                star: 4,
                comment: "Great place, but a bit pricey."
            },
            {
                name: "Carlos García",
                city: "Madrid",
                country: "Spain",
                date: "2024-08-27",
                star: 3,
                comment: "Average experience, not as good as expected."
            },
            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic! Will definitely come back."
            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                star: 2,
                comment: "Disappointing. Service could be improved."
            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                star: 4,
                comment: "Good atmosphere and friendly staff."
            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                star: 5,
                comment: "Amazing food and great service!"
            },



        ]
    },
    {
        id: 7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPh-MxeH03sJlHcy5RID7VmvE2-g9DafFiw&s",
        live: true,
        title: "Stay in a Cozy Cabin",
        type: 'Apartment',
        past: true,
        host: {
            id: 3,
            image: "https://www.w3schools.com/w3images/lights.jpg",
            name: "Maria",
            keyword: "cultural",
            city: "Rome",
            country: "Italy",
            totalYears: 8,
            identity: 334455667,
            number: 3334444,
            description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride..",
            places: [6, 7, 8]
        },
        hostId: 3,
        price: 120,
        city: "Aspen",
        country: "USA",
        guestrooms: 2,
        beds: 3,
        bedrooms: 2,
        baths: 2,
        closingDate: "2024-12-01",
        activities: [
            { icon: IconMap.TbBeach, name: "Mountain Hiking", description: "Explore nearby hiking trails and enjoy the natural beauty." },
            { icon: IconMap.CiHeart, name: "Campfire Evenings", description: "Gather around a campfire for storytelling and roasting marshmallows." },

        ],
        shortDescription: "Escape to a cozy cabin in the mountains, perfect for a relaxing retreat with various outdoor activities.",
        whatYoullDo: "Stay in a comfortable cabin, enjoy outdoor activities, and relax in a serene mountain setting.",
        location: { latitude: 39.1910, longitude: -106.8175 },
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPh-MxeH03sJlHcy5RID7VmvE2-g9DafFiw&s",
            "https://thecottagejournal.com/wp-content/uploads/2022/02/TheCottageJournal_AHeavenlyHideaway.jpg",
            "https://b2-backblaze-stackpath.b-cdn.net/1421859/fgpsxi_a527a76d2fc98693c504fa5544292df1503b3a85.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5kjuREqdalrlag-uAspZAUXVfs13mbGjuflmQT51A3lVOCrco5bqPApKnHe5b-PJZPqA&usqp=CAU",
            "https://i.pinimg.com/736x/fa/30/e0/fa30e0d8993bffa5291e556a9ef39479.jpg"
        ],
        amenities: [

            { icon: IconMap.PiHairDryerBold, name: "Hair dryer " },
            { icon: IconMap.MdCleaningServices, name: "Cleaning products" },
            { icon: IconMap.LiaWineBottleSolid, name: "Shampoo" },
            { icon: IconMap.LiaPrescriptionBottleSolid, name: "Conditioner " },

            { icon: IconMap.FaSoap, name: "Body soap" },
            { icon: IconMap.BiDetail, name: "Bidet " },
            { icon: IconMap.FaRegStar, name: "Hot water" },
            { icon: IconMap.GiLiquidSoap, name: "Shower gel" },

            { icon: IconMap.BiSolidWasher, name: "Washer " },
            { icon: IconMap.FaRegStar, name: "Essentials " },
            { icon: IconMap.TbHanger, name: "Hangers" },
            { icon: IconMap.GiPillow, name: "Extra pillows and blankets " },


            { icon: IconMap.MdBrunchDining, name: "Dining table" },
            { icon: IconMap.GiCryptEntrance, name: "Private entrance" },
            { icon: IconMap.MdOutlineBalcony, name: "Private patio or balcony" },
            { icon: IconMap.GiUndergroundCave, name: "backyard" },
            { icon: IconMap.TbBeach, name: "Outdoor" },
            { icon: IconMap.BsJournalAlbum, name: "Outdoor dining area" },
            { icon: IconMap.FaParking, name: "parking" },


        ],
        reviews: [

            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                star: 4,
                comment: "Great place, but a bit pricey."
            },

            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                star: 5,
                comment: "Amazing food and great service!"
            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                star: 3,
                comment: "Decent place but the food was a bit bland."
            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                star: 4,
                comment: "Lovely spot with a vibrant atmosphere."
            },

            {
                name: "Michael Nguyen",
                city: "Ho Chi Minh City",
                country: "Vietnam",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic food and very welcoming staff!"
            },
            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                star: 2,
                comment: "Not impressed with the food quality."
            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                star: 4,
                comment: "Great ambiance and lovely menu options."
            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                star: 5,
                comment: "Wonderful experience and delicious food!"
            }
        ]
    },
    {
        id: 8,
        image: "https://idologyasheville.com/img/Things-You-Never-Knew-About-Your-Lakehouse-Home-Floors_IDology-Asheville.jpg",
        live: false,
        title: "Relax by the Lake",
        type: 'Apartment',
        host: {
            id: 3,
            image: "https://www.w3schools.com/w3images/lights.jpg",
            name: "Maria",
            keyword: "cultural",
            city: "Rome",
            country: "Italy",
            totalYears: 8,
            identity: 334455667,
            number: 3334444,
            description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride..",
            places: [6, 7, 8]
        },
        hostId: 3,
        isComingSoon: true,
        coming: "October",
        city: "Lake Tahoe",
        country: "USA",
        guestrooms: 2,
        beds: 2,
        bedrooms: 1,
        baths: 1,
        closingDate: "2024-11-20",
        activities: [
            { icon: IconMap.PiMountains, name: "Lake Kayaking", description: "Enjoy a peaceful kayak ride on the lake." },
            { icon: IconMap.GiFullMotorcycleHelmet, name: "Nature Walk", description: "Take a scenic walk around the lake and surrounding forest." },
            { icon: IconMap.IoBookOutline, name: "Fishing", description: "Relax by the lake and try fishing for local species." },
            { icon: IconMap.MdOutlineFireplace, name: "Picnic", description: "Have a delightful picnic by the lakeside." },
            { icon: IconMap.FaRegStar, name: "Wildlife Watching", description: "Observe wildlife in their natural environment." },
        ],
        shortDescription: "Relax and unwind by the beautiful lake with activities such as kayaking, fishing, and nature walks.",
        whatYoullDo: "Enjoy serene lake activities, explore nature, and relax in a tranquil environment.",
        location: { latitude: 38.9396, longitude: -120.0554 },
        images: [
            "https://idologyasheville.com/img/Things-You-Never-Knew-About-Your-Lakehouse-Home-Floors_IDology-Asheville.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nzq4_H1fV9PF90PJsAptgH2HyrGvSGXbD3XrAjFJfLOxm1iJ4LaCG2osIeNwCPLV4rg&usqp=CAU",
            "https://www.southernliving.com/thmb/LTYlM1ZjkhlSYWUxq6MY5Z_M04c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/27372_LBurton_101822_05-4648d290e31e4097823387ecebc4f280.jpg",
            "https://i.pinimg.com/736x/fc/86/06/fc860681d8fda59c438b9231716f46fd.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QrsVJDk2C-UkvJdKMFuFrjpCeXho55PfIT4WV26afmwVf5gGiqyB5fWxJeLdgsDYZVg&usqp=CAU"


        ],
        amenities: [
            { icon: IconMap.PiMountains, name: "Mountain view" },
            { icon: IconMap.GiGardeningShears, name: "Garden view" },
            { icon: IconMap.CiWifiOn, name: "Wifi" },
            { icon: IconMap.BsPersonWorkspace, name: "Dedicated workspace" },



            { icon: IconMap.TbIroning1, name: "Iron " },
            { icon: IconMap.BiCloset, name: "closet " },
            { icon: IconMap.FaTv, name: "HDTV" },
            { icon: IconMap.FaHotTub, name: "Ceiling fan" },
            { icon: IconMap.FaFan, name: "Portable fans" },
            { icon: IconMap.TbTheater, name: "Portable heater" },
            { icon: IconMap.CgSmartHomeRefrigerator, name: "Refrigerator" },

            { icon: IconMap.MdMicrowave, name: "Microwave" },
            { icon: IconMap.GiCampCookingPot, name: "Cooking basics" },
            { icon: IconMap.BiDish, name: "Dishes and silverware" },
            { icon: IconMap.GiGasStove, name: "Gas stove" },
            { icon: IconMap.GiWaterFlask, name: "Hot water kettle" },
            { icon: IconMap.GiToaster, name: "Toaster" },
            { icon: IconMap.FaBowlRice, name: "Rice maker" },
            { icon: IconMap.MdBrunchDining, name: "Dining table" },
            { icon: IconMap.GiCryptEntrance, name: "Private entrance" },
            { icon: IconMap.MdOutlineBalcony, name: "Private patio or balcony" },
            { icon: IconMap.GiUndergroundCave, name: "backyard" },
            { icon: IconMap.TbBeach, name: "Outdoor" },
            { icon: IconMap.BsJournalAlbum, name: "Outdoor dining area" },
            { icon: IconMap.FaParking, name: "parking" },


        ],
        reviews: [

            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                star: 2,
                comment: "Disappointing. Service could be improved."
            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                star: 4,
                comment: "Good atmosphere and friendly staff."
            },

            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                star: 5,
                comment: "Outstanding experience, highly recommended!"
            },
            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                star: 4,
                comment: "Great place to visit, will return soon."
            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                star: 3,
                comment: "Nice ambiance, but the service was slow."
            },
            {
                name: "Michael Nguyen",
                city: "Ho Chi Minh City",
                country: "Vietnam",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic food and very welcoming staff!"
            },
            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                star: 2,
                comment: "Not impressed with the food quality."
            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                star: 4,
                comment: "Great ambiance and lovely menu options."
            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                star: 5,
                comment: "Wonderful experience and delicious food!"
            }
        ]
    },
    {
        id: 9,
        image: "https://singaporemotherhood.com/wp-content/uploads/2018/02/Forest-Adventure-Featured.jpg",
        live: true,
        title: "Forest Adventure",
        type: 'Barn',
        past: true,
        host: {
            id: 4,
            image: "https://www.w3schools.com/w3images/mountains.jpg",
            name: "Akira",
            keyword: "adventurous",
            city: "Kyoto",
            country: "Japan",
            totalYears: 6,
            identity: 445566778,
            number: 4445555,
            description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride..",
            places: [9, 10]
        },
        hostId: 4,
        soldOut: true,
        city: "Seattle",
        country: "USA",
        guestrooms: 3,
        beds: 6,
        bedrooms: 3,
        baths: 2,
        closingDate: "2024-09-15",
        activities: [
            { icon: IconMap.CiLock, name: "Forest Hike", description: "Embark on a guided hike through lush forest trails." },
            { icon: IconMap.BiMoviePlay, name: "Bird Watching", description: "Spot various bird species and learn about their habitats." },
            { icon: IconMap.IoBedOutline, name: "Campfire Stories", description: "Gather around a campfire for storytelling and s'mores." },
            { icon: IconMap.BsJournalAlbum, name: "Photography Walk", description: "Capture the beauty of the forest with expert photography tips." },
            { icon: IconMap.FaRegStar, name: "Wildlife Tracking", description: "Learn about local wildlife and their tracks during a guided walk." },
        ],
        shortDescription: "Immerse yourself in a forest adventure with guided hikes, wildlife tracking, and more.",
        whatYoullDo: "Experience the forest through various activities including hiking, bird watching, and photography.",
        location: { latitude: 47.6062, longitude: -122.3321 },
        images: [
            "https://singaporemotherhood.com/wp-content/uploads/2018/02/Forest-Adventure-Featured.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkrIo7xJJtsOTHak_CMSc96li-k4dlnzibGJa9p9oAuAm0Dsj5YFMi6Ru9dV5VnJs-t8&usqp=CAU",
            "https://www.yokohamajapan.com/img_data/tm_409.jpg",
            "https://article-image.travel.navitime.jp/img/NTJhowto0079-en/ziplining_3.jpg",
            "https://www.visitchiba.jp/wp-content/uploads/2022/09/1-1-scaled.jpg"
        ],
        amenities: [


            { icon: IconMap.TbIroning1, name: "Iron " },
            { icon: IconMap.BiCloset, name: "closet " },
            { icon: IconMap.FaTv, name: "HDTV" },
            { icon: IconMap.FaHotTub, name: "Ceiling fan" },
            { icon: IconMap.FaFan, name: "Portable fans" },
            { icon: IconMap.TbTheater, name: "Portable heater" },
            { icon: IconMap.CgSmartHomeRefrigerator, name: "Refrigerator" },

            { icon: IconMap.MdMicrowave, name: "Microwave" },
            { icon: IconMap.GiCampCookingPot, name: "Cooking basics" },
            { icon: IconMap.BiDish, name: "Dishes and silverware" },
            { icon: IconMap.GiGasStove, name: "Gas stove" },
            { icon: IconMap.GiWaterFlask, name: "Hot water kettle" },
            { icon: IconMap.GiToaster, name: "Toaster" },
            { icon: IconMap.FaBowlRice, name: "Rice maker" },
            { icon: IconMap.MdBrunchDining, name: "Dining table" },
            { icon: IconMap.GiCryptEntrance, name: "Private entrance" },
            { icon: IconMap.MdOutlineBalcony, name: "Private patio or balcony" },
            { icon: IconMap.GiUndergroundCave, name: "backyard" },
            { icon: IconMap.TbBeach, name: "Outdoor" },
            { icon: IconMap.BsJournalAlbum, name: "Outdoor dining area" },
            { icon: IconMap.FaParking, name: "parking" },


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                star: 5,
                comment: "Excellent service and wonderful experience!"
            },
            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                star: 4,
                comment: "Great place, but a bit pricey."
            },
            {
                name: "Carlos García",
                city: "Madrid",
                country: "Spain",
                date: "2024-08-27",
                star: 3,
                comment: "Average experience, not as good as expected."
            },
            {

                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                star: 4,
                comment: "Lovely spot with a vibrant atmosphere."
            },
            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                star: 5,
                comment: "Outstanding experience, highly recommended!"
            },
            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                star: 4,
                comment: "Great place to visit, will return soon."
            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                star: 3,
                comment: "Nice ambiance, but the service was slow."
            },

        ]
    },
    {
        id: 10,
        image: "https://www.trolleytours.com/wp-content/uploads/2016/07/trolley-tours-of-key-west-683x384.jpg",
        live: true,
        title: "Iconic Bridge Tour",
        type: 'Barn',
        host: {
            id: 4,
            image: "https://www.w3schools.com/w3images/mountains.jpg",
            name: "Akira",
            keyword: "adventurous",
            city: "Kyoto",
            country: "Japan",
            totalYears: 6,
            identity: 445566778,
            number: 4445555,
            description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride..",
            places: [9, 10]
        },
        hostId: 4,
        price: 65,
        city: "New York",
        country: "USA",
        guestrooms: 1,
        beds: 1,
        bedrooms: 1,
        baths: 1,
        closingDate: "2024-10-05",
        activities: [
            { icon: IconMap.CiForkAndKnife, name: "Bridge Tour", description: "Take a guided tour of the most iconic bridges in New York." },
            { icon: IconMap.CiTrophy, name: "Historical Insights", description: "Learn about the history and architecture of each bridge." },
            { icon: IconMap.FaShower, name: "Photography Session", description: "Capture stunning views of the bridges with expert guidance." },
            { icon: IconMap.FaRegStar, name: "Engineering Discussion", description: "Engage in discussions about bridge engineering and design." },

        ],
        shortDescription: "Explore the architectural marvels of New York's iconic bridges with a guided tour and expert insights.",
        whatYoullDo: "Experience a comprehensive tour of New York's bridges, including historical insights and photography opportunities.",
        location: { latitude: 40.7128, longitude: -74.0060 },
        images: [
            "https://www.trolleytours.com/wp-content/uploads/2016/07/trolley-tours-of-key-west-683x384.jpg",
            "https://www.itsholidaysltd.com/images/blog/what-is-the-difference-between-tour-and-travel.jpg",
            "https://avada.website/tour-operator/wp-content/uploads/sites/169/2022/06/maldives-tour.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbUElqwHGibIQ4QJvoD4ggWCntRxCsRBhP-Q&s",
            "https://www.discoveryholidays.co.in/wp-content/themes/discovery/assets/images/dis-img-1.jpg"
        ],
        amenities: [

            { icon: IconMap.CgSmartHomeRefrigerator, name: "Refrigerator" },

            { icon: IconMap.MdMicrowave, name: "Microwave" },
            { icon: IconMap.GiCampCookingPot, name: "Cooking basics" },
            { icon: IconMap.BiDish, name: "Dishes and silverware" },
            { icon: IconMap.GiGasStove, name: "Gas stove" },
            { icon: IconMap.GiWaterFlask, name: "Hot water kettle" },
            { icon: IconMap.GiToaster, name: "Toaster" },
            { icon: IconMap.FaBowlRice, name: "Rice maker" },
            { icon: IconMap.PiMountains, name: "Mountain view" },
            { icon: IconMap.GiGardeningShears, name: "Garden view" },
            { icon: IconMap.CiWifiOn, name: "Wifi" },
            { icon: IconMap.BsPersonWorkspace, name: "Dedicated workspace" },
            { icon: IconMap.MdBrunchDining, name: "Dining table" },
            { icon: IconMap.GiCryptEntrance, name: "Private entrance" },
            { icon: IconMap.MdOutlineBalcony, name: "Private patio or balcony" },
            { icon: IconMap.GiUndergroundCave, name: "backyard" },
            { icon: IconMap.TbBeach, name: "Outdoor" },
            { icon: IconMap.BsJournalAlbum, name: "Outdoor dining area" },
            { icon: IconMap.FaParking, name: "parking" },


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                star: 5,
                comment: "Excellent service and wonderful experience!"
            },

            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic! Will definitely come back."
            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                star: 2,
                comment: "Disappointing. Service could be improved."
            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                star: 4,
                comment: "Good atmosphere and friendly staff."
            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                star: 5,
                comment: "Amazing food and great service!"
            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                star: 3,
                comment: "Decent place but the food was a bit bland."
            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                star: 4,
                comment: "Lovely spot with a vibrant atmosphere."
            },

            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                star: 5,
                comment: "Wonderful experience and delicious food!"
            }
        ]
    },
    {
        id: 11,
        image: "https://i.natgeofe.com/n/7afda449-1780-4938-8342-2abe32326c86/Montblanchike.jpg",
        live: false,
        title: "Mountain Hike",
        type: 'Barn',
        host: {
            id: 5,
            image: "https://www.w3schools.com/w3images/woods.jpg",
            name: "Emily",
            keyword: "outdoorsy",
            city: "Vancouver",
            country: "Canada",
            totalYears: 12,
            identity: 556677889,
            number: 5556666,
            description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride..",
            places: [11, 12, 13]
        },
        hostId: 5,
        isComingSoon: true,
        coming: "May",
        city: "Denver",
        country: "USA",
        guestrooms: 2,
        beds: 2,
        bedrooms: 1,
        baths: 1,
        closingDate: "2024-11-30",
        activities: [
            { icon: IconMap.FaRegStar, name: "Guided Hike", description: "Enjoy a guided hike through the mountainous terrain." },
            { icon: IconMap.IoHomeOutline, name: "Wildlife Spotting", description: "Look out for local wildlife during the hike." },
            { icon: IconMap.PiCoatHangerThin, name: "Photography", description: "Capture stunning mountain views with expert tips." },

        ],
        shortDescription: "Experience the beauty of the mountains with a guided hike and various outdoor activities.",
        whatYoullDo: "Hike through scenic trails, spot wildlife, and enjoy a picnic lunch with breathtaking views.",
        location: { latitude: 39.7392, longitude: -104.9903 },
        images: [
            "https://i.guim.co.uk/img/media/e994bb7ab8b900b70a4ac07026f85ba6ac06e25e/0_248_7360_4415/master/7360.jpg?width=1200&quality=85&auto=format&fit=max&s=775e8347a5a62a6d5bef19bd670bc3ba",
            "https://i.natgeofe.com/n/7afda449-1780-4938-8342-2abe32326c86/Montblanchike.jpg",
            "https://i0.wp.com/besthikesbc.ca/wp-content/uploads/2022/08/DSC0523.jpg?fit=2048%2C1320&ssl=1",
            "https://upload.wikimedia.org/wikipedia/commons/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR-TH1YI0ikd6HuMSEpmsCDjDyTOjibU6IVg&s"
        ],
        amenities: [

            { icon: IconMap.GiPillow, name: "Extra pillows and blankets " },

            { icon: IconMap.TbIroning1, name: "Iron " },
            { icon: IconMap.BiCloset, name: "closet " },
            { icon: IconMap.FaTv, name: "HDTV" },
            { icon: IconMap.FaHotTub, name: "Ceiling fan" },
            { icon: IconMap.FaFan, name: "Portable fans" },
            { icon: IconMap.TbTheater, name: "Portable heater" },
            { icon: IconMap.CgSmartHomeRefrigerator, name: "Refrigerator" },

            { icon: IconMap.MdMicrowave, name: "Microwave" },
            { icon: IconMap.GiCampCookingPot, name: "Cooking basics" },
            { icon: IconMap.BiDish, name: "Dishes and silverware" },

            { icon: IconMap.MdBrunchDining, name: "Dining table" },
            { icon: IconMap.GiCryptEntrance, name: "Private entrance" },
            { icon: IconMap.MdOutlineBalcony, name: "Private patio or balcony" },
            { icon: IconMap.GiUndergroundCave, name: "backyard" },
            { icon: IconMap.TbBeach, name: "Outdoor" },
            { icon: IconMap.BsJournalAlbum, name: "Outdoor dining area" },
            { icon: IconMap.FaParking, name: "parking" },


        ],
        reviews: [

            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic! Will definitely come back."
            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                star: 2,
                comment: "Disappointing. Service could be improved."
            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                star: 4,
                comment: "Good atmosphere and friendly staff."
            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                star: 5,
                comment: "Amazing food and great service!"
            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                star: 3,
                comment: "Decent place but the food was a bit bland."
            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                star: 4,
                comment: "Lovely spot with a vibrant atmosphere."
            },

        ]
    },
    {
        id: 12,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSF2g-2GrJeS46yx60NXeScspw_XPIxeflDw&s",
        live: true,
        title: "Nature Walk",
        type: 'Cabin',
        past: true,
        host: {
            id: 5,
            image: "https://www.w3schools.com/w3images/woods.jpg",
            name: "Emily",
            keyword: "outdoorsy",
            city: "Vancouver",
            country: "Canada",
            totalYears: 12,
            identity: 556677889,
            number: 5556666,
            description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride..",
            places: [11, 12, 13]
        },
        hostId: 5,
        price: 45,
        city: "Portland",
        country: "USA",

        guestrooms: 1,
        beds: 1,
        bedrooms: 1,
        baths: 1,
        closingDate: "2024-10-15",
        activities: [
            { icon: IconMap.CiForkAndKnife, name: "Nature Trail Walk", description: "Explore beautiful nature trails guided by an expert." },

            { icon: IconMap.BsJournalAlbum, name: "Bird Watching", description: "Observe and identify various bird species." },
            { icon: IconMap.CiTrophy, name: "Nature Photography", description: "Capture the beauty of nature with guidance from a photographer." },

        ],
        shortDescription: "Enjoy a guided nature walk and learn about local flora and fauna while capturing beautiful moments.",
        whatYoullDo: "Walk through nature trails, identify plants and birds, and capture stunning photographs.",
        location: { latitude: 45.5152, longitude: -122.6784 },
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSF2g-2GrJeS46yx60NXeScspw_XPIxeflDw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgv0axQTwynXiyMCaSegJWbDcaeve8fTIJCQ&s",
            "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_724583_16626384614381189.jpg",
            "https://live-production.wcms.abc-cdn.net.au/b09612b0c240132e64efa52143eaf482?impolicy=wcms_crop_resize&cropH=1689&cropW=3000&xPos=0&yPos=308&width=862&height=485",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRejwUTscQoppOZhllVQ4UOrRY0F4RYvZuZPxugW6w0Fcu8r7qPxIj7mNAGrxAp4mBNFfo&usqp=CAU"

        ],
        amenities: [


            { icon: IconMap.PiHairDryerBold, name: "Hair dryer " },
            { icon: IconMap.MdCleaningServices, name: "Cleaning products" },
            { icon: IconMap.LiaWineBottleSolid, name: "Shampoo" },



            { icon: IconMap.TbIroning1, name: "Iron " },
            { icon: IconMap.BiCloset, name: "closet " },
            { icon: IconMap.FaTv, name: "HDTV" },
            { icon: IconMap.FaHotTub, name: "Ceiling fan" },
            { icon: IconMap.FaFan, name: "Portable fans" },
            { icon: IconMap.TbTheater, name: "Portable heater" },
            { icon: IconMap.CgSmartHomeRefrigerator, name: "Refrigerator" },

            { icon: IconMap.MdMicrowave, name: "Microwave" },
            { icon: IconMap.GiCampCookingPot, name: "Cooking basics" },
            { icon: IconMap.BiDish, name: "Dishes and silverware" },
            { icon: IconMap.GiGasStove, name: "Gas stove" },
            { icon: IconMap.GiWaterFlask, name: "Hot water kettle" },
            { icon: IconMap.GiToaster, name: "Toaster" },
            { icon: IconMap.FaBowlRice, name: "Rice maker" },
            { icon: IconMap.MdBrunchDining, name: "Dining table" },
            { icon: IconMap.GiCryptEntrance, name: "Private entrance" },
            { icon: IconMap.MdOutlineBalcony, name: "Private patio or balcony" },
            { icon: IconMap.GiUndergroundCave, name: "backyard" },
            { icon: IconMap.TbBeach, name: "Outdoor" },
            { icon: IconMap.BsJournalAlbum, name: "Outdoor dining area" },
            { icon: IconMap.FaParking, name: "parking" },


        ],
        reviews: [

            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                star: 4,
                comment: "Good atmosphere and friendly staff."
            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                star: 5,
                comment: "Amazing food and great service!"
            },

            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                star: 4,
                comment: "Great place to visit, will return soon."
            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                star: 3,
                comment: "Nice ambiance, but the service was slow."
            },
            {
                name: "Michael Nguyen",
                city: "Ho Chi Minh City",
                country: "Vietnam",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic food and very welcoming staff!"
            },
            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                star: 2,
                comment: "Not impressed with the food quality."
            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                star: 4,
                comment: "Great ambiance and lovely menu options."
            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                star: 5,
                comment: "Wonderful experience and delicious food!"
            }
        ]
    },
    {
        id: 13,
        image: "https://ourownstartup.com/wp-content/uploads/2020/12/forest-camping-c.jpg",
        live: true,
        title: "Forest Camping",
        type: 'Cabin',
        host: {
            id: 5,
            image: "https://www.w3schools.com/w3images/woods.jpg",
            name: "Emily",
            keyword: "outdoorsy",
            city: "Vancouver",
            country: "Canada",
            totalYears: 12,
            identity: 556677889,
            number: 5556666,
            description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride..",
            places: [11, 12, 13]
        },
        hostId: 5,
        soldOut: true,
        city: "Asheville",
        country: "USA",
        guestrooms: 3,
        beds: 6,
        bedrooms: 3,
        baths: 2,
        closingDate: "2024-09-25",
        activities: [

            { icon: IconMap.FaRegStar, name: "Campfire Cooking", description: "Cook delicious meals over a campfire with expert tips." },

            { icon: IconMap.BsJournalAlbum, name: "Forest Hiking", description: "Explore nearby forest trails with a guide." },
            { icon: IconMap.TbBeach, name: "Wildlife Observation", description: "Observe and learn about local wildlife." },
        ],
        shortDescription: "Immerse yourself in nature with a camping experience in the forest, including guided hikes and stargazing.",
        whatYoullDo: "Set up camp, cook over a fire, hike the forest trails, and enjoy stargazing and wildlife observation.",
        location: { latitude: 35.6009, longitude: -82.5540 },
        images: [
            "https://ourownstartup.com/wp-content/uploads/2020/12/forest-camping-c.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSirCGREP0QC-EhzupQf2zEmAHecCAKZvzqSg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0uLI3bqU7JGtexo3pYzEjZ9rIvq1_G1hDKQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPymPHF8Z9qWWvW5rSdXI-XQ6NrOw-JEmCOA&s",
            "https://www.mensjournal.com/.image/t_share/MTk2MTM2NDE3NjkyMjk2MzM3/olympic-national-forest-washington.jpg"
        ],
        amenities: [
            { icon: IconMap.PiMountains, name: "Mountain view" },

            { icon: IconMap.TbIroning1, name: "Iron " },
            { icon: IconMap.BiCloset, name: "closet " },
            { icon: IconMap.FaTv, name: "HDTV" },
            { icon: IconMap.FaHotTub, name: "Ceiling fan" },
            { icon: IconMap.FaFan, name: "Portable fans" },
            { icon: IconMap.TbTheater, name: "Portable heater" },
            { icon: IconMap.CgSmartHomeRefrigerator, name: "Refrigerator" },

            { icon: IconMap.MdMicrowave, name: "Microwave" },
            { icon: IconMap.GiCampCookingPot, name: "Cooking basics" },
            { icon: IconMap.BiDish, name: "Dishes and silverware" },
            { icon: IconMap.GiGasStove, name: "Gas stove" },
            { icon: IconMap.GiWaterFlask, name: "Hot water kettle" },
            { icon: IconMap.GiToaster, name: "Toaster" },
            { icon: IconMap.FaBowlRice, name: "Rice maker" },
            { icon: IconMap.MdBrunchDining, name: "Dining table" },
            { icon: IconMap.GiCryptEntrance, name: "Private entrance" },
            { icon: IconMap.MdOutlineBalcony, name: "Private patio or balcony" },
            { icon: IconMap.GiUndergroundCave, name: "backyard" },
            { icon: IconMap.TbBeach, name: "Outdoor" },
            { icon: IconMap.BsJournalAlbum, name: "Outdoor dining area" },
            { icon: IconMap.FaParking, name: "parking" },


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                star: 5,
                comment: "Excellent service and wonderful experience!"
            },


            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                star: 5,
                comment: "Outstanding experience, highly recommended!"
            },
            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                star: 4,
                comment: "Great place to visit, will return soon."
            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                star: 3,
                comment: "Nice ambiance, but the service was slow."
            },
            {
                name: "Michael Nguyen",
                city: "Ho Chi Minh City",
                country: "Vietnam",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic food and very welcoming staff!"
            },
            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                star: 2,
                comment: "Not impressed with the food quality."
            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                star: 4,
                comment: "Great ambiance and lovely menu options."
            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                star: 5,
                comment: "Wonderful experience and delicious food!"
            }
        ]
    },
    {
        id: 14,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMYSJBbwmXMjvN79ajEs4K1g3mVUic97SRpQ&s",
        live: false,
        title: "City Lights Tour",
        type: 'Cabin',
        past: true,
        host: {
            id: 6,
            image: "https://www.w3schools.com/w3images/forest.jpg",
            name: "Carlos",
            keyword: "lively",
            city: "Barcelona",
            country: "Spain",
            totalYears: 9,
            identity: 667788990,
            number: 6667777,
            description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride..",
            places: [14, 15]
        },
        hostId: 6,

        isComingSoon: true,
        coming: "july",
        city: "Los Angeles",
        country: "USA",
        guestrooms: 1,
        beds: 1,
        bedrooms: 1,
        baths: 1,
        closingDate: "2024-12-10",
        activities: [
            { icon: IconMap.FaRegStar, name: "City Night Tour", description: "Explore the city’s most famous landmarks lit up at night." },
            { icon: IconMap.FaRegStar, name: "Photography Tips", description: "Receive tips on capturing city lights and night scenes." },
            { icon: IconMap.FaRegStar, name: "Dinner at a Landmark", description: "Enjoy dinner at a well-known landmark with a view of the city." },
            { icon: IconMap.FaRegStar, name: "Local History", description: "Learn about the history and significance of various city landmarks." },
            { icon: IconMap.FaRegStar, name: "Nightlife Exploration", description: "Experience the city’s nightlife with guided tours of popular spots." },
        ],
        shortDescription: "Discover the beauty of city lights with a guided night tour and photography tips, including a special dinner experience.",
        whatYoullDo: "Tour iconic city landmarks at night, enjoy a special dinner, and explore the nightlife with expert guidance.",
        location: { latitude: 34.0522, longitude: -118.2437 },
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMYSJBbwmXMjvN79ajEs4K1g3mVUic97SRpQ&s",
            "https://images.theconversation.com/files/149162/original/image-20161208-18046-116xg09.jpg?ixlib=rb-4.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
            "https://png.pngtree.com/thumb_back/fw800/background/20230806/pngtree-i-city-lights-going-down-image_12983262.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCNq3tuxmccsjBUdgzLXtn63ohmwzmX2dNQ&s",
            "https://i.pinimg.com/736x/3d/58/c0/3d58c0a6fd81b986530b251302f95a81.jpg"
        ],
        amenities: [
            { icon: IconMap.PiMountains, name: "Mountain view" },

            { icon: IconMap.TbIroning1, name: "Iron " },
            { icon: IconMap.BiCloset, name: "closet " },
            { icon: IconMap.FaTv, name: "HDTV" },
            { icon: IconMap.FaHotTub, name: "Ceiling fan" },
            { icon: IconMap.FaFan, name: "Portable fans" },
            { icon: IconMap.TbTheater, name: "Portable heater" },
            { icon: IconMap.CgSmartHomeRefrigerator, name: "Refrigerator" },

            { icon: IconMap.MdMicrowave, name: "Microwave" },
            { icon: IconMap.GiCampCookingPot, name: "Cooking basics" },
            { icon: IconMap.BiDish, name: "Dishes and silverware" },
            { icon: IconMap.GiGasStove, name: "Gas stove" },
            { icon: IconMap.GiWaterFlask, name: "Hot water kettle" },
            { icon: IconMap.GiToaster, name: "Toaster" },
            { icon: IconMap.FaBowlRice, name: "Rice maker" },
            { icon: IconMap.MdBrunchDining, name: "Dining table" },
            { icon: IconMap.GiCryptEntrance, name: "Private entrance" },
            { icon: IconMap.MdOutlineBalcony, name: "Private patio or balcony" },
            { icon: IconMap.GiUndergroundCave, name: "backyard" },
            { icon: IconMap.TbBeach, name: "Outdoor" },
            { icon: IconMap.BsJournalAlbum, name: "Outdoor dining area" },
            { icon: IconMap.FaParking, name: "parking" },


        ],
        reviews: [


            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                star: 4,
                comment: "Lovely spot with a vibrant atmosphere."
            },
            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                star: 5,
                comment: "Outstanding experience, highly recommended!"
            },
            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                star: 4,
                comment: "Great place to visit, will return soon."
            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                star: 3,
                comment: "Nice ambiance, but the service was slow."
            },
            {
                name: "Michael Nguyen",
                city: "Ho Chi Minh City",
                country: "Vietnam",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic food and very welcoming staff!"
            },
            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                star: 2,
                comment: "Not impressed with the food quality."
            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                star: 4,
                comment: "Great ambiance and lovely menu options."
            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                star: 5,
                comment: "Wonderful experience and delicious food!"
            }
        ]
    },
    {
        id: 15,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQXUlWOkej0n32N9PpJ8ov-alUcNgVOBhlYg&s",
        live: true,
        title: "Mountain Retreat",
        type: 'Cabin',
        host: {
            id: 6,
            image: "https://www.w3schools.com/w3images/forest.jpg",
            name: "Carlos",
            keyword: "lively",
            city: "Barcelona",
            country: "Spain",
            totalYears: 9,
            identity: 667788990,
            number: 6667777,
            description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride..",
            places: [14, 15]
        },
        hostId: 6,
        price: 200,
        city: "Aspen",
        country: "USA",
        guestrooms: 4,
        beds: 8,
        bedrooms: 4,
        baths: 3,
        closingDate: "2024-11-30",
        activities: [

            { icon: IconMap.CiTrophy, name: "Spa Sessions", description: "Enjoy spa treatments and massages in a tranquil environment." },
            { icon: IconMap.CiCalendarDate, name: "Guided Hikes", description: "Participate in guided hikes to explore the beautiful mountain terrain." },
            { icon: IconMap.PiMountains, name: "Yoga Classes", description: "Join yoga classes designed to enhance relaxation and wellness." },

        ],
        shortDescription: "Escape to a luxurious mountain retreat offering relaxation, guided hikes, spa sessions, and gourmet dining.",
        whatYoullDo: "Relax in a luxury mountain setting, participate in wellness activities, and enjoy gourmet dining and guided hikes.",
        location: { latitude: 39.1910, longitude: -106.8175 },
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQXUlWOkej0n32N9PpJ8ov-alUcNgVOBhlYg&s",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/416453049.jpg?k=102980c6ef55ce077642155a44668b313423399f3178c7f651863b922cc8641c&o=&hp=1",
            "https://www.virginlimitededition.com/-/media/revive/new/mvcc/mvcc---activities---retreats-desktop.jpg?h=1080&w=1920&rev=7cb23a01368c4fba9cce9784fa7ec52c",
            "https://media.cntraveler.com/photos/61a8efdc1fae10db1973a006/master/w_4000,h_2667,c_limit/Park%20City%20Winter%20Retreats%20Credit%20@2ndplace.jpg",
            "https://images.unsplash.com/photo-1607751330934-fb232b789f9e"
        ],
        amenities: [
            { icon: IconMap.PiMountains, name: "Mountain view" },

            { icon: IconMap.TbIroning1, name: "Iron " },
            { icon: IconMap.BiCloset, name: "closet " },
            { icon: IconMap.FaTv, name: "HDTV" },
            { icon: IconMap.FaHotTub, name: "Ceiling fan" },
            { icon: IconMap.FaFan, name: "Portable fans" },
            { icon: IconMap.TbTheater, name: "Portable heater" },
            { icon: IconMap.CgSmartHomeRefrigerator, name: "Refrigerator" },

            { icon: IconMap.MdMicrowave, name: "Microwave" },
            { icon: IconMap.GiCampCookingPot, name: "Cooking basics" },
            { icon: IconMap.BiDish, name: "Dishes and silverware" },
            { icon: IconMap.GiGasStove, name: "Gas stove" },
            { icon: IconMap.GiWaterFlask, name: "Hot water kettle" },
            { icon: IconMap.GiToaster, name: "Toaster" },
            { icon: IconMap.FaBowlRice, name: "Rice maker" },
            { icon: IconMap.MdBrunchDining, name: "Dining table" },
            { icon: IconMap.GiCryptEntrance, name: "Private entrance" },
            { icon: IconMap.MdOutlineBalcony, name: "Private patio or balcony" },
            { icon: IconMap.GiUndergroundCave, name: "backyard" },
            { icon: IconMap.TbBeach, name: "Outdoor" },
            { icon: IconMap.BsJournalAlbum, name: "Outdoor dining area" },
            { icon: IconMap.FaParking, name: "parking" },


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                star: 5,
                comment: "Excellent service and wonderful experience!"
            },
            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                star: 4,
                comment: "Great place, but a bit pricey."
            },
            {
                name: "Carlos García",
                city: "Madrid",
                country: "Spain",
                date: "2024-08-27",
                star: 3,
                comment: "Average experience, not as good as expected."
            },
            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic! Will definitely come back."
            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                star: 2,
                comment: "Disappointing. Service could be improved."
            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                star: 4,
                comment: "Good atmosphere and friendly staff."
            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                star: 5,
                comment: "Amazing food and great service!"
            },


            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                star: 2,
                comment: "Not impressed with the food quality."
            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                star: 4,
                comment: "Great ambiance and lovely menu options."
            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                star: 5,
                comment: "Wonderful experience and delicious food!"
            }
        ]
    },
    {
        id: 16,
        image: "https://media.architecturaldigest.com/photos/63a485bfc0aae3b7974afbf2/2:1/w_1280%2Cc_limit/GettyImages-1175349114.jpg",
        live: true,
        title: "Historic House Visit",
        type: 'Container',
        host: {
            id: 7,
            image: "https://www.w3schools.com/w3images/mountains2.jpg",
            name: "Aisha",
            keyword: "historical",
            city: "Cairo",
            country: "Egypt",
            totalYears: 7,
            identity: 778899001,
            number: 7778888,
            description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride..",
            places: [16, 17]
        },
        hostId: 7,
        price: 85,
        city: "Philadelphia",
        country: "USA",
        isComingSoon: true,
        coming: "October",
        guestrooms: 2,
        beds: 4,
        bedrooms: 2,
        baths: 2,
        closingDate: "2024-10-30",
        activities: [
            { icon: IconMap.CiHeart, name: "Historical Tour", description: "Explore the historic house with a guided tour." },
            { icon: IconMap.CiDesktop, name: "Architectural Insights", description: "Learn about the architectural style and history." },
            { icon: IconMap.CiTrophy, name: "Period Costume Exhibition", description: "See costumes and artifacts from the era." },
            { icon: IconMap.PiCoatHangerThin, name: "Q&A Session", description: "Engage in a Q&A session with the historian." },
            { icon: IconMap.BsJournalAlbum, name: "Tea and Snacks", description: "Enjoy tea and snacks in a historical setting." },
        ],
        shortDescription: "Step back in time with a guided tour of a historic house, complete with insights into its architecture and period artifacts.",
        whatYoullDo: "Tour the house, learn about its history and architecture, enjoy a period costume exhibition, and partake in tea and snacks.",
        location: { latitude: 39.9526, longitude: -75.1652 },
        images: [
            "https://media.architecturaldigest.com/photos/63a485bfc0aae3b7974afbf2/2:1/w_1280%2Cc_limit/GettyImages-1175349114.jpg",
            "https://media.architecturaldigest.com/photos/57a4dd484cd107bb4fa4c3d9/16:9/w_3072,h_1727,c_limit/historic-hudson-valley-homes-02.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-PSjlFumml3J2eESavoGygfkxT2L4WblUBDysMMiu9RYQq54tXA9pOK9YLks2dQVBFY&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCpDCb0z0kRPkCgvpmNbtetEbd768efN1KVOqAzF97QKVx0TkLgh0LO3ZrLqa_D6gTj-I&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnheRMoV5M_EGualsOIa7o0Q0l-HonmNN4LT22UXTDzjscv1qrO-ZOEcXTEFru0xI3FqA&usqp=CAU"
        ],
        amenities: [
            { icon: IconMap.PiMountains, name: "Mountain view" },
            { icon: IconMap.GiGardeningShears, name: "Garden view" },
            { icon: IconMap.CiWifiOn, name: "Wifi" },

            { icon: IconMap.TbIroning1, name: "Iron " },
            { icon: IconMap.BiCloset, name: "closet " },
            { icon: IconMap.FaTv, name: "HDTV" },
            { icon: IconMap.FaHotTub, name: "Ceiling fan" },
            { icon: IconMap.FaFan, name: "Portable fans" },
            { icon: IconMap.TbTheater, name: "Portable heater" },
            { icon: IconMap.CgSmartHomeRefrigerator, name: "Refrigerator" },

            { icon: IconMap.MdMicrowave, name: "Microwave" },
            { icon: IconMap.GiCampCookingPot, name: "Cooking basics" },
            { icon: IconMap.BiDish, name: "Dishes and silverware" },
            { icon: IconMap.GiGasStove, name: "Gas stove" },
            { icon: IconMap.GiWaterFlask, name: "Hot water kettle" },
            { icon: IconMap.GiToaster, name: "Toaster" },
            { icon: IconMap.FaBowlRice, name: "Rice maker" },
            { icon: IconMap.MdBrunchDining, name: "Dining table" },
            { icon: IconMap.GiCryptEntrance, name: "Private entrance" },
            { icon: IconMap.MdOutlineBalcony, name: "Private patio or balcony" },
            { icon: IconMap.GiUndergroundCave, name: "backyard" },
            { icon: IconMap.TbBeach, name: "Outdoor" },
            { icon: IconMap.BsJournalAlbum, name: "Outdoor dining area" },
            { icon: IconMap.FaParking, name: "parking" },


        ],
        reviews: [

            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                star: 2,
                comment: "Disappointing. Service could be improved."
            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                star: 4,
                comment: "Good atmosphere and friendly staff."
            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                star: 5,
                comment: "Amazing food and great service!"
            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                star: 3,
                comment: "Decent place but the food was a bit bland."
            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                star: 4,
                comment: "Lovely spot with a vibrant atmosphere."
            },
            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                star: 5,
                comment: "Outstanding experience, highly recommended!"
            },
            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                star: 4,
                comment: "Great place to visit, will return soon."
            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                star: 3,
                comment: "Nice ambiance, but the service was slow."
            },

        ]
    },
    {
        id: 17,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST3LLaUcZp9ynoZq738l60tfPg9hJCagYclQ&s",
        live: false,
        title: "Bridge Photography Workshop",
        type: 'Container',
        host: {
            id: 7,
            image: "https://www.w3schools.com/w3images/mountains2.jpg",
            name: "Aisha",
            keyword: "historical",
            city: "Cairo",
            country: "Egypt",
            totalYears: 7,
            identity: 778899001,
            number: 7778888,
            description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride..",
            places: [16, 17]
        },
        hostId: 7,
        soldOut: true,
        city: "San Francisco",
        country: "USA",
        guestrooms: 1,
        beds: 1,
        bedrooms: 1,
        baths: 1,
        closingDate: "2024-09-15",
        activities: [
            { name: "Photography Techniques", description: "Learn techniques for photographing bridges." },
            { name: "Field Photography", description: "Practice your skills on iconic local bridges." },
            { name: "Editing Tips", description: "Get tips on editing bridge photos." },
            { name: "Composition Workshop", description: "Understand composition principles for stunning bridge photos." },
            { name: "Portfolio Review", description: "Receive feedback on your photography portfolio." },
        ],
        shortDescription: "Master the art of bridge photography with hands-on sessions and expert tips in this comprehensive workshop.",
        whatYoullDo: "Learn and practice photography techniques, explore local bridges, receive editing tips, and get feedback on your work.",
        location: { latitude: 37.7749, longitude: -122.4194 },
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST3LLaUcZp9ynoZq738l60tfPg9hJCagYclQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvqKD-37VgGoWUAsasdN_zl9ba0S5Jthjdw&s",
            "https://img.freepik.com/premium-vector/old-train-bridge-my-hometown-this-is-old-railway-bridge-my-city-i-clicked-this-symmetrica_1050166-9964.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl81WKl_UJCG74FxsiqppfW9OoOjZYAYBBrA&s",
            "https://images.squarespace-cdn.com/content/v1/5363b540e4b054843f9bf812/1693947276989-R5MQNZO8UFILH9GFU9BQ/DSC_7122%2Bcopy.jpg?format=1500w"
        ],
        amenities: [
            { icon: IconMap.PiMountains, name: "Mountain view" },
            { icon: IconMap.GiGardeningShears, name: "Garden view" },
            { icon: IconMap.CiWifiOn, name: "Wifi" },
            { icon: IconMap.BsPersonWorkspace, name: "Dedicated workspace" },

            { icon: IconMap.PiHairDryerBold, name: "Hair dryer " },
            { icon: IconMap.MdCleaningServices, name: "Cleaning products" },
            { icon: IconMap.LiaWineBottleSolid, name: "Shampoo" },
            { icon: IconMap.LiaPrescriptionBottleSolid, name: "Conditioner " },

            { icon: IconMap.FaSoap, name: "Body soap" },
            { icon: IconMap.BiDetail, name: "Bidet " },
            { icon: IconMap.FaRegStar, name: "Hot water" },
            { icon: IconMap.GiLiquidSoap, name: "Shower gel" },

            { icon: IconMap.BiSolidWasher, name: "Washer " },
            { icon: IconMap.FaRegStar, name: "Essentials " },
            { icon: IconMap.TbHanger, name: "Hangers" },
            { icon: IconMap.GiPillow, name: "Extra pillows and blankets " },

            { icon: IconMap.TbIroning1, name: "Iron " },
            { icon: IconMap.BiCloset, name: "closet " },
            { icon: IconMap.FaTv, name: "HDTV" },

            { icon: IconMap.BsJournalAlbum, name: "Outdoor dining area" },
            { icon: IconMap.FaParking, name: "parking" },


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                star: 5,
                comment: "Excellent service and wonderful experience!"
            },

            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic! Will definitely come back."
            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                star: 2,
                comment: "Disappointing. Service could be improved."
            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                star: 4,
                comment: "Good atmosphere and friendly staff."
            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                star: 5,
                comment: "Amazing food and great service!"
            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                star: 3,
                comment: "Decent place but the food was a bit bland."
            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                star: 4,
                comment: "Lovely spot with a vibrant atmosphere."
            },
            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                star: 5,
                comment: "Outstanding experience, highly recommended!"
            },

            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                star: 5,
                comment: "Wonderful experience and delicious food!"
            }
        ]
    },
    {
        id: 18,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRR9RA_wRD63M_8rxsZ2ZizdVRV5Jwbav3Q&s",
        live: true,
        title: "Wildlife Safari",
        type: 'Container',
        host: {
            id: 8,
            image: "https://www.w3schools.com/w3images/lights2.jpg",
            name: "Lars",
            keyword: "cosy",
            city: "Copenhagen",
            country: "Denmark",
            totalYears: 4,
            identity: 889900112,
            number: 8889999,
            description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride..",
            places: [18]
        },
        hostId: 8,
        price: 250,
        city: "Nairobi",
        country: "Kenya",
        guestrooms: 3,
        beds: 6,
        bedrooms: 3,
        baths: 2,
        closingDate: "2024-11-15",
        activities: [
            { icon: IconMap.FaRegStar, name: "Game Drive", description: "Embark on a thrilling game drive to spot wildlife." },
            { icon: IconMap.PiMountains, name: "Bird Watching", description: "Observe and identify various bird species." },
            { icon: IconMap.GiFullMotorcycleHelmet, name: "Nature Walk", description: "Take a guided nature walk with a wildlife expert." },
            { icon: IconMap.IoBedOutline, name: "Photography Session", description: "Capture stunning wildlife photographs with guidance." },
            { icon: IconMap.MdOutlineFireplace, name: "Cultural Experience", description: "Learn about local cultures and traditions." },
        ],
        shortDescription: "Experience the thrill of a wildlife safari with guided game drives, bird watching, and cultural insights.",
        whatYoullDo: "Go on game drives, observe birds, take nature walks, capture wildlife photographs, and learn about local cultures.",
        location: { latitude: -1.2864, longitude: 36.8172 },
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRR9RA_wRD63M_8rxsZ2ZizdVRV5Jwbav3Q&s",
            "https://www.thournatureresorts.com/blog/wp-content/uploads/2020/07/Sasan-Gir-National-Park-Gujarat.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt4X1tpG3tOedl8Y3VEgMbgRbLT_rcX3dpaF8ddzzJVQkc9Ngu4_dotFu6Q3vB2bF2UQQ&usqp=CAU",
            "https://i.shgcdn.com/bbdbc1a1-e29e-42b2-a5ce-e94b7f1a053c/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
            "https://sdzsafaripark.org/sites/default/files/styles/hero_with_nav_gradient/public/hero/hero-wildlifesafaris.jpg?itok=EsnxTA6m"
        ],
        amenities: [
            { icon: IconMap.MdMicrowave, name: "Microwave" },
            { icon: IconMap.GiCampCookingPot, name: "Cooking basics" },
            { icon: IconMap.BiDish, name: "Dishes and silverware" },
            { icon: IconMap.GiGasStove, name: "Gas stove" },
            { icon: IconMap.GiWaterFlask, name: "Hot water kettle" },
            { icon: IconMap.GiToaster, name: "Toaster" },
            { icon: IconMap.FaBowlRice, name: "Rice maker" },
            { icon: IconMap.MdBrunchDining, name: "Dining table" },
            { icon: IconMap.GiCryptEntrance, name: "Private entrance" },
            { icon: IconMap.MdOutlineBalcony, name: "Private patio or balcony" },
            { icon: IconMap.GiUndergroundCave, name: "backyard" },
            { icon: IconMap.TbBeach, name: "Outdoor" },
            { icon: IconMap.BsJournalAlbum, name: "Outdoor dining area" },
            { icon: IconMap.FaParking, name: "parking" },
            { icon: IconMap.PiMountains, name: "Mountain view" },
            { icon: IconMap.GiGardeningShears, name: "Garden view" },

            { icon: IconMap.BiCloset, name: "closet " },
            { icon: IconMap.FaTv, name: "HDTV" },
            { icon: IconMap.FaHotTub, name: "Ceiling fan" },
            { icon: IconMap.FaFan, name: "Portable fans" },
            { icon: IconMap.TbTheater, name: "Portable heater" },
            { icon: IconMap.CgSmartHomeRefrigerator, name: "Refrigerator" },




        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                star: 5,
                comment: "Excellent service and wonderful experience!"
            },
            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                star: 4,
                comment: "Great place, but a bit pricey."
            },
            {
                name: "Carlos García",
                city: "Madrid",
                country: "Spain",
                date: "2024-08-27",
                star: 3,
                comment: "Average experience, not as good as expected."
            },
            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic! Will definitely come back."
            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                star: 2,
                comment: "Disappointing. Service could be improved."
            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                star: 4,
                comment: "Good atmosphere and friendly staff."
            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                star: 5,
                comment: "Amazing food and great service!"
            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                star: 3,
                comment: "Decent place but the food was a bit bland."
            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                star: 4,
                comment: "Lovely spot with a vibrant atmosphere."
            },

            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                star: 5,
                comment: "Wonderful experience and delicious food!"
            }
        ]
    },

    {
        id: 19,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPpGPqvtZUXB-68AbVyEGuEeRXhRQJVaBDyQ&s",
        live: true,
        title: "Lake Fishing",
        type: 'Guest House',
        host: {
            id: 9,
            image: "https://www.w3schools.com/w3images/snow.jpg",
            name: "Nina",
            keyword: "romantic",
            city: "Paris",
            country: "France",
            totalYears: 11,
            identity: 990011223,
            number: 9990000,
            description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride..",
            places: [19, 20]
        },
        hostId: 9,
        price: 70,
        city: "Lake Tahoe",
        country: "USA",
        guestrooms: 1,
        beds: 2,
        bedrooms: 1,
        baths: 1,
        closingDate: "2024-10-01",
        activities: [
            { icon: IconMap.PiMountains, name: "Fishing Techniques", description: "Learn various fishing techniques for lake fishing." },
            { icon: IconMap.IoBookOutline, name: "Fishing Gear Setup", description: "Get hands-on experience setting up fishing gear." },
            { icon: IconMap.CiHeart, name: "Catch and Release", description: "Practice catch and release techniques." },
            { icon: IconMap.BsStars, name: "Scenic Views", description: "Enjoy beautiful views of the lake and surrounding mountains." },
            { icon: IconMap.CiCalendarDate, name: "Fishing Safety", description: "Understand safety measures and regulations for fishing." },
        ],
        shortDescription: "Enjoy a day of fishing on picturesque Lake Tahoe with expert guidance and beautiful surroundings.",
        whatYoullDo: "Learn fishing techniques, set up gear, practice catch and release, and enjoy scenic lake views.",
        location: { latitude: 38.9396, longitude: -120.0454 },
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPpGPqvtZUXB-68AbVyEGuEeRXhRQJVaBDyQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5H3qWyOPJETGfLhGdU16-CMemdZTc28PXNg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp4Bm7ac1_OgXCicymskvBpXhDfT3JVPdxsQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfOCR5aWRfY5I56cwQua21iGUzxox9_nwm2A&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeVFQhKQsw1OO_oY6D8Mpq3MnLYtO2oXQ9w&s"
        ],
        amenities: [
            { icon: IconMap.PiMountains, name: "Mountain view" },
            { icon: IconMap.GiGardeningShears, name: "Garden view" },
            { icon: IconMap.CiWifiOn, name: "Wifi" },

            { icon: IconMap.MdMicrowave, name: "Microwave" },
            { icon: IconMap.GiCampCookingPot, name: "Cooking basics" },
            { icon: IconMap.BiDish, name: "Dishes and silverware" },
            { icon: IconMap.GiGasStove, name: "Gas stove" },
            { icon: IconMap.GiWaterFlask, name: "Hot water kettle" },
            { icon: IconMap.GiToaster, name: "Toaster" },
            { icon: IconMap.FaBowlRice, name: "Rice maker" },
            { icon: IconMap.MdBrunchDining, name: "Dining table" },
            { icon: IconMap.GiCryptEntrance, name: "Private entrance" },
            { icon: IconMap.MdOutlineBalcony, name: "Private patio or balcony" },
            { icon: IconMap.GiUndergroundCave, name: "backyard" },
            { icon: IconMap.TbBeach, name: "Outdoor" },
            { icon: IconMap.BsJournalAlbum, name: "Outdoor dining area" },
            { icon: IconMap.FaParking, name: "parking" },


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                star: 5,
                comment: "Excellent service and wonderful experience!"
            },

            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                star: 2,
                comment: "Disappointing. Service could be improved."
            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                star: 4,
                comment: "Good atmosphere and friendly staff."
            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                star: 5,
                comment: "Amazing food and great service!"
            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                star: 3,
                comment: "Decent place but the food was a bit bland."
            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                star: 4,
                comment: "Lovely spot with a vibrant atmosphere."
            },

        ]
    },
    {
        id: 20,
        image: "https://i.ytimg.com/vi/zumJJUL_ruM/hqdefault.jpg",
        live: false,
        title: "Luxury House Stay",
        type: 'Guest House',
        host: {
            id: 9,
            image: "https://www.w3schools.com/w3images/snow.jpg",
            name: "Nina",
            keyword: "romantic",
            city: "Paris",
            country: "France",
            totalYears: 11,
            identity: 990011223,
            number: 9990000,
            description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride..",
            places: [19, 20]
        },
        hostId: 9,
        isComingSoon: true,
        coming: "October",
        city: "Miami",
        country: "USA",
        guestrooms: 5,
        beds: 10,
        bedrooms: 5,
        baths: 4,
        closingDate: "2024-12-20",
        activities: [
            { icon: IconMap.FaRegStar, name: "Exclusive Tour", description: "Get an exclusive tour of the luxury house." },
            { icon: IconMap.BsJournalAlbum, name: "Private Pool Access", description: "Enjoy private access to the pool and amenities." },
            { icon: IconMap.CiForkAndKnife, name: "Gourmet Dining", description: "Experience gourmet dining with a personal chef." },
            { icon: IconMap.BsStars, name: "Spa Services", description: "Indulge in spa services and wellness treatments." },
            { icon: IconMap.BiMoviePlay, name: "Personalized Service", description: "Receive personalized service and attention during your stay." },
        ],
        shortDescription: "Experience luxury living with exclusive tours, private pool access, gourmet dining, and personalized service.",
        whatYoullDo: "Tour the luxury house, enjoy private amenities, dine with a personal chef, and receive personalized service.",
        location: { latitude: 25.7617, longitude: -80.1918 },
        images: [
            "https://static.vecteezy.com/system/resources/previews/023/308/053/non_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo.jpg",
            "https://i.ytimg.com/vi/zumJJUL_ruM/hqdefault.jpg",
            "https://i.ytimg.com/vi/hYW4nO0tXbM/sddefault.jpg",
            "https://iconiclife.com/wp-content/uploads/2020/03/ICONIC-HAUS-2020-show-house.jpg",
            "https://www.naplesnews.com/gcdn/-mm-/e2f1e280a85b52fc2585d55513ef1a7eec1ed603/c=0-98-2000-1228/local/-/media/2018/01/24/Naples/Naples/636523883764739569-talispark0128.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp"
        ],
        amenities: [


            { icon: IconMap.PiHairDryerBold, name: "Hair dryer " },
            { icon: IconMap.MdCleaningServices, name: "Cleaning products" },
            { icon: IconMap.LiaWineBottleSolid, name: "Shampoo" },
            { icon: IconMap.LiaPrescriptionBottleSolid, name: "Conditioner " },

            { icon: IconMap.FaSoap, name: "Body soap" },
            { icon: IconMap.BiDetail, name: "Bidet " },
            { icon: IconMap.FaRegStar, name: "Hot water" },
            { icon: IconMap.GiLiquidSoap, name: "Shower gel" },



            { icon: IconMap.TbIroning1, name: "Iron " },
            { icon: IconMap.BiCloset, name: "closet " },
            { icon: IconMap.FaTv, name: "HDTV" },
            { icon: IconMap.FaHotTub, name: "Ceiling fan" },
            { icon: IconMap.FaFan, name: "Portable fans" },
            { icon: IconMap.TbTheater, name: "Portable heater" },
            { icon: IconMap.CgSmartHomeRefrigerator, name: "Refrigerator" },

            { icon: IconMap.MdMicrowave, name: "Microwave" },
            { icon: IconMap.GiCampCookingPot, name: "Cooking basics" },
            { icon: IconMap.BiDish, name: "Dishes and silverware" },
            { icon: IconMap.GiGasStove, name: "Gas stove" },
            { icon: IconMap.GiWaterFlask, name: "Hot water kettle" },
            { icon: IconMap.GiToaster, name: "Toaster" },
            { icon: IconMap.FaBowlRice, name: "Rice maker" },
            { icon: IconMap.MdBrunchDining, name: "Dining table" },
            { icon: IconMap.GiCryptEntrance, name: "Private entrance" },
            { icon: IconMap.MdOutlineBalcony, name: "Private patio or balcony" },
            { icon: IconMap.GiUndergroundCave, name: "backyard" },
            { icon: IconMap.TbBeach, name: "Outdoor" },
            { icon: IconMap.BsJournalAlbum, name: "Outdoor dining area" },
            { icon: IconMap.FaParking, name: "parking" },


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                star: 5,
                comment: "Excellent service and wonderful experience!"
            },
            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                star: 4,
                comment: "Great place, but a bit pricey."
            },
            {
                name: "Carlos García",
                city: "Madrid",
                country: "Spain",
                date: "2024-08-27",
                star: 3,
                comment: "Average experience, not as good as expected."
            },

            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                star: 5,
                comment: "Wonderful experience and delicious food!"
            }
        ]
    },
    {
        id: 21,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxX9OWfSWOJMgQrwfzV5i9jK80rkPovXH-g&s",
        live: true,
        title: "Night Photography Tour",
        type: 'Guest House',
        host: {
            id: 10,
            image: "https://www.w3schools.com/w3images/bridge.jpg",
            name: "Luca",
            keyword: "gastronomic",
            city: "Florence",
            country: "Italy",
            totalYears: 15,
            identity: 111122334,
            number: 1112333,
            description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride..",
            places: [21, 22]
        },
        hostId: 10,
        price: 95,
        city: "New York",
        country: "USA",

        guestrooms: 1,
        beds: 1,
        bedrooms: 1,
        baths: 1,
        closingDate: "2024-11-05",
        activities: [
            { icon: IconMap.IoBedOutline, name: "Night Photography Techniques", description: "Learn techniques for capturing stunning night photos." },
            { icon: IconMap.GiFullMotorcycleHelmet, name: "City Tour", description: "Tour iconic city landmarks at night." },
            { icon: IconMap.PiCoatHangerThin, name: "Composition Workshop", description: "Understand composition principles for night photography." },
            { icon: IconMap.FaRegStar, name: "Post-Processing Tips", description: "Receive tips on editing night photos." },
            { icon: IconMap.PiMountains, name: "Portfolio Review", description: "Get feedback on your night photography portfolio." },
        ],
        shortDescription: "Explore the city at night with expert guidance on photography techniques and editing tips.",
        whatYoullDo: "Learn night photography techniques, tour city landmarks, and receive feedback on your work.",
        location: { latitude: 40.7128, longitude: -74.0060 },
        images: [
            "https://images.squarespace-cdn.com/content/v1/63ceaffd33529a45e572bf90/eea55765-ce6b-45a8-b980-b564275c3508/Mikko-Lagerstedt-Night-Of-Fog.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxX9OWfSWOJMgQrwfzV5i9jK80rkPovXH-g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmNuBVnjekg8p9DFnA6SeseQCunY-aRdVsFQ&s",
            "https://images.squarespace-cdn.com/content/v1/554e1c83e4b08a0248ca70c4/1627645738249-LYTG3UFNWUBSWK0PS7KM/Bleak+Spot.jpg",
            "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2018/05/Path.jpg?resize=1196%2C1500&ssl=1"
        ],
        amenities: [
            { icon: IconMap.PiMountains, name: "Mountain view" },
            { icon: IconMap.GiGardeningShears, name: "Garden view" },
            { icon: IconMap.CiWifiOn, name: "Wifi" },
            { icon: IconMap.BsPersonWorkspace, name: "Dedicated workspace" },

            { icon: IconMap.PiHairDryerBold, name: "Hair dryer " },
            { icon: IconMap.MdCleaningServices, name: "Cleaning products" },
            { icon: IconMap.LiaWineBottleSolid, name: "Shampoo" },
            { icon: IconMap.LiaPrescriptionBottleSolid, name: "Conditioner " },

            { icon: IconMap.FaSoap, name: "Body soap" },
            { icon: IconMap.BiDetail, name: "Bidet " },
            { icon: IconMap.FaRegStar, name: "Hot water" },
            { icon: IconMap.GiLiquidSoap, name: "Shower gel" },

            { icon: IconMap.BiSolidWasher, name: "Washer " },
            { icon: IconMap.FaRegStar, name: "Essentials " },
            { icon: IconMap.TbHanger, name: "Hangers" },
            { icon: IconMap.GiPillow, name: "Extra pillows and blankets " },


            { icon: IconMap.MdMicrowave, name: "Microwave" },
            { icon: IconMap.GiCampCookingPot, name: "Cooking basics" },
            { icon: IconMap.BiDish, name: "Dishes and silverware" },
            { icon: IconMap.GiGasStove, name: "Gas stove" },
            { icon: IconMap.GiWaterFlask, name: "Hot water kettle" },
            { icon: IconMap.GiToaster, name: "Toaster" },
            { icon: IconMap.FaBowlRice, name: "Rice maker" },
            { icon: IconMap.MdBrunchDining, name: "Dining table" },
            { icon: IconMap.GiCryptEntrance, name: "Private entrance" },
            { icon: IconMap.MdOutlineBalcony, name: "Private patio or balcony" },
            { icon: IconMap.GiUndergroundCave, name: "backyard" },
            { icon: IconMap.TbBeach, name: "Outdoor" },
            { icon: IconMap.BsJournalAlbum, name: "Outdoor dining area" },
            { icon: IconMap.FaParking, name: "parking" },


        ],
        reviews: [

            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                star: 4,
                comment: "Good atmosphere and friendly staff."
            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                star: 5,
                comment: "Amazing food and great service!"
            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                star: 3,
                comment: "Decent place but the food was a bit bland."
            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                star: 4,
                comment: "Lovely spot with a vibrant atmosphere."
            },
            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                star: 5,
                comment: "Outstanding experience, highly recommended!"
            },
            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                star: 4,
                comment: "Great place to visit, will return soon."
            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                star: 3,
                comment: "Nice ambiance, but the service was slow."
            },
            {
                name: "Michael Nguyen",
                city: "Ho Chi Minh City",
                country: "Vietnam",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic food and very welcoming staff!"
            },
            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                star: 2,
                comment: "Not impressed with the food quality."
            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                star: 4,
                comment: "Great ambiance and lovely menu options."
            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                star: 5,
                comment: "Wonderful experience and delicious food!"
            }
        ]
    },
    {
        id: 22,
        image: "https://www.amirinia.com/wp-content/uploads/2023/05/VictoriaFallsBridge_0001.jpg",
        live: true,
        title: "Historical Bridge Walk",
        type: 'Guest House',
        host: {
            id: 10,
            image: "https://www.w3schools.com/w3images/bridge.jpg",
            name: "Luca",
            keyword: "gastronomic",
            city: "Florence",
            country: "Italy",
            totalYears: 15,
            identity: 111122334,
            number: 1112333,
            description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, there’s no adventure too big for me to conquer. Whether it’s hanging ten on a surfboard or rocking the runway, I’m always down for a new epic experience, especially if my BFFs are along for the ride..",
            places: [21, 22]
        },
        hostId: 10,
        soldOut: true,
        city: "London",
        country: "UK",
        guestrooms: 1,
        beds: 1,
        bedrooms: 1,
        baths: 1,
        closingDate: "2024-10-10",
        activities: [
            { icon: IconMap.FaRegStar, name: "Bridge Tour", description: "Take a guided tour of historical bridges." },
            { icon: IconMap.CiTrophy, name: "Historical Insights", description: "Learn about the history and significance of each bridge." },
            { icon: IconMap.BsJournalAlbum, name: "Photography Session", description: "Capture stunning photos of historic bridges." },
            { icon: IconMap.TbBeach, name: "Cultural Context", description: "Understand the cultural impact of the bridges." },
            { icon: IconMap.CiHeart, name: "Q&A Session", description: "Engage in a Q&A session with the guide." },
        ],
        shortDescription: "Discover the history of iconic bridges with a guided walk and photography opportunities.",
        whatYoullDo: "Tour historic bridges, learn about their significance, capture photos, and engage in a Q&A session.",
        location: { latitude: 51.5074, longitude: -0.1278 },
        images: [
            "https://www.amirinia.com/wp-content/uploads/2023/05/VictoriaFallsBridge_0001.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSq9Y1AOSjkMc0tQrKNa_dGlE4zDDpPNatkw&s",
            "https://www.victoriafalls-guide.net/image-files/bridge-tour-8.jpg",
            "https://www.victoriafalls-guide.net/image-files/bridge-tour-8.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH8J4TbkZ-ocVtQKwrgRP7YoYbQvC_5EOyBytxDA9IxRqgfVKG-o8TEoKXXD4WmQPMukY&usqp=CAU"
        ],
        amenities: [
            { icon: IconMap.PiMountains, name: "Mountain view" },
            { icon: IconMap.GiGardeningShears, name: "Garden view" },
            { icon: IconMap.CiWifiOn, name: "Wifi" },
            { icon: IconMap.BsPersonWorkspace, name: "Dedicated workspace" },

            { icon: IconMap.PiHairDryerBold, name: "Hair dryer " },
            { icon: IconMap.MdCleaningServices, name: "Cleaning products" },
            { icon: IconMap.LiaWineBottleSolid, name: "Shampoo" },
            { icon: IconMap.LiaPrescriptionBottleSolid, name: "Conditioner " },

            { icon: IconMap.FaSoap, name: "Body soap" },
            { icon: IconMap.BiDetail, name: "Bidet " },
            { icon: IconMap.FaRegStar, name: "Hot water" },
            { icon: IconMap.GiLiquidSoap, name: "Shower gel" },

            { icon: IconMap.BiSolidWasher, name: "Washer " },
            { icon: IconMap.FaRegStar, name: "Essentials " },
            { icon: IconMap.TbHanger, name: "Hangers" },
            { icon: IconMap.GiPillow, name: "Extra pillows and blankets " },

            { icon: IconMap.TbIroning1, name: "Iron " },
            { icon: IconMap.BiCloset, name: "closet " },
            { icon: IconMap.FaTv, name: "HDTV" },
            { icon: IconMap.FaHotTub, name: "Ceiling fan" },
            { icon: IconMap.FaFan, name: "Portable fans" },
            { icon: IconMap.TbTheater, name: "Portable heater" },
            { icon: IconMap.CgSmartHomeRefrigerator, name: "Refrigerator" },

            { icon: IconMap.MdMicrowave, name: "Microwave" },
            { icon: IconMap.GiCampCookingPot, name: "Cooking basics" },
            { icon: IconMap.BiDish, name: "Dishes and silverware" },
            { icon: IconMap.GiGasStove, name: "Gas stove" },
            { icon: IconMap.GiWaterFlask, name: "Hot water kettle" },
            { icon: IconMap.GiToaster, name: "Toaster" },
            { icon: IconMap.FaBowlRice, name: "Rice maker" },
            { icon: IconMap.MdBrunchDining, name: "Dining table" },
            { icon: IconMap.GiCryptEntrance, name: "Private entrance" },
            { icon: IconMap.MdOutlineBalcony, name: "Private patio or balcony" },
            { icon: IconMap.GiUndergroundCave, name: "backyard" },
            { icon: IconMap.TbBeach, name: "Outdoor" },
            { icon: IconMap.BsJournalAlbum, name: "Outdoor dining area" },
            { icon: IconMap.FaParking, name: "parking" },


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                star: 5,
                comment: "Excellent service and wonderful experience!"
            },
            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                star: 4,
                comment: "Great place, but a bit pricey."
            },
            {
                name: "Carlos García",
                city: "Madrid",
                country: "Spain",
                date: "2024-08-27",
                star: 3,
                comment: "Average experience, not as good as expected."
            },
            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                star: 5,
                comment: "Fantastic! Will definitely come back."
            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                star: 2,
                comment: "Disappointing. Service could be improved."
            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                star: 4,
                comment: "Good atmosphere and friendly staff."
            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                star: 5,
                comment: "Amazing food and great service!"
            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                star: 3,
                comment: "Decent place but the food was a bit bland."
            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                star: 4,
                comment: "Lovely spot with a vibrant atmosphere."
            },
            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                star: 5,
                comment: "Outstanding experience, highly recommended!"
            },

        ]
    },
];

export default Cards;
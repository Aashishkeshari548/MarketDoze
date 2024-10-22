const sampleListings = [
  {
    title: "Keshari house",
    description:"Civil Lines :Known for modern infrastructure, high-rise buildings, and shopping malls, this area serves as the city’s commercial hub. It houses government offices, restaurants, and business centers.",
    image:
      "https://res.cloudinary.com/dalaqu8f9/image/upload/v1729574172/zabfq5kjn2ih87uubhcq.jpg",

    price: 1500,
    location: "Civil Lines, prayagraj",
    country: "India",
  },
  {
    title: "Shiv house",
    description:
      "Katra :A bustling marketplace near Civil Lines, Katra is known for shops selling clothes, electronics, and household items. It’s also popular for street food and affordable eateries.!",
    image:
      "https://res.cloudinary.com/dalaqu8f9/image/upload/v1729574169/thgqkc9dabhwbwqwxavk.jpg",

    price: 1200,
    location: "Katra, prayagraj",
    country: "India",
  },
  {
    title: "shrama Town",
    description:
      "Chowk :The heart of the old city, Chowk is famous for its traditional bazaars offering handicrafts, jewelry, and sweets. It reflects the heritage of the Mughal era.",
    image:
      "https://res.cloudinary.com/dalaqu8f9/image/upload/v1729574170/ug0pia90bgdy2tllcyev.jpg",

    price: 1000,
    location: "Chowk prayagraj",
    country: "India",
  },
  {
    title: "Ganga Town",
    description:
      "Daraganj: A peaceful residential area along the Ganga River, Daraganj is a popular destination for pilgrims. Known for its ghats and temples, it becomes especially vibrant during the Kumbh Mela.",
    image:
      "https://res.cloudinary.com/dalaqu8f9/image/upload/v1729574171/ppxxwnsttmotm1p943po.jpg",
    price: 1300,
    location: "Daraganj, Prayagraj",
    country: "India",
  },
  {
    title: "Ashish Cafe",
    description:
      "Kareli: Also called 'Officer's Colony,' Kareli is a well-planned residential area known for wide streets, parks, and markets. It is favored by families and officials due to its organized infrastructure.",
    image:
      "https://res.cloudinary.com/dalaqu8f9/image/upload/v1729574170/kafz7hkfuhefto6g68fb.jpg",
    price: 1800,
    location: "Kareli, Prayagraj",
    country: "India",
  },
  {
    title: "Health Central",
    description:
      "Georgetown: An upscale neighborhood with numerous hospitals, clinics, and pharmacies. Georgetown is popular for its medical services and well-maintained residential spaces.",
    image:
      "https://res.cloudinary.com/dalaqu8f9/image/upload/v1729574170/dgalvsix8lyvzflsvwxe.jpg",
    price: 2200,
    location: "Georgetown, Prayagraj",
    country: "India",
  },
  {
    title: "Colonial Charm",
    description:
      "Lukergunj: Known for its Victorian-era bungalows, this area offers a touch of colonial charm. It’s a peaceful locality with posh residences and lush gardens.",
    image:
        "https://res.cloudinary.com/dalaqu8f9/image/upload/v1729574172/m9fb5kymoyfuln2kqbfe.jpg",
      
    price: 2500,
    location: "Lukergunj, Prayagraj",
    country: "India",
  },
  {
    title: "Bustling Streets",
    description:
      "Khuldabad: A densely populated residential area bustling with activity. It has a mix of old and modern establishments, making it a lively part of the city.",
    image:
      "https://res.cloudinary.com/dalaqu8f9/image/upload/v1729574170/pcgw7oqr05urvs7vqbvf.jpg",
    price: 1600,
    location: "Khuldabad, Prayagraj",
    country: "India",
  },
  {
    title: "Student Hub",
    description:
      "Allengunj: Located near the University of Allahabad, Allengunj is a student-friendly area with affordable rentals, libraries, and cafes.",
    image:
      "https://res.cloudinary.com/dalaqu8f9/image/upload/v1729574170/qjsaecagcmvfaflcaz75.jpg",
    price: 900,
    location: "Allengunj, Prayagraj",
    country: "India",
  },
  {
    title: "Ridhi Sidhi House",
    description:
      "Meergunj: Known for its vibrant street markets and residential neighborhoods, it also has a reputation as the city's red-light district.",
    image:
      "https://res.cloudinary.com/dalaqu8f9/image/upload/v1729574169/lerab2xvflwofowfilk5.jpg",
    price: 700,
    location: "Meergunj, Prayagraj",
    country: "India",
  },
  {
    title: "Central Charm",
    description:
      "Mutthiganj: A central locality with easy access to temples and historical sites, Mutthiganj has old-world charm and a bustling environment.",
    image:
      "https://res.cloudinary.com/dalaqu8f9/image/upload/v1729574168/ods3j9bwaohqivtcemv5.jpg",
    price: 1400,
    location: "Mutthiganj, Prayagraj",
    country: "India",
  },
  {
    title: "Colonial Roots",
    description:
      "Johnstongunj: This residential area has old colonial-style homes, offering a glimpse of the city’s rich past with a serene living experience.",
    image:
      "https://res.cloudinary.com/dalaqu8f9/image/upload/v1729574170/ug0pia90bgdy2tllcyev.jpg",
    price: 2000,
    location: "Johnstongunj, Prayagraj",
    country: "India",
  },
  {
    title: "Peaceful Living",
    description:
      "Govindpur: A calm and serene residential neighborhood, ideal for those seeking peaceful living away from the city’s chaos.",
    image:
      "https://res.cloudinary.com/dalaqu8f9/image/upload/v1729574169/unin8ouaodpvco0dgwau.jpg",
    price: 1700,
    location: "Govindpur, Prayagraj",
    country: "India",
  },
  {
    title: "Restro",
    description:
      "Alopibagh: Famous for the Alopi Devi Temple, a prominent pilgrimage site. The area attracts devotees and offers a spiritual vibe.",
    image:
      "https://res.cloudinary.com/dalaqu8f9/image/upload/v1729574169/shuwotuovct7z8qr5vuh.jpg",
    price: 1100,
    location: "Alopibagh, Prayagraj",
    country: "India",
  },
  {
    title: "Upscale Retreat",
    description:
      "Tagore Town: A posh residential area known for its quiet streets and beautiful houses, popular among professors and intellectuals.",
    image:
      "https://res.cloudinary.com/dalaqu8f9/image/upload/v1729574170/trkvzzpuisyjrjddgtko.jpg",
    price: 2800,
    location: "Tagore Town, Prayagraj",
    country: "India",
  },
  {
    title: "Transport Hub",
    description:
      "Rambagh: Known for the Rambagh Railway Station, it’s a busy locality with shops, eateries, and transport facilities.",
    image:
      "https://res.cloudinary.com/dalaqu8f9/image/upload/v1729574171/ppxxwnsttmotm1p943po.jpg",
    price: 1200,
    location: "Rambagh, Prayagraj",
    country: "India",
  },
  {
    title: "Administrative Enclave",
    description:
      "Myorabad: Home to several government offices, Myorabad offers a blend of residential and administrative importance.",
    image:
      "https://res.cloudinary.com/dalaqu8f9/image/upload/v1729574170/kafz7hkfuhefto6g68fb.jpg",
    price: 1900,
    location: "Myorabad, Prayagraj",
    country: "India",
  },
  {
    title: "Developing Area",
    description:
      "Teliyargunj: A growing area with a mix of residential and educational facilities. Its proximity to the Ganga makes it a sought-after location.",
    image:
      "https://res.cloudinary.com/dalaqu8f9/image/upload/v1729574172/zabfq5kjn2ih87uubhcq.jpg",
    price: 1500,
    location: "Teliyargunj, Prayagraj",
    country: "India",
  },
  {
    title: "Are Hospital",
    description:
      "Naini: An industrial hub across the Yamuna River, Naini is known for factories and industrial establishments.",
    image:
      "https://res.cloudinary.com/dalaqu8f9/image/upload/v1729574172/m9fb5kymoyfuln2kqbfe.jpg",
    price: 1000,
    location: "Naini, Prayagraj",
    country: "India",
  },
  {
    title: "Modern Market",
    description:
      "Bharadwaj Puram: Located between Tagore Town and Daraganj, it offers modern shopping centers and a residential vibe.",
    image:
      "https://res.cloudinary.com/dalaqu8f9/image/upload/v1729574172/fp7czjooztguxsbejop8.jpg",
    price: 1300,
    location: "Bharadwaj Puram, Prayagraj",
    country: "India",
  },
  
 
];

module.exports = { data: sampleListings };

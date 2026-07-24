/* ============================================================
   Aurora Stays — site data
   Editing this file updates cards, review headers, maps,
   reviews grids and author pages across the whole site.
   ============================================================ */

const SITE = {
  brand: "Aurora Stays",
  brandMark: "Aurora",
  brandSuffix: "Stays",
  glyph: "✦",
  tagline: "A curated edit of Canada's most characterful places to stay, since 2016",
  established: 2016,
  email: "info@radiantcoastlodge.online",
  domain: "brooklyncay.onrender.com",
  phone: "+1 (902) 555-0163",
  city: "Halifax, Nova Scotia",
  intro: "An elegant, hand-picked edit of the Canadian hotels worth crossing the country for — boutique icons, grand mountain and coastal landmarks, and a couple of spirited resort escapes."
};

const AUTHORS = {
  "delphine-archer": {
    name: "Delphine Archer",
    slug: "delphine-archer",
    role: "Founding Editor",
    since: 2016,
    location: "Toronto, ON",
    bio: "Delphine founded Aurora Stays in 2016 after a decade reviewing hotels for national newspapers and glossy travel titles. She has a collector's eye for the details that separate the merely expensive from the genuinely luxurious — the weight of a door, the hush of a well-run lobby, the way a concierge anticipates a question before it is asked. She is drawn above all to boutique houses and grand heritage hotels, and she believes a great stay should feel less like a transaction and more like being welcomed into someone's very beautiful home.",
    focus: "Luxury & boutique hotels, design, service culture, heritage landmarks"
  },
  "theo-mensah": {
    name: "Theo Mensah",
    slug: "theo-mensah",
    role: "Resorts Writer",
    since: 2018,
    location: "Niagara Falls, ON",
    bio: "Theo joined Aurora Stays in 2018 and has since made the big resort his beat — the theatre of a gaming floor after dark, a headline act on a Saturday night, and the quiet, well-insulated suite that still lets you sleep through all of it. A former events producer, he reads a property like a stage manager, timing the check-in queue, testing the room service and hunting down the calm corner in the loudest building. He writes for the traveller who wants entertainment on tap without sacrificing a good night's rest.",
    focus: "Resort casinos, entertainment venues, waterfront & convention stays"
  },
  "sabine-leveille": {
    name: "Sabine Léveillé",
    slug: "sabine-leveille",
    role: "Coastal & Wellness Writer",
    since: 2019,
    location: "Victoria, BC",
    bio: "Sabine writes about the places where the land meets the water and the pace finally slows. Based on Vancouver Island, she came to Aurora Stays in 2019 from a wellness-magazine background and now covers seaside hotels, heritage spas and the rituals — afternoon tea, a harbour walk, a long soak — that turn a room booking into a proper restorative escape. She is generous with praise for genuine care and quietly unforgiving of properties that coast on a famous view alone.",
    focus: "Seaside & harbour hotels, spa & wellness, afternoon tea, slow travel"
  }
};

const HOTELS = {
  "pickering": {
    name: "Pickering Casino Resort", slug: "pickering", city: "Pickering", province: "Ontario",
    stars: 4, guestRating: 4.3, reviewCount: 1400, casino: true,
    address: "888 Durham Live Avenue, Pickering, ON L1W 0C1, Canada", phone: "+1 289-539-0552",
    lat: 43.839309, lng: -79.054092, img: "assets/img/pickering.jpg",
    author: "theo-mensah",
    tags: ["Casino Resort", "The Arena", "Near Toronto"],
    short: "A sleek, modern casino resort on Toronto's eastern edge, pairing a vast 24/7 gaming floor and a 2,500-seat arena with a genuinely calm, well-kept hotel tower.",
    amenities: ["Casino: 4,000+ slots & 24/7 poker", "'The Arena' 2,500-seat venue", "275-room modern hotel tower", "Indoor pool & fitness centre", "Copperhorn steakhouse & Sun Sui Wah", "Free covered parking", "Room service & business centre", "Pet-friendly rooms"],
    reviews: [
      { name: "Eric", rating: 5, date: "Jul 2026", text: "Front desk staff was extremely helpful and polite; great service throughout." },
      { name: "Ted", rating: 5, date: "May 2026", text: "Wonderful, modern hotel with friendly, helpful staff, though it gets very busy on weekends." },
      { name: "Jennifer", rating: 5, date: "May 2026", text: "Clean rooms and a warm, friendly atmosphere; staff were especially kind to my son." },
      { name: "Victoria", rating: 5, date: "Jun 2026", text: "Very clean, accommodating staff, and excellent overall service quality." },
      { name: "Jill", rating: 5, date: "Jan 2026", text: "Management fixed a booking error and accommodated an early check-in for our wedding — great customer care." },
      { name: "Tanya", rating: 5, date: "Nov 2025", text: "Exceptional service from the bellhop, clean and high-quality rooms, and responsive staff." },
      { name: "Karen", rating: 4, date: "Dec 2025", text: "Really nice rooms and comfortable beds, but it's a long walk from the parking lot to the hotel." },
      { name: "David", rating: 3, date: "Nov 2025", text: "Good casino and dining options, but you have to pre-book a pool time slot to swim, which was inconvenient." },
      { name: "RoWa", rating: 2, date: "Jun 2026", text: "Confusing parking garage with no directional signs, AC problems, and a dusty room." },
      { name: "A. H.", rating: 1, date: "Jan 2026", text: "Front desk refused a late checkout and housekeeping was poor over a long weekend due to understaffing." }
    ]
  },
  "halifax-marriott": {
    name: "Halifax Marriott Harbourfront", slug: "halifax-marriott", city: "Halifax", province: "Nova Scotia",
    stars: 4, guestRating: 4.2, reviewCount: 1700, casino: true,
    address: "1919 Upper Water Street, Halifax, NS B3J 3J5, Canada", phone: "+1 902-421-1700",
    lat: 44.651162, lng: -63.573450, img: "assets/img/halifax-marriott.jpg",
    author: "theo-mensah",
    tags: ["Casino Connected", "Harbourfront", "Boardwalk"],
    short: "Halifax's harbourfront grande dame, opening straight onto the boardwalk and connected directly to Casino Nova Scotia — a polished base for business and a lively night out alike.",
    amenities: ["Directly connected to Casino Nova Scotia", "Indoor pool & whirlpool", "Fitness centre", "Harbourfront dining & lounge", "Waterfront boardwalk access", "Marriott Club executive lounge", "On-site parking / valet", "Pet-friendly rooms"],
    reviews: [
      { name: "Patricia", rating: 5, date: "Jul 2026", text: "This Marriott has it all: a great harbourfront location, outstanding staff, and superior amenities." },
      { name: "Stephanie", rating: 5, date: "Jul 2026", text: "Fantastic location with exceptional staff, and the dining room was outstanding." },
      { name: "David", rating: 5, date: "Jul 2026", text: "We were very impressed with the Marriott Club lounge; Jenn and her team were excellent." },
      { name: "Curt", rating: 5, date: "Jun 2026", text: "The hotel was very nice and comfortable, and the staff were friendly and helpful." },
      { name: "Tom", rating: 5, date: "Jul 2026", text: "Loved our two-night stay; the room was spacious and comfortable with a large work space." },
      { name: "Andrew", rating: 4, date: "Jul 2026", text: "Best location, with easy access to the boardwalk, though the elevators were a bit of a concern." },
      { name: "A. F.", rating: 4, date: "Jan 2026", text: "A good option for both business and leisure visits to Halifax, and good value for the money." },
      { name: "Franklin", rating: 3, date: "Apr 2026", text: "Not quite up to Marriott standards; our room was small and had some soundproofing issues." },
      { name: "ir14", rating: 2, date: "Jul 2026", text: "No valet assistance on arrival; honestly one of the more bizarre hotel arrivals I've had." },
      { name: "Wayne", rating: 1, date: "Jun 2026", text: "They told us they had given our room away and only offered a room with two double beds instead." }
    ]
  },
  "banff-springs": {
    name: "Fairmont Banff Springs", slug: "banff-springs", city: "Banff", province: "Alberta",
    stars: 5, guestRating: 4.4, reviewCount: 9900, casino: false,
    address: "405 Spray Avenue, Banff, AB T1L 1J4, Canada", phone: "+1 403-762-2211",
    lat: 51.16444, lng: -115.56194, img: "assets/img/banff-springs.jpg",
    author: "delphine-archer",
    tags: ["Castle in the Rockies", "National Historic Site", "Golf & Spa"],
    short: "A châteauesque 'castle in the Rockies' set deep inside Banff National Park — a National Historic Site ringed by mountains, with a storied spa and 27 holes of golf.",
    amenities: ["Willow Stream Spa", "Indoor & heated outdoor pools", "27-hole championship golf", "Multiple restaurants & afternoon tea", "Fairmont Gold floor & lounge", "Guided mountain excursions", "Kids' club & bowling", "Wedding & event facilities"],
    reviews: [
      { name: "Martin", rating: 5, date: "Jul 2026", text: "We raised a concern about our first room and staff immediately moved us to a better suite. Genuinely impressed by how responsive management was." },
      { name: "Peter", rating: 5, date: "Jul 2026", text: "Exceptional staff from the front desk to the spa, plus a great Fairmont Gold lounge and a wonderful tour guide who made the stay memorable." },
      { name: "Rebecca", rating: 5, date: "Jul 2026", text: "The guided excursions to Lake Louise and Moraine Lake were the highlight — I can't recommend the tour guide enough." },
      { name: "Seema", rating: 5, date: "Jul 2026", text: "A family favourite thanks to the kids' club, bowling and the gorgeous outdoor pool. Great for young children." },
      { name: "Joanne", rating: 5, date: "Jul 2026", text: "Loved the Italian restaurant and the stunning river and mountain views, though the bathroom was very small." },
      { name: "Sue", rating: 5, date: "Jun 2026", text: "Remarkable, attentive staff and a knowledgeable guide. The historic charm and mountain views more than outweigh the smaller rooms." },
      { name: "MN", rating: 4, date: "Jun 2026", text: "Spectacular views, but I was disappointed by the indoor pool conditions and a rather mediocre afternoon tea." },
      { name: "jbliv", rating: 3, date: "Jun 2026", text: "The tiniest bathroom I've seen in a luxury hotel — but the Fairmont Gold service, dining and spa were outstanding." },
      { name: "Jagath", rating: 1, date: "May 2026", text: "Serious cleanliness problems with the bathrooms in more than one room and poor communication." },
      { name: "Basil", rating: 4, date: "Jun 2025", text: "Rooms and bathrooms are small and the décor a little dated — but still a memorable stay." }
    ]
  },
  "hazelton": {
    name: "The Hazelton Hotel", slug: "hazelton", city: "Toronto (Yorkville)", province: "Ontario",
    stars: 5, guestRating: 4.7, reviewCount: 1780, casino: false,
    address: "118 Yorkville Avenue, Toronto, ON M5R 1C2, Canada", phone: "+1 416-963-6300",
    lat: 43.6707896, lng: -79.3936765, img: "assets/img/hazelton.jpg",
    author: "delphine-archer",
    tags: ["Boutique 5-Star", "Yorkville", "Private Cinema"],
    short: "Toronto's discreet boutique five-star, tucked into chic Yorkville — oversized marble-clad rooms, a private screening cinema and a hush that feels more private residence than hotel.",
    amenities: ["ONE Restaurant & bar/lounge", "Valmont spa", "Indoor pool & fitness centre", "Private screening cinema", "Valet parking with EV charging", "Oversized rooms & marble bathrooms", "24-hour concierge & in-room dining", "Steps from luxury shopping & the ROM"],
    reviews: [
      { name: "Thomas", rating: 5, date: "May 2026", text: "A flawless stay; the lobby was beautiful and the staff consistently pleasant, with a genuinely peaceful atmosphere." },
      { name: "Ryan", rating: 5, date: "May 2025", text: "Booked for my wife's birthday and the personalized touches were impeccable; the rooms are massive." },
      { name: "Jeff", rating: 5, date: "Aug 2025", text: "The valet even offered complimentary EV charging; the sheets were the softest I've felt — more mansion than hotel." },
      { name: "Geoffrey", rating: 5, date: "Dec 2025", text: "The corner suite was luxurious with an oversized marble bath, and meals at ONE Restaurant were delicious." },
      { name: "Jared", rating: 5, date: "Dec 2025", text: "Most comfortable bed ever; the concierge secured show tickets and dinner reservations effortlessly." },
      { name: "Carlene", rating: 5, date: "Feb 2026", text: "Five-star comfort with spa-like bathrooms, and the night manager made a late check-in completely seamless." },
      { name: "Sheryl", rating: 5, date: "Feb 2026", text: "Beautifully maintained with attention to detail everywhere; staff even helped source bubble wrap for my luggage." },
      { name: "Pia", rating: 5, date: "Jul 2026", text: "Perfect Yorkville location and spacious, luxurious rooms; the warmth of the staff exceeded expectations." },
      { name: "Michael", rating: 5, date: "Jul 2026", text: "Loved the spa, and the reception team were warm and genuinely helpful throughout." },
      { name: "Valentina", rating: 4, date: "Jan 2026", text: "Front-desk service was excellent, but breakfast at ONE Restaurant was a little underwhelming." }
    ]
  },
  "empress": {
    name: "Fairmont Empress", slug: "empress", city: "Victoria", province: "British Columbia",
    stars: 5, guestRating: 4.5, reviewCount: 5600, casino: false,
    address: "721 Government Street, Victoria, BC V8W 1W5, Canada", phone: "+1 250-384-8111",
    lat: 48.42185, lng: -123.36797, img: "assets/img/empress.jpg",
    author: "sabine-leveille",
    tags: ["Inner Harbour Icon", "Afternoon Tea", "Since 1908"],
    short: "The ivy-draped icon of Victoria's Inner Harbour, serving its celebrated afternoon tea since 1908 — grand, romantic and steps from the water's edge.",
    amenities: ["Signature traditional Afternoon Tea", "Q at the Empress restaurant & Q Bar", "Willow Stream Spa", "Indoor heated pool & hot tub", "Fairmont Gold floor & lounge", "Inner Harbour views", "Event & wedding spaces", "Valet parking & concierge"],
    reviews: [
      { name: "Margaret", rating: 5, date: "Jun 2025", text: "A classic five-star experience that fully lives up to its reputation; elegant, comfortable, and steeped in history." },
      { name: "David", rating: 5, date: "May 2025", text: "The staff were amazing and genuinely helpful, and the views, fireplaces and service were all exemplary." },
      { name: "Jennifer", rating: 5, date: "Sep 2024", text: "The Afternoon Tea was perfection — flaky scones, house-made jam, honey from the hotel's own beehives." },
      { name: "Thomas", rating: 5, date: "Jun 2024", text: "Perfect location right on the Inner Harbour; parking was easy and the whole property is stunning." },
      { name: "James", rating: 5, date: "Oct 2023", text: "An unforgettable stay that honours its heritage while delivering modern comforts; the spa and pool were a highlight." },
      { name: "Susan", rating: 4, date: "Apr 2025", text: "Beautiful large room with a gorgeous harbour view, though the space feels every bit its historic age." },
      { name: "Linda", rating: 4, date: "Jul 2024", text: "Loved the historic charm and friendly staff, but the bathroom was surprisingly small even in a suite." },
      { name: "Robert", rating: 3, date: "Mar 2025", text: "Good but not great for the price; a lovely building, but the room and bathroom felt a bit dated." },
      { name: "Karen", rating: 3, date: "May 2024", text: "Mixed feelings — the hotel is grand and beautiful, but service was inconsistent on our stay." },
      { name: "Michael", rating: 2, date: "Aug 2024", text: "The famous Afternoon Tea felt overpriced for what it was, with add-ons pushing the cost up." }
    ]
  }
};

/* Order hotels appear on the homepage */
const HOTEL_ORDER = ["hazelton", "banff-springs", "empress", "pickering", "halifax-marriott"];

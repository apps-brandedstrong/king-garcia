const kg = id => `https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/PHHVVXAfuN0jehhqMkIR/media/${id}.jpg`

// Recent Works (16) — featured, shown first
const recentIds = [
  '69399f74e03e9d30f6ab0c14','69399f74ea1b12f00c22fc1c','69399f74f6cae90982df3b4f',
  '69399f74acebf7b6f500970b','69399f74eeed04009da262a5','69399f74f6cae93216df3b53',
  '69399f74169a4283331c846f','69399f74ea1b1289fb22fc1d','69399f74d1810d81e86b4d8c',
  '69399f74b26327d102995138','69399f74e7a09f77a2f6779c','69399f74169a42328e1c8470',
  '69399f74e7a09ffc24f6779b','69399f74eac0a85d65ce13ab','69399f74d1810d44466b4d8d',
  '69399f74e7a09fbe12f6779d',
]

// More Works (216)
const moreIds = [
  '6939874aacebf737e4fc0258','6939874aacebf721d5fc0240','6939874a169a4249af1826d4',
  '6939874a169a4271221826db','6939874bd1810d41a266dc81','6939874be03e9d0dada69820',
  '6939874be7a09f4941f1ee67','6939874aea1b12ffcf1e7a99','6939874aeac0a82f2cc99016',
  '6939874aeeed04341d9def14','6939874aacebf7b3a2fc025f','6939874ae03e9d1622a697f0',
  '6939874aacebf7a590fc025e','6939874ab263276ae694d5cd','6939874aacebf77b92fc0247',
  '6939874beeed047d919def23','6939874af6cae94fa7daaf0f','6939874bea1b1295851e7aaf',
  '6939874aeac0a8e472c9901f','6939874aeac0a8484ac99027','6939874aeac0a87652c99012',
  '6939874ae03e9d379aa697fd','6939874aeeed04ea299def0e','6939874a169a4241e71826d3',
  '6939874b169a427a871826f2','6939874aeac0a83dc0c9902c','6939874ab26327737294d5bf',
  '6939874aeac0a8f97dc9901d','6939874ad1810de23666dc78','6939874be7a09f1f3cf1ee79',
  '6939874aeac0a8062ac9901e','6939874ab263271d2494d5cb','6939874aeac0a89131c99029',
  '6939874ae7a09f2384f1ee58','6939874bea1b120ff61e7ab2','6939874ae7a09f25dcf1ee5d',
  '6939874ab26327b3bc94d5bc','6939874bf6cae98caadaaf30','6939874ab263273f1e94d5b2',
  '6939874bacebf78e98fc0282','6939874aeeed04bb719def12','6939874aeac0a82a2fc9902a',
  '6939874aea1b12e61e1e7a9f','6939874b169a4226bc1826e7','6939874be03e9db5daa69835',
  '6939874be03e9d0e9aa69836','6939874ae03e9d05a8a6980b','6939874b169a423bd41826e9',
  '6939874aea1b12238c1e7aa4','6939874bea1b1274281e7ab0','6939874ab26327422094d5cc',
  '6939874bd1810d777666dc8b','6939874bea1b1293311e7aae','6939874ab263273d9994d5bb',
  '6939874ae03e9dcb03a697f8','6939874ad1810d4f4766dc70','6939874ad1810d06eb66dc76',
  '6939874aeac0a8cc8dc9902b','6939874bea1b126afa1e7abd','6939874ae03e9d329ba697f4',
  '6939874ab263277b3094d5b3','6939874be03e9d13eda6982e','6939874b169a428adf1826f0',
  '6939874af6cae9f1a8daaf1e','6939874a169a424f2f1826d5','6939874aeeed0439b89def17',
  '6939874aea1b12a1711e7aa5','6939874bd1810d0b1966dc99','6939874bacebf79c8afc028a',
  '6939874aea1b1297471e7a9a','6939874ae03e9d418ca697f6','6939874bea1b125d611e7ab1',
  '6939874bea1b12742c1e7ab8','6939874bf6cae99856daaf31','6939874ae03e9d5688a697f7',
  '6939874aea1b126b801e7a9b','6939874b169a4213751826e6','6939874aacebf77a01fc0265',
  '6939874aeac0a810e0c99019','6939874ae7a09fbfe7f1ee4a','6939874b169a42cd741826f3',
  '6939874ae7a09f5b31f1ee53','6939874aacebf7204ffc025b','6939874aeac0a8c3c1c99026',
  '6939874aea1b125dcc1e7aa9','6939874ae7a09fe6def1ee55','6939874ae03e9da409a69812',
  '6939874aacebf74253fc0266','6939874aacebf7f8d9fc025a','6939874bb26327eb6694d5e8',
  '6939874be7a09fa638f1ee66','6939874ae7a09f690cf1ee52','6939874ab263274b6c94d5c6',
  '6939874bacebf729fafc0283','6939874bf6cae9663adaaf2d','6939874beac0a83e2dc9903b',
  '6939874af6cae9c6c6daaf1f','6939874bacebf71f0dfc026d','6939874aeac0a8c208c99025',
  '6939874aeac0a87fa6c99028','6939874ab26327635694d5ca','6939874ae7a09f1126f1ee4d',
  '6939874aacebf72ee7fc024e','6939874bd1810d26a766dc7f','6939874ad1810d593366dc6f',
  '6939874af6cae95b94daaf19','6939874ae7a09f666cf1ee4c','6939874ae7a09f0045f1ee57',
  '6939874ab26327472a94d5be','6939874a169a42f68f1826d6','6939874ae7a09ffcedf1ee4b',
  '6939874aeac0a82a89c9901b','6939874af6cae923e2daaf1a','6939874bea1b129a8e1e7abc',
  '6939874aea1b12100a1e7aa8','6939874ae03e9d2ad2a697f9','6939874ad1810dfb3166dc71',
  '6939874a169a423c901826dc','6939874af6cae9405bdaaf13','6939874bd1810d845d66dc90',
  '6939874ae7a09f4b74f1ee54','6939874aea1b121df81e7aa7','6939874ad1810d00b266dc72',
  '6939874ab263272c7994d5c0','6939874af6cae961afdaaf14','6939874aeac0a879c8c9901a',
  '6939874aacebf7974ffc025d','6939874bd1810d265566dc7d','6939874ad1810d7b3966dc79',
  '6939874ab26327f42c94d5c7','6939874ae7a09f39e9f1ee4e','6939874beeed04c77d9def1f',
  '6939874b169a429b221826ee','6939874beac0a88147c9902e','6939874bd1810d392c66dc94',
  '6939874bd1810d06a766dc92','6939874b169a4299831826f1','6939874bd1810d004466dc98',
  '6939874be7a09fc5d2f1ee75','6939874be03e9defaaa69826','6939874be7a09fa3eff1ee6c',
  '6939874be03e9d92efa6981c','6939874bacebf7807dfc0280','6939874be7a09f549df1ee65',
  '6939874bb26327604894d5e1','6939874be03e9da587a6981d','6939874b169a4230831826f5',
  '6939874beac0a83fa1c9903a','6939874be03e9d7563a6981f','6939874bd1810d0bd566dc93',
  '6939874bacebf7599dfc028b','6939874ae03e9d6fe4a6980a','6939874bea1b1257081e7aad',
  '6939874bea1b12e66c1e7abe','6939874ae03e9ddd6fa6981a','6939874be03e9d54a4a69834',
  '6939874beac0a89445c99035','6939874bd1810d5ce466dc91','6939874b169a42350d1826f4',
  '6939874bb26327acdd94d5ea','6939874bf6cae91e23daaf2a','6939874bf6cae93527daaf2b',
  '6939874be03e9d76f5a6981e','6939874bb2632708f494d5d8','6939874bea1b12cfc51e7ab9',
  '6939874bf6cae97a8ddaaf26','6939874bb26327731794d5e9','6939874be03e9d57b1a6981b',
  '6939874be03e9d7a18a69827','6939874ab263275d3294d5c9','6939874be03e9d9f6fa69825',
  '6939874beeed04a27d9def21','6939874be7a09fe6def1ee6b','6939874ae7a09f3647f1ee5e',
  '6939874beeed0470af9def22','6939874bacebf7b69dfc0292','6939874bb26327389c94d5da',
  '6939874bea1b1244f91e7ab7','6939874bf6cae9d340daaf2e','6939874beac0a849efc9903d',
  '6939874bacebf75664fc0281','6939874be03e9d3f43a69833','6939874b169a4225711826e8',
  '6939874beeed0464d49def27','6939874bd1810d030f66dc80','6939874bea1b1206ee1e7aba',
  '6939874bf6cae94358daaf2c','6939874b169a4240481826ef','6939874beeed040b0b9def20',
  '6939874bb263273a9b94d5d9','6939874ae7a09f1515f1ee56','6939874aeac0a82df0c99017',
  '6939874ad1810d9f0266dc6e','6939874aacebf77bccfc025c','6939874aacebf7a732fc0261',
  '6939874bd1810d168266dc7e','6939874aacebf711c3fc0260','6939874bd1810d317866dc9a',
  '6939874bacebf7197efc0293','6939874ae03e9dc9bba697f5','6939874a169a42464d1826dd',
  '6939874be7a09f6596f1ee6d','6939874ab26327767f94d5c8','6939874bea1b122fe41e7abb',
  '6939874bf6cae97b89daaf2f','6939874ae03e9d65dfa697fe','6939874beac0a87f8fc9903c',
  '6939874aacebf72780fc0259','6939874ce7a09f1281f1ee86','6939874aacebf7c158fc0256',
  '6939874aeac0a89893c99018','6939874b169a42da38182705','6939874ab26327073e94d5bd',
  '6939874ab26327a2ef94d5c1','6939874aacebf7a33ffc0257','6939874aeac0a8a789c99024',
]

export const galleryImgs = [...recentIds, ...moreIds].map(kg)

export const imgPrimary = kg(recentIds[0])
export const imgDetail  = kg(recentIds[1])
export const exotic1    = kg(recentIds[2])
export const exotic2    = kg(recentIds[3])
export const exotic3    = kg(recentIds[4])
export const exotic4    = kg(recentIds[5])
export const imgs       = recentIds.slice(0, 6).map(kg)

export const packageCopy = {
  gold: ['4 Layers of Ceramic Pro 9H', '1 Extra Layer of Ceramic Pro 9H Applied to Exposed Areas', '1 Layer of Ceramic Pro Top Coat Applied as a Top Coat', '1 Layer of Ceramic Pro Wheel & Caliper on Rims', '1 Layer of Ceramic Pro Glass on Front Side Windows and Windshield', 'Lifetime Warranty'],
  silver: ['1 Layer of Ceramic Pro 9H', '1 Extra Layer of Ceramic Pro 9H Applied to Exposed Areas', '1 Layer of Ceramic Pro Top Coat Applied as a Top Coat', '1 Layer of Ceramic Pro Wheel & Caliper on Rims', '1 Layer of Ceramic Pro Glass on Front Side Windows and Windshield', '5 Year Warranty'],
  bronze: ['1 Layer of Ceramic Pro Top Coat', '1 Layer of Ceramic Pro Wheel & Caliper on Rims and Plastic', '1 Layer of Ceramic Pro Glass on Front Side Windows and Windshield', '2 Year Warranty'],
  sport: ['1 Layer of Ceramic Pro Sport', '6 Month Warranty'],
}

function svc(title, h1, intro, img, bullets) {
  return { title, h1, intro, img, bullets, type: 'service' }
}

export const pages = {
  '/': {
    title: 'Auto Detailing, Ceramic Coating & PPF in Phoenix, AZ | King Garcia Auto Detail',
    h1: 'Premium Auto Detailing, Ceramic Coatings & Paint Protection Film in Phoenix, AZ',
    type: 'home',
    img: imgPrimary,
  },
  '/about/': svc('About King Garcia Auto Detail LLC | Phoenix, AZ', 'Family-Owned Auto Detail Shop in Phoenix, AZ', 'KING GARCIA AUTO DETAIL LLC has served Phoenix drivers since 2015 with professional detailing, coatings, paint protection film, tint, motorcycle services, and marine protection. With 15+ years of experience, the team focuses on shop-based service, careful workmanship, and clear free estimates.', imgDetail, ['Family-owned business', 'Since 2015', '15+ years of experience', 'All services performed at the Phoenix shop']),
  '/detailing/': svc('Auto Detailing in Phoenix, AZ | King Garcia Auto Detail', 'Professional Auto Detailing in Phoenix, AZ', 'Premium interior and exterior detailing for vehicles that need a cleaner, sharper, better-protected finish. Services are performed at our Phoenix shop with a focus on paint, trim, wheels, glass, and overall presentation.', exotic1, ['Interior and exterior detailing', 'Paint gloss enhancement', 'Wheel and trim care', 'Shop-based service']),
  '/cars/': svc('Car Detailing in Phoenix, AZ | Interior, Exterior & Paint Prep | King Garcia', 'Sharp Finish, Real Protection. Car Detailing in Phoenix.', 'Detailing for daily drivers, luxury cars, performance vehicles, and exotics. King Garcia Auto Detail restores a crisp, polished appearance and prepares vehicles for coating, film, or tint services — all performed at the Phoenix shop.', exotic2, ['Interior and exterior detailing', 'Paint decontamination & prep', 'Wheel and trim care', 'Protection-ready finish']),
  '/motorcycles/': svc('Motorcycle Detailing in Phoenix, AZ | King Garcia Auto Detail', 'Every Surface. Every Detail. Motorcycle Detailing in Phoenix.', 'Precision detailing for motorcycles with careful attention to painted panels, chrome, wheels, trim, and tight engine areas that require patient, skilled hands.', exotic3, ['Painted panels', 'Chrome and trim care', 'Wheel detailing', 'Ceramic protection options']),
  '/boats/': svc('Boat Detailing & Marine Protection in Phoenix, AZ | King Garcia Auto Detail', 'Marine Protection Built for Arizona Conditions. Boats & Watercraft.', 'Marine detailing and Ceramic Pro Marine options for boats dealing with Arizona\'s extreme UV, mineral deposits from lake water, and seasonal storage challenges.', exotic4, ['Marine detailing', 'Gelcoat surface care', 'Ceramic Pro Marine options', 'Free estimate guidance']),
  '/ceramic-pro-coatings/': svc('Ceramic Coating in Phoenix, AZ | Ceramic Pro Coatings', 'Ceramic Pro Coatings Available at King Garcia', 'Ceramic Pro coating packages available at KING GARCIA AUTO DETAIL LLC use nano-ceramic surface protection to add gloss, support easier maintenance, and help protect painted surfaces from everyday contaminants.', imgDetail, ['Ceramic Pro Gold Package', 'Ceramic Pro Silver Package', 'Ceramic Pro Bronze Package', 'Ceramic Pro Sport Package', 'Wheel & Caliper', 'Marine']),
  '/ceramic-pro-gold-package/': svc('Ceramic Pro Gold Package in Phoenix, AZ | King Garcia Auto Detail', 'Ceramic Pro Gold Package', 'The Gold Package is the premium Ceramic Pro coating package for owners who want head-to-toe protection and long-term gloss. It includes multiple layers of Ceramic Pro 9H, Top Coat, Wheel & Caliper, and Glass applications.', imgPrimary, packageCopy.gold),
  '/ceramic-pro-silver-package/': svc('Ceramic Pro Silver Package in Phoenix, AZ | King Garcia Auto Detail', 'Ceramic Pro Silver Package', 'The Silver Package is one of the most popular Ceramic Pro coating options. It begins with Ceramic Pro 9H, adds a Top Coat layer for shine, includes Wheel & Caliper on rims, and Glass on the front side windows and windshield.', imgDetail, packageCopy.silver),
  '/ceramic-pro-bronze-package/': svc('Ceramic Pro Bronze Package in Phoenix, AZ | King Garcia Auto Detail', 'Ceramic Pro Bronze Package', 'The Bronze Package is a strong value option for vehicle owners who want Ceramic Pro surface protection, gloss, easier maintenance, and added protection for wheels and glass.', exotic1, packageCopy.bronze),
  '/ceramic-pro-sport-package/': svc('Ceramic Pro Sport Package in Phoenix, AZ | King Garcia Auto Detail', 'Ceramic Pro Sport Package', 'The Sport Package is an entry point into Ceramic Pro coating protection. It adds Ceramic Pro Sport over the paintwork for a cleaner, glossier surface that outperforms traditional wax.', exotic2, packageCopy.sport),
  '/ceramic-pro-wheel-caliper/': svc('Ceramic Pro Wheel & Caliper Coating in Phoenix, AZ', 'Ceramic Pro Wheel & Caliper', 'Ceramic Pro Wheel & Caliper is designed for wheels and calipers exposed to brake dust, road grime, and heat. It helps surfaces stay cleaner longer and makes maintenance easier.', exotic3, ['Wheel faces and barrels', 'Caliper protection', 'Hydrophobic surface behavior', 'Easier cleaning']),
  '/ceramic-pro-marine/': svc('Ceramic Pro Marine Coating in Phoenix, AZ', 'Ceramic Pro Marine', 'Ceramic Pro Marine options help protect boats and marine surfaces with a glossy, easier-to-maintain finish built for harsh exposure.', exotic4, ['Marine surface protection', 'Gloss enhancement', 'Easier cleanup', 'Boat detailing support']),
  '/color-shift/': svc('Color Shift Services in Phoenix, AZ | King Garcia Auto Detail', 'Color Shift', 'Color shift protection and styling options give vehicles a more dramatic appearance while supporting the protective goals of a premium automotive build.', exotic2, ['Color-shift styling', 'Exotic vehicle appearance', 'PPF-related visual upgrades', 'Estimate-based recommendations']),
  '/paint-protection-films/': svc('Paint Protection Films in Phoenix, AZ | PPF Installation', 'Paint Protection Film Installation in Phoenix, AZ', 'Paint protection film helps add a protective layer to high-impact areas including front-end coverage, full-car coverage, matte finishes, black film, urban styling, and color-shift styles.', exotic1, ['Full Car', 'Full Front / Front Kit', 'Front Bumper', 'Matte, Black, Urban, Shift Color']),
  '/ultimate-armor/': svc('Ultimate Armor Paint Protection Film in Phoenix, AZ', 'Ultimate Armor Paint Protection Film', 'Ultimate Armor combines high-impact paint protection film coverage with coating-focused protection for drivers who want a complete premium protection system.', imgPrimary, ['High-impact area protection', 'Gloss-focused finish', 'Premium package structure', 'Estimate-based coverage planning']),
  '/gloss-pro-paint-protection-film-full/': svc('Gloss Pro Paint Protection Film Full in Phoenix, AZ', 'Gloss Pro Paint Protection Film Full', 'Gloss Pro Paint Protection Film is designed for drivers who want a clear, high-gloss finish with paint protection film coverage across selected or full painted surfaces.', imgDetail, ['Gloss PPF finish', 'Full painted surface options', 'Paint clarity focus', 'Exotic car protection look']),
  '/front-kit/': svc('Front Kit Paint Protection Film in Phoenix, AZ', 'Front Kit Paint Protection Film', 'Front Kit coverage focuses on high-impact front-end zones including hood, fenders, front bumper, mirrors, headlights, and door cups depending on the selected package.', exotic3, ['Full front end', 'Front side mirrors', 'Headlights', 'Door cups']),
  '/full-car/': svc('Full Car Paint Protection Film in Phoenix, AZ', 'Full Car Paint Protection Film', 'Full Car paint protection film is built for enthusiasts who want complete painted-surface coverage and maximum visual consistency across the vehicle.', exotic4, ['Entire car', 'All painted surfaces', 'Headlights', 'Premium coverage planning']),
  '/front-bumper/': svc('Front Bumper Paint Protection Film in Phoenix, AZ', 'Front Bumper Paint Protection Film', 'Front Bumper PPF protects one of the most exposed areas of a vehicle from daily road wear, bugs, and debris.', exotic1, ['Full front bumper', 'Headlights', 'Fog lights', 'High-impact protection']),
  '/matte-paint-protection-film/': svc('Matte Paint Protection Film in Phoenix, AZ', 'Matte Paint Protection Film', 'Matte PPF gives vehicles a satin, stealth-inspired appearance while adding protective film coverage to selected painted surfaces.', exotic2, ['Satin/matte appearance', 'Painted surface protection', 'Premium visual transformation', 'Coverage options']),
  '/black-paint-protection-film/': svc('Black Paint Protection Film in Phoenix, AZ', 'Black Paint Protection Film', 'Black PPF adds a darker visual treatment for accents or larger panels while supporting protective film goals.', exotic3, ['Black finish styling', 'Accent panel options', 'Protection-focused install', 'Custom estimate guidance']),
  '/urban-paint-protection-film/': svc('Urban Paint Protection Film in Phoenix, AZ', 'Urban Paint Protection Film', 'Urban PPF is a premium styling and protection option for drivers who want a more aggressive vehicle appearance.', exotic4, ['Urban-inspired finish', 'PPF protection', 'Custom panel planning', 'Luxury/exotic vehicle styling']),
  '/shift-color-paint-protection-film/': svc('Shift Color Paint Protection Film in Phoenix, AZ', 'Shift Color Paint Protection Film', 'Shift Color Paint Protection Film adds dramatic color movement and visual depth while giving selected panels protective film coverage.', imgPrimary, ['Color-shift finish', 'Custom visual upgrade', 'PPF coverage options', 'Exotic appearance']),
  '/windows-tint/': svc('Window Tint in Phoenix, AZ | Automotive, Residential & Commercial', 'Window Tint Services in Phoenix, AZ', 'Window tint services are available for automotive, residential, and commercial projects. Tint can help with privacy, comfort, glare reduction, and appearance.', exotic2, ['Automotive tint', 'Residential tint', 'Commercial tint', 'Ceramic Tint and Carbon X']),
  '/ceramic-tint/': svc('Ceramic Window Tint in Phoenix, AZ', 'Ceramic Tint in Phoenix, AZ', 'Ceramic Tint is a premium window tint option for drivers who want a clean appearance, privacy, comfort, and a higher-end tint solution.', exotic1, ['Automotive ceramic tint', 'Privacy and comfort', 'Clean finished look', 'Free estimates']),
  '/carbon-x/': svc('Carbon X Window Tint in Phoenix, AZ', 'Carbon X Window Tint', 'Carbon X window tint is a strong option for customers looking for a dark, clean tint finish with comfort and appearance benefits.', exotic3, ['Carbon-style tint', 'Automotive tinting', 'Privacy-focused finish', 'Phoenix shop installation']),
  '/ceramic-pro-coating-after-care/': svc('Ceramic Pro Coating After Care in Phoenix, AZ', 'Ceramic Pro Coating After Care', 'Ceramic Pro coating after care helps customers maintain their coated finish with proper wash habits, surface care, and maintenance guidance after service.', imgDetail, ['Maintenance guidance', 'Coated surface care', 'Wash best practices', 'Protection follow-up']),
  '/ceramic-pro-coating-windshield-protection/': svc('Ceramic Pro Coating Windshield Protection in Phoenix, AZ', 'Ceramic Pro Coating Windshield Protection', 'Windshield coating protection helps improve glass maintenance and water behavior on front glass surfaces as part of a coating package.', exotic4, ['Front windshield focus', 'Glass coating option', 'Visibility maintenance support', 'Package add-on']),
  '/residential-commercial-window-tint-services/': svc('Residential & Commercial Window Tint Services in Phoenix, AZ', 'Residential & Commercial Window Tint Services', 'Residential and commercial window tint services are available for projects that need privacy, comfort, glare reduction, and a cleaner finished look.', exotic2, ['Residential projects', 'Commercial projects', 'Privacy and glare support', 'Estimate-based planning']),
  '/elite-dealer-exclusives/': svc('Elite Dealer Exclusives | Windshield Protection & Aftercare | King Garcia', 'Exclusive Services Reserved for Certified Elite Dealers.', 'King Garcia Auto Detail is a Ceramic Pro Elite Dealer — the highest certification level in the network. Elite status unlocks services unavailable at standard shops: KAVACA Windshield Protection Film and the professional Ceramic Pro Aftercare program, each backed by a VIN-linked warranty registry.', imgPrimary, ['KAVACA Windshield Protection Film', 'Ceramic Pro Aftercare Program', 'Certified Technicians Only', 'VIN-Linked Warranty Registry']),
  '/windshield-protection/': svc('Windshield Protection Film in Phoenix, AZ | KAVACA | King Garcia', 'Invisible Defense. Uncompromised Clarity. Windshield Protection Film.', 'KAVACA Windshield Protection Film is a high-strength film engineered specifically for windshield glass — not an automotive adaptation. It absorbs stone and debris impact, pre-treated with Ceramic Pro hydrophobic technology, and is ideal for vehicles with ADAS sensors where glass replacement is extremely costly.', exotic4, ['Impact resistance against stones and debris', 'Crystal-clear optical clarity', 'Ceramic Pro hydrophobic integration', 'ADAS system protection', 'Long-term cost savings']),
  '/aftercare/': svc('Ceramic Pro Aftercare in Phoenix, AZ | King Garcia Auto Detail', 'Your Warranty Depends On It. The Professional Aftercare System.', 'Ceramic Pro Aftercare is not just maintenance advice — it is a complete product ecosystem designed to preserve the performance and warranty of your ceramic coating. The Ceramic Pro Americana Series keeps surfaces hydrophobic, prevents degradation, and qualifies you for the annual inspection required to maintain your Lifetime Warranty.', imgDetail, ['Ceramic Pro Americana Series products', 'pH-neutral maintenance system', 'Annual inspection & decontamination', 'Lifetime Warranty maintenance requirement', 'Coating performance preservation']),
  '/blogs/': svc('Auto Detailing, Ceramic Coating & PPF Blog | Phoenix, AZ', 'Vehicle Protection Tips for Phoenix Drivers', 'Explore practical education for Arizona drivers comparing ceramic coatings, paint protection film, tint, detailing, and aftercare options.', exotic1, ['Ceramic Coating vs Wax', 'Is PPF Worth It in Arizona?', 'Protecting Paint from Phoenix Sun', 'Ceramic Tint vs Regular Tint', 'How to Care for a Ceramic Coated Vehicle', 'PPF vs Ceramic Coating']),
  '/projects/': svc('Auto Detailing Projects in Phoenix, AZ | King Garcia Auto Detail', 'Recent Projects from King Garcia Auto Detail', 'A visual look at detailing, coating, film, tint, and exotic/luxury automotive protection work from the Phoenix shop.', imgPrimary, ['Coatings', 'PPF', 'Tint', 'Detailing']),
  '/contact-us/': svc('Contact King Garcia Auto Detail LLC | Phoenix, AZ', 'Contact KING GARCIA AUTO DETAIL LLC', 'Request a free estimate, call the Phoenix shop, or visit KING GARCIA AUTO DETAIL LLC for detailing, coatings, PPF, tint, motorcycle, and boat services.', imgDetail, ['Free estimates', 'Shop-based service', 'Card, Cash & Zelle', 'Phoenix, AZ']),
  '/contact/': svc('Contact King Garcia Auto Detail LLC | Phoenix, AZ', 'Contact KING GARCIA AUTO DETAIL LLC', 'Request a free estimate, call the Phoenix shop, or visit KING GARCIA AUTO DETAIL LLC for detailing, coatings, PPF, tint, motorcycle, and boat services.', imgDetail, ['Free estimates', 'Shop-based service', 'Card, Cash & Zelle', 'Phoenix, AZ']),
}

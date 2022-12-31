"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Perfumes",
      [

        {
          userId: 1,
          name: "Le Male Le Parfum",
          brand: "Jean Paul Gaultier",
          masterPerfumer: "Natalie Gracia-Cetto, Quentin Bisch",
          scentProfile: "Sweet",
          description:
            "Drawing on the potency of cardamom in its top notes and the freshness of lavender and iris at its heart, this intense eau de parfum ultimately promises to immerse you in its wonderfully addictive and prominent vanilla base note. An olfactory odyssey full of contrasts to disorient and delight the senses, its masculine trail revealing the charisma of an officer.",
          perfumeImg:
            "https://i0.wp.com/www.scentuelle.de/wp-content/uploads/2021/11/Jean-Paul-Gaultier-Le-Male-Le-Parfum-Eau-De-Perfume_3.png?fit=800%2C800&ssl=1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          name: "Terre d'Hermes",
          brand: "Hermes",
          masterPerfumer: "Jean-Claude Ellena",
          scentProfile: "Citrus",
          description:
            "The strength of citrus fruits and peppers combined with a note of flint reveal the trace of earth. Terre d’Hermes narrates the relationship between man and earth, his humble and harmonious dialogue with the elements and nature. Terre d’Hermes is the perfume that connects man to his origins, to the source of his creative power.",
          perfumeImg:
            "https://media.alina-cosmetics.com/prod/media/00/6f/93/1649138959/3346130012245_4.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          name: "Stronger with You",
          brand: "Emporio Armani",
          masterPerfumer: "Cecile Matton",
          scentProfile: "Sweet",
          description:
            "Stronger With You is the fragrance of a man that lives in the present, molded by the energy of modernity. Unpredictable, he surprises with his originality, just like the scent’s spicy accord—a mix of cardamom, pink peppercorn, and violet leaves. He has inherited a confident elegance, with the easy insouciance of youth, conveyed by the sage at the fragrance’s aromatic heart. Charming, mysterious, and confident discover a boost of confidence and reveal that which is…Stronger With You. What else you need to know: Stronger With You and Because It's You are a pair of fragrances equal in strength. One perfectly feminine, the other generously masculine. Together they communicate, challenge, and seduce.",
          perfumeImg:
            "https://www.theperfumeshop.com/medias/sys_master/back-zoom/back-zoom/11234440708126/Armani-Eau-de-Toilette-for-him-3605522040281-Stronger-With-You.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          name: "Viking Cologne",
          brand: "Creed",
          masterPerfumer: "Erwin Creed & Jean-Christophe Herault",
          scentProfile: "Citrus",
          description:
            "Viking Cologne by Creed is a Aromatic Fougere fragrance for men. This is a new fragrance. Viking Cologne was launched in 2021. Viking Cologne was created by Olivier Creed and Erwin Creed. Top notes are Mandarin Orange, Lemon, Pink Pepper and Bergamot; middle notes are Lavender, Geranium, Rosemary, Sage and Nutmeg; base notes are Vetiver, Sandalwood, Cedar, Olibanum and Patchouli.",
          perfumeImg:
            "https://cdn.shopify.com/s/files/1/0844/2647/products/CREED-VIKING-VOLOGNE-ALT_800x.jpg?v=1638213824.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          name: "Ombré Leather",
          brand: "Tom Ford",
          masterPerfumer: "Sonia Constant",
          scentProfile: "Leather",
          description:
            "Tom Ford Ombre Leather Perfume by Tom Ford, Tom ford ombre leather combines an intense, deliciously sensuous leather accord with nuances of fruit, florals and spice to produce an irresistible, darkly glamorous fragrance. Sweetly resinous, fruity-aromatic cardamom opens the scent, followed by a bold effusion of fresh leather refined with subtly narcotic undertones of jasmine sambac. The finish is an earthy patchouli blend enhanced by deep amber and oak moss for a warm, balanced finish.",
          perfumeImg:
            "https://www.sephora.com/productimages/product/p474863-av-02-zoom.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          name: "Scandal Pour Homme",
          brand: "Jean Paul Gaultier",
          masterPerfumer:
            "Christophe Raynaud, Natalie Gracia-Cetto, Quentin Bisch",
          scentProfile: "Sweet",
          description:
            "The contrasting addiction of a woody oriental eau de toilette Woody Oriental Eau de toilette by Quentin Bisch, Nathalie Cetto and Christophe Raynaud Redefining caramel with chic in his eau de toilette: how does he dare do it? In harmonious accord with the tonka bean, this atypical note blends with the clary sage and vetiver in an extravagant Jean Paul Gaultier fashion that seduces the senses by surprise. Its extremely addictive and sensual blue-grey juice attracts all victories to itself. A hart-hitting fragrance that creates a scandal.",
          perfumeImg:
            "https://oechsle.vteximg.com.br/arquivos/ids/10888034-1500-1500/2023408_4.jpg?v=637970745432900000.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          name: "Layton",
          brand: "Parfums de Marly",
          masterPerfumer: "Hamid Merati-Kashani",
          scentProfile: "Sweet",
          description:
            "Layton is a fragrance which captures the essence of the debonair. This seductive oriental and floral fragrance with an intense olfactory signature opens with bergamot and its tangy passion, while lavender and geranium blend into a fresh note, chic and chivalrous all at once. The intensity of the eau de parfum is further amplified by amber, enhanced by the natural elegance of pink pepper. Distinguished and addictive, Layton’s character is further carried by vanilla and precious woods, which develop through an intriguing note of caramelized coffee.",
          perfumeImg:
            "https://plummour.com/wp-content/uploads/2021/10/layton-lifestyle-2_900x.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          name: "Polo Blue",
          brand: "Ralph Lauren",
          masterPerfumer: "Carlos Benaim",
          scentProfile: "Fresh",
          description:
            "Polo Blue by Ralph Lauren is a Aromatic Fougere fragrance for men. Polo Blue was launched in 2003. Polo Blue was created by Carlos Benaim and Christophe Laudamiel. Top notes are Cucumber, Melon and Mandarin Orange; middle notes are Basil, Sage and Geranium; base notes are Suede, Woodsy Notes and Musk.",
          perfumeImg:
            "https://www.sephora.com/productimages/product/p408252-av-12-zoom.jpg?imwidth=1224.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
        {
          userId: 1,
          name: "Costa Azzurra",
          brand: "Tom Ford",
          masterPerfumer: "Olivier Gillotin",
          scentProfile: "Woody",
          description:
            "Costa Azzurra by Tom Ford is a Aromatic Aquatic fragrance for women and men. This is a new fragrance. Costa Azzurra was launched in 2021. Top notes are Driftwood, Seaweed, Agarwood (Oud), Ambrette (Musk Mallow), Cardamom and Celery Seeds; middle notes are Lemon, Cypress, Yellow Mandarin, Lavender, Myrtle and Artemisia; base notes are Oak, Incense, Vetiver, Olibanum, Mastic or Lentisque and Vanilla.",
          perfumeImg:
            "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-p888066117463-1_grande.jpg?v=1668762274.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
        {
          userId: 2,
          name: "Sedley",
          brand: "Parfums de Marly",
          masterPerfumer: "Hamid Merati-Kashani, Olivier Cresp",
          scentProfile: "Fresh",
          description:
            "Light, forceful and fresh, Sedley is an eau de parfum capturing watery and aerial scents that offer a true olfactory journey, with a freshness that follows you everywhere. This classic yet modern fragrance is a blend of bergamot, spearmint and watery accord, with geranium bourbon, lavender and sunny notes. In the background, the ultimate woody signature embodies tradition mixed with contemporary aestheticism.",
          perfumeImg:
            "https://cdn.shopify.com/s/files/1/1979/0273/products/sedley-parfums-de-marly-466224.jpg?v=1646016487",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          name: "Bonbon",
          brand: "Viktor&Rolf",
          masterPerfumer: "Cecile Matton, Serge Majoullier",
          scentProfile: "Sweet",
          description:
            "A gourmand fragrance with a fresh twist, this addictive women's perfume effervesces with the citrus scent of mandarin and orange slices alongside a paradise peach accord. Sweet caramel creates delicious depth atop a woody base in a surprising balance of sweetness and creamy notes of woody amber. Embodying the essence of the couture spirit, the one-of-a-kind luxe bow bottle is sculpted to perfection. Handcrafted with precision and craftsmanship, the women's fragrance within is encapsulated in an equally feminine vessel. Evoking a timeless sensation and the pure and absolute pursuit of pleasure, this fragrance inspires empowerment and independence. Created with the intent to fuel desire, the sweet and sexy gourmand perfume embodies the essence of a woman creating her own story.",
          perfumeImg:
            "https://www.theperfumeshop.com/medias/sys_master/back-zoom/back-zoom/11356140371998/Viktor-Rolf-Eau-de-Parfum-for-her-3605521880147-Bonbon.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          name: "Jazz Club",
          brand: "Maison Martin Margiela",
          masterPerfumer: "Alienor Massenet",
          scentProfile: "Sweet",
          description:
            "In this scent, a smooth cocktail of warm scents and spicy fragrances awakens the senses with contrasting lemon and pink pepper followed by neroli oil, rum, and vanilla perfume atop smoky tobacco leaf. Influenced by the look of classic apothecary jars, the luxe bottle carries a cotton label with black ink text and a unique pump wrapped with rope as a homage to the original couture line. The warm and smoky eau de toilette within is echoed by the Polaroid photograph printed on the outside carton. Inspired by the scents wafting throughout a Brooklyn jazz club, this eau de toilette brims with the sweet notes of opened cigar boxes, old leather bar stools, and fine aged liquor.",
          perfumeImg:
            "https://www.sephora.com/productimages/product/p385350-av-07-zoom.jpg?imwidth=1224.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          name: "Gucci Bloom",
          brand: "Gucci",
          masterPerfumer: "Alberto Morillas",
          scentProfile: "Floral",
          description:
            "A sophisticated perfume capturing the spirit of the contemporary, diverse, and authentic women of Gucci. Gucci Bloom’s notes of natural tuberose and jasmine create an unexpectedly rich white floral scent on the skin. Notes of natural tuberose and jasmine leave an unexpectedly rich white floral scent on the skin. Rangoon creeper, a plant that changes color when it blooms, infuses a powdery, floral edge. The vine’s flowers are redolent with a slightly powdery feminine floral perfume. Gucci’s creative director envisioned this perfume as a thriving garden full of diverse types of flowers and the rich fragrance they emit. Authenticity is woven through qualitative, highly concentrated natural ingredients in this perfume for women.",
          perfumeImg:
            "https://www.sephora.com/productimages/product/p422093-av-01-zoom.jpg?imwidth=1224",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          name: "Libre",
          brand: "Yves Saint Laurent",
          masterPerfumer: "Anne Flipo, Carlos Benaim",
          scentProfile: "Floral",
          description:
            "This fragrance contains signature notes of lavender essence from France and Moroccan orange blossom combined with glowing orchid and warm vanilla to push this perfume to the extreme. It is a long-lasting sensual twist on the floral fragrance. This parfum is a celebration of freedom—LIBRE means free. The fragrance is for those who do what they want and dare to be exactly who they are. It draws inspiration from the couture runways, and the IT-bottle pushes its couture statement further with a masculine camel color twisted in the most feminine way, amplifying the intensity of the original bottle.",
          perfumeImg:
            "https://www.sephora.com/productimages/product/p462417-av-15-zoom.jpg?imwidth=1224",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          name: "Acqua di Gio",
          brand: "Giorgio Armani",
          masterPerfumer:
            "Alberto Morillas, Annick Menardo, Christian Dussoulier",
          scentProfile: "Fresh",
          description:
            "This clean and aquatic cologne for men opens with a splash of marine notes including Calabrian bergamot, neroli, and green tangerine. These light, aquatic nuances blend with rosemary, persimmon, and Indonesian patchouli to create a long-lasting, citrusy, and fresh scent. The luxe, clear-matte cologne bottle echoes the clean-water-inspired fresh men's fragrance within. Experience the invigorating freshness of the sea, captured in a cologne. Classic and perfectly balanced, this aquatic men's cologne captures the pure freshness and warmth of the Mediterranean Sea with expertly blended fragrance oils.",
          perfumeImg:
            "https://www.sephora.com/productimages/product/p12430-av-05-zoom.jpg?imwidth=1224.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          name: "Light Blue Pour Homme",
          brand: "Dolce&Gabbana",
          masterPerfumer: "Alberto Morillas",
          scentProfile: "Fresh",
          description:
            "This Eau de Toilette opens with refreshing bergamot, juicy, sun-drenched Sicilian mandarin, and the frozen grapefruit peel and aromatic juniper. In the heart Sichaun pepper and sensual rosewood give strong masculinity and an understated blend of American muskwood, incense and oak moss establish innate sexiness. Light Blue Pour Homme is the quintessence of joy of life and seduction, capturing the energy of the beautiful and sunny Mediterranean sea in a cologne.",
          perfumeImg:
            "https://www.sephora.com/productimages/product/p186402-av-11-zoom.jpg?imwidth=1224.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          name: "Patchouli Ardent",
          brand: "Guerlain",
          masterPerfumer: "Thierry Wasser",
          scentProfile: "Woody",
          description:
            "With Patchouli Ardent, Thierry Wasser, Guerlain's master Perfumer, has reinvented patchouli, a raw material usually darkly woody and mysterious, in a surprisingly vibrant and bright way. It combines the elegance of Rose with a majestic leather and musks accord to offer a unique sensorial voyage. Woody Floral.",
          perfumeImg:
            "https://www.theperfumeshop.com/medias/sys_master/back-zoom/back-zoom/11407101296670/Guerlain-Eau-de-Parfum-Spray-3346470140189-Patchouli-Ardent.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
        {
          userId: 3,
          name: "Luna Rossa Ocean",
          brand: "Prada",
          masterPerfumer: "Anne Flipo, Carlos Benaim",
          scentProfile: "Fresh",
          description:
            "This is a fusing, neo-fresh, and aquatic fragrance, encapsulating a burst of bergamot contrasted with the extreme sophistication and sensuality of vetiver and elegant iris notes. Experience a unique, addictive, and masculine trail with this new Prada men’s classic fragrance. The Prada Luna Rossa Ocean bottle is a dive into the blue depths of the ocean. Lacquered in a sophisticated gradation of blue, it’s intense and powerful, a reference to the intriguing reflections of the water and signed by the iconic Prada red line, a symbol of innovation. A magnetic call for new discoveries is built on Prada’s conviction that with technology as an extension of yourself, you can push beyond limits, reimagine what’s possible, and open new horizons to create one of the most complimented fragrances.",
          perfumeImg:
            "https://www.sephora.com/productimages/product/p475152-av-10-zoom.jpg?imwidth=1224.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          name: "Baccarat Rouge 540",
          brand: "Maison Francis Kurkdjian",
          masterPerfumer: "Francis Kurkdjian",
          scentProfile: "Woody",
          description:
            "Same notes, two identities. The challenge is to create two singular eaux de parfum using the same ingredients: juniper berries, nutmeg, coriander, musks, amber wood and vanilla to express their full potential. The Gentle Fluidity duo was imagined by the perfumer to sketch two distinctive olfactive silhouettes for him and for her in a gentle blurring of identities. In the generous and fully enveloping trail of gentle Fluidity Gold Maison Francis Kurkdjian, you’ll find essence of coriander seeds and an extra dose of musks and vanilla. Like the musks, the coriander seeds’ spicy floral notes add a breezy volume and lasting trail. The vanilla accord brings tasty and reassuring back notes underscored by the amber wood which sketches a bright and radiant silhouette. gentle Fluidity Gold eau de parfum diffuses comfortable notes, a reassuring musky ambery scent.",
          perfumeImg:
            "https://i.pinimg.com/originals/6a/d6/3b/6ad63b0aca8d6fa8718e777853e6980e.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          name: "Good Girl",
          brand: "Carolina Herrera",
          masterPerfumer: "Louise Turner",
          scentProfile: "Sweet",
          description:
            "Black and white… good girl, bad girl. GOOD GIRL is a sensual, evocative fragrance born of the beautiful contradictions and the ever-present duality of modern women and modern life. Both freshly light and moodily dark, this innovative fragrance captures a woman’s wondrous complexity with surprising and exceptional ingredients. The sweet, alluring qualities of jasmine give GOOD GIRL its brightness and femininity. The darker side is created with richly fragrant cocoa and intoxicating tonka. Almond and coffee bring the scent its immediate vibrancy. Tuberose, extracted in a new way that creates a rich delicacy, is the fragrance’s wild card, bringing fluidity and femininity. GOOD GIRL exemplifies the effortless elegance and wit of the House of Herrera.The ground-breaking bottle, the first in the form of a high heel, speaks as eloquently of the power of modern femininity and a woman’s dual nature as the fragrance itself.",
          perfumeImg:
            "https://www.sephora.com/productimages/product/p420533-av-5-zoom.jpg?imwidth=1224.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          name: "Pour Homme",
          brand: "Versace",
          masterPerfumer: "Alberto Morillas",
          scentProfile: "Fresh",
          description:
            "The new fragrance for men, Versace Pour Homme, blends essential ingredients of Mediterranean origin to hit aromatic notes that match the man of today: knowledgeable and self-confident, he has the ability to live in harmony with the natural world. Dynamic and entrepreneurial, the Versace Pour Homme man communicates his forceful and passionate character through this decidedly masculine fragrance.",
          perfumeImg:
            "https://www.theperfumeshop.com/medias/sys_master/back-zoom/back-zoom/11260728803358/Versace-Eau-de-Toilette-for-him-8011003995967-Pour-Homme.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Perfumes", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};

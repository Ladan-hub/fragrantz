'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Perfumes';
      return queryInterface.bulkInsert(options, 
      [
        {
        userId: 1,
        name: 'Aventus',
        brand: 'Creed',
        masterPerfumer: "Erwin Creed & Jean-Christophe Herault",

        perfumeImg: "https://cdn.shopify.com/s/files/1/0628/9624/2907/products/parfumaventus_1445x.jpg?v=1650726494",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: 'Ombré Leather',
        brand: 'Tom Ford',
        masterPerfumer: "Sonia Constant",
        perfumeImg: "https://www.theperfumeshop.com/medias/sys_master/back-zoom/back-zoom/11383852040222/TOM-FORD-Parfum-888066122214-Ombr-Leather.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: "Scandal Pour Homme",
        brand: 'Jean Paul Gaultier',
        masterPerfumer: "Christophe Raynaud, Natalie Gracia-Cetto, Quentin Bisch",
        perfumeImg: "https://www.theperfumeshop.com/medias/sys_master/back-zoom/back-zoom/11396508090398/Jean-Paul-Gaultier-Eau-de-Toilette-Refillable-Spray-8435415030885-Scandal-Pour-Homme.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: "Layton",
        brand: 'Parfums de Marly',
        masterPerfumer: "Hamid Merati-Kashani",
        perfumeImg: "https://www.giraofertas.com.br/wp-content/uploads/2022/03/Layton-Parfums-de-Marly-Eau-de-Parfum-01.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: "Polo Blue",
        brand: 'Ralph Lauren',
        masterPerfumer: "Carlos Benaim",
        perfumeImg: "https://www.theperfumeshop.com/medias/sys_master/back-zoom/back-zoom/10935640883230/Ralph-Lauren-Eau-de-Parfum-for-him-3605970859299-Polo-Blue.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: "Le Male Le Parfum",
        brand: 'Jean Paul Gaultier',
        masterPerfumer: "Natalie Gracia-Cetto, Quentin Bisch",
        perfumeImg: "https://www.theperfumeshop.com/medias/sys_master/back-zoom/back-zoom/11613059022878/Jean-Paul-Gaultier-Eau-de-Parfum-for-him-8435415032278-Le-Male-Le-Parfum.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: "Costa Azzurra",
        brand: 'Tom Ford',
        masterPerfumer: "Olivier Gillotin",
        perfumeImg: "https://www.theperfumeshop.com/medias/sys_master/back-zoom/back-zoom/11240439250974/TOM-FORD-Eau-de-Parfum-888066119320-Costa-Azzurra.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: "Terre d'Hermes",
        brand: 'Hermès',
        masterPerfumer: "Jean-Claude Ellena",
        perfumeImg: "https://media.alina-cosmetics.com/prod/media/00/6f/93/1649138959/3346130012245_4.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: "Sedley",
        brand: 'Parfums de Marly',
        masterPerfumer: "Hamid Merati-Kashani, Olivier Cresp",
        perfumeImg: "https://cdn.shopify.com/s/files/1/1979/0273/products/sedley-parfums-de-marly-466224.jpg?v=1646016487",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: "Bonbon",
        brand: 'Viktor&Rolf',
        masterPerfumer: "Cecile Matton, Serge Majoullier",
        perfumeImg: "https://www.theperfumeshop.com/medias/sys_master/back-zoom/back-zoom/11356140371998/Viktor-Rolf-Eau-de-Parfum-for-her-3605521880147-Bonbon.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: "Jazz Club",
        brand: 'Maison Martin Margiela',
        masterPerfumer: "Alienor Massenet",
        perfumeImg: "https://cf.shopee.com.my/file/0a0cdb957738592c9bb9361cc8ca7ab6",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: "Gucci Bloom",
        brand: 'Gucci',
        masterPerfumer: "Alberto Morillas",
        perfumeImg: "https://cdn.shopify.com/s/files/1/0522/2357/4165/products/AFP-000146508_1024x1024.jpg?v=1614153096",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: "Libre",
        brand: 'Yves Saint Laurent',
        masterPerfumer: "Anne Flipo, Carlos Benaim",
        perfumeImg: "https://static.voguescandinavia.com/YSL_Libre_31f232aed6/YSL_Libre_31f232aed6.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: "Acqua di Gio",
        brand: 'Giorgio Armani',
        masterPerfumer: "Alberto Morillas, Annick Menardo, Christian Dussoulier",
        perfumeImg: "https://www.theperfumeshop.com/medias/sys_master/back-zoom/back-zoom/11533218021406/Eau-de-Toilette-for-him-1024165.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: "Light Blue Eau Intense Pour Homme",
        brand: 'Dolce&Gabbana',
        masterPerfumer: "Alberto Morillas",
        perfumeImg: "https://www.perfumesecompanhia.pt/fotos/produtos/3423473032878_2.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: "Patchouli Ardent",
        brand: 'Guerlain',
        masterPerfumer: "Thierry Wasser",
        perfumeImg: "https://www.theperfumeshop.com/medias/sys_master/back-zoom/back-zoom/11407101296670/Guerlain-Eau-de-Parfum-Spray-3346470140189-Patchouli-Ardent.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: "Stronger with You",
        brand: 'Emporio Armani',
        masterPerfumer: "Cecile Matton",
        perfumeImg: "https://www.theperfumeshop.com/medias/sys_master/back-zoom/back-zoom/11234440708126/Armani-Eau-de-Toilette-for-him-3605522040281-Stronger-With-You.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: "Luna Rossa Ocean",
        brand: 'Prada',
        masterPerfumer: "Anne Flipo, Carlos Benaim",
        perfumeImg: "https://www.theperfumeshop.com/medias/sys_master/back-zoom/back-zoom/11378122588190/Prada-Eau-de-Toilette-Spray-3614273556187-Luna-Rossa-Ocean.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: "Baccarat Rouge 540",
        brand: 'Maison Francis Kurkdjian',
        masterPerfumer: "Francis Kurkdjian",
        perfumeImg: "https://plummour.com/wp-content/uploads/2021/09/Baccarat-Rouge-540-1.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: "Good Girl",
        brand: 'Carolina Herrera',
        masterPerfumer: "Louise Turner",
        perfumeImg: "https://hermitage.am/storage/7244/1624360461",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: "Pour Homme",
        brand: 'Versace',
        masterPerfumer: "Alberto Morillas",
        perfumeImg: "https://www.theperfumeshop.com/medias/sys_master/back-zoom/back-zoom/11260728803358/Versace-Eau-de-Toilette-for-him-8011003995967-Pour-Homme.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = 'Perfumes'
      return queryInterface.bulkDelete(options, null, {});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Perfumes', 
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
        name: 'Elysium Pour Homme Parfum Cologne',
        brand: 'Roja Parfums',
        masterPerfumer: "Roja Dove",
        perfumeImg: "https://media.karousell.com/media/photos/products/2021/9/17/roja_elysium_parfum_cologne_10_1631871838_1aca08ff_progressive.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: "Angels' Share",
        brand: 'by Kilian',
        masterPerfumer: "Benoist Lapouza",
        perfumeImg: "https://cosmetiqua.com/wp-content/uploads/2020/12/kilian-angels-share-001_1500.jpg",
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
        name: "The One for Men Eau de Parfum",
        brand: 'Dolce&Gabbana',
        masterPerfumer: "Olivier Polge",
        perfumeImg: "https://slimages.macysassets.com/is/image/MCY/products/3/optimized/21816783_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: "Pi",
        brand: 'Givenchy',
        masterPerfumer: "Alberto Morillas",
        perfumeImg: "https://www.dapperconfidential.com/wp-content/uploads/2022/01/Givenchy-Pi-EDT.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: "Tobacco Vanille",
        brand: 'Tom Ford',
        masterPerfumer: "Olivier Gillotin",
        perfumeImg: "https://scentgrail.com/wp-content/uploads/2022/07/Tom-Ford-Tobacco-Vanille-Bottle-and-Cap-1024x683.jpg",
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
        name: "Vanilla Orchid",
        brand: 'Precious Liquid',
        masterPerfumer: "Richard Herpin",
        perfumeImg: "https://i.pinimg.com/originals/0d/22/ea/0d22ead859603fc30f31b57846a36d71.jpg",
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
        name: "Silver Mountain Water",
        brand: 'Creed',
        masterPerfumer: "Olivier Creed, Pierre Bourdon",
        perfumeImg: "https://image.s5a.com/is/image/saks/0400094465496_NOCOLOR_A1?wid=480&hei=640&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: "Tuxedo",
        brand: 'Yves Saint Laurent',
        masterPerfumer: "Juliette Karagueuzoglou",
        perfumeImg: "https://www.qatardutyfree.com/Images/DB/CA_479.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: "Dior Homme Intense",
        brand: 'Dior',
        masterPerfumer: "Francois Demachy",
        perfumeImg: "https://www.dapperconfidential.com/wp-content/uploads/2022/04/Dior-Homme-Intense-EDP-Banner-Image-720x540.jpg",
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
        name: "Eros",
        brand: 'Versace',
        masterPerfumer: "Aurelien Guichard",
        perfumeImg: "https://static1.michael84.co.uk/wp-content/uploads/versace-eros-eau-de-toilette-fragrance-men-michael84.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('Perfumes', null, {});
  }
};

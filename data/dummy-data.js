import Product from '../models/products';
import Category from '../models/category';

const CATEGORIES = [
    new Category(
        'c1',
        'Amino Acids',
        'https://static.wixstatic.com/media/6a8102_3dd61e94d05f4353a1a34ab31a2c82e8.jpg'
    ),
    new Category(
        'c2',
        'Pre-Workout',
        'https://cdn.shopify.com/s/files/1/1228/5232/products/PWO_Portrait_V1_1600x.jpg?v=1567045117'
    ),
    new Category(
        'c3',
        'Protein',
        'https://nobullnutrition.co/wp-content/uploads/2016/05/DSC_5937.jpg'
    ),
    new Category(
        'c4',
        'Womens',
        'https://www.mybodygoods.com/wp-content/uploads/2019/11/ApparelCTA.jpg'
    ),
    new Category(
        'c5',
        'Mens',
        'https://www.mybodygoods.com/wp-content/uploads/2019/11/SuplementsCTA.jpg'
    )
];

export const PRODUCTS = [
    new Product(
        'p1',
        ['c1', 'c5'],
        'u1',
        'Black Magic KEYZ',
        'https://www.mybodygoods.com/wp-content/uploads/2018/04/keyz-mojito_large.png',
        'Intense Recovery',
        29.99
    ),
    new Product(
        'p2',
        ['c1', 'c5'],
        'u1',
        'Blackmarket Recovery',
        'https://www.mybodygoods.com/wp-content/uploads/2019/12/recovery_website.png',
        'Intense Recovery',
        39.99
    ),
    new Product(
        'p3',
        ['c1', 'c4'],
        'u1',
        'Inspired BCAAs',
        'https://www.mybodygoods.com/wp-content/uploads/2019/12/BCAA_Rebrand_Web-600x600.png',
        'Intense Recovery',
        24.99
    ),
    new Product(
        'p4',
        ['c1', 'c5', 'c4'],
        'u1',
        'Alpha EAA',
        'https://www.mybodygoods.com/wp-content/uploads/2020/01/26920.jpg',
        'Intense Recovery',
        39.99
    ),
    new Product(
        'p5',
        ['c2', 'c5'],
        'u1',
        'Mesomorph',
        'https://www.mybodygoods.com/wp-content/uploads/2019/12/mesomorph_rocket_pop.jpg',
        'Intense Energy',
        49.99
    ),
    new Product(
        'p6',
        ['c2', 'c5'],
        'u1',
        'Blackmarket Stim',
        'https://www.mybodygoods.com/wp-content/uploads/2019/12/STIM_10May18_1_grande.png',
        'Intense Energy',
        39.99
    ),
    new Product(
        'p7',
        ['c2', 'c4'],
        'u1',
        'DVST8 Stim',
        'https://www.mybodygoods.com/wp-content/uploads/2019/12/IMG_3860.jpg',
        'Intense Energy',
        29.99
    ),
    new Product(
        'p8',
        ['c2', 'c5', 'c4'],
        'u1',
        'Myoblox Loco',
        'https://www.mybodygoods.com/wp-content/uploads/2020/01/LOCO-MELON-DROP-RENDER_1500x.png',
        'Intense Energy',
        39.99
    ),
    new Product(
        'p9',
        ['c3', 'c5', 'c4'],
        'u1',
        'Optimum Whey',
        'https://www.mybodygoods.com/wp-content/uploads/2019/12/whey-gold-standard_5lb_cakebatter-optimum-nutrition_1.jpg',
        'Build Muscle',
        59.99
    ),
    new Product(
        'p10',
        ['c3', 'c5', 'c4'],
        'u1',
        'MP Combat',
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1540224238-mh-pro-10-1540224230.png',
        'Build Muscle',
        39.99
    ),
    new Product(
        'p11',
        ['c3', 'c5', 'c4'],
        'u1',
        'bpi Whey HD',
        'https://cdn.shopify.com/s/files/1/0055/2114/5907/products/WHEY-HD-50-Servs-Chocolate-Cookie_3000x3000-WEB_1000x.jpg?v=1576091121',
        'Intense Energy',
        49.99
    ),
    new Product(
        'p12',
        ['c4'],
        'u1',
        'Body Goods Tee',
        'https://www.mybodygoods.com/wp-content/uploads/2020/01/98B10F79-E44E-412C-9B12-D0BF158246C8.jpg',
        'Womens T-Shirt',
        20.99
    ),
    new Product(
        'p13',
        ['c2', 'c4'],
        'u1',
        'Alani Nu Pre-Workout',
        'https://cdn.shopify.com/s/files/1/0035/4654/6274/products/pink-guava_447x.png?v=1571145824',
        'Intense Energy',
        29.99
    ),
    new Product(
        'p14',
        ['c4'],
        'u1',
        'Diva Burn',
        'https://www.thepureline.com/wp-content/uploads/2016/08/divaburn-2.jpg',
        'Burn Fat',
        35.99
    ),
    new Product(
        'p15',
        ['c4'],
        'u1',
        'bpi Whey HD',
        'https://cdn.shopify.com/s/files/1/0055/2114/5907/products/WHEY-HD-50-Servs-Chocolate-Cookie_3000x3000-WEB_1000x.jpg?v=1576091121',
        'Intense Energy',
        49.99
    ),
    new Product(
        'p16',
        ['c4'],
        'u1',
        'Inspired MultiVitamin',
        'https://www.mybodygoods.com/wp-content/uploads/2020/01/multi_web-01.png',
        'Intense Energy',
        32.99
    ),
    new Product(
        'p17',
        ['c4'],
        'u1',
        'Body Goods Hoodie',
        'https://www.mybodygoods.com/wp-content/uploads/2020/01/875BA753-F108-4C5D-A6D5-922C24F4250C-1.jpg',
        'Body Goods Sweatshirt',
        49.99
    ),
    new Product(
        'p18',
        ['c5'],
        'u1',
        'Stay Hungry Tee',
        'https://www.mybodygoods.com/wp-content/uploads/2020/02/807E0E02-AE75-4B22-BAD8-912630773834.jpg',
        'Body Goods T-Shirt',
        24.99
    ),
    new Product(
        'p19',
        ['c5'],
        'u1',
        'Blackstone Labs Abnormal',
        'https://www.mybodygoods.com/wp-content/uploads/2019/12/abNORmal-nandrolone-precursor-19-nor-DHEA-blackstone-labs_1024x.png',
        'Gain mass',
        49.99
    ),
    new Product(
        'p20',
        ['c5'],
        'u1',
        'Blackstone Labs Chosen1',
        'https://www.mybodygoods.com/wp-content/uploads/2019/12/chosen1-1-dhea-supplement-1-andro-1-testosterone-precursor-blackstone-labs_1024x.png',
        'Build Lean Muscle',
        49.99
    ),
    new Product(
        'p21',
        ['c5'],
        'u1',
        'Nolvadren XT',
        'https://www.mybodygoods.com/wp-content/uploads/2019/12/MAN_Nolvadren_XT-560x560-1.png',
        'T-Booster',
        49.99
    ),
    new Product(
        'p22',
        ['c2', 'c5'],
        'u1',
        'Redcon1 Total War',
        'https://www.mybodygoods.com/wp-content/uploads/2019/12/Total-War-rainbow-candy-Render_2048x@2x.png',
        'Intense Energy',
        34.99
    ),
];

export default CATEGORIES;
import images from './images';

const menus = [
  {
    title: 'Turkey Sloppy Joes',
    price: '$50',
    tags: 'Sandwich Filling',
  },
  {
    title: 'Glazed Cornish Hens',
    price: '$60',
    tags: 'Pecans Rice Stuffing ',
  },
  {
    title: 'Chicken Tetrazzini',
    price: '$45',
    tags: 'Baked Spaghetti',
  },
  {
    title: 'Pot Roast',
    price: '$25',
    tags: 'Meal-in-one | Mashed Potato',
  },
  {
    title: 'Chicken a la King',
    price: '$26',
    tags: 'Chicken | Vegies',
  },
  {
    title: 'Spanish Rice',
    price: '$20',
    tags: ' Lime | Chili',
  },
];

const mocktails = [
  {
    title: 'Faux Fizz',
    price: '$20',
    tags: 'Pear | Apricots | Honey ',
  },
  {
    title: "Mulled Wine",
    price: '$16',
    tags: 'Pomegranate | Apple juice | Slice of lime',
  },
  {
    title: 'Clementine Mock Mojito',
    price: '$10',
    tags: 'Fresh mint | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Orange | Brown sugar | Grape juice',
  },
  {
    title: 'Sage Sour',
    price: '$26',
    tags: 'Gin | Lemon juice  | Egg white',
  },
  {
    title: 'Fruit Shakes',
    price: '$15',
    tags: 'Mango shake | Avocado Shake | Banana Shake',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { menus, mocktails, awards };

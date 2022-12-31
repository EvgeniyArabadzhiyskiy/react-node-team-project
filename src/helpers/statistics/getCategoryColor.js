const categoryList = {
  Food: '#FED057',
  Main: '#FFD8D0',
  House: '#C5BAFF',
  Auto: '#6E78E8',
  Children: '#81E1FF',
  Development: '#FD9498',
  Education: '#24CCA7',
  'Other expenses': '#00AD84',
};

export const getCategoryColor = value => categoryList[value];

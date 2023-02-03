const categoryList = {
  Food: '#f6a626',
  Main: '#f4ee2b',
  House: '#652ed3',
  Auto: '#4bc0c0',
  Children: '#36a3eb',
  Development: '#ff6385',
  Education: '#342ee9',
  'Other expenses': '#00ad31',
};

export const getCategoryColor = value => categoryList[value];

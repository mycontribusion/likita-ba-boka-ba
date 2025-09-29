import articlesData from './articles';

// Create a mapping of categories to counts and icons
const categoriesMap = {};

articlesData.forEach(article => {
  if (!categoriesMap[article.category]) {
    categoriesMap[article.category] = {
      name: article.category,
      icon: article.icon || '📄',
      count: 1
    };
  } else {
    categoriesMap[article.category].count += 1;
  }
});

// Convert the map to an array for easier mapping in components
const categoriesData = Object.values(categoriesMap);

export default categoriesData;

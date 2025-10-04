import articlesData from './articles';

// Create a mapping of categories to counts and icons
const categoriesMap = {};

articlesData.forEach(article => {
  // Normalize to always be an array
  const articleCategories = Array.isArray(article.category)
    ? article.category
    : [article.category];

  articleCategories.forEach(cat => {
    if (!cat) return; // skip if undefined or empty

    if (!categoriesMap[cat]) {
      categoriesMap[cat] = {
        name: cat,
        icon: article.icon || '📄',
        count: 1
      };
    } else {
      categoriesMap[cat].count += 1;
    }
  });
});

// Convert the map to an array for easier mapping in components
const categoriesData = Object.values(categoriesMap);

export default categoriesData;

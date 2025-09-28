
import articlesData from './articles';

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

const categoriesData = Object.values(categoriesMap);

export default categoriesData;

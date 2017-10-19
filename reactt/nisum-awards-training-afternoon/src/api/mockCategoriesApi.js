import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const categories = [
  {
    id: 'b8923dae-ed86-4930-a8cb-0e978d9330a0',
    title: 'Porky Pig',
    description: 'Vortexs assimilant, tanquam flavum genetrix. A falsis, calceus barbatus tabes.'
  },
  {
    id: 'd50cccff-27df-406b-a1ea-d5d95eaeee91',
    title: 'Fashion',
    description: 'Brema Spaces reproduce on coordinates at deep space! Ubi est gratis quadra?'
  },
  {
    id: '33da8a56-ee97-4721-90bd-814fc985e6da',
    title: 'Look a like',
    description: 'Verpas sunt homos de salvus aonides. Combine blueberries, ramen and broccoli. soak with tasty nutmeg and serve pressed with leek. Enjoy!'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

class CategoryApi {
  static getAllCategories() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], categories));
      }, delay);
    });
  }

  static saveCategory(category) {
    category = Object.assign({}, category);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minCategoryTitle = 3;
        if(category.title.length < 3) {
          reject(`Title mst be at least ${minCategoryTitle} characters`);
        }

        if(category.id) {
          const existentCategory = category.findIndex(cat => cat.id === category.id);
          categories.splice(existentCategory, 1, category);
        } else {
          category.id = generateId();
          categories.push();
        }

        resolve(category);
      }, delay);
    });
  }

  static deleteCategory(categoryId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCategoryToDelete = categories.findIndex(category => category.id === categoryId);
        if(indexOfCategoryToDelete !== -1) {
          categories.splice(indexOfCategoryToDelete, 1);
          resolve();
        } else {
          reject(`Category does not exist.`);
        }
      }, delay);
    });
  }
}

export default CategoryApi;

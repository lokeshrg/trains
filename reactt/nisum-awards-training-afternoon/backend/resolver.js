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
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

// we write the definition here, by default it[GraphQL] only provides schema not impl
// apollo is one of the impl of graph QL
export default {
  Query: {
    allCategories: () => categories
  },
  Mutation: {
    createCategory: (root, data) => {
      const minCategoryTitle = 3;
      if (data.title.length < 3) {
        throw new Error(`Title mst be at least ${minCategoryTitle} characters`);
      }

      const category = {
        title: data.title,
        description: data.description
      };

      category.id = generateId();
      categories.push(category);

      return category;
    }
  }
};

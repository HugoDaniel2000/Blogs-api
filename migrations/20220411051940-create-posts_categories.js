'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     const postCategories = await queryInterface.createTable('PostsCategories', {
      postId: {
         type: Sequelize.INTEGER,
         allowNull: false,
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE',
         references: {
           model: "BlogPosts",
           key:"id"
         }
        },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: "Categories",
          key:"id"
        }
       },
    });
      return postCategories
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('PostsCategories');
  }
};

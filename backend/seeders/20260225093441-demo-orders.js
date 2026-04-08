'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Orders', [
      { title: 'Airport Pickup', status: 'open', price: 25.0, createdAt: new Date(), updatedAt: new Date() },
      { title: 'City Ride', status: 'assigned', price: 12.5, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Night Ride', status: 'done', price: 18.0, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
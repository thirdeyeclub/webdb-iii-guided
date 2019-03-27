
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('roles').truncate() //not .del()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {name: 'TA'},
        {name: 'Student'},
        {name: 'Staff'}
      ]);
    });
};

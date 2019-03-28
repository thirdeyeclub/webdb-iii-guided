
exports.seed = function(knex, Promise) {
      return knex('roles').insert([
        {name: 'TA'},
        {name: 'Student'},
        {name: 'Staff'}
      ]);
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del() //del deletes everything inside users
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "admin", first_name: "A", last_name: "BABA" }
        // { id: 2, colName: "rowValue2" },
        // { id: 3, colName: "rowValue3" }
      ]);
    });
};

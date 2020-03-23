exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("addresses")
    .del()
    .then(() => {
      return knex("users").del();
    })
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "admin",
          first_name: "A",
          last_name: "BABA",
          password: "1234567",
          is_admin: true
        },
        {
          username: "Poweruser",
          first_name: "B",
          last_name: "AAA",
          password: "1111111",
          is_admin: false
        }
        // { id: 3, colName: "rowValue3" }
      ]);
    })
    .then(userID => {
      return knex("addresses").insert([
        { user_id: userID[0], address_1: "Some randome street 12" }
      ]);
    });
};

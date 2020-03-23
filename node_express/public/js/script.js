// console.log("testing test");
let allCars;

$.get("cars", ({ response }) => {
  allCars = response;
  console.log(response);
  response.map(car => {
    const carCard = `
      <div class="car-card" data-carId=${car.id} id=${car.id}>
          <button onclick=deleteCar(${car.id}) data-carId=${car.id}>X</button>
          <p>Brand: ${car.brand ? car.brand : "No brand"}</p>
          <p>Type: ${car.type ? car.type : "No type"}</p>
      </div>
  `;
    $("#car-wrapper").append(carCard);
  });

  // $(".test-delete").click(() => {
  //   console.log("click", allCars);
  //   allCars.forEach(car => {
  //     $.ajax({
  //       type: "DELETE",
  //       url: `/cars/delete/${car.id}`
  //     });
  //   });
  // });
});

function deleteCar(carId) {
  console.log(carId);
  $.ajax({
    type: "DELETE",
    url: "/cars/delete/" + carId
  }).done(({ response }) => {
    console.log(response);
    //dom solution
    //let cardDiv = event.target.parentElement
    // cardDiv.remove()
    $("#" + carId).remove();
  });
}

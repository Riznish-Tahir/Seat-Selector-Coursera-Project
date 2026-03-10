const seats = [
  { id: "A1", status: "available" },
  { id: "A2", status: "booked" },
  { id: "A3", status: "available" },
  { id: "A4", status: "unavailable" },
  { id: "A5", status: "available" },
];

const container = document.querySelector(".seat-container");
let selectedSeats = [];

function renderSeats() {
  container.innerHTML = "";
  seats.forEach((seat) => {
    const div = document.createElement("div");
    div.classList.add("seat");
    if (seat.status !== "available") div.classList.add(seat.status);

    const chair = document.createElement("div");
    chair.classList.add("chair");

    const legL = document.createElement("div");
    legL.classList.add("leg-left");
    const legR = document.createElement("div");
    legR.classList.add("leg-right");

    div.appendChild(chair);
    div.appendChild(legL);
    div.appendChild(legR);

    div.addEventListener("click", () => {
      if (seat.status === "available") {
        div.classList.toggle("selected");
        if (selectedSeats.includes(seat.id)) {
          selectedSeats = selectedSeats.filter((s) => s !== seat.id);
        } else {
          selectedSeats.push(seat.id);
        }
        document.getElementById("selected-seats").innerText =
          selectedSeats.length ? selectedSeats.join(", ") : "None";
      }
    });

    container.appendChild(div);
  });
}

renderSeats();

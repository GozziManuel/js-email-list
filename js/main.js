// DOM ELEMENTS
const forminput = document.getElementById("formbutton");
const emailadder = document.getElementById("emailadder");
const loader = document.getElementById("loader");
const button = document.getElementById("buttonID");
const buttonReset = document.getElementById("resetbtn");

// AXIOS GENERATOR EMAIL
buttonReset.disabled = true;

function axiosEmail(numeroEmail) {
  button.disabled = false;

  for (let i = 0; i < numeroEmail; i++) {
    axios

      .get("https://flynn.boolean.careers/exercises/api/random/mail")

      .then((resp) => {
        const email = resp.data.response;
        let innerEmail = `<li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-double-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
            />
            <path
              fill-rule="evenodd"
              d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
          ${email}
        </li>`;

        emailadder.innerHTML += innerEmail;
        emailadder.classList.remove("d-none");
        button.disabled = true;
        buttonReset.disabled = false;
      })
      .finally(() => {
        loader.classList.add("d-none");
      });
  }
}
button.addEventListener("click", (e) => {
  e.preventDefault();
  axiosEmail(10);
});

buttonReset.addEventListener("reset", () => {});

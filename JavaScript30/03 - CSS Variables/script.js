const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  console.log(this.value);
  // get all the data attributes of an element
  const suffix = this.dataset.sizing || "";

  // set global css variables
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));

inputs.forEach((input) =>
  input.addEventListener("mousemove", handleUpdate)
);
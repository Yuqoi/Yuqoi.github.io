const { animate, stagger } = anime


const modal = document.getElementById("search-modal")
const openBtn = document.getElementById("open-search")

openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden")
  modal.classList.add("flex")


  animate(modal, {
    opacity: [0, 1],
    translateY: [-100, 0],
    duration: 400,
    ease: "inOutExpo",
  })

})

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden")
    modal.classList.remove("flex")
  }
})

async function setupSearch() {
  const response = await fetch("/index.json")
  const pages = await response.json()

  const input = document.getElementById("search")
  const results = document.getElementById("results")

  input.addEventListener("input", () => {
    const q = input.value.toLowerCase()

    results.innerHTML = ""

    if (!q) return

    const matches = pages.filter(page =>
      page.title.toLowerCase().includes(q)
    )

    matches.forEach(page => {

      const icon =
        page.section === "blog"
          ? "ti-user"
          : "ti-code-dots"

      results.innerHTML += `
        <a
          href="${page.permalink}"
          class="
            search-result
            flex items-center gap-3
            px-4 py-3 border border-zinc-900
            group hover:bg-zinc-200 transition
          "
        >
          <i class="ti ${icon} text-zinc-900 group-hover:text-zinc-600"></i>

          <span class="group-hover:text-zinc-600">${page.title}</span>

          <i class="ti ti-arrow-right ml-auto text-zinc-900 group-hover:text-zinc-600"></i>
        </a>
      `
    })


    const resultItems = results.querySelectorAll(".search-result")

    resultItems.forEach((item) => {
      item.style.opacity = "0"
    })

    animate(resultItems, {
      opacity: [0, 1],
      translateX: [-10, 0],
      duration: 100,
      ease: "inSine",
    })
  })
}

setupSearch()
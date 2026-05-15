import { animate } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"


const modal = document.getElementById("search-modal")
const openBtn = document.getElementById("open-search")
openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden")
  modal.classList.add("flex")
  
  animate(
    "#search-modal > div",
    {
      opacity: [0, 1],
      y: [-20, 0],
      scale: [0.98, 1],
    },
    {
      duration: 0.2,
    }
  )
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
            result-item
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
  })
}

setupSearch()
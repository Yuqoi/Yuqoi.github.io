async function setupSearch() {
  const response = await fetch('/index.json')
  const pages = await response.json()

  const input = document.getElementById('search')
  const results = document.getElementById('results')

  input.addEventListener('input', () => {

    const q = input.value.toLowerCase()

    results.innerHTML = ''

    if (!q) return

    const matches = pages.filter(page =>
      page.title.toLowerCase().includes(q) ||
      page.content.toLowerCase().includes(q)
    )

    matches.forEach(page => {

      results.innerHTML += `
        <a
          href="${page.permalink}"
          class="block p-4 border border-zinc-800 rounded-xl hover:bg-zinc-900"
        >
          ${page.title}
        </a>
      `

    })

  })
}

setupSearch()
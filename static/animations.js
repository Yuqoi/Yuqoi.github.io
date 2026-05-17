const { animate } = anime

const revealElements = document.querySelectorAll(".reveal-up")
revealElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(32px)"
})

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return

            animate(entry.target, {
                opacity: [0, 1],
                translateY: [32, 0],
                duration: 700,
                ease: "outExpo",
            })

            observer.unobserve(entry.target)
        })
    },
    {
        threshold: 0.15,
    }
)

revealElements.forEach((el) => {
    observer.observe(el)
})


const line = document.querySelector(".reveal-line")

if (line) {
    line.style.transformOrigin = "top"
    line.style.transform = "scaleY(0)"

    const lineObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return

                animate(entry.target, {
                    scaleY: [0, 1],
                    duration: 900,
                    ease: "outExpo",
                })

                lineObserver.unobserve(entry.target)
            })
        },
        {
            threshold: 0.15,
        }
    )

    lineObserver.observe(line)
}

const blogElements = document.querySelectorAll(".blog-element")

// blogElements.forEach((item) => {
//   item.style.opacity = "0"
// })

animate(blogElements, {
  opacity: [0, 1],
  translateY: [32, 0],
  duration: 150,
  ease: "linear",
})
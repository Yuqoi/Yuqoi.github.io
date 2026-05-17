const { animate } = anime

const revealElements = document.querySelectorAll(".experience-element")

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


const line = document.querySelector(".experience-line")

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

animate(blogElements, {
  opacity: [0, 1],
  translateY: [32, 0],
  duration: 150,
  ease: "linear",
})


const achvElements = document.querySelectorAll(".achv-element")

achvElements.forEach((el) => {
    observer.observe(el)
})

const certificateElements = document.querySelectorAll(".certificate-element")

certificateElements.forEach((el) => {
    observer.observe(el)
})
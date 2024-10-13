const panels = document.querySelectorAll('.panel');

function openPanel() {
    this.classList.toggle('open')
}

function transformText(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}

panels.forEach(panel => panel.addEventListener('click', openPanel))
panels.forEach(panel => panel.addEventListener('transitionend', transformText))

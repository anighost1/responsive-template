
// delay
const delay = async (time) => {
    return (
        new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, time)
        })
    )
}

const expand = () => {
    const element = document.getElementById('expandable-menu')
    element.style.display = 'block'
}

const compress = () => {
    const element = document.getElementById('expandable-menu')
    element.style.display = 'none'
}

const menuSelect = async () => {
    await delay(150)
    compress()
}

const profileExpand = () => {
    const element = document.getElementById('profile-menu')
    element.style.display = 'block'
}

const profileCompress = () => {
    const element = document.getElementById('profile-menu')
    element.style.display = 'none'
}
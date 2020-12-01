function fetchData() {

    return fetch('https://data.cityofnewyork.us/resource/vx8i-nprf.json') 
        .then(response => response.json())
        .then(json => renderDatas(json))

}

function renderDatas(json) {
    const h2 = document.querySelector('h2')
    json.forEach(data => {
        const p = document.createElement('p')

        p.innerHTML = `<strong>Year:</strong> ${data.year}`
        h2.appendChild(p)
    })
}

document.addEventListener('DOMContentLoaded', function () {
    fetchData()
})

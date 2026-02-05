document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
    { name: 'Adele', Image: './img/adele.jpg' },
    { name: 'Tame Impala', Image: './img/tameimpala.jpg' },
    { name: 'Sabrina Carpenter', Image: './img/sabrinacarpenter.jpg' },
    { name: 'Gorillaz', Image: './img/gorillaz.jpg' },
    { name: 'Eminem', Image: './img/eminem.jpg' },
    { name: 'Ye', Image: './img/ye.jpg' }
];

    const albumsData = [
    { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './img/billieeilish.jpg' },
    { name: 'Mantra', artist: 'Jennie', image: './img/jennie.jpg' },
    { name: 'DAMN', artist: 'Kendrick Lamar', image: './img/kendrick.jpg' },
    { name: 'V', artist: 'Maroon 5', image: './img/maroon5.jpg' },
    { name: '333', artist: 'matuê', image: './img/matue.jpg' },
    { name: 'NewJeans', artist: 'NewJeans', image: './img/newjeans.jpg' }
];

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')


    artistsData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src="${artist.Image}" alt="imagem do ${artist.name}">
            <h3>${artist.name}</h3>
            <p>artista</p>
        `
    
        artistGrid.appendChild(artistCard)
    })

    albumsData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
            <img src="${album.image}" alt="imagem do ${album.name}">
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        `
    
        albumsGrid.appendChild(albumCard)
    })
})
import React from 'react'
import './MovieList.css'

function MovieList() {
    const persons = [
        {
            "id": 1,
            "title": "Avatar",
            "distributor": "20th Century Fox",
            "year": 2009,
            "amount": "$2,787,965,087",
            "img": {
                "src": "media/avatar.jpg",
                "alt": "avatar"
            },
            "ranking": 1
        },
        {
            "id": 2,
            "title": "Titanic",
            "distributor": "20th Century Fox",
            "year": 1997,
            "amount": "$2,187,463,944",
            "img": {
                "src": "media/titanic.jpg",
                "alt": "titanic"
            },
            "ranking": 2
        },
        {
            "id": 3,
            "title": "Star Wars: The Force Awakens",
            "distributor": "Walt Disney Studios Motion Pictures",
            "year": 2015,
            "amount": "$2,068,223,624",
            "img": {
                "src": "media/star_wars_the_force_awakens.jpg",
                "alt": "star_wars_the_force_awakens"
            },
            "ranking": 3
        },
        {
            "id": 4,
            "title": "Avengers: Infinity War",
            "distributor": "Walt Disney Studios Motion Pictures",
            "year": 2018,
            "amount": "$2,048,359,754",
            "img": {
                "src": "media/avengers_infinity_war.jpg",
                "alt": "avengers_infinity_war"
            },
            "ranking": 4
        },
        {
            "id": 5,
            "title": "Jurassic World",
            "distributor": "Universal Pictures",
            "year": 2015,
            "amount": "$1,671,713,208",
            "img": {
                "src": "media/jurassic_world.jpg",
                "alt": "jurassic_world"
            },
            "ranking": 5
        }
    ]

    const personList = persons.map(movie => (
        <>
            <div className='row'>
                <div className='column'>
                    <div className="card">
                    <img src={movie.img.src} alt={movie.img.alt} width='260px' />
                    <h2> {`#${movie.ranking} - ${movie.title} (${movie.year})`} </h2>
                    <p> {`Distibutor: ${movie.distributor}`} </p>
                    <p> {`Amount: ${movie.amount}`} </p>
                    </div>
                </div>
            </div>
    </>
    ))
    return (
        <div><h1>MovieList</h1>
            {personList}</div>
    )
}

export default MovieList
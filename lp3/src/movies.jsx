import React, { Component } from 'react';
import { getMovies, getMovie, saveMovie, deleteMovie  } from './services/fakeMovieService';

class Movies extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    }

    constructor(){
        super();
    }

    getRows(){
        let moviesArray = getMovies();
        return moviesArray.map( 
            movie => {
                return (
                    <tr key={movie['_id']}>
                        <td>{movie['title']}</td>
                        <td>{movie['genre']['name']}</td>
                        <td>{movie['numberInStock']}</td>
                        <td>{movie['dailyRentalRate']}</td>
                        <td>
                            <button type="button" className="btn btn-danger">
                                Delete
                            </button>
                        </td>
                    </tr>
                );
            }
        );
    }

    render(){
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.getRows() }
                    </tbody>
                </table>
            </div>
            
        );
    }
}

export default Movies;
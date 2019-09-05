import React, { Component } from 'react';
import { getMovies, deleteMovie  } from '../services/fakeMovieService';
import Like from './common/like'
import Pagination from './common/pagination'

class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize: 4
    }

    constructor(){
        super();
        this.getRows = this.getRows.bind(this);
        this.deleteMovieFun = this.deleteMovieFun.bind(this);
    }

    deleteMovieFun = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies}); /* movies: movies (Key and value is the same hence only movies is writen) */
    }

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({
            movies: movies    
        });
    }

    handlePageChange = (page) => {
        console.log('handlePageChange');
    }

    getRows() {
        return this.state.movies.map( 
            movie => {
                return (
                    <tr key={movie['_id']}>
                        <td>{movie['title']}</td>
                        <td>{movie['genre']['name']}</td>
                        <td>{movie['numberInStock']}</td>
                        <td>{movie['dailyRentalRate']}</td>
                        <td>
                            <Like liked={movie['liked']} onClick={ () => this.handleLike(movie) }/>
                        </td>
                        <td>
                            <button onClick={ () => this.deleteMovieFun(movie)} type="button" className="btn btn-danger">
                                Delete
                            </button>
                        </td>
                    </tr>
                );
            }
        );
    }

    render(){
        const moviesLength = this.state.movies.length;

        if(moviesLength === 0)
            return <p>There are no movies in the Database.</p>
        
        return (
            <React.Fragment>
                <p>Showing {moviesLength} movies in the database.</p>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Rate</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.getRows() }
                        </tbody>
                    </table>
                    <Pagination 
                        itemsCount={moviesLength} 
                        pageSize={this.state.pageSize} 
                        onPageChange={this.handlePageChange} 
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default Movies;
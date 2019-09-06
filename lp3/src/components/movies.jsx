import React, { Component } from 'react';
import { getMovies  } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService.js';
import Like from './common/like';
import Pagination from './common/pagination';
import { paginate } from '../utills/paginate';
import ListGroup from './common/listGroup';

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
    };

    componentDidMount(){
        this.setState({
            movies: getMovies(),
            genres: getGenres(),
        });
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
        // console.log('handlePageChange = ', page);
        this.setState({ currentPage: page });
    }

    getRows(movies) {
        return movies.map( 
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

    handleGenreSelect = genre => {
        // console.log('handleGenreSelect = ', genre);
        this.setState({
            selectedGenre: genre
        });
    }

    render(){
        const moviesLength = this.state.movies.length;
        const { pageSize, currentPage } = this.state;

        if(moviesLength === 0)
            return <p>There are no movies in the Database.</p>;

        const movies = paginate(this.state.movies, currentPage, pageSize);

        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup // Default Props = textProperty: 'name', valueProperty: '_id'
                        items={this.state.genres} 
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
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
                                { this.getRows(movies) }
                            </tbody>
                        </table>
                        <Pagination 
                            itemsCount={moviesLength} 
                            pageSize={pageSize} 
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange} 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Movies;
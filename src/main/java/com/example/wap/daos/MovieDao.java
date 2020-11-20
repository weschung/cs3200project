package com.example.wap.daos;

import com.example.wap.models.Movie;
import com.example.wap.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MovieDao {
    @Autowired
    MovieRepository movieRepository;
    @GetMapping("/findAllMovies")
    public Iterable<Movie> findAllMovies() {
        return movieRepository.findAll();
    }
    @GetMapping("/findMovieById/{id}")
    public Movie findMovieById(
            @PathVariable("id") Integer id) {
        return movieRepository.findById(id).get();
    }
    @GetMapping("/deleteMovie/{id}")
    public void deleteMovie(
            @PathVariable("id") Integer id) {
        movieRepository.deleteById(id);
    }
    @GetMapping("/createMovie")
    public Movie createMovie() {
        Movie movie = new Movie();
        movie.setTitle("New Movie");
        return movieRepository.save(movie);
    }
    @GetMapping("/renameMovie/{id}/{newTitle}")
    public Movie renameMovie(
            @PathVariable("id") Integer id,
            @PathVariable("newTitle") String newTitle) {
        Movie movie = movieRepository.findById(id).get();
        movie.setTitle(newTitle);
        return movieRepository.save(movie);
    }
}

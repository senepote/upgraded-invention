const app = angular.module('MovieApp',[])

app.controller('MainController', ['$http', function($http){
  this.h1 = 'Personal Movie Collection'
  this.movies = []
  this.movie = ''

  this.chooseAMovie = movie =>{
    this.movie = movie
  }
  //create movie
  this.createForm = {}
  this.createMovie = () => {

    $http({
      method: 'POST',
      url: '/movies',
      data: this.createForm
    }).then(response =>{
      // console.log(response.data);
      this.movies.push(response.data)
      this.createForm = {}
    }, error =>{
      console.log(error);
    })
  }

  this.getMovies = () => {
    $http({
      method: 'GET',
      url: '/movies'
    }).then(response =>{
      this.movies = response.data
    }, error => {
      console.log(error);
    })
  }

  //delete movie
  this.deleteMovie = (id) =>{
    $http({
      method: 'DELETE',
      url: '/movies/' + id
    }).then(response => {
      const removeByIndex = this.movies.findIndex(movie =>
      movie._id ===id)
      this.movies.splice(removeByIndex, 1)
    },error => {
      console.log(error);
    })
  }
  //update route
  this.updateMovie = movie => {
    movie.watched = !movie.watched
    $http({
      method: 'PUT',
      url:'/movies/' + movie._id,
      data:{watched: movie.watched}
    }).then(response =>{
      console.log(response.data.watched);
    },error +>{
      console.log(error);
    })
  }

  this.getMovies()




//CLOSES CONTROLLER
}])

const app = angular.module('MovieApp',[])

app.controller('MainController', ['$http', function($http){
  this.h1 = 'Personal Movie Collection'
  this.movies = []
  this.movie = ''

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








//CLOSES CONTROLLER
}])

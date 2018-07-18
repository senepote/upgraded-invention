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
      console.log(response.data);
    }, error =>{
      console.log(error);
    })
  }










//CLOSES CONTROLLER
}])

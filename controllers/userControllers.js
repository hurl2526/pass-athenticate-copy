

module.exports = {
  home:(req, res) => {
    res.render('index')
  },
  
  getMovies:(req,res)=>{
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=3321a09fccc3516724f51fea1ce994ab&language=en-US&page=1')
  .then(movieData => 
    // console.log(movieData))
    res.render('movies',{movieData}))
  .catch(error => console.log(error))
  },
  
  getRandom:(req,res)=>{
    axios.get('https://randomuser.me/api/?results=20')
  .then(data => 
    // console.log(data.data.results))
    res.render('random',{data}))
  .catch(error => console.log(error))
    // res.render('random',people)
  },
  
  no:(req, res) => {
    res.render('no')
  },
  
  options:(req, res) => {
      res.render('options')
  },
  login: (req, res) => {
      res.render('login')
  },
  
  register: (req, res) => {
    res.render('register')
  },
  
  logout: (req,res)=>{
    req.logout();
    req.flash('success', 'you are now logged out')
    res.redirect('/login')
  }
}

  
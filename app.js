const express=require('express');
const app=express();
const axios=require('axios');

const tvShowsAPI = 'https://www.episodate.com/api/most-popular';
const detailsAPI = 'https://www.episodate.com/api/show-details';
const searchAPI = 'https://www.episodate.com/api/search';

// set template engine
app.set('view engine', 'ejs');

// set static folder
app.use(express.static('/.public'));
app.use(express.json());

// hompage


// homepage
app.get('/', async (req,res)=>{

    let { page }=req.query;

    try{
        if(typeof page ==='undefined' || page < 1 ){
            page=1;
        }

        const response= await axios.get(tvShowsAPI + `?page=${page}`);
        res.render('movies', {movies: response.data});
    }

    catch(error){
    console.log(error);  
    }
      
})

// one movie description
app.get('/movie', async (req, res) => {
    const { q } = req.query;
    // let nom  = 2;

    try {
        const response = await axios.get(detailsAPI + `?q=${q}`);
        const movieData = response.data.tvShow;
        console.log(movieData)
        res.render('movie', { movie: movieData});

    } catch (error) {
        console.log(error);
        // res.status(500).json({msg:'error'});
    }
})

// movies pages
app.get('/search', async (req,res)=>{
    const { query } = req.query;

    try {
        const response = await axios.get(searchAPI + `?q=${query}`);
        const movies = response.data.tv_shows;

        res.render('movies(1)', { movies });
    } catch (error) {
        console.log(error);
        // res.status(500).json({msg:'error'});
    }
})




app.listen(5000, ()=>{
    console.log('App is running on port 5000');

})

// const express = require('express');
// const app = express();
// const axios = require('axios');

// const tvShowsAPI = 'https://www.episodate.com/api/most-popular';
// const detailsAPI = '';
// const searchAPI = '';

// // set template enginr
// app.set('view engine', 'ejs');
// app.use(express.json());
// app.use(express.static('./public'));

// app.get('/', async (req, res) => {
//     let { page } = req.query;

//     try {
//         if (typeof page === 'undefined' || page < 1) {
//             page = 1;
//         }

//         const resp = await axios.get(tvShowsAPI + `?page=${page}`);
        
//         res.render('movies', { movies: resp.data });

//     } catch (error) {
//         console.log(error);
//     }
// })

// app.get('/movie', (req, res) => {
//     const { id } = req.query;

//     res.render('movie')
// })

// app.get('/search', (req, res) => {
    
// })


// app.listen(5000, () => {
//     console.log(`App is live at https://localhost:3000`)
// })
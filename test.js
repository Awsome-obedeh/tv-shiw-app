const axios=require('axios');

// async function main() {
//     const tvShowsApi ='https://www.episodate.com/api/most-popular?page=1';
//     const searchApi='https://www.episodate.com/api/search?q=arrow&page=1';
//     const detailsAPI='https://www.episodate.com/api/show-details?q=29560';

//     // make requesu for tv shows with the TVSHOWSAPI
//     const resp1=await fetch(detailsAPI);
//     const data1=await resp1.json();

//     console.log("Tv shows are: ")
//     console.log(data1);
// }


// main();

// await new Promise((resolve)=> resolve());

// using axios

async function main() {
    const tvShowsApi ='https://www.episodate.com/api/most-popular?page=1';
    const searchApi='https://www.episodate.com/api/search?q=arrow&page=1';
    const detailsAPI='https://www.episodate.com/api/show-details?q=29560';

    // make requesu for tv shows with the TVSHOWSAPI
    const resp1=await axios(detailsAPI);
   

    console.log("Tv shows are: ")
    console.log(resp1.data);
}


main();
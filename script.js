const get = async () => {
  //gauti duomenis is api

  try {
    let links = [
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY",
      "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=DEMO_KEY",
      "https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=DEMO_KEY",
    ];

    for (let l in links) {
      const res = await fetch(links[l]);
      console.log(links[l]);
      let data = await res.json();

      const articles = ["all"];
      const my_main_div = document.getElementById("maindiv");

      for (let i = 0; i < data.photos.length; i++) {
        console.log(data.photos[i]);
      }
    }

    // for (let i = 0; i < data.photos.length; i++) {
    //   console.log(data.photos[i]);

    // const one_pick = document.createElement('div')
    // one_pick.className = 'card'

    // //idedam img
    // const rover_pic = document.createElement('img')
    // rover_pic.src = data.results[i].photos[1].url
    // one_pick.appendChild('one_pick')
  } catch (error) {
    console.log(error);
  }
};
console.log(get());

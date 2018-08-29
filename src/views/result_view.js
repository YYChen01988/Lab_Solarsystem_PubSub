const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(container){
  this.container = container
};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('SolarSystem:planet', (event) => {
    const planetObject = event.detail;
    // console.log(planetObject);
    this.render(planetObject);
  });
}

ResultView.prototype.createImage = function(planet){
  planetImage = document.createElement('img');
  planetImage.src = planet.image
  planetImage.classList.add("medium-image");
  return planetImage
}

ResultView.prototype.createHeading = function(planet){
  const heading = document.createElement('h2');
  heading.textContent = planet.name;
  return heading;
};

ResultView.prototype.createDetails = function(planet){
  const div = document.createElement('div');
  // const keys = Object.keys(planet);
  // keys.forEach((key) => {
  //   const planetDetails = document.createElement('p');
  //   planetDetails.textContent = key + ": " + planet[key];
  //   div.appendChild(planetDetails);
  // })

  for (var key in planet){
    const planetDetails = document.createElement('p');
    planetDetails.textContent = key + ": " + planet[key];
    div.appendChild(planetDetails);
  }


  return div;
};


ResultView.prototype.render = function(planet){
  this.container.innerHTML = '';
  const heading = this.createHeading(planet);
  this.container.appendChild(heading);

  const detail = this.createDetails(planet);
  this.container.appendChild(detail);

  const image = this.createImage(planet);
  this.container.appendChild(image);

};


module.exports = ResultView;

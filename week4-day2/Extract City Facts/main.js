//Extract City Facts
function cityFacts(city) {
  let cityList = [

    ({
      name: "Berlin",
      population: "3,748,148",
      continent: "Europe"
    })
  
    ({
      name: "Manila",
      population: "1,780,148",
      continent: "Asia"
    })
  
    ({
      name: "Paris",
      population: "2,140,526",
      continent: "Europe"
    })
  
  ];


	return cityList.name + " has a population of " + cityList.population + " and is situated in " + city.continent;
}
cityFacts();
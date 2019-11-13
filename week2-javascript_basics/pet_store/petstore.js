
/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 * 				each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {
    var result;
    if (Number(numAnimals) >= 0 && Number(avgFood) >= 0) {
        result = numAnimals * avgFood;
    } else {
        result = -1;
    } 
    return result;
}

/**
 * Determines which day of the week had the most nnumber of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */
var monday = new Weekday('monday', 5);
var tuesday = new Weekday('tuesday', 9);
var wednesday = new Weekday('wednesday', 7);
var thurdsday = new Weekday('thurdsday', 8);
var friday = new Weekday('friday', 9);
var saturday = new Weekday('saturday', 9);
var sunday = new Weekday('sunday', 0);

var week_days = [monday, tuesday, wednesday, thurdsday, friday, saturday, sunday];


function mostPopularDays(week) {
    var week = week.sort(function (x, y) { return y.traffic - x.traffic });
    var day; 
    for (day = 0; day < week.length; day++) {
        if (week[day].traffic > week[day + 1].traffic) {
            week = week.slice(0, day + 1);
        }
    }
        if (week.length == 1) {
            return week[0].name;
        } else {
            var result = [];
            for (day of week) {
                result.push(day.name);
            }
            return result
        }
}


/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */
animal_names = ['George', 'Pepa', 'Rozie']
animal_types = ['Dog', 'Pig', 'Bear']
animal_breeds = ['German Sheperd', 'Iberian', 'Polar']

function checkArraysComply(arrays) {
    let result = true;
    for (arr of arrays) {
        if (arr == null || arr.length == 0) {
            result = false;
        }
    }   
    if (result == true) {
        for (let i = 0; i < (arrays.length - 1); i++) {
            if (arrays[i].length != arrays[i+1].length) {
                result = false;
                }
        }
    }
    return result

}

function createAnimalObjects(names, types, breeds) {
    let result;
    var animals = [];
    let arrays = [names, types, breeds];
    arrays_comply = checkArraysComply(arrays)
    if (!arrays_comply) { 
        result = 0 
    } else {
        for (let count = 0; count < arrays.length; count++) {
            let animal_traits = [];
            for (arr of arrays) {
                animal_traits.push(arr[count])
                }
            let animal = new Animal(animal_traits[0], animal_traits[1], animal_traits[2])
            animals.push(animal)
            }
        result = animals
    }
    return result
}


/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday (name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item (name, barcode, sellingPrice, buyingPrice) {
     this.name = name;
     this.barcode = barcode;
     this.sellingPrice = sellingPrice;
     this.buyingPrice = buyingPrice;
}
 /**
  * A prototype to create Animal objects
  */
function Animal (name, type, breed) {
    this.name = name;
     this.type = type;
     this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
    return 'hello world!';
}


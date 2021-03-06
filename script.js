/* Dla zadań 1-5 musisz skorzystać z danych z pliku data.js

1. Wykonaj funkcje, która zwróci jedynie osoby z podaną rasą w argumencie.

    Input: showOnlyUsersWithRace('Cambodian')
    Output: '5.1: [{id: 8, first_name: "Garvey", last_name: "Islep", email: "gislep7@nps.gov", gender: "Male", …}]'
    Input: showOnlyUsersWithRace(1)
    Output: '5.2: taka rasa nie istnieje'
    Input: showOnlyUsersWithRace('Polish')
    Output: '5.3: []'

2. Wyświetl każdego z userów w konwencji: title first_name last_name work as job_title in company.

    Output:
    Rev Kaylil Hovey work as Recruiting Manager in Browseblab
    Rev Cesare Caroline work as Computer Systems Analyst II in Wordtune
    Mr Xaviera Danilchenko work as Statistician IV in Rhynyx
    Honorable Shandy Sanford work as Data Coordiator in Topdrive
    Honorable Muire Pothecary work as Executive Secretary in Realbridge
    Ms Mano Gwatkins work as Automation Specialist IV in InnoZ
    Honorable Frederica Shackleton work as Help Desk Operator in Yoveo
    Mr Garvey Islep work as Internal Auditor in Livefish
    Rev Aristotle Gozard work as Software Test Engineer IV in Feedspan
    Honorable Bryon Boulder work as Senior Editor in Kazu

3. Skróć zawartość kolekcji do kluczy id, first_name, last_name i dodaj nowy klucz full_name składający się z first_name i last_name.

    Output: [
    {id:1, first_name: "Kaylil", last_name: "Kaylil", full_name: "Kaylil Hovey"}
    {id:2 ,first_name: "Cesare", last_name: "Cesare", full_name: "Cesare Caroline"}
    {id:3 ,first_name: "Xaviera", last_name: "Xaviera", full_name: "Xaviera Danilchenko"}
    {id:4 ,first_name: "Shandy", last_name: "Shandy", full_name: "Shandy Sanford"}
    {id:5 ,first_name: "Muire", last_name: "Muire", full_name: "Muire Pothecary"}
    {id:6 ,first_name: "Mano", last_name: "Mano", full_name: "Mano Gwatkins"}
    {id:7 ,first_name: "Frederica", last_name: "Frederica", full_name: "Frederica Shackleton"}
    {id:8 ,first_name: "Garvey", last_name: "Garvey", full_name: "Garvey Islep"}
    {id:9 ,first_name: "Aristotle", last_name: "Aristotle", full_name: "Aristotle Gozard"}
    {id:10 ,first_name: "Bryon", last_name: "Bryon", full_name: "Bryon Boulder"}
4. Wyświetl jedynie osoby, które mają co najmniej 30 lat i są kobietami w konwencji 'imię ma X lat' i na koniec wyświetl sumę ich lat.

    Output:
    Kaylil ma 33 lat
    Xaviera ma 55 lat
    Shandy ma 76 lat
    Frederica ma 89 lat
    Razem mają: 253 lat

5.  Dodaj do kolekcji dodatkowe klucze:
    height: wiek + 100
    weight: wiek + 10
    bmi: weight / (height/100) ^ 2
    Następnie zwróc tablie imion tych osób, które mają BMI w zakresie 18,5–24,99.

    Output: ["Kaylil", "Muire", "Aristotle", "Mano", "Bryon"]

Input dla zadań 6-10: [11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21, -53, 17, -21]

6. Policz sumę wszytskich elementów tablicy

    Output: '1.1 Suma elementów w tablicy: 215'

7. Policz sumę wartości bezwględnych w tablicy

    Output: '1.2 Suma wartości bezwględnych z elementów w tablicy: 483'

8. Wyświetl tylko elementy większe lub równe od 20:

    Output: '1.3 Elementy większe lub równe od 20: 50,20,21,100,20,44'

9. Wyświetl sumę elementów tylko ujemnych:

    Output: '1.4 Sume elementów ujemnych: -134'

10. Wyświetl sumę elementów na indeksach parzystych:

    Output: '1.5 Suma elementów parzystych: 193'

*/

// ************** solutions ******************

//exercise 1
console.log('-------------- exercise 1 -----------------------');

const showOnlyUsersWithRace = nationality => {
    if (typeof nationality !== 'string' || nationality === '' ) {
        console.log('taka rasa nie istnieje')
    } else {
    const selectedUsers = people.filter(person => person.race === nationality);
    console.log(selectedUsers);
    }
};

showOnlyUsersWithRace('Cambodian');
showOnlyUsersWithRace(1);
showOnlyUsersWithRace('Polish');


//exercise 2
console.log('-------------- exercise 2 -----------------------');

const showUsersData = users => {
    const usersData = users.map(user => {
        const userData = [];
        userData.push(user.title);
        userData.push(user.first_name);
        userData.push(user.last_name);
        userData.push(user.job_title);
        userData.push(`in ${user.company}`)
        return userData.join(' ');
    });
    usersData.forEach( user => {
        console.log(user)
    });
}

// komentarz Bartosza Cytrowskiego **********
// wykorzystaj destrukturyzację

// const showUsersData = users => users.map(({ title, first_name, last_name, job_title, company }) => [title, first_name, last_name, job_title, `in ${company}`].join(' ')
// ).forEach(userLine => console.log(userLine));
// ******************************************

showUsersData(people);

//exercise 3
console.log('-------------- exercise 3 -----------------------');

const changeUsersProperties = usersArray => {
    return usersArray.map(user => {
        const newUser = JSON.parse(JSON.stringify(user));
        newUser.full_name = `${user.first_name} ${user.last_name}`;
        return newUser;
    });
};

// komentarz Bartosza Cytrowskiego **********
// nie ma potrzeby wykorzystywania JSONA do robienia głębokiej kopii dla obiektu z typami prostymi - można wykorzystać operator spread

// const changeUsersProperties = users => users.map(user => ({...user, full_name: `${user.first_name} ${user.last_name}`}));
// *******************************************

const showShortenUsersArray = usersArray => {
    const shortenUsersArray = changeUsersProperties(usersArray);
    shortenUsersArray.forEach(user => {
        console.log(user)
    })
};

showShortenUsersArray(people);

// exercise 4
console.log('-------------- exercise 4 -----------------------');

let properAge = 30;

const findPersonElderThan = (age, usersArray) => usersArray.filter(user => user.age >= age);

const chooseWomen = usersArray => usersArray.filter(user => user.gender === 'Female');

const showWomenWithProperAge = (age, usersArray) => {
    const peopleWithProperAge = findPersonElderThan(age, usersArray);
    const womenWithProperAge = chooseWomen(peopleWithProperAge);
    womenWithProperAge.forEach(woman => {
        console.log(`${woman.first_name} ma ${woman.age} lat`);
    })
    const womenAge = womenWithProperAge.map(woman => woman.age);
    const ageSum = womenAge.reduce( (previousValue, currentValue) => {
        return previousValue + currentValue;
    }, 0);
    console.log(`Razem mają: ${ageSum} lat`);
}

showWomenWithProperAge(properAge, people);

// exercise 5
console.log('-------------- exercise 5 -----------------------');
let minBMI = 18.5;
let maxBMI = 24.99;

const addUsersProperties = usersArray => {
    const newUsersProperties = usersArray.map(user => {
        const newUser = JSON.parse(JSON.stringify(user));
        newUser.height = user.age + 100;
        newUser.weight = user.age + 10;
        newUser.bmi = (newUser.weight / Math.pow(newUser.height/100, 2)).toFixed(2);
        return newUser;
    });
    return newUsersProperties;
};

const showUserNamesWithSelectedBmiRange = (min, max, usersArray) => {
    const newUsersArray = addUsersProperties(usersArray);
    const usersWithSelectedBmiRangeArray = newUsersArray.filter(user => parseFloat(user.bmi) >= min && parseFloat(user.bmi) <= max);
    return usersWithSelectedBmiRangeArray.map(user => user.first_name);
};

const usersNames = showUserNamesWithSelectedBmiRange(minBMI, maxBMI, people);
console.log(usersNames);

//******************************

const numbers = [11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21, -53, 17, -21];

//*****************************

// exercise 6
console.log('-------------- exercise 6 -----------------------');

const sumNumbers = numbersArray => {
    return numbersArray.reduce((previousValue, currentValue) => previousValue + currentValue);
}

const sumNums = sumNumbers(numbers);
console.log(`Suma elementów w tablicy: ${sumNums}`);

// exercise 7
console.log('-------------- exercise 7 -----------------------');

const sumAbsVal = numbersArray => numbersArray.reduce((previousValue, currentValue) => previousValue + Math.abs(currentValue), 0);

// komentarz Bartosza Cytrowskiego *********
// funkcję sumAbsVal można uprościć to poniższego zapisu:
// const sum = (a, b) => a + b;
// const sumAbsVal = numbers => numbers.map(Math.abs).reduce(sum, 0)
// ******************************************

const sumAbsNums = sumAbsVal(numbers);
console.log(`Suma wartości bezwzględnych z elementów w tablicy: ${sumAbsNums}`);

// exercise 8
console.log('-------------- exercise 8 -----------------------');

const showSelectedNumbers = (limit, numbersArray) => numbersArray.filter(number => number >= limit);    

const selectedNumbers = showSelectedNumbers(20, numbers);
console.log(`Elementy większe lub równe od 20: ${selectedNumbers}`);

// exercise 9
console.log('-------------- exercise 9 -----------------------');

const sumNegativeNumbers = numbersArray => numbersArray.reduce((previousValue, currentValue) => {
    return currentValue < 0 ? previousValue + currentValue : previousValue;
}, 0);

const sumNegativeNums = sumNegativeNumbers(numbers);
console.log(`Suma elementów ujemnych: ${sumNegativeNums}`);

// exercise 10
console.log('-------------- exercise 10 -----------------------');

const sumEvenIndexNumbers = numbersArray => numbersArray.reduce((previousValue, currentValue, numberIndex) => numberIndex%2 === 0 ? previousValue + currentValue : previousValue, 0);

// komentarz Bartosza Cytrowskiego **********
// funkcję można uprościć
// const sum = (a, b) => a + b;
// const onEvenIndex = (_, i) => i % 2 === 0
// const sumEvenIndexNumbers = numbers => numbers.filter(onEvenIndex).reduce(sum, 0)
// *******************************************

const sumEvenNums = sumEvenIndexNumbers(numbers);
console.log(`Suma elementów parzystych: ${sumEvenNums}`);

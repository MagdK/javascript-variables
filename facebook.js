const myProfile = {
    "username": "Dus",
    "accountActive": true,
    "firstName": "Magda",
    "familyName": "Kovacs",
    "mobile": "063123456789",
    "email": "magda@email.com",
    "gender": "female",
    "dateOfBirth": new Date(1940, 12, 1),
    "friends": [
        {"name": "Black Larsen", "age": 80},
        {"name": "Jane Doe", "age": 20},
        {"name": "Janet Doe", "age": 45}
    ],

    "likes": [
        {"url": "https://kittens.com", "date": new Date(2015, 08, 15)},
        {"url": "https://puppies.com", "date": new Date(2016, 04, 15)},
        {"url": "https://horses.com", "date": new Date(2017, 07, 19)}
    ],

    "family":[ 
        {"mother": "Jenny Doe", "born": 1950},
        {"father": "Johathan Doe", "born": 1940},
        {"sister": "Jolien Doe", "born": 1980},
        {"brother": "James Doe", "born": 1990}
    ],

    "life events": [
        {"born": 1985},
        {"graduated from elementary school": 2001},
        {"graduated from highschool": 2005},
        {"graduated from college": 2011},
        {"job 1": 2011, "company name": "Tupturup"},
        {"job 2": 2013, "company name": "Csiripcsirip Kft."},
        {"job 3": 2013, "company name": "Pamparam Bt."}
    ]
}

console.log(myProfile);
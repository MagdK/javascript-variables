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
        {"url": "https://horses.com", "date": new Date(2017, 07, 19)},
    ]
}

console.log(myProfile);
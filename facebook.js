const myProfile = {
    "username": "beka",
    "firstName": "Magda",
    "familyName": "Kovacs",
    "mobile": 63112345689,
    "email": "magda@email.com",
    "gender": "female",
    "dateOfBirth": new Date(1990, 12, 1),
    "friends": [
        {"name": "Black Larsen", "age": 130},
        {"name": "Jane Doe", "age": 24},
        {"name": "Janet Doe", "age": 45}
    ],
    "likes": [
        {"url": "https://kittens.com", "date": new Date(2015, 08, 15)},
        {"url": "https://puppies.com", "date": new Date(2016, 04, 15)},
        {"url": "https://horses.com", "date": new Date(2017, 07, 19)},
    ]
}

console.log(myProfile);
const SEED_USERS = [
    {
        username: "Nicu02",
        password: 'parola',
        firstName:'Nicolae',
        lastName:'Usvath',
        email: 'nicu_usvath@yahoo.com',
        licencePlate:'TM94LIS',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        username: "Dan",
        password: 'parola',
        firstName:'Dan',
        lastName:'Popescu',
        email: 'popescu_dan@yahoo.com',
        licencePlate:'TM15DAN',
        createdAt: new Date(),
        updatedAt: new Date()
    }
]

const SEED_RATINGS = [
    {
        username: "Nicu02",
        userID: 1,
        description:'Good driver',
        stars:4,
        img: '',
        licencePlate:'TM15DAN',
        anonymous:false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        username: "Dan",
        userID: 2,
        description:'Good driver',
        stars:5,
        img: '',
        licencePlate:'TM94LIS',
        anonymous:false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        username: "Nicu02",
        userID: 1,
        description:'Good driver, stopped to help a driver change his tire',
        stars:4,
        img: '',
        licencePlate:'TM56HDS',
        anonymous:false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        username: "Dan",
        userID: 2,
        description:'Parked on the road',
        stars:1,
        img: '',
        licencePlate:'TM56SQL',
        anonymous:true,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        username: "Dan",
        userID: 2,
        description:'Bad driver',
        stars:1,
        img: '',
        licencePlate:'TM64ASG',
        anonymous:true,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        username: "Dan",
        userID: 2,
        description:'Parked on the sidewalk',
        stars:1,
        img: '',
        licencePlate:'TM88LKY',
        anonymous:true,
        createdAt: new Date(),
        updatedAt: new Date()
    },

]

module.exports = { SEED_RATINGS, SEED_USERS }
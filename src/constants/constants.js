const SEED_USERS = [
    {
        username: "Guest",
        password: '$2b$10$.jrbF51OefHQKGbps64J/eoNmMPCymmOpWEvkTxkxb7QEf7kya1ge',
        firstName:'Guest',
        lastName:'Guest',
        email: 'Guest',
        licencePlate:'',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        username: "Nicu02",
        password: '$2b$10$eLVEsIsH4oGAlq/SVXaXpet53Idkxqbf2ikHAXr8ohmhv3GNzMrS.',
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
        likedBy:'',
        seenBy:'',
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
        likedBy:'',
        seenBy:'',
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
        likedBy:'',
        seenBy:'',
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
        likedBy:'',
        seenBy:'',
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
        likedBy:'',
        seenBy:'',
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
        likedBy:'',
        seenBy:'',
        anonymous:true,
        createdAt: new Date(),
        updatedAt: new Date()
    },

]

module.exports = { SEED_RATINGS, SEED_USERS }
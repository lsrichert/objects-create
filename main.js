const omoreCollege = Object.create({}, {
    business: {
        enumerable: true,
        writable: false,
        value: "OmoreCollege"
    },
    employmentStart: {
        enumerable: true,
        writable: false,
        value: "07-11-16"
    },
    employmentEnd: {
        enumerable: true,
        writable: false,
        value: "05-31-18"

    },
    goodThings: {
        enumerable: true,
        writable: false,
        value: "Great co-workers"
    },
    badThings: {
        enumerable: true,
        writable: false,
        value: "Long commute"
    }
})
console.log(omoreCollege)

const depaulUniversity = Object.create({}, {
    business: {
        enumerable: true,
        writable: false,
        value: "DePaul University"
    },
    employmentStart: {
        enumerable: true,
        writable: false,
        value: "12-30-10"
    },
    employmentEnd: {
        enumerable: true,
        writable: false,
        value: "03-15-15"
    },
    goodThings: {
        enumerable: true,
        writable: false,
        value: "Great environment"
    },
    badThings: {
        enumerable: true,
        writable: false,
        value: "Low pay"
    }

})
console.log(depaulUniversity)

const ibmc = Object.create({}, {
    business: {
        enumerable: true,
        writable: false,
        value: "IBMC College"
    },
    employmentStart: {
        enumerable: true,
        writable: false,
        value: "09-15-15"
    },
    employmentEnd: {
        enumerable: true,
        writable: false,
        value: "07-01-16"
    },
    goodThings: {
        enumerable: true,
        writable: false,
        value: "Great people"
    },
    badThings: {
        enumerable: true,
        writable: false,
        value: "Bad corporate leadership"
    }

}) 
console.log(ibmc)

const oldNavy = Object.create({}, {
    business: {
        enumerable: true,
        writable: false,
        value: "Old Navy"
    },
    employmentStart: {
        enumerable: true,
        writable: false,
        value: "05-01-00"
    },
    employmentEnd: {
        enumerable: true,
        writable: false,
        value: "05-25-09"
    },
    goodThings: {
        enumerable: true,
        writable: false,
        value: "Fun place to be"
    },
    badThings: {
        enumerable: true,
        writable: false,
        value: "Terrible schedule"
    }

})
console.log(oldNavy)






// Write a function that will build, and return, a job object. Make sure you define an argument for each one of the properties you want to be in the object.

// const JobMaker = (a,r,g,u,m,e,n,t,s) {
//     return theObjectYouBuilt
// }

const JobMaker = (business, employmentStart, employmentEnd, goodThings, badThings) => {
    let theObjectYouBuilt = Object.create ({}, {
        business: {
            value: business
        },
        employmentStart: {
            value: employmentStart
        },
        employmentEnd: {
            value: employmentEnd
        },
        goodThings: {
            value: goodThings
        },
        badThings: {
            value: badThings
        } 
    });

    return theObjectYouBuilt
}

let Job = JobMaker("store", "any", "date", "relaxed", "drive");

console.log(Job);
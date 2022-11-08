"use strict";
const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age) {
        this.age = age;
    }
};
const { age } = profile;
const { coords: { lat, lng } } = profile;

import mongoose from 'mongoose';
import { faker } from "@faker-js/faker";
import { createHash } from './index.js';

const generatePets = () => {
    return {
        name: faker.person.firstName(),
        specie: faker.animal.type(),
        birthDate: faker.date.past(5),
        adopted: false,
        owner: "",
        image: faker.image.url(),
    };
};

const generateUsers = () => {
    const pets = [];
    
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: "coder123",
        role: 'user',
        pets: [],
    };
};

export { generatePets, generateUsers };
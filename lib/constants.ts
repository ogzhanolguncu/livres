import faker from "@faker-js/faker";
import { nanoid } from "nanoid";

export const mockBookData = [
	{
		id: nanoid(),
		name: faker.name.title(),
		image: "https://via.placeholder.com/300",
		author: faker.name.firstName(),
		pageNumber: faker.datatype.number({
			min: 70,
			max: 250,
		}),
		isCompleted: false,
	},
	{
		id: nanoid(),
		name: faker.name.title(),
		image: "https://via.placeholder.com/300",
		author: faker.name.firstName(),
		pageNumber: faker.datatype.number({
			min: 70,
			max: 250,
		}),
		isCompleted: false,
	},
	{
		id: nanoid(),
		name: faker.name.title(),
		image: "https://via.placeholder.com/300",
		author: faker.name.firstName(),
		pageNumber: faker.datatype.number({
			min: 70,
			max: 250,
		}),
		isCompleted: true,
	},
	{
		id: nanoid(),
		name: faker.name.title(),
		image: "https://via.placeholder.com/300",
		author: faker.name.firstName(),
		pageNumber: faker.datatype.number({
			min: 70,
			max: 250,
		}),
		isCompleted: false,
	},
	{
		id: nanoid(),
		name: faker.name.title(),
		image: "https://via.placeholder.com/300",
		author: faker.name.firstName(),
		pageNumber: faker.datatype.number({
			min: 70,
			max: 250,
		}),
		isCompleted: false,
	},
	{
		id: nanoid(),
		name: faker.name.title(),
		image: "https://via.placeholder.com/300",
		author: faker.name.firstName(),
		pageNumber: faker.datatype.number({
			min: 70,
			max: 250,
		}),
		isCompleted: true,
	},
];

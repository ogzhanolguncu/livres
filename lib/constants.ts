import faker from "@faker-js/faker";
import { nanoid } from "nanoid";

export const mockBookData = [
	{
		id: nanoid(),
		name: "1984",
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
		name: "Brave New World",
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
		name: "The Lord of The Rings",
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
		name: "Utopia",
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
		name: "East of Eden",
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
		name: "A Scanner Darkly",
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
		name: "East of Eden",
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
		name: "A Scanner Darkly",
		image: "https://via.placeholder.com/300",
		author: faker.name.firstName(),
		pageNumber: faker.datatype.number({
			min: 70,
			max: 250,
		}),
		isCompleted: true,
	},
];

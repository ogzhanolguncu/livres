import { nanoid } from "nanoid";
import { getRandomInRange } from "utils";

export const mockBookData = [
	{
		id: nanoid(),
		name: "1984",
		image: "https://via.placeholder.com/300",
		author: "George Orwell",
		pageNumber: getRandomInRange(70, 250),
		isCompleted: false,
	},
	{
		id: nanoid(),
		name: "Brave New World",
		image: "https://via.placeholder.com/300",
		author: "Albert Huxley",
		pageNumber: getRandomInRange(70, 250),
		isCompleted: false,
	},
	{
		id: nanoid(),
		name: "The Lord of The Rings",
		image: "https://via.placeholder.com/300",
		author: "Tolkein",
		pageNumber: getRandomInRange(70, 250),
		isCompleted: true,
	},
	{
		id: nanoid(),
		name: "Utopia",
		image: "https://via.placeholder.com/300",
		author: "John Moore",
		pageNumber: getRandomInRange(70, 250),
		isCompleted: false,
	},
	{
		id: nanoid(),
		name: "East of Eden",
		image: "https://via.placeholder.com/300",
		author: "Oguzhan",
		pageNumber: getRandomInRange(70, 250),
		isCompleted: false,
	},
	{
		id: nanoid(),
		name: "A Scanner Darkly",
		image: "https://via.placeholder.com/300",
		author: "TODO",
		pageNumber: getRandomInRange(70, 250),
		isCompleted: true,
	},
	{
		id: nanoid(),
		name: "East of Eden",
		image: "https://via.placeholder.com/300",
		author: "TODO",
		pageNumber: getRandomInRange(70, 250),
		isCompleted: false,
	},
	{
		id: nanoid(),
		name: "A Scanner Darkly",
		image: "https://via.placeholder.com/300",
		author: "TODO",
		pageNumber: getRandomInRange(70, 250),
		isCompleted: true,
	},
];

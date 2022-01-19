declare module Livre {
	export type Book = {
		id: string;
		name: string;
		author: string;
		pageNumber: number;
		status: BookStatus;
	};

	export enum BookStatus {
		Read,
		Reading,
		WantToRead,
	}
}

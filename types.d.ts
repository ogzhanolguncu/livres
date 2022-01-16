declare module Livre {
	export type Book = {
		id: string;
		name: string;
		image: string;
		author: string;
		pageNumber: number;
		isCompleted: boolean;
	};
}

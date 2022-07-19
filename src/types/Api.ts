export interface ApiReference {
	index: string;
	name: string;
	url: string;
}

export interface ApiReferenceList {
	count: number;
	results: ApiReference[];
}

export interface Choice {
	choose: number;
	type: string;
	from: ApiReference[];
}

export interface StringChoice {
	choose: number;
	type: string;
	from: string[];
}

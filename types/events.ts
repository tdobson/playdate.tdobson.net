export interface Question {
	q: string;
	a: string;
}

export interface EventDate {
	id: string;
	date: string;
	time: string;
}

export interface Event extends EventDate {
	type: "dads" | "regular";
	hosts: string[];
	details: {
		ageRange: string;
		cost: string;
	};
}

export interface EventStream {
	id: string;
	title: string;
	hosts: string[];
	location: {
		address: string;
		postcode: string;
		parking: string;
		mapsUrl: string;
	};
	contact: {
		email: string[];
		facebook: string;
	};
	details: {
		ageRange: string;
		cost: string;
		description: string;
	};
	dates: EventDate[];
	faq: Question[];
}

export interface EventsConfig {
	eventStreams: EventStream[];
}

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
		transport?: {
			bus?: {
				route: string;
				description: string;
				timetableUrl: string;
				liveTimesUrl: string;
			};
			train?: {
				station: string;
				walkTime: string;
				connections: string;
				timetableUrl: string;
			};
		};
	};
	contact: {
		email: string[];
		facebook: string;
	};
	details: {
		ageRange: string;
		cost: string;
		description: string;
		rsvp: string;
	};
	dates: EventDate[];
	faq: Question[];
}

export interface EventsConfig {
	eventStreams: EventStream[];
}

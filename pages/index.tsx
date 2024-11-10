import {
	Calendar,
	ChevronDown,
	ChevronUp,
	Clock,
	ExternalLink,
	Mail,
	MapPin,
	MessageCircle,
} from "lucide-react";
import React, { useState } from "react";

export default function PlayDateInvitation() {
	const [openQuestion, setOpenQuestion] = useState<number | null>(null);

	const email = ["timandjen", "@", "tdobson.net"].join("");
	const messengerLink = "https://m.me/tim.dobson";
	const mapLink = "https://maps.apple.com/?address=Chorlton,Manchester,UK";

	const questions = [
		{
			q: "Where exactly is it?",
			a: "Our house in Chorlton, Manchester. We'll send the exact address when you RSVP.",
		},
		{
			q: "What time should I arrive?",
			a: "The playdate runs from 2pm to 5pm on Sunday November 26th. Feel free to come and go as suits your schedule!",
		},
		{
			q: "What should I bring?",
			a: "Just yourselves! We'll provide snacks and refreshments.",
		},
		{
			q: "What age group is this for?",
			a: "The activities will be perfect for 1-3 year olds, but siblings are very welcome too.",
		},
		{
			q: "How do I let you know I'm coming?",
			a: "You can email us or message us on Facebook Messenger - whatever's easiest for you!",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50">
			<div className="bg-teal-600 text-white py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-4xl font-bold mb-4">Autumn Playdate</h1>
					<p className="text-lg opacity-90">Hosted by Tim, Jen and James</p>
				</div>
			</div>

			<div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
				<div className="bg-white shadow-xl rounded-lg overflow-hidden">
					<div className="p-6 sm:p-8">
						<div className="space-y-6 border-b border-gray-200 pb-8">
							<div className="flex items-center space-x-3 text-gray-600">
								<MapPin className="h-5 w-5 text-teal-600" />
								<span>Chorlton, Manchester</span>
								<a
									href={mapLink}
									className="text-teal-600 hover:text-teal-700 inline-flex items-center"
								>
									<ExternalLink className="h-4 w-4 ml-1" />
								</a>
							</div>

							<div className="flex items-center space-x-3 text-gray-600">
								<Calendar className="h-5 w-5 text-teal-600" />
								<span>Sunday, November 26th 2023</span>
							</div>

							<div className="flex items-center space-x-3 text-gray-600">
								<Clock className="h-5 w-5 text-teal-600" />
								<span>2:00 PM - 5:00 PM</span>
							</div>
						</div>

						<div className="py-8">
							<h2 className="text-xl font-semibold text-gray-900 mb-6">
								Frequently Asked Questions
							</h2>

							<div className="space-y-4">
								{questions.map((question, index) => (
									<div
										key={index}
										className="border-b border-gray-200 last:border-0"
									>
										<button
											className="w-full py-4 flex justify-between items-center text-left"
											onClick={() =>
												setOpenQuestion(openQuestion === index ? null : index)
											}
										>
											<span className="font-medium text-gray-900">
												{question.q}
											</span>
											{openQuestion === index ? (
												<ChevronUp className="h-5 w-5 text-teal-600" />
											) : (
												<ChevronDown className="h-5 w-5 text-teal-600" />
											)}
										</button>

										{openQuestion === index && (
											<div className="pb-4">
												<p className="text-gray-600">{question.a}</p>
											</div>
										)}
									</div>
								))}
							</div>
						</div>

						<div className="pt-6 border-t border-gray-200">
							<h2 className="text-xl font-semibold text-gray-900 mb-4">
								Get in Touch
							</h2>
							<div className="space-y-4">
								<a
									href={`mailto:${email}`}
									className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700"
								>
									<Mail className="h-5 w-5 mr-2" />
									Email Us
								</a>
								<a
									href={messengerLink}
									className="w-full flex items-center justify-center px-4 py-3 border border-teal-600 text-base font-medium rounded-md text-teal-600 bg-white hover:bg-teal-50"
								>
									<MessageCircle className="h-5 w-5 mr-2" />
									Message on Facebook
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

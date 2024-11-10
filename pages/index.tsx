import {
	Baby,
	Banknote,
	Calendar,
	ChevronDown,
	ChevronUp,
	Clock,
	Mail,
	MapPin,
	MessageCircle,
} from "lucide-react";
import type React from "react";
import { useState } from "react";

interface Question {
	q: string;
	a: string;
}

const PlayDateInvitation: React.FC = () => {
	const [openQuestion, setOpenQuestion] = useState<number | null>(null);

	// Email obfuscation
	const email = ["timandjen", "@", "tdobson.net"].join("");

	const questions: Question[] = [
		{
			q: "Why are you doing this?",
			a: "We found it difficult to arrange playdates with people due to all the challenges of arranging diaries. This avoids the need to do that, and makes it much easier to welcome people who are free, and meetup with people more who we might not see so much",
		},
		{
			q: "Do I need to RSVP?",
			a: "Nope - just turn up. If you make it yay, if life gets in the way, such is life!",
		},
		{
			q: "What's the age range?",
			a: "0 -> 2ish is probably the best age, but older might be fine - drop us a message",
		},
		{
			q: "Where can we park?",
			a: "Park on road by Strines Church - 30 second walk away",
		},
		{
			q: "What will we do?",
			a: "We have some toys, and the kids can play around whilst the adults chat",
		},
		{
			q: "What about outdoor play?",
			a: "If the weather's nice, we have a slide and baby swing! The ground is quite boggy though, so full outdoor suits and outdoor shoes or wellies are recommended. We also have an indoor trampoline and plenty of room indoors.",
		},
		{
			q: "How many people are coming?",
			a: "As many as come. If it's many, great, if it's a few - also great.",
		},
		{
			q: "Can I bring my partner?",
			a: "Sure.",
		},
		{
			q: "I don't know you very well, can I come?",
			a: "Yep - please do. If you're reading this, and your child is in the age range - please do",
		},
		{
			q: "Shall I bring food?",
			a: "We'll do some snacky finger food like toast for the youth, but if there's snacks you think you or other adults would enjoy, please feel free to bring it along. Please only bring things you'd be willing to take home.",
		},
		{
			q: "What if I'm late?",
			a: "That's chill. Arrive when you arrive.",
		},
		{
			q: "Can I invite my friend with their kids?",
			a: "Probably, but drop us a line first",
		},
		{
			q: "Can we bring this specific toy or toys?",
			a: "err, sure? We have plenty, and anything you bring has a risk of getting lost - but if you think it'd be awesome, or work well for your child - please do!",
		},
		{
			q: "I can't make this one, will you do it again?",
			a: "Hopefully!",
		},
		{
			q: "Does it cost anything?",
			a: "Don't be silly! Absolutely not.",
		},
		{
			q: "Can I come if I've never met you before?",
			a: "Probably not this time - generally this one is aimed as people at people we know.",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50 p-8">
			<div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
				<div className="bg-teal-600 text-white p-8 text-center">
					<h1 className="text-4xl font-bold mb-4">Baby & Toddler Play-in</h1>
					<p className="text-xl mb-4">Hosted by Tim, Jen and James</p>

					<div className="flex justify-center space-x-6 text-teal-50 mb-4">
						<div className="flex items-center">
							<Calendar className="w-5 h-5 mr-2" />
							<span>Saturday 26th Nov</span>
						</div>
						<div className="flex items-center">
							<Clock className="w-5 h-5 mr-2" />
							<span>2-5pm</span>
						</div>
					</div>

					<div className="text-sm text-teal-50 flex justify-center items-center space-x-4">
						<div className="flex items-center">
							<Baby className="w-4 h-4 mr-1" />
							<span>Ages 0-2</span>
						</div>
						<span>•</span>
						<div className="flex items-center">
							<Banknote className="w-4 h-4 mr-1" />
							<span>Free</span>
						</div>
					</div>
				</div>

				<div className="p-6">
					<div className="text-center mb-8">
						<p className="text-xl text-gray-700">
							We're hosting a baby and toddler play-in at our house, and you're
							invited!
						</p>
					</div>

					<div className="flex items-start space-x-2 mb-8 p-4 bg-emerald-50 rounded-lg">
						<MapPin className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
						<div>
							<p className="font-medium">
								<a
									href="https://maps.apple.com/?address=272 Strines Road, Sk6 7GB"
									className="text-teal-600 hover:text-teal-800 underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									272 Strines Road
								</a>
							</p>
							<p className="text-gray-600">SK6 7GB</p>
						</div>
					</div>

					<div className="space-y-4">
						<h2 className="text-2xl font-bold text-gray-800 mb-6">Q&A</h2>
						{questions.map((item, index) => (
							<div
								key={index}
								className={`${index !== questions.length - 1 ? "border-b border-gray-200" : ""}`}
							>
								<button
									className="w-full flex justify-between items-center py-4 text-left font-medium text-gray-700 hover:text-teal-600"
									onClick={() =>
										setOpenQuestion(openQuestion === index ? null : index)
									}
								>
									{item.q}
									{openQuestion === index ? (
										<ChevronUp className="w-5 h-5" />
									) : (
										<ChevronDown className="w-5 h-5" />
									)}
								</button>
								{openQuestion === index && (
									<p className="pb-4 text-gray-600">{item.a}</p>
								)}
							</div>
						))}
					</div>

					<div className="flex justify-center space-x-6 mt-8 pt-8 border-t border-gray-200">
						<a
							href={`mailto:${email}`}
							className="flex items-center text-teal-600 hover:text-teal-800"
						>
							<Mail className="w-5 h-5 mr-2" />
							<span>Email Us</span>
						</a>
						<a
							href="https://m.me/tdobson"
							className="flex items-center text-teal-600 hover:text-teal-800"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MessageCircle className="w-5 h-5 mr-2" />
							<span>Message on Facebook</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

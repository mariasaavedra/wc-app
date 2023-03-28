const FaqPage = () => {
  return (
    <div className='mx-auto'>
		<div className="flex flex-col items-center pt-10">
			<h2 className="font-bold text-5xl mt-5 tracking-tight">
				FAQ
			</h2>
			<p className="text-neutral-500 text-xl mt-3">
				Frequenty asked questions
			</p>
		</div>
		<div className='container mx-auto px-10'>
		<div className="grid divide-y divide-neutral-300 max-w-3xl mx-auto mt-8 mb-6 ">
			<div className="py-5">
				<details className="group">
					<summary className="flex justify-between items-center font-medium cursor-pointer list-none ">
						<span> How do I sign my child up to join the Techstronaught Coding Club at WeCode KC?</span>
						<span className="transition group-open:rotate-180">
					<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
				</span>
					</summary>
					<p className="text-neutral-600 mt-3 pb-0 px-4 group-open:animate-fadeIn">
					We're so excited to be a part of your students' tech journey! Go to www.wecodekc.org and click the
					"Join Techstronaughts" button to be directed to our Eventbrite page. There you'll choose from all of our
					available classes.
					</p>
				</details>
			</div>
			<div className="py-5">
				<details className="group">
					<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
						<span> When do classes start, and what type of classes are available?</span>
						<span className="transition group-open:rotate-180">
					<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
				</span>
					</summary>
					<p className="text-neutral-600 mt-3 pb-0 px-4 group-open:animate-fadeIn">
					We kick off our year with our "Spring into Code" event from March 20th - March 24th. After that,
					regular classes such as Scratch, Python, and Web Development will be available every first, second, and
					third Saturday of the month. Go to www.wecodekc.org to join!
					</p>
				</details>
			</div>
			<div className="py-5">
				<details className="group">
					<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
						<span>How old does my child need to be to join? Which class should I sign them up for?</span>
						<span className="transition group-open:rotate-180">
					<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
				</span>
					</summary>
					<p className="text-neutral-600 mt-3 pb-0 px-4 group-open:animate-fadeIn">
					Our program is designed for students from the ages of 7-17. Suggested ages are given for each class
					you can sign up for, but we understand that every child is different. If you have a little tech head on your
					hands, do not hesitate to reach out at learntech@wecodekc.org so we can accommodate your student's
					specific needs.
					</p>
				</details>
			</div>
			<div className="py-5">
				<details className="group">
					<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
						<span>Are there any other events at WeCode that my child can participate in? </span>
						<span className="transition group-open:rotate-180">
					<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
				</span>
					</summary>
					<p className="text-neutral-600 mt-3 pb-0 px-4 group-open:animate-fadeIn">
					Yes! Sign up for our newsletter and follow our Eventbrite page to stay up to date on exclusive events
					(i.e., 5th Saturdays, workshops, and competitions). 
					</p>
				</details>
			</div>
			<div className="py-5">
				<details className="group">
					<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
						<span>I want to become a volunteer. How do I get started?</span>
						<span className="transition group-open:rotate-180">
					<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
				</span>
					</summary>
					<p className="text-neutral-600 mt-3 pb-0 px-4 group-open:animate-fadeIn">
					We are so glad you're interested in participating in this amazing journey with us. It's the dedication
					and talent of our volunteers that make this organization stand out. We need instructors, assistants,
					content creators, and administrators to help do what we do best. Sign up at www.wecodekc.org and
					click the "Volunteer" button or contact us at volunteer@wecodekc.org to get started.
					</p>
				</details>
			</div>
			</div>
		</div>
	</div>
  );
};

export default FaqPage;

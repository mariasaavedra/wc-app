import TestimonialItem from "./TestimonialItem";
import TestimonialControl from "./TestimonialControl";

const Testimonials = (props) => {

    return (
        <>
        <div className="flex flex-col items-center m-8">

            <div className="w-3/5 bg-white rounded overflow-x-hidden flex snap-x" >
            {
                props.testimonials.map((testimonial,index) => (
                    <TestimonialItem 
                        key={index + 1}
                        index={index + 1}
                        name={testimonial.name}
                        title={testimonial.title}
                        testimonial={testimonial.testimonial}
                        image={testimonial.image}
                        />
                    ))
                }
            </div>

            <div className="flex mt-8">
                {
                    props.testimonials.map((testimonial, index) =>(

                        <TestimonialControl
                            key={index + 1}
                            index={index + 1}
                        />
                    ))
                }
            </div>

        </div>
        </>
    );
}

export default Testimonials;

const TestimonialControl = (props) => {

    return (
        <>
        <a className="w-8 mr-1 h-8 text-gray-600 border-2 border-brand-blue bg-gray-100 rounded-full flex justify-center items-center" href={"#slide-" + props.index}>{props.index}</a>
        </>
    );

}

export default TestimonialControl;
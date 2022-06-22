import { MaybeParentComponentProps } from "../interfaces/ParentComponentProps";

export interface FlexImagesProps extends MaybeParentComponentProps {
  images: Array<{ url:string, name:string }>;
}

const FlexImages = (props: FlexImagesProps) => {

    return (
        <div className="flex flex-wrap align-center justify-center  gap-12 my-12">
            {
                props.images.map((img,index) => (
                    <div key={index} className="w-48">
                        <img  src={img.url} alt={img.name}/>
                    </div>
                ))
            }

        </div>
  );
};

export default FlexImages;
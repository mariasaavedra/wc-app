import { MaybeParentComponentProps } from "../interfaces/ParentComponentProps";
import styles from "../styles/components/Resource.module.scss";



export interface ResourceProps extends MaybeParentComponentProps {
  title: string;
  href: string;
  url: string;
}

export default function EventCard(props: ResourceProps) {
  return (
    <div className={styles.ResourceComponent + " w-full rounded-lg md:w-1/3 xl:w-1/4  "}>
    <div className="bg-white rounded-lg overflow-hidden mb-0 h-full">
       <img
          src={props.url}
          alt="resource image"
          className=" w-full border-solid border-b-2 md:max-h-36"
          />
       <div className="p-8 sm:p-9  md:p-7 xl:p-9 text-center">
          <h3>
             <a
                href={props.href}
                className="
                font-semibold
                text-dark text-xl
                sm:text-[22px]
                md:text-xl
                lg:text-[22px]
                xl:text-xl
                2xl:text-[22px]
                mb-4
                block
                hover:text-primary
                "
                target="_blank"
                >
                {props.title}
             </a>
          </h3>
          <p className="text-base  text-body-color leading-relaxed mb-7">
             {props.children}
          </p>
          <a
             href={props.href}
             className="
             inline-block
             py-2
             px-7
             border border-brand-blue
             rounded-full
             text-base text-body-color
             font-medium
             bg-brand-blue
             text-white
             hover:bg-brand-purple 
             transition
             "
             target="_blank"
             >
          View Details
          </a>
       </div>
    </div>
 </div>

  );
}

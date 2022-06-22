import { MaybeParentComponentProps } from "../interfaces/ParentComponentProps";
import styles from "../styles/components/TextBanner.module.scss";

export interface TextBannerProps extends MaybeParentComponentProps {
    title?: string;
}

export default function TextBanner(props: TextBannerProps) {
  return (
    <div className={styles.TextBannerComponent}>
      {/* <!-- Section 1 --> */}
      <section className="py-10 bg-white">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl">
            {props.title}
          </h2>
          {props.children}
        </div>
      </section>
    </div>
  );
}

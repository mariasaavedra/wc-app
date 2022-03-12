import { useRouter } from "next/router";

const SingleEventPage = () => {
    const router = useRouter();
    const { id } = router.query

    return (
      <div className="container mx-auto">
        <p>Events Page - { id }</p>
      </div>
    );
  }
  
  export default SingleEventPage;
  
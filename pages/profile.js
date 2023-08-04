import { getSession } from 'next-auth/client';
import UserProfile from '../components/profile/user-profile';
import apiClient from '../lib/apiClient';

function ProfilePage(props) {
  const { email, name } = props.session.user;
  const role = name;
  const data = props.data;

  if(data.totalSize===0){
    return(
      <>
        <h1>NO USER INFO for { email}</h1>
        <UserProfile email={email} />
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </>
    )
  }

  return (
    <>
      <h2>{email}</h2>
      <h2>{role}</h2>
      <UserProfile email={email} profile={data.records[0]}/>
      <h1>API Response:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
    );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }
  //const response = await apiClient.get('/services/data/v58.0/sobjects/Account'); 
  const response = await apiClient.get('/services/data/v58.0/query?q=SELECT+Id,Name,FirstName,LastName,Email,MobilePhone,Birthdate+FROM+Contact+WHERE+Email='+ "'" + session.user.email + "'");
  const {data} = response;
  
  return {
    props: { session, data },
  };
}

export default ProfilePage;

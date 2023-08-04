import { useRef, useState } from 'react';
import classes from './profile-form.module.css';
import { useRouter } from 'next/router';

function ProfileForm(props) {
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const profileIdRef = useRef();
  const mobilePhoneRef = useRef();
  const birthdateRef = useRef();

  
  const router = useRouter();

  const profile = props.profile;
  const email = props.email;
  function changePasswordHandler(event) {
    event.preventDefault();

    const enteredOldPassword = oldPasswordRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;

    // optional: Add validation

    props.onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword
    });
  }

  const updateProfileHandler = async (event) =>{
    event.preventDefault();
    
    const updatedData = {
      Id: profileIdRef.current.value,
      FirstName: firstNameRef.current.value,
      LastName: lastNameRef.current.value,
      Email: emailRef.current.value,
      MobilePhone: mobilePhoneRef.current.value,
      Birthdate: birthdateRef.current.value,
    }

    if(profileIdRef.current.value === '') {
      try{

        fetch('/api/salesforce/updateContact', {
          method: 'POST',
          body: JSON.stringify(updatedData),
          headers: {
            "Content-Type": "application/json",
          }
        })
          .then((response) => response.json())
          .then((data) => console.log(data));

      }catch(error){
        console.error('Error updating contact.', error);
      }
  
    }else{
      try{

        fetch('/api/salesforce/updateContact', {
          method: 'PATCH',
          body: JSON.stringify(updatedData),
          headers: {
            "Content-Type": "application/json",
          }
        })
          .then((response) => response.json())
          .then((data) => console.log(data));

      } catch(error){
        console.error('Error updating contact:', error)
      }

    }
    router.replace('/profile');
  }

  return (
  <>
  <h1>{ profile ? profile.Name : 'Fill Out Profile'}</h1>
  <section className={classes.profile}>
    <form className={classes.form} onSubmit={ updateProfileHandler } >
      <input type='hidden' name='Id' id='Id' defaultValue={profile ? profile.Id: ''} ref={profileIdRef}/>
      <div className={classes.control}>
        <input placeholder='FIRST NAME' type='text' id='first-name' defaultValue={profile ? profile.FirstName: ''} ref={firstNameRef} />
      </div>
      <div className={classes.control}>
        <input placeholder='LAST NAME' type='text' id='last-name' defaultValue={profile ? profile.LastName: ''} ref={lastNameRef} />
      </div>
      <div className={classes.control}>
        <input  disabled placeholder='EMAIL' type='email' id='email' defaultValue={profile ? profile.Email: email} ref={emailRef}/>
      </div>
      <div className={classes.control} >
        <input placeholder='PHONE NUMBER' type='tel' id='phone-number' defaultValue={profile ? profile.MobilePhone: ''} ref={mobilePhoneRef}/>
      </div>
      <div className={classes.control}>
        <input placeholder='BIRTHDAY' type='date' id='birthday' defaultValue={profile ? profile.Birthdate: ''} ref={birthdateRef}/>
      </div>
      <div className={classes.action}>
        <button>Update</button>
      </div>
    </form>
    <form className={classes.form} onSubmit={changePasswordHandler}>
      <div className={classes.control}>
        <input placeholder='NEW PASSWORD'type='password' id='new-password' ref={newPasswordRef} />
      </div>
      <div className={classes.control}>
        <input placeholder='OLD PASSWORD' type='password' id='old-password' ref={oldPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
    </section>
   </>
  );
}

export default ProfileForm;

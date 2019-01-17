import React from 'react';


const Form = (props) => {
  return(
    <form className='formClass' onSubmit={props.getStats}>
      <img onClick={props.switchPage} className='formImg' src='http://purepng.com/public/uploads/large/call-of-duty-black-ops-4-logo-idp.png' alt="test" />
      <input type='text' name='gamertag' palceholder='Enter name' />
      <input className='radioBtn' type="radio" name="console" value="xbl" /> <img className='xblImg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/XBox_Live_logo.svg/2000px-XBox_Live_logo.svg.png' alt='xbl' />
      <input className='radioBtn' type="radio" name="console" value="psn" /> <img className='ps4Img' src='https://itsdcdn.com/resources/services/logowide/340/playstation-network-psn.png' alt='psn' />
      <button>Search</button>
    </form>
  );
}

export default Form;

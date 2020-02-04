import React, {useState} from 'react';
// import {connect} from 'react-redux';
import axios from 'axios';

import {childLogin} from '../action/childLogin';

const ChildLogin = props => {
  const [state, setState] = useState({
    username: '',
    password: ''
  });

  const changeHandler = event => {
    setState({...state, [event.target.name]: event.target.value});
    // console.log(event.target.name, event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    console.log('I have been submitted!!');

    props.childLogin(state);

    // axios
    //   .post('https://chore-tracker1.herokuapp.com/api/auth/login', state)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch();
    // console.log('I have been submitted!!');

    setState({
      username: '',
      password: ''
    });
  };

  return (
    <div>
      <h4> Childern Login Page</h4>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          value={state.username}
          name='username'
          onChange={changeHandler}
          placeholder='username'
        />
        <input
          type='password'
          value={state.password}
          name='password'
          onChange={changeHandler}
          placeholder='password'
        />
        <button>Login</button>
      </form>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {};
// };

export default ChildLogin;
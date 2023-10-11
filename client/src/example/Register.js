import{ useState,useEffect } from 'react';
import axios from 'axios';
//2023 10 10 axios나 dispatcher이용해서 만들기


function Regist(id,password) {
  var id;
  var password;
  let body = {
    id : id,
    password : password
  }
  // axios.get('/api/hello')
  //   .then(response => console.log("===",response.data))
  axios.post('/api/register',body)
  .then(response => {
    if(response.data) {
      alert("회원가입 성공");
    } else {
      alert("회원가입 실패");
    }
  })
}


function Register(){
  const [id,setId] = useState({});
  const [password,setPassword] = useState({});
  // useEffect(() => {
  //   console.log("b");
  //   axios.get('/api/hello')
  //   .then(response => console.log(response.data))
  // }, [])

  const OnChangeId = (event) => {
    setId(event.currentTarget.value);
  };
  const OnChangePassword = (event) => {
    setPassword(event.currentTarget.value);

  };

    return <article>
      <h2>Register</h2>
      <form onSubmit={event=>{
        event.preventDefault();
        Regist(id,password);
      }}>
        <p><input type="text" name="id" onChange={OnChangeId} placeholder="id"/></p>
        <p><input type="password" onChange={OnChangePassword} placeholder="password"></input></p>
        <p><input type="submit"  value="Register"></input></p>
      </form>
      </article>
  }
  
export default Register;

import{ useState } from 'react';
//2023 10 10 axios나 dispatcher이용해서 만들기

function insert(id,password) {
  oracledb.getConnection(dbConfig),(err,conn) => {
    if(err) {throw err;}
  
    console.log("Oracle DB 연결 성공!!");
  
    var sql;
  
    sql = "insert into UserInfo values ('{id}','{password}')";
    
    conn.execute(sql,[],function(err,result) {
      
      if(err) {throw err;}
      
      console.log("회원가입 성공");

      doRelease(conn);
    });
  } 
}

//DB 종료
function doRelease(conn) {
	
	conn.release(function(err) {
		
		if(err) {throw err;}
		
	});
	
}

function Register(){
    return <article>
      <h2>Register</h2>
      <form onSubmit={event=>{
        event.preventDefault();
        const id = event.target.id.value;
        const password = event.target.password.value;
        insert(id,password);
      }}>
        <p><input type="text" name="id" placeholder="id"/></p>
        <p><textarea name="password" placeholder="password"></textarea></p>
        <p><input type="submit" value="Register"></input></p>
      </form>
      </article>
  }
  
export default Register;

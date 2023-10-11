const express = require('express')
const app = express()
const port = 5000

// //Oracle 사용하기
// //npm install oracledb --save
 
var oracledb = require("oracledb");
var dbConfig = require("../dbConfig");
var conn;
var qs = require('querystring');
 
oracledb.autoCommit = true; //자동 커밋
 
oracledb.getConnection({
	user:dbConfig.user,
	password:dbConfig.password,
	connectString:dbConfig.connectString
	},
	function(err,con) {
		
		if(err) {throw err;}
		
		console.log("Oracle DB 연결 성공!!");
        conn = con;
    });

app.get('/api/hello',(req,res) => {
    console.log("hihi");
    res.send('success:true')
})

app.get('/CarPage', (req,res) => {
    res.send("in")
})

//클라이언트로부터 regist를 요청받으면
app.post('/api/register',function(req, res){
    //오라클에 접속해서 insert문을 실행한다. 
    let body = '';
    let data = '';
    req.on('data', function (data) {
      body = body + data;
      console.log("1",body);
    });
    
    req.on('end', function () {
        data = JSON.parse(body);
        console.log("2",data);
        
        //쿼리문 실행 
        conn.execute("insert into USERINFO(id,password) values('"+data.id+"','"+data.password+"')",function(err,result){
            if(err){
                console.log("등록중 에러가 발생했어요!!", err);
                doRelease();
            }else{
                console.log("result : ",result);
            }
        });
        console.log("insert into USERINFO(id,password) values('"+data.id+"','"+data.password+"')");
        res.send('1');
    });
});


// DB 종료
function doRelease(conn) {
	
	conn.release(function(err) {
		
		if(err) {throw err;}
		
	});
	
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
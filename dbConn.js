//Oracle 사용하기
//npm install oracledb --save
 
var oracledb = require("oracledb");
var dbConfig = require("./dbConfig.js");
 
oracledb.autoCommit = true; //자동 커밋
 
oracledb.getConnection({
	user:dbConfig.user,
	password:dbConfig.password,
	connectString:dbConfig.connectString
	},
	function(err,conn) {
		
		if(err) {throw err;}
		
		console.log("Oracle DB 연결 성공!!");
		
		var sql;
		
		//create
		/*sql = "create table cuser (id varchar2(10), password varchar2(10),";
		sql+= "name varchar2(10), age number)";
		
		conn.execute(sql);
		
		console.log("테이블 생성 완료!!");*/
		
		//insert
		sql = "insert into UserInfo values ('shc','1234')";
		conn.execute(sql,[],function(err,result) {
			
			if(err) {throw err;}
			
			console.log("회원가입 성공");
		});
		//데이터 한개 넣을 때
		//binds = [["b123","123","suzi",27]];
		
		//여러개 넣을 때는
		/*binds = [
		         ["c123","123","suzi",27],
		         ["d123","123","suzi",27],
		         ["e123","123","suzi",27]
		         
		         ];
		
		
		var result = conn.executeMany(sql,binds,{}); // {} 함수
		
		console.log("입력 완료!!");*/
		
		//update
		/*sql = "update cuser set password=:pw,name=:name,age=:age where id=:id";
		
		conn.executeMany(sql,[["777","inna",30,"a123"]]);
		
		console.log("수정 완료");*/
		
		
		//delete
		/*sql = "delete cuser where id=:id";
		conn.execute(sql,["a123"]);
		
		console.log("삭제 완료!!");*/
		
		
		//select
		sql = "select id,password from UserInfo";
		
		conn.execute(sql,[],function(err,result) {
			
			if(err) {throw err;}
			
			console.log(result.rows);
			
			doRelease(conn);
			
		});
		
	});
 
//DB 종료
function doRelease(conn) {
	
	conn.release(function(err) {
		
		if(err) {throw err;}
		
	});
	
}







/* root에 dbConfig.js 생성 
// 오라클 DB 설정 파일
 
module.exports = {
    user			:process.env.NODE_ORACLEDB_USER || "c##scott",
    password		:process.env.NODE_ORACLEDB_PASSWORD || "1234",
    connectString	:process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost:1521/xe",
    externalAuth	:process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};
*/
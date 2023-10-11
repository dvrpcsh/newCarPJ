// 오라클 DB 설정 파일
 
module.exports = {
    user			:process.env.NODE_ORACLEDB_USER || "c##scott",
    password		:process.env.NODE_ORACLEDB_PASSWORD || "1234",
    connectString	:process.env.NODE_ORACLEDB_CONNECTIONSTRING || "192.168.219.158:1521/xe",
    externalAuth	:process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_CONNECTION_STRING); 
export default sql
//this takes the string in .env and passes it into this component using process.env



//this function is used so that we're not repeating the sql declaration around our project

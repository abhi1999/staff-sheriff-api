const CONTACTS_COLLECTION = "contacts";
const EMPLOYEES_COLLECTION = "employees";
const JOB_SITES_COLLECTION = "jobSites";
const EMPLOYEE_JOBSITE_COLLECTION = "empJobSite"

const SERVICE_RESPONSE = "serviceResponse";

// const DB ={}
// const DB ={CONNECTION_STRING:process.env.MONGODB_URI, CONNECTION_OPTIONS:{useUnifiedTopology:true }}
const DB ={CONNECTION_STRING:"mongodb+srv://user:axE6pAu9tTTRr6M@cluster0.7jkh0.mongodb.net/test1?retryWrites=true&w=majority", CONNECTION_OPTIONS:{useNewUrlParser: true,useUnifiedTopology:true}}


module.exports={CONTACTS_COLLECTION, DB, EMPLOYEES_COLLECTION, JOB_SITES_COLLECTION,SERVICE_RESPONSE, EMPLOYEE_JOBSITE_COLLECTION}
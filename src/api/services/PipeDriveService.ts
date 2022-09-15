import axios from "axios"
//const pipedrive = require('pipedrive');

//const defaultClient: any = pipedrive.ApiClient.instance;
//defaultClient.authentications.api_key.apiKey = process.env.PIPEDRIVE_API_KEY;
const api_token: any = "bf7efeb872f2848fdf7dca2027b969c509d40b41"//process.env.PIPEDRIVE_API_KEY;

export default {

    async addPerson(data: any){
        try {
            //https://pipedrive.readme.io/docs
             //https://developers.pipedrive.com/docs/api/v1/Persons#addPerson

            //  const api = new pipedrive.DealsApi();
            //  const response = await api.addperson(data)
         
            let response = await axios.post(`https://gustavo-sandbox.pipedrive.com/v1/persons?api_token=${api_token}`,{
                data,
                headers: {
                    api_token
                   }
            })
            
            return  {status: 'sucesso', result: response.data, code: 200}

        } catch(err: any) {          
            console.log();
            return {status: "error", result:err, code: 400}
        }
    },

}
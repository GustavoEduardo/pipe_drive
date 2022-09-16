import axios from "axios"

//https://pipedrive.readme.io/docs
//https://developers.pipedrive.com/docs/api/v1/Persons#addPerson

export default {

    async addPerson(data: any){
        try {

            let response: any = await axios.post(`https://${data.empresa}.pipedrive.com/v1/persons?api_token=${data.api_token}`,
                data.lead,
                {
                    headers: { 
                        api_token:data.api_token
                    }
                }
            )
       
            data.person_id = response.data.data.id
            data.title = data.title?data.title:"LandingPage"        
           
            await this.addDeal(data)
            
            return  {status: 'sucesso', result: response.data, code: 200}

        } catch(err: any) {          
            console.log(err);
            return {status: "error", result:err, code: 400}
        }
    },

   async addDeal(data: any){
    //https://developers.pipedrive.com/docs/api/v1/Deals#addDeal
    try {
        let deal = {
            title: data.title,
            person_id: data.person_id,
            visible_to: 3,
            currency:"BRL"              
        }

        let response = await axios.post(`https://${data.empresa}.pipedrive.com/v1/deals?api_token=${data.api_token}`,
            deal,
            {
                headers: { 
                    api_token: data.api_token
                }
            }
        )
        console.log(response)
        return  {status: 'sucesso', result: response, code: 200}

    } catch(err: any) {          
        console.log(err);
        return {status: "error", result:err, code: 400}
    }
    
    
   }

}
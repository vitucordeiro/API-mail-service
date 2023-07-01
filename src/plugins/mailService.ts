const mailchimp =  require('@mailchimp/mailchimp_marketing')
require('dotenv').config()

export class mailchimpServices {
    constructor(){
        mailchimp.setConfig({
            apiKey:process.env.API_KEY_MAILCHIMP ,
            server:process.env.SERVER_PROX
        })}
    async ping(){
        const response = await mailchimp.ping.get()
        console.log(response)}   

    async getList(){
        const response = await mailchimp.lists.getAllLists();
        console.log(response)}

    async getListSpecified(){
        const response = await mailchimp.lists.getListMembersInfo('d8461c44cb');
        console.log(response)}
    
    async addMemberAtList(email){
        const id:string = process.env.ID_LIST
        try{
            await mailchimp.lists.addListMember(id,{
                email_address:email,
                status:"subscribed"})
        }catch(err){
            console.log(err)
        }
    }
}

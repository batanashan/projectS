import axios from "axios";
 
 export class Ajax{

   static fnsendGetReq(url){
        return axios.get(url)
    }
 static  fnsendPostReq(url,data){
           return axios.post(url,data)
   }
    static fnsendPutReq(url,data){
    return axios.put(url,data)
}
static fnsendDeleteReq(url,data){
    return axios.delete(url,data)
}
}
import Api from '@/ApiService/Api'

export default {
    getImages (params) {
        let page = params.page==undefined?1:params.page
        params['page'] = page
        let urlpath = "/api/v1/rovers/curiosity/photos?"
        
        for(let element in params){
            urlpath +=element+"="+params[element]+"&"
        };
        urlpath += "api_key=4SZyNK5jktHZXz5uyugZqgu0VWqitDSZTlK2JeIL"
        return Api().get(urlpath)
    }
}
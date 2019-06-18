import Api from '@/ApiService/Api'

export default {
    getImages (params) {
        let page = params.page==undefined?1:params.page
        return Api().get('/search?q=' + params.q+"&page="+page)
    }
}
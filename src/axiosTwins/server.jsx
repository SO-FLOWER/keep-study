import axios from 'axios';
import { TimeOut , baseURL } from './config.jsx';

const instance = axios.create({ timeout: TimeOut,  baseURL: baseURL });
//添加请求拦截器
instance.interceptors.request.use( config =>{
    //1.发送网络请求时，在页面添加一个Loading组件为动画；

    //2.某些网络请求要求用户必须登录，可以在请求中判断是否携带token，没有携带token直接跳到登录页面；

    //3.对某些请求参数进行序列化
    console.log("请求被封装");
  
    return config;
}, err => {
    return err;
})
//添加响应拦截器
instance.interceptors.response.use(response => {
    return response.data;
},err => {
    if(err && err.response){
        switch (err.response.status) {
            case 400:
                err.message = "请求错误";
                break;
            case 401:
                err.message = "未授权访问";
                break;
            default:
                break;
        }
    }
    return err;
})

export default instance;
//页面请求方式封装
import service from "../base/service"
export default{
  //app登陆
  login:function(params,callback){
    service.post("/api/user/login",params,callback)
  },
}

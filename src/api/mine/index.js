import axios from "@/utils/axios";
// 测试
export function test(params) {
  return axios({
    url: `/users/test`,
    method: "get",
    // otherURL:'java', 调用java接口
    params,
  });
}

// 发送验证码
export function sendSms(data) {
  return axios({
    url: `/users/sendSms`,
    method: "post",
    data,
  });
}

// 验证码注册/登录
export function register(data) {
  return axios({
    url: `/users/register`,
    method: "post",
    data,
  });
}

// 登录
export function login(data) {
  return axios({
    url: `/users/login`,
    method: "post",
    data,
  });
}

// 获取用户信息
export function getInfo(params) {
  return axios({
    url: "/usve/user/simple",
    method: "get",
    otherURL: "java",
    params,
  });
}

// 编辑用户信息
export function editInfo(data) {
  return axios({
    url: "/usve/user/simple",
    method: "post",
    otherURL: "java",
    data,
  });
}

// 修改密码
export function editPas(data) {
  return axios({
    url: "/users/editPas",
    method: "post",
    data,
  });
}
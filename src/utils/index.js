import { Notify } from "vant";

// * 非空校验
export const isNotEmpty = (value) => {
  return value !== undefined && value !== null && value !== ''
}
// * 错误提示
export const errorTip = (message) => {
  Notify({ type: 'danger', message, });
}
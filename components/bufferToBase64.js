/**
 * 用于位图编码的图片的base64转换
 * 如：
 *  node中node-ccap验证码生成模块产生的验证码位图转换到前端显示
 */

const bitmapToBase64 = (bitmap) => {
  const encodedData = window.btoa(String.fromCharCode.apply(null, bitmap));
  const base64Data = `data:image/jpg;base64,${encodedData}`;
  return base64Data;
}

export default bitmapToBase64;


export const isValidTaikhoan =(stringEmail)=>(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
.test(stringEmail))
//validate password
export const isValidMatkhau=(stringPassword)=> stringPassword.length >=3

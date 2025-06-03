
export const InputValidation = ({email,password})=>{
    const validemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const validpassword =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/.test(password)
  if(!validemail) return "email is not valid"
if(!validpassword) return "password is not valid"
return null
   

}
const useAuth = () => {
    const user =  sessionStorage.getItem("userLogin")
    if (user) {
        return true
    } else {
        return false 
    }
}
export default useAuth 
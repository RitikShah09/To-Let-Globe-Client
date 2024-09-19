import { useEffect } from 'react';
function NotReady() {
    useEffect(() => {
        try {
      const { data } = await axios.get("/user/user");
console.log(data)  
    } catch (error) {
      console.log(error.response.data.message);
    } 
    },[])
      
    return (
        <>
        
            <div className="text-yellow-500">
                This Page is not ready yet
            </div>
            
        </>
    )

}

export default NotReady;

export const fetchWithAuth = async(urlencoded,options={})=>{
    let accessToken = localStorage.getItem("accessToken");
    //attach token
    options.headers ={
        ...options.headers,
        "Content-Type":"application/json",
        Authorization: `Bearer ${accessToken}`
    }
    let response=await fetch(url,options);
    //if access token expired
    if(response.status===401){
        const refreshToken=localStorage.getItem("refreshToken");

        const refreshResp=await fetch(
            "http://localhost:3000/auth/refresh",
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({refreshToken})

            }
        );
        const data=await refreshResp.json();

        if(refreshResp.ok && data.accessToken){
            localStorage.setItem("accessToken",data.accessToken);

            //retry original request with new token
            options.headers.Authorization = `Bearer ${data.accessToken}`;
            return fetch(url,options);
        }else{
            //refresh failed -> logout
            localStorage.clear();
            window.location.href = "/login";
        }
    }
    return response;
}
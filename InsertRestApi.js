import React, { useEffect, useState } from 'react';

const InsertRestApi = () => {
    const [data,setData]=useState("");
    useEffect(()=>{
        fetch("http://jsonplaceholder.typicode.com/posts",{
            method:'POST',
            body:JSON.stringify({
                title:'check',
                body:'Yuvraj',
                userID:9893
            }),
            headers:{"content-type":"application/json; charset=UTF-8"}
        }).then(response=>response.json()).then((data)=>{
            console.log(data);
            setData("Data inserted Successfully");
        })
        .catch(console.log);
    },[]);
   
    return (
        <div>
            {data}
        </div>
    );
};
export default InsertRestApi;
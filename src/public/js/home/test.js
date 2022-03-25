const option1=document.querySelector("#option1"),
      option2=document.querySelector("#option2"),
      option3=document.querySelector("#option3"),
      result=document.querySelector("#result"),
      btn=document.querySelector("#btn");

btn.addEventListener("click",login)


function login(){
    console.log("login()");

    const req={
        option1: option1.value,
        option2: option2.value,
        option3: option3.value,
    };
    fetch("/analyze",{
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(req)
    }).then((res)=>res.json())
      .then((res)=>result.value="예측 결과는 "+JSON.stringify(res));
}


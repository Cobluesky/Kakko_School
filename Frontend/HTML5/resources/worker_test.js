//html에서 요청이오면 계산하고 돌려줌
onmessage = (event) =>
{
    //html에서 데이터 받아오기
    let num = event.data;
    console.log(num);
    let result = 0;
    for (let i = 0; i <= num; i++)
    {
        result += i;
    }

    postMessage(result); //메세지를 HTML로 전송 
}   
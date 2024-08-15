from fastapi import FastAPI
from pydantic import BaseModel #pydantic이라는 내장 라이브러리를 통해 import할꺼야 Basemodel을
from fastapi.staticfiles import StaticFiles
#서버에서 우리가 전에 만들었던 파일들을 보내줄 수 있게 만들어보자
#index, html, css, javascript를 묶어서 정적파일, staticFile 이라고 한다.
#fastapi 에서 static검색시 사용방법나옴. 

app = FastAPI()


answer = 'TRAIN'


#정답을 확인하는 코드를 만들고 싶어
@app.get('/answer')
def get_answer():
#return answer ->스트링으로 내보낸것 객체로 내보내보자
    return {'answer':answer} #>>스트링으로 보내는거랑 객체로 보내는거랑 차이가 뭐야??
#여기까지하면 /answer로 들어갔을 때 정답확인이 됨
#근데 우리가 원하는건 서버로 정답 보내주면 그때 그때 정답확인되는 시스템
#이건 자바에서 정해둔 정답을 수정해줘야함.



#>>순서상으로는 아래에 있는 app.mount를 먼저 작성했는데
#answer Train 이 위로 올라가지 않으면 작동을안함. 왜일까?



#서버에서 우리가 전에 만들었던 파일들을 보내줄 수 있게 만들어보자
app.mount("/", StaticFiles(directory="static", html=True), name="static")
#윗줄은 공식홈페이지에서 제공하는 사용법을 따라한 것. 
#html=True가 없으면 {"detail":"Not Found"} 나옴. 
#static을 폴더를 추가하고 그 안으로 index, js, css 다 넣어줘야함.

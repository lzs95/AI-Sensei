from typing import Union
from AIpal import generate_response
from mangum import Mangum
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
#Lambda function reroute
handler = Mangum(app)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_headers = ["*"],  
    allow_methods = ["*"],
)



@app.get("/generate_response")
async def generate_response_api(prompt:str):
    validate_input_prompt(prompt)
    response = generate_response(prompt)
    return { prompt : response}




def validate_input_prompt(prompt:str):
    if len(prompt) > 20:
        raise HTTPException(status_code=400, detail="Input Error: Must be a single word with less than 20 characters")


# uvicorn api:app --reload
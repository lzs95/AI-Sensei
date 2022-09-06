from typing import Union
from AIpal import generate_response
from mangum import Mangum
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
#Lambda function reroute
handler = Mangum(app)


@app.get("/generate_response")
async def generate_response_api(prompt:str):
    validate_input_prompt(prompt)
    response = generate_response(prompt)
    return { prompt : response}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


def validate_input_prompt(prompt:str):
    if len(prompt) > 20:
        raise HTTPException(status_code=400, detail="Input Error: Must be a single word with less than 20 characters")


# uvicorn api:app --reload
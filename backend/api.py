from typing import Union
from AIpal import generate_response

from fastapi import FastAPI

app = FastAPI()


@app.get("/generate_response")
async def generate_response_api(prompt:str):
    response = generate_response(prompt)
    return { prompt : response}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

# uvicorn api:app --reload
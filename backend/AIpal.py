import os
import openai
import argparse
from dotenv import load_dotenv
load_dotenv()
# Load your API key from an environment variable or secret management service
openai.api_key = os.getenv("OPENAI_API_KEY")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", "-i", type=str, required=True)
    args = parser.parse_args()
    user_input = args.input
    
    print(f"User Input: {user_input}")
    if validate_prompt(user_input):
        result = generate_response(user_input)
        # result_sentence = generate_response_sentence(user_input)
        print(result)
    else:
        raise ValueError("Input length must be under 20 characters.")

def generate_response(prompt: str):
    text_prompt = f"{prompt} -> \n\n###\n\n"

    response = openai.Completion.create(model="davinci:ft-personal-2022-09-20-09-37-28", prompt=text_prompt, temperature=0, max_tokens=20)
    response_text = response["choices"][0]["text"]
    
    result_text = response_text.split('\n\n###\n\n', 1)[0].split(",")
  
    #Remove spaces 
    result_array = [i.strip(" \n\n###\n\n") for i in result_text if len(i)>0]
    return result_array



# def generate_response_sentence(prompt:str):
#     text_prompt = "Write example sentences using this word '{prompt}', and return the example in this format:私は寝る前に好きな本を読みます。,Watashi wa neru mae ni sukina hon o yomimasu,I read my favorite book before I go to bed."
    
#     response = openai.Completion.create(model="text-davinci-002", prompt=text_prompt, temperature=.3, max_tokens=200)
#     response_text = response["choices"][0]["text"]

#     result_text = response_text.strip()
#     result_sentence_arr = result_text.split(",")
#     #Remove spaces 
#     result_sentence_arr = [i.strip() for i in result_sentence_arr if len(i)>0]
#     return result_sentence_arr




def validate_prompt(prompt: str):
    return len(prompt) <= 20
    



if __name__=="__main__":
    main()


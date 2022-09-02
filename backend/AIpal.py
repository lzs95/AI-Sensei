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
        result = generate_text(user_input)
        print(result)
    else:
        raise ValueError("Input length must be under 20 characters.")

def generate_text(prompt: str):
    text_prompt = f"Translate the following word '{prompt}' into Japanese and return the result exactly like the format of this example: '本', 'ほん', 'ホン', 'Hon'"

    response = openai.Completion.create(model="text-davinci-002", prompt=text_prompt, temperature=0, max_tokens=200)
    response_text = response["choices"][0]["text"]
    
    result_text = response_text.strip()
    result_array = result_text.split(",")
    #Remove spaces 
    result_array = [i.strip() for i in result_array if len(i)>0]
    return result_array


def validate_prompt(prompt: str):
    return len(prompt) <= 20
    



if __name__=="__main__":
    main()
    
    

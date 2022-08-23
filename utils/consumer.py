import requests

url = "http://localhost:3030/user"

response = requests.request("GET", url)

print(response.json())
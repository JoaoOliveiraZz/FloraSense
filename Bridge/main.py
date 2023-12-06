import serial
import requests

port = "COM" + str(input("Select port to connect to: COM"))
print(port)

arduino = serial.Serial(port, 9600)
print("Bridge working for port " + port +" 🚀")

while True:
    command = str(arduino.readline().strip())
    command = command[1:]
    command = command.replace(' ', '"')
    command = command.replace("'", "")

    test = '{"temperature": 20,"humidity": 20, "brightness": 10}'

    print("comando: " + command)
    print("Teste" + test)

    response = requests.post('http://localhost:3333/string', json={'data': command})
    print(response.text)

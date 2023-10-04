import serial
import requests

serialPort = serial.Serial('COM3', 9600)

while True:
    arduino_command = serialPort.readline().strip().decode('utf-8')

    if arduino_command.startswith("POST /weather"):
        data = arduino_command.split('\n', 1)[1]
        response = requests.post('http://localhost:3333/weather', data=data)
        serialPort.write(response.text.encode('utf-8'))
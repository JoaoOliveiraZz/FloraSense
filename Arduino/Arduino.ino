#include<ArduinoJson.h>
#include "DHT.h"
#include <string.h>


#define DHTPIN 8
#define DHTTYPE 11

#define LDR A0

DHT dht(DHTPIN, DHTTYPE);

char values[100] = "{ ", helper[10];

void setup()
{

  Serial.begin(9600);
  dht.begin();

  pinMode(LDR, INPUT);
  // Tamanho do buffer para armazenar o JSON
 
  // Serial.println();

}

void loop()
{

    int temperature = dht.readTemperature();
    int humidity = dht.readHumidity();
    

    int brightness = analogRead(LDR);
    brightness = map(brightness, 450, 1000, 0, 100);
    humidity = map(humidity, 0.00, 100.00, 0, 100);


    strcat(values, "temperature :");
    sprintf(helper, "%d", temperature);
    strcat(values, helper);
  
    strcat(values, ", humidity :");
    sprintf(helper, "%d", humidity);
    strcat(values, helper);
    
    strcat(values, ", brightness :");
    sprintf(helper, "%d", brightness);
    strcat(values, helper);
    strcat(values, "}");

    Serial.println(values);

    //Serial.println("{ temperature :20, humidity :20, brightness :10}");

    // Serial.println("Fazendo reaquisição POST /weather");

    // String postData = "data=10";

    // Serial.println("POST /weather");
    // Serial.println(postData);
  
  

    delay(5000);
    //delay(60000);
}

#include<ArduinoJson.h>
#include "DHT.h"
#include <string.h>


#define DHTPIN 8
#define DHTTYPE 11

#define LDR A0

DHT dht(DHTPIN, DHTTYPE);

char values[100] = "{ ", helper[10];
int b = 0, h = 0, t = 0; 

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
    brightness = map(brightness, 118, 780, 0, 100);
    humidity = map(humidity, 0.00, 100.00, 0, 100);

    if(humidity <= h - h*0.10 || humidity >= h + h*0.10 || temperature <= t - t*0.10 || temperature >= t + t*0.10 || brightness <= b - 0.50 * b || brightness >= b + b*0.50){
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

      
      b = brightness;
      h = humidity;
      t = temperature;
    }


    strcpy(values, "{ ");

    delay(1000);

  
  
}

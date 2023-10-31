#include<ArduinoJson.h>

void setup()
{

  Serial.begin(9600);
  // Tamanho do buffer para armazenar o JSON
 
  // Serial.println();

}

void loop()
{

    Serial.println("{temperature: 20,humidity: 20, iluminosity: 10}");

    // Serial.println("Fazendo reaquisição POST /weather");

    // String postData = "data=10";

    // Serial.println("POST /weather");
    // Serial.println(postData);
  

  // delay(60000);
}

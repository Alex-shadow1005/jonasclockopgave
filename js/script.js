const url = "http://worldtimeapi.org/api/timezone/";
const time = document.getElementById("time");
const timezone = document.getElementById("timezone-continent");
let boo  = true;

function getAllTimezone(url){
  return fetch(url).then(response => response.json());
}

 async function getTime(url){

  let temp = dropdown.value;

  while (time) {

      let json = await getAllTimezone(url);
      let dateTime = String(json.datetime);
      time.textContent = dateTime.slice(11, 19);
      if (dropdown.value !==temp){
        break;
      }
  }
 }

 async function getTimezones(url){
  console.log("hej");
  let json = await getAllTimezone(url);
   let Offset = String(json.timezone);
   timezone.textContent = Offset.slice(0,1000);
 }

 const dropdown = document.getElementById("dropdown");
dropdown.addEventListener("change", () => getTime(url + dropdown.value));
dropdown.addEventListener("change", () => getTimezones(url + dropdown.value));




      /*{
  "abbreviation": "CET",
  "client_ip": "87.59.14.119",
  "datetime": "2022-02-17T21:01:50.952225+01:00", <----
  "day_of_week": 4,
  "day_of_year": 48,
  "dst": false,
  "dst_from": null,
  "dst_offset": 0,
  "dst_until": null,
  "raw_offset": 3600,
  "timezone": "Europe/Copenhagen", <----
  "unixtime": 1645128110,
  "utc_datetime": "2022-02-17T20:01:50.952225+00:00",
  "utc_offset": "+01:00", <----
  "week_number": 7
        }*/

      /*TODO: lav passende attributter ud fra de markerede JSON værdier som kan manipulerer med klokken  */
      /* Altså vælg tidszone fra drop down, og set uret.
       */



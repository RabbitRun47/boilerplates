export function loadLocalFile(filePath) {
/*
use following code to use this function
```
import filePath from "./dummy.txt";
loadLocalFile(filePath);
```
the variable 'filePath' will give the actual file path when deployed as a build on a server
*/
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();

  if (xmlhttp.status === 200) {
    result = xmlhttp.responseText;
  }
  console.log('here', result);
}
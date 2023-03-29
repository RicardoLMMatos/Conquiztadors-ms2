
    function displayCategories(json){
      console.log(json);
      for(let i = 0; i < json.length; i++){

      }
    }
    // fetch request from: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    /*
      To extract the JSON body content from the Response object, 
      we use the json() method, 
      which returns a second promise that resolves with the result of parsing the response body text as JSON.
    */
    fetch("https://the-trivia-api.com/api/categories")
      .then(res => {
        return res.json();
      })
      .then(json => {
        displayCategories(json);
      })
      .catch(error => {
        return false;
      });

  
 

  
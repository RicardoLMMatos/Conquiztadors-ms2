
    const categoriesDiv = document.getElementById('categories');
    const science = document.getElementById('science');
    let html;
    function fallback(){
        html = 
        `<div class="column columns-12-6-3">
        <a href="questions-page1.html?quiz=science&trivia_api=false" class="card">
            <h4>Science</h4>
        </a>
    </div>
    <div class="column columns-12-6-3">

        <a href="questions-page1.html?quiz=history&trivia_api=false" class="card">
            <h4>History</h4>
        </a>

    </div>
    <div class="column columns-12-6-3">

        <a href="questions-page1.html?quiz=geography&trivia_api=false" class="card">
            <h4>Geography</h4>
        </a>

    </div>
    <div class="column columns-12-6-3">

        <a href="questions-page1.html?quiz=maths&trivia_api=false" class="card">
            <h4>Maths</h4>
        </a>

    </div>
    <div class="column columns-12-6-3">

        <a href="questions-page1.html?quiz=movies&trivia_api=false" class="card">
            <h4>Movies</h4>
        </a>

    </div>
    <div class="column columns-12-6-3">

        <a href="questions-page1.html?quiz=gaming&trivia_api=false" class="card">
            <h4>Gaming</h4>
        </a>

    </div>`;
    categoriesDiv.innerHTML = html;
    }
    function displayCategories(json){
      // console.log(json);
      const { ["Science"]: science, ["History"]: history, ["Geography"]: geography, ["General Knowledge"]: gK, ["Film & TV"]: tV, ["Music"]: music } = json;
      // console.log(science[0]);
      // console.log(history[0]);
      // console.log(geography[0]);
      // console.log(gK[0]);
      // console.log(tV[2]);
      // console.log(music[0]);
      html = 
      `<div class="column columns-12-6-3">
      <a href="questions-page1.html?quiz=${science[0]}&trivia_api=true" class="card">
          <h4>Science</h4>
      </a>
  </div>
  <div class="column columns-12-6-3">

      <a href="questions-page1.html?quiz=${history[0]}&trivia_api=true" class="card">
          <h4>History</h4>
      </a>

  </div>
  <div class="column columns-12-6-3">

      <a href="questions-page1.html?quiz=${geography[0]}&trivia_api=true" class="card">
          <h4>Geography</h4>
      </a>

  </div>
  <div class="column columns-12-6-3">

      <a href="questions-page1.html?quiz=${gK[0]}&trivia_api=true" class="card">
          <h4>General Knowledge</h4>
      </a>

  </div>
  <div class="column columns-12-6-3">

      <a href="questions-page1.html?quiz=${tV[0]}&trivia_api=true" class="card">
          <h4>Film & TV</h4>
      </a>

  </div>
  <div class="column columns-12-6-3">

      <a href="questions-page1.html?quiz=${music[0]}&trivia_api=true" class="card">
          <h4>Music</h4>
      </a>

  </div>`;
  categoriesDiv.innerHTML = html;
    }
    // fetch request from: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    /*
      To extract the JSON body content from the Response object, 
      we use the json() method, 
      which returns a second promise that resolves with the result of parsing the response body text as JSON.
    */
    const questionsSetAPI = fetch("https://the-trivia-api.com/api/categories")
      .then(res => {
        return res.json();
      })
      .then(json => {
        displayCategories(json);
      
      })
      .catch(error => {
        fallback();
      });

  
 

     
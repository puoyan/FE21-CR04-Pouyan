var movies = `{   
	"body":[
		{"id":"1","title":"white_ribbon", "description":"Director: Michael Haneke", "image":"img/white_ribbon.jpeg",  "likeCount":0}
		,{"id":"2","title":"1998", "description":"Director bernardo bertolucci", "image":"img/1900.jpeg",  "likeCount":0},
		{"id":"3","title":"Tase of cherry", "description":"Firector Abbas Kiarostami", "image":"img/taste.jpeg",  "likeCount":0},
		{"id":"4","title":"A Sepration", "description":"Director Asghar Farhadi", "image":"img/sepration.jpeg",  "likeCount":0},
		{"id":"5","title":"Cinema Paradiso", "description":"Director: tornatore giuseppe", "image":"img/cinema-paradiso.jpeg",  "likeCount":0},
		{"id":"6","title":"Weeping Meadow", "description":"Director: Theo Angelopoulos", "image":"img/weeping_meadow.jpeg", "likeCount":0}
		
	]
}`;


var movies = JSON.parse(movies).body;
for ( var x=0; x< movies.length; x++){

	var mycode = `<div class="col col-lg-4">
	<div class="box">
	  <div class="image" style="background-image: url('${movies[x].image}');"></div>
	  <div class="info">
	    <div class="text">
	      <p>${movies[x].title}</p>
	      <p>${movies[x].description}</p>
	    </div>
	    <div class="like-box">
	      <div class="like" onClick="like('${movies[x].id}')">Like</div>  
	      <div class="like-count text-center" id="${movies[x].id}">${movies[x].likeCount}</div>
	    </div>
	  </div>
	</div>
      </div>`;
      document.getElementById("films").innerHTML += mycode;
}





function like(id){
	var like = document.getElementById(id);
	var count = parseInt(like.innerHTML.trim());
	like.innerHTML = ++count;
	for ( var x=0; x<movies.length; x++){
		if (movies[x].id == id){
			movies[x].likeCount = count;
		}
	}
}


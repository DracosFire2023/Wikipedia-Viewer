

$("#input").keypress(function(e) 
{
  if (e.which === 13) 
  {
    e.preventDefault();
    $("#wiki-search").click();
  }
});

$("#wiki-search").click(function() 
{ 
  document.getElementById("strings").innerHTML = "";

  var search = document.getElementById("input").value;
  var url = "http://en.wikipedia.org/w/api.php?action=query&generator=search&prop=extracts&exsentences=1&exlimit=max&exintro&explaintext=1&format=json&callback=?&gsrsearch=" + search;
  $.getJSON(url, function(data) 
  {	
    console.log(search);
    console.log(url);
    var thumb = data.thumbnail;
    var request = z.p + data.extract + z.pF;
    var pages = data.query.pages;
		
    var arr = [];
    var arr2 = [];
    var arr3 = [];		
		
    for (var pid in pages)
    { 
	  arr.push(data.query.pages[pid].pageid);
	  arr2.push(data.query.pages[pid].extract);
	  arr3.push(data.query.pages[pid].title);
	}
    console.log("search:",search);
	console.log("all JSON:",data);	
	console.log("done:", arr2);
    console.log("arr:",arr);
		  
		  
    for (var index in arr2)
    {
	  for(var i = 0; i < arr3.length; i++)
	  {
	    $('#strings').append('<div align="center"><div class="results">' + '<a href="https://en.wikipedia.org/?curid=' + arr[i] + '"' + '<strong><h4>' + arr3[i] + ":" + '</h4></strong>' + arr2[i] + '</a>' + '</div></div>');
	  }
    }  
  });
});

	 
	
	

/*grabbing input*/
go=document.querySelector(".js-go");
console.log(go);
var inp;
go.addEventListener("click",function(){
    var container=document.querySelector(".js-container");
    container.innerHTML="";
    inp=document.querySelector("input").value;
    
    fetching(inp);
})
var enter=document.querySelector("input")
enter.addEventListener("keyup",function(e){
    var container=document.querySelector(".js-container");
    container.innerHTML="";
    
    inp=document.querySelector("input").value;
    
    if(e.key=="Enter"){ //if key ENTER is pressed
        fetching(inp);
    }
    
})

/*doing stuff with the API*/
function fetching(inp){
    //console.log(inp);
    var to_search="";
    var counter;
    for(counter=0; counter<inp.length;counter++){
        if ((inp[counter]==" ")&&(counter!=0)){
            to_search+="+";
        }
        else{
            to_search+=inp[counter];
        }
        //console.log(inp[counter]);
    }
    var url = "http://api.giphy.com/v1/gifs/search?q="+to_search+"&api_key=dc6zaTOxFJmzC";
    

   //AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();

    GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load',function(e){
    
        var data = JSON.parse(e.target.response).data;
        pushtoDOM(data);   
   });  

}





/*printing gif*/
function pushtoDOM(data)
{
    var container=document.querySelector(".js-container");
    container.innerHTML="";
    data.forEach(function(obj){
        var url=obj.images.fixed_height.url;
        container.innerHTML+="<img class=\"container-image\" src=\""+url+"\">";

    })
    
}


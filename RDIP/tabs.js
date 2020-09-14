//alert("hello");

var englishCorrect = '{"correctAnswers":[' +'{"a":"John ate an apple before afternoon","b":"before afternoon John ate an apple","c":"John before afternoon ate an apple" },'+
'{"a":"some students like to study in the night","b":"at night some students like to study" },' +
'{"a":"John and Mary went to church","b":"Mary and John went to church" },'+
'{"a":"John went to church after eating" , "b":"after eating John went to church" ,  "c":"John after eating went to church"},'+
'{"a":"did he go to market" , "b":"he did go to market"},'+
'{"a":"the woman who called my sister sells cosmetics" , "b":"the woman who sells cosmetics called my sister" , "c":"my sister who sells cosmetics called the woman" , "d":"my sister who called the woman sells cosmetics"},'+
'{"a":"John goes to the library and studies" , "b":"John studies and goes to the library"},'+
'{"a":"John ate an apple so did she" , "b":"she ate an apple so did John"},'+
'{"a":"the teacher returned the book after she noticed the error" , "b":"the teacher noticed the error after she returned the book" , "c":"after the teacher returned the book she noticed the error" , "d":"after the teacher noticed the error she returned the book"  , "e":"she returned the book after the teacher noticed the error" , "f":"she noticed the error after the teacher returned the book" ,  "g":"after she returned the teacher noticed the error" , "h":"after she noticed the error the teacher returned the book"},'+
'{"a":"I told her that I bought a book yesterday" , "b":"I told her yesterday that I bought a book" , "c":"yesterday I told her that I bought a book" , "d":"I bought a book that I told her yesterday" , "e":"I bought a book that I told her yesterday" , "f":"yesterday I bought a book that I told her"}]}';



var hindiCorrect = '{"hindicorrectAnswers":[' +'{"a":"राम और श्याम बाजार गयें" , "b":"राम और श्याम गयें बाजार" , "c":"बाजार गयें राम और श्याम" , "d":"गयें बाजार राम और श्याम" },' +
'{"a":"राम सोया और श्याम भी" , "b":"श्याम सोया और राम भी", "c" :"सोया श्याम और राम भी" , "d":"सोया राम और श्याम भी"}, '+
'{"a":"मैंने उसे बताया कि राम सो रहा है" , "b":"मैंने उसे बताया कि सो रहा है राम" , "c":"उसे मैंने बताया कि राम सो रहा है" , "d":"उसे मैंने बताया कि सो रहा है राम" , "e":"मैंने बताया उसे कि राम सो रहा है" , "f":"मैंने बताया उसे कि सो रहा है राम" , "g":"उसे बताया मैंने कि राम सो रहा है" , "h":"उसे बताया मैंने कि सो रहा है राम" , "i":"बताया मैंने उसे कि राम सो रहा है" , "j":"बताया मैंने उसे कि सो रहा है राम" , "k":"बताया उसे मैंने कि राम सो रहा है" , "l":"बताया उसे मैंने कि सो रहा है राम"},'+
'{"a":"राम खाकर सोया" , "b":"खाकर राम सोया" , "c":"राम सोया खाकर" , "d":"खाकर सोया राम" , "e":"सोया राम खाकर" , "f":"सोया खाकर राम"},'+
'{"a":"बिल्लियों को मारकर कुत्ता सो गया" , "b":"मारकर बिल्लियों को कुत्ता सो गया" , "c":"बिल्लियों को मारकर सो गया कुत्ता" , "d":"मारकर बिल्लियों को सो गया कुत्ता" , "e":"कुत्ता सो गया बिल्लियों को मारकर" , "f":"कुत्ता सो गया मारकर बिल्लियों को" , "g":"सो गया कुत्ता बिल्लियों को मारकर" , "h":"सो गया कुत्ता मारकर बिल्लियों को"}]}';
'{"a":"एक लाल किताब वहाँ है" , "b":"एक लाल किताब है वहाँ" , "c":"वहाँ है एक लाल किताब" , "d":"है वहाँ एक लाल किताब"},'+
'{"a":"एक बड़ी सी किताब वहाँ है" , "b":"एक बड़ी सी किताब है वहाँ" , "c":"बड़ी सी एक किताब वहाँ है" , "d":"बड़ी सी एक किताब है वहाँ" , "e":"वहाँ है एक बड़ी सी किताब" , "f":"वहाँ है बड़ी सी एक किताब" , "g":"है वहाँ एक बड़ी सी किताब" , "h":"है वहाँ बड़ी सी एक किताब"}]}';

obj = JSON.parse(englishCorrect);
//alert(" " + obj.correctAnswers[0].a+" ");
obj1= JSON.parse(hindiCorrect);
//alert(" " + obj1.hindicorrectAnswers[1].a+" ");
var arr = new Array();
var a= new Array();
function getSelectValue(){
  var SelectedOption=document.getElementById('dropDo').value;
  document.getElementById('dem4').innerHTML=" ";
  //alert(SelectedOption);
  if (SelectedOption == "english"){
  if(document.getElementById('dem2').style.visibility ="hidden"){

    document.getElementById('dem3').style.visibility="hidden";
    document.getElementById('dem2').style.visibility="visible";

  }else{
      document.getElementById('dem2').style.visibility="hidden";
  }
  if(document.getElementById('dem2').innerHTML !="null" || document.getElementById('dem3').innerHTML !="null" ){

    document.getElementById('dem2').innerHTML="";
    document.getElementById('dem3').innerHTML="";
  }
  if(document.getElementById('demF').innerHTML !="null" || document.getElementById('dem5').innerHTML !="null")
  {
    document.getElementById('demF').innerHTML="";
    document.getElementById('dem5').innerHTML="";
  }
  }

if (SelectedOption == "hindi"){
if(document.getElementById('dem3').style.visibility ="hidden"){
  //document.getElementById('dem2').remove();
  document.getElementById('dem2').style.visibility ="hidden";
  document.getElementById('dem3').style.visibility="visible";
  document.getElementById('demF').style.visibility ="hidden";

}else{
    document.getElementById('dem3').style.visibility="visible";
}
}
  if(SelectedOption == "SelectLanguage"){
    alert("Select Language");
  }
  else if (SelectedOption == "english") {

    englishSelected();

  }
  else{
    hindiSelected();
  }
}
function englishSelected(){
  document.getElementById("dem").innerHTML="<h4>Form a sentence (Declarative or Interrogative or any other type) from the given words</h4>";
  document.getElementById("dem1").innerHTML="<h5>(select the buttons in proper order)</h5>"

  randomSentences();
}
function hindiSelected(){
  document.getElementById("dem").innerHTML="<h4>Form a sentence (Declarative or Interrogative or any other type) from the given words</h4>";
  document.getElementById("dem1").innerHTML="<h5>(select the buttons in proper order)</h5>"

  randomSentencesHindi(obj1.hindicorrectAnswers);
}
function randomSentences(){
  var n=Math.floor(Math.random() * obj.correctAnswers.length);
  var str=obj.correctAnswers[n].a;
  str=str.toString();
  console.log(str);

  randomWords(str);
}
function randomWords(str){
  var stAr=str.split(" ");

  while(stAr.length !=0){

    var randomWord=Math.floor(Math.random() * stAr.length);
  st=stAr[randomWord];
  stAr.splice(randomWord,1);
  console.log(stAr);

  englishcreateBtn(st);
}
}

const englishcreateBtn=(st)=>{
  arr.push(st);
  const btn=document.createElement('button');
  btn.innerText=st;
  document.getElementById('dem2').appendChild(btn);
  btn.addEventListener("click",(event)=>{
    document.getElementById('dem6').innerHTML="<button onclick='myFunctionEnglish(st)'>Re-form the Sentence</button>"
    document.getElementById('demF').style.visibility ="visible";
      var buttontext=event.target.innerText;
      document.getElementById('dem4').innerHTML="<h4>Formed Sentence (after selecting words):</h4>"
      var docuText=document.getElementById('demF').innerHTML;
      docuText=docuText.concat(" "," ",buttontext);

      document.getElementById('demF').innerHTML=docuText;
      btn.style.display="none";
  });
}
function randomSentencesHindi(){
  var n=Math.floor(Math.random() * obj1.hindicorrectAnswers.length);
  var str=obj1.hindicorrectAnswers[n].a;
  str=str.toString();
  console.log(str);

  hindirandomWords(str);
}
function hindirandomWords(str){
  var stAr=str.split(" ");

  while(stAr.length !=0){

    var hindirandomWord=Math.floor(Math.random() * stAr.length);
  st=stAr[hindirandomWord];
  stAr.splice(hindirandomWord,1);
  console.log(stAr);

  hindicreateBtn(st);
}

}
var hindicreateBtn=(st)=>{
  arr.push(st);
  //var iterator = arr.values();
  //for (let elements of iterator) {
  //console.log(elements);
//}
  var btn=document.createElement('button');
  btn.innerText=st;
  document.getElementById('dem3').appendChild(btn);
  btn.addEventListener("click",(event)=>{
    document.getElementById('dem6').innerHTML="<button onclick='myFunction(st)'>Re-form the Sentence</button>"

    	var buttontext=event.target.innerText;

      document.getElementById('dem4').innerHTML="<h4>Formed Sentence (after selecting words):</h4>"
      document.getElementById('dem5').style.visibility ="visible";
      var docuText=document.getElementById('dem5').innerHTML;
      docuText=docuText.concat(" "," ",buttontext);

      document.getElementById('dem5').innerHTML=docuText;
      btn.style.display="none";
    //  a.push(btn.innerText);
    //  var iterator = a.values();
  //  for (let elements of iterator) {
  //  console.log(elements);
  //  }
  });
  /*function showingAllbuttons(){
    alert("showing");
  }*/
var a=new Array();
}
function myFunction(st){
  alert("clicked");
    document.getElementById('dem4').innerHTML=" ";
      document.getElementById('dem5').innerHTML=" ";
      document.getElementById('dem3').innerHTML=" ";
      //document.getElementById('dem6').innerHTML=" ";
      //  document.getElementById('dem2').innerHTML=" ";
      //showingAllbuttons();

      arr=arr.reverse();
      console.log(" "+arr);
      while(arr.length !=0){

     var arrElementsPop=arr.pop();
      alert(arrElementsPop);
    const butn=document.createElement('button');
     //hindicreateBtn(arrElementsPop);
     butn.innerText=arrElementsPop;
     //document.getElementById('dem3').appendChild(butn);
  //  if (a.includes(arrElementsPop)) {
  // Do something..]
  //const butn=document.createElement('button');

  //butn.innerText=arrElementsPop;

  //document.getElementById('dem3').appendChild(butn);
  //butn.style.display="inline";
//}
arr.push(arrElementsPop);
      document.getElementById('dem3').appendChild(btn);
      butn.addEventListener("click",(event)=>{
        //alert("button clicked");
        document.getElementById('dem6').innerHTML="<button onclick='myFunction()'>Re-form the Sentence</button>"
        	var buttontext=event.target.innerText;
          document.getElementById('dem4').innerHTML="<h4>Formed Sentence (after selecting words):</h4>"
          document.getElementById('dem5').style.visibility ="visible";
          var docuText=document.getElementById('dem5').innerHTML;
            docuText=docuText.concat(" "," ",buttontext);
            document.getElementById('dem5').innerHTML=docuText;
            butn.style.display="none";
          //alert(buttontext);
        });

        //	var buttontext=event.target.innerText;

        //  document.getElementById('dem4').innerHTML="<h4>Formed Sentence (after selecting words):</h4>"
        /*  document.getElementById('dem5').style.visibility ="visible";
          var docuText=document.getElementById('dem5').innerHTML;
          docuText=docuText.concat(" "," ",buttontext);

          document.getElementById('dem5').innerHTML=docuText;
          butn.style.display="none";
        //  a.push(btn.innerText);
        //  var iterator = a.values();
      //  for (let elements of iterator) {
      //  console.log(elements);
      //  }
      });
    }*/
}
}
/*var buttonsClicked=document.querySelectorAll("btn");

buttonsClicked.forEach((buttons)=>{
	buttons.addEventListener("click",(event)=>{
    alert("button clicked");
	var buttontext=event.target.innerText;
	alert(buttontext);
  button.addEventListener("click",(event)=>{
    alert("button clicked");
  });
});
});*/
function myFunctionEnglish(st){
  alert("clicked");
    document.getElementById('dem4').innerHTML=" ";
      document.getElementById('dem6').innerHTML=" ";
      document.getElementById('demF').innerHTML=" ";
       document.getElementById('dem2').innerHTML=" ";
      //showingAllbuttons();
      arr=arr.reverse();
      console.log(" "+arr);
      while(arr.length !=0){

      var arrElementsPop=arr.pop();
    //  alert(arrElementsPop);
     //const butn=document.createElement('button');

     //butn.innerText=arrElementsPop;
     //document.getElementById('dem3').appendChild(butn);
  //  if (a.includes(arrElementsPop)) {
  // Do something..]
  const butn=document.createElement('button');

  butn.innerText=arrElementsPop;
  document.getElementById('dem2').appendChild(butn);
  butn.style.display="inline";
}
}

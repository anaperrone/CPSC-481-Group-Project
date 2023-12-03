
const inputField = document.getElementById("input");
const submitField = document.getElementById("submit");
var commentbtn = document.getElementById("comment-button");
commentbtn.classList.add("active");
function CQButton(clicked) { 
    var button = document.getElementById(clicked); 
    var questionbtn = document.getElementById("question-button"); 
 
        var comment=document.getElementById("comments");
        if(questions.style.display=='none' && clicked=='question-button'){
            questions.style.display='block';
            inputQuestion.style.display='block';
            submitQuestion.style.display='block';
            comment.style.display='none';
            input.style.display='none';
            submit.style.display='none';
            errorCharMsg.style.display='none';
            inputField.value="";

           // questionbtn.style.backgroundColor="rgb(190, 192, 190)";
            // commentbtn.style.backgroundColor="white";
            questionbtn.classList.add("active");
            commentbtn.classList.remove("active");

        }
        if(clicked=='comment-button' && comments.style.display=='none'){
            questions.style.display='none';
            inputQuestion.style.display='none';
            submitQuestion.style.display='none';
            comment.style.display='block';
            input.style.display='block';
            submit.style.display='block';
            errorCharMsgQuestion.style.display='none';
            submitField.value="";
            questionbtn.classList.remove("active");
            commentbtn.classList.add("active");
            // commentbtn.style.backgroundColor="rgb(190, 192, 190)";
          //  questionbtn.style.backgroundColor="white";
        }    
} 

{/* <tr>
<td>
    <div class="comment-question-group">
        <div style="position:inline; text-align: right; vertical-align:top; font-size: 15px; margin: none; padding: none;"> Date: December 3, 2023 </div>
        <div class="user" style="display: inline-flex;"></div>
        <div style="display:inline;"> Rachel Green: </div>
            Question                                        
    </div>
</td>
</tr>
const result_row = document.getElementById("comment-table"); */}

const date = new Date();

let day = date.getDate();
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.

const momths = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let name = momths[d.getMonth()];
let currentDate = `${name} ${day}, ${year}`;
console.log(currentDate)

const result_row = document.getElementById("comment-table");
function insert_result_comment(){
    let input = inputField.value;
    if(input.length >= 3){
        console.log(input);
        input.className='text-CQ';
        let new_row = document.createElement("tr");
        let new_td = document.createElement("td");
        var cell1 = new_row.insertCell(0);

        let new_div = document.createElement('div');
        let dateDiv = document.createElement('div');
        let userDiv = document.createElement('div');
        let alignDiv = document.createElement('div');
        let alignDiv2 = document.createElement('div');
        let userNameDiv = document.createElement('div');
        let replyDiv = document.createElement('a');
        replyDiv.href="";
        replyDiv.innerHTML="Reply";
        replyDiv.className="replyLink";


        new_div.className='comment-question-group';
        dateDiv.className='comment-question-dates';
        alignDiv.className="alignTextBesidePFPInsert";
        alignDiv2.className="alignTextBesidePFPInsert";

        dateDiv.innerHTML="Date " + currentDate;
        userDiv.className='userCompleted';
        userDiv.style.display="inline-flex";
        // userNameDiv.style.display="inline";
        userNameDiv.style.paddingLeft="5px";
        userNameDiv.innerHTML="Sheldon Cooper: "
        alignDiv.append(userNameDiv);
        alignDiv2.append(input);
        // new_div.append(input);
        
        new_div.append(dateDiv);
        new_div.append(userDiv);
        new_div.append(alignDiv);
        new_div.append(alignDiv2);
        new_div.append(replyDiv);

        new_td.appendChild(new_div);
        cell1.appendChild(new_td);
        result_row.appendChild(new_row);
        inputField.value="";
        errorCharMsg.style.display='none';
    }
    else{
        errorCharMsg.style.display='block';
    }
}

// {    <div class="user" style="display: inline-flex; background:url(https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg); background-size: contain;"></div>
// <div class="alignTextBesidePFP">
//     <div style="display: inline;"> Jan Levinson: </div>
// </div>
// <div class="alignTextBesidePFP">
//     If I were to bake it in the oven how long would I keep it in there?  
// </div>
// <a href="" class="replyLink">Reply</a>}

const inputQuestionField = document.getElementById("inputQuestion");
const result_row_question = document.getElementById("question-table");

function insert_result_question(){
    let input = inputQuestionField.value;
    if(input.length >= 3){
        input.className='text-CQ';
        let new_row = document.createElement("tr");
        let new_td = document.createElement("td");
        var cell1 = new_row.insertCell(0);

        let new_div = document.createElement('div');
        let dateDiv = document.createElement('div');
        let userDiv = document.createElement('div');
        let alignDiv = document.createElement('div');
        let alignDiv2 = document.createElement('div');
        let userNameDiv = document.createElement('div');
        let replyDiv = document.createElement('a');
        replyDiv.href="";
        replyDiv.innerHTML="Reply";
        replyDiv.className="replyLink";


        new_div.className='comment-question-group';
        dateDiv.className='comment-question-dates';
        alignDiv.className="alignTextBesidePFPInsert";
        alignDiv2.className="alignTextBesidePFPInsert";

        dateDiv.innerHTML="Date " + currentDate;
        userDiv.className='userCompleted';
        userDiv.style.display="inline-flex";
        // userNameDiv.style.display="inline";
        userNameDiv.style.paddingLeft="5px";
        userNameDiv.innerHTML="Sheldon Cooper: "
        alignDiv.append(userNameDiv);
        alignDiv2.append(input);
        // new_div.append(input);
        
        new_div.append(dateDiv);
        new_div.append(userDiv);
        new_div.append(alignDiv);
        new_div.append(alignDiv2);
        new_div.append(replyDiv);

        new_td.appendChild(new_div);
        cell1.appendChild(new_td);
        result_row_question.appendChild(new_row);
        inputField.value="";
    }
    else{
        errorCharMsgQuestion.style.display='block';
    }
    
}
function gramsToCupTest(textMeasurement){
    const MeasurementArr = JSON.parse(textMeasurement);
    for(var i=0; i < MeasurementArr.length; i++){
        var outerUnitId = "unit"+i;
        var outerNumderId = "number"+i;
        var outerNumderDiv = document.getElementById(outerNumderId);
        var outerUnit=document.getElementById(outerUnitId);
       
        if(outerUnit.innerHTML!=" "){
            if(outerUnit.innerHTML== " gram " || outerUnit.innerHTML== " grams "){
                console.log("REACHED");
                
                var conversionIs = parseFloat(outerNumderDiv.innerHTML)/250;
           
                outerNumderDiv.innerHTML=conversionIs;
                if(conversionIs>1){
                    newUnit=" cups ";
                }
                else{
                    newUnit=" cup ";
                } 
                outerUnit.innerHTML=newUnit;
                
            }
        }
    
    }                      
}

function cupsToGrams(textMeasurement){
    const MeasurementArr = JSON.parse(textMeasurement);
    for(var i=0; i < MeasurementArr.length; i++){
        // var checkId = "m"+i;
        // var newDiv = document.getElementById(checkId);
        var outerUnitId = "unit"+i;
        var outerNumderId = "number"+i;
        var outerNumderDiv = document.getElementById(outerNumderId);
        var outerUnit=document.getElementById(outerUnitId);
        console.log(outerUnitId);
       
        if(outerUnit.innerHTML!=" "){
            if(outerUnit.innerHTML== " cup " || outerUnit.innerHTML== " cups "){
                console.log("REACHED");
                
                var conversionIs = parseFloat(outerNumderDiv.innerHTML)*250;
                outerNumderDiv.innerHTML=conversionIs;
                if(conversionIs>1){
                    newUnit=" grams ";
                }
                else{
                    newUnit=" gram ";
                } 
                outerUnit.innerHTML=newUnit;
            }
        }
    }   
}

function cupsToMl(textMeasurement){
    const MeasurementArr = JSON.parse(textMeasurement);
    for(var i=0; i < MeasurementArr.length; i++){
        // var checkId = "m"+i;
        // var newDiv = document.getElementById(checkId);
        var outerUnitId = "unit"+i;
        var outerNumderId = "number"+i;
        var outerNumderDiv = document.getElementById(outerNumderId);
        var outerUnit=document.getElementById(outerUnitId);
        console.log(outerUnitId);
       
        if(outerUnit.innerHTML!=" "){
            console.log("REACHED");

            if(outerUnit.innerHTML== " cup " || outerUnit.innerHTML== " cups "){
                console.log("REACHED");
                
                var conversionIs = parseFloat(outerNumderDiv.innerHTML)*237;
                outerNumderDiv.innerHTML=conversionIs;
               
                    newUnit=" mL ";
                outerUnit.innerHTML=newUnit;
            }
        }
    }   
}

function mlToCups(textMeasurement){
    const MeasurementArr = JSON.parse(textMeasurement);
    for(var i=0; i < MeasurementArr.length; i++){
        // var checkId = "m"+i;
        // var newDiv = document.getElementById(checkId);
        var outerUnitId = "unit"+i;
        var outerNumderId = "number"+i;
        var outerNumderDiv = document.getElementById(outerNumderId);
        var outerUnit=document.getElementById(outerUnitId);
        console.log(outerUnitId);
       
        if(outerUnit.innerHTML!=" "){
            console.log("REACHED");

            if(outerUnit.innerHTML== " mL "){
                console.log("REACHED");
                
                var conversionIs = parseFloat(outerNumderDiv.innerHTML)/237;
                outerNumderDiv.innerHTML=conversionIs;
               
                if(conversionIs>1){
                    newUnit=" cups ";
                }
                else{
                    newUnit=" cup ";
                } 
                outerUnit.innerHTML=newUnit;
            }
        }
    }   
}



function bookmarkClicked(){
    var button = document.getElementById("clickedBookmark");
    if(button.style.display=='none'){
        bookmark.style.display='none';
        button.style.display='block';
    }
    else{
        bookmark.style.display='block';
        button.style.display='none';
    
    }
    
}

function MDropdownClicked(clicked, textMeasurement){
    // console.log(clicked);
    var button=document.getElementById(clicked);
    // const textMeasurement = '[{"number":3, "unit":" ", "ingredient":"chicken thigh", "sub":""},  {"number":20, "unit":" grams ", "ingredient":"honey","sub":[{"number":1, "unit":" cup ", "ingredient":"sugar"}]},  {"number":3, "unit":" ", "ingredient":"garlic cloves", "sub":""},  {"number":1, "unit":" teaspoon ", "ingredient":"vinegar", "sub": [{"number":10, "unit":" grams ", "ingredient":"apple cider vinegar"}]}, {"number":5, "unit":" teaspoon ", "ingredient":"vinegar", "sub":""}, {"number":7, "unit":" ounces ", "ingredient":"soy sauce", "sub":[{"number":18, "unit":" cup ", "ingredient":"rice vinegar"}]}]';
    const MeasurementArr = JSON.parse(textMeasurement);
    console.log(textMeasurement);
    for(var i=0; i<MeasurementArr.length; i++){

       
        if(MeasurementArr[i].sub!=""){

            for(var j=0;j<MeasurementArr[i].sub.length; j++){
              
                var thisNumberId="number"+i;
                var numberDiv=document.getElementById(thisNumberId);
                var thisUnitId="unit"+i;
                var unitDiv=document.getElementById(thisUnitId);
                if(clicked==MeasurementArr[i].ingredient){
                    numberDiv.innerHTML=MeasurementArr[i].number;
                    unitDiv.innerHTML=MeasurementArr[i].unit;
                    break;
                }
                if(clicked==MeasurementArr[i].sub[j].ingredient){

                    numberDiv.innerHTML=MeasurementArr[i].sub[j].number;
                    unitDiv.innerHTML=MeasurementArr[i].sub[j].unit;
                    break;
                }
            }
        }
    } 
}

function followAlongClicked(arrSize){
    console.log(arrSize);
    for(var i=0; i<arrSize; i++){
        var checkID = "checkbox"+i;
        var checkButton=document.getElementById(checkID);
        checkButton.style.display='block';

    }
    var endButton = document.getElementById("endFollowButton");
    var endText = document.getElementById("endFollowText");
    endButton.style.display="block";
    endText.style.display="block";
    var startButton = document.getElementById("startFollowAlong");
    var startText = document.getElementById("startFollowText");
    startButton.style.display="none";
    startText.style.display="none";

}

function endFollowAlongClicked(arrSize){
    for(var i=0; i<arrSize; i++){
        var checkID = "checkbox"+i;
        var checkButton=document.getElementById(checkID);
        checkButton.style.display='none';

    }
    var endButton = document.getElementById("endFollowButton");
    var endText = document.getElementById("endFollowText");
    endButton.style.display="none";
    endText.style.display="none";
    var startButton = document.getElementById("startFollowAlong");
    var startText = document.getElementById("startFollowText");
    startButton.style.display="block";
    startText.style.display="block";

}
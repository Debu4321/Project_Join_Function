name_of_the_student_array = [];
    
function getParagraph1()
{
    var inputs = [];
    for(var i = 1 ; i <=6 ; i++)
    {
        inputs.push(document.getElementById("para1_input_box_" + i).value);
    }
document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
}

function getParagraph2()
{
    var inputs = [];
    for(var i = 1 ; i <=6 ; i++)
    {
        inputs.push(document.getElementById("para2_input_box_" + i).value);
    }
document.getElementById("showParagraph2").innerHTML = inputs.join(". ");
}

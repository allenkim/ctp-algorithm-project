function solveUVA11172(input){
  var lines = input.split("\n");
  var answer = "";
  for (var i = 1; i <= lines[0]; i++){
    var nums = lines[i].split(" ");
    answer += (nums[0] < nums[1] ? "<" : nums[0] > nums[1] ? ">" : "=");
    answer += "\n";
  }
  return answer;
}

function grade(output, answer){
  var output_lines = output.trim().split("\n");
  var answer_lines = answer.trim().split("\n");
  var check_lines = [];
  for (var i = 0; i < output_lines.length; i++){
    if (output_lines[i] == answer_lines[i])
      check_lines[i] = "Test Case #" + (i+1) + ":<br> Correct!";
    else
      check_lines[i] = "Test Case #" + (i+1) + ":<br> Got <samp>" + output_lines[i] + "</samp>... expected <samp>" + answer_lines[i] + "</samp>";
  }
  return check_lines;
}

var input = `14
-927101048 -927101048
-618970250 648940120
-804722077 -964548842
-366618439 -188307001
380565241 165732307
918809675 -215309091
842843672 -953850991
363785686 728361547
31682488 31682488
288101856 868511451
-325935686 -595215593
-382147959 231270880
-2 -2
-879489962 -88890426
`;

var output = `=
<
<
>
>
>
>
<
=
>
<
>
=
<
`;

var answer = solveUVA11172(input);

var grades = grade(output, answer);

for (var i = 0; i < grades.length; i++)
  $('#results').append("<li>"+grades[i]+"</li>");

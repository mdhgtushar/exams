const allQuestions = document.querySelectorAll('.questionBox');
for (i = 0; i < allQuestions.length; i++){
    var child = document.querySelectorAll('.questionList');
    var child = child[i];
    allQuestions[i].addEventListener('click', function () {
        console.log(child);
    })
}
// console.log(allQuestions);
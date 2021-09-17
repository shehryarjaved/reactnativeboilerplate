const INITIAL_STATE = {
    quiz:[{
        question:'What does HTML stand for?',
        answer:["Hyper Text Markup Language","Hot Mail","How to Make Lasagna"],
        correct:"Hyper Text Markup Language"
    },
{
    question:'What does Css stand for?',
    answer:["Cascading Stylesheet","sheet","sheetmakup","sheetstylish"],
    correct:'Cascading Stylesheet',
}
,
{
    question:'Apart from <b> tag, what other tag makes text bold ? ',
    answer:["<fat>","<black>","<strong>","<emp>"],
    correct:'<strong>',
},
{
    question:'What should be the first tag in any HTML document?',
    answer:["<head>","<html>","<body>","<title>"],
    correct:'<html>',
},
]
}

function reducer(state = INITIAL_STATE){
    return state;
}

export default reducer;
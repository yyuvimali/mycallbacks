const posts=[
    {title:'Post one',body:'This is post one'},
    {title:'Post two',body:'This is post two'}
];

function getPosts(){
    setTimeout(() => {
        let output=' ';
        posts.forEach((post,index) =>{
            output += `<li>${post.title}</li>`;
        });
        document.getElementById("calls").innerHTML=`<h3>${output}<h3>`
    },1000);
}
function creatPost(post,callback){
    setTimeout(() =>{
        posts.push(post);
        callback();
    },2000);
}
creatPost({title:'Post three',body:'this is post three'},getPosts);
function creat4thPost(post,callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    },2000)
}
creat4thPost({title:'Post four',body:'this is post four'},getPosts);

document.getElementById("app").innerHTML=`<h1>Last Updetad</h1>`;

const updateBottonNode= document.getElementById('UpdatMe');
var timerId;
var count=0;

updateBottonNode.addEventListener('click', () =>{
    count=0;
    clearInterval(timerId);
     timerId=setInterval(() => {
        count++;
        console.log(count); 
        document.getElementById("app").innerHTML=`<h1>Last Updetad ${count}</h1>`;
     }, 1000);
})

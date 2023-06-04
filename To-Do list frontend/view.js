const taskname=document.getElementById('taskName')
const description=document.getElementById('description');

const addtask=document.getElementById('addtask');
const list1=document.getElementById('list1');
const list2=document.getElementById('list2');

addtask.addEventListener('click',onsubmit);
list1.addEventListener('click',deletelist);
list1.addEventListener('click',completedtask);



function onsubmit(e){
    e.preventDefault();
    axios.post("http://localhost:5000/todotask",{
        task_name:taskname.value,
        description:description.value
    })
    .then(res=>{
        const taskname=document.createElement('li');
        taskname.setAttribute('id',res.data.id)
       taskname.appendChild(document.createTextNode(`task=>${res.data.task_name}, DESCRIPTION=>${res.data.description}`))


        const deleteButton=document.createElement('button')
        deleteButton.setAttribute('class','btn btn-danger btn-sm')
        deleteButton.setAttribute('type',"button")
        deleteButton.appendChild(document.createTextNode('X'))

        const done=document.createElement('button');
        done.setAttribute('class','btn btn-green btn-sm')
        done.setAttribute('type',"button")
        done.appendChild(document.createTextNode('DONE'));

        taskname.appendChild(deleteButton);
        taskname.appendChild(done);

        list1.appendChild(taskname);
    })
    .catch(err=>{
        console.log(err)
    })
}

function deletelist(e){
    e.preventDefault();
    if(e.target.classList.contains('btn-danger')){
        list1.removeChild(e.target.parentElement)
    }

    axios.delete(`http://localhost:5000/todotask/${e.target.parentElement.id}`)
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}

function completedtask(e){
    e.preventDefault();
    if (e.target.classList.contains('btn-warning')){
        const cpm=list2.appendChild(document.createElement('li'))
        cpm.appendChild(e.target.parentElement)       
    }

}


window.addEventListener('DOMContentLoaded',()=>{
    axios.get('http://localhost:5000/todotask')
    .then(res=>{
        res.data.forEach(element => {
        const taskname = document.createElement('li');
        const list1 = document.getElementById('list1');
        
        taskname.setAttribute('id',element.id)
        taskname.appendChild(document.createTextNode(`task=>${element.task_name} description=>${element.description}`))

        const deleteButton=document.createElement('button');
        deleteButton.setAttribute('class','btn btn-danger btn-sm');
        deleteButton.appendChild(document.createTextNode('X'))

        const done=document.createElement('button');
        done.setAttribute('class','btn btn-warning btn-sm');
        done.appendChild(document.createTextNode('Done'));

        taskname.appendChild(deleteButton);
        taskname.appendChild(done);

        list1.appendChild(taskname);


        });
    })
    .catch(err=>{
        console.log(err)
    })
})




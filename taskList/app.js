const userTask = document.querySelector('.artcl_main input');
const addBtn = document.querySelector('.artcl_main button');
const listTodo = document.querySelector('.list_todo');
const main = document.querySelector('.artcl_main');

// 다운로드 버튼 생성
const downloadBtn = document.createElement('button');
downloadBtn.classList.add('btn');
downloadBtn.textContent = "리스트 다운로드";
document.body.append(downloadBtn);
downloadBtn.addEventListener('click', downloadFile);

addBtn.addEventListener('click', createListItem);

// 할일이 저장된 배열
const tasks = JSON.parse(localStorage.getItem('tasklist')) || [];

// 할일 데이터를 localStorage에 저장하는 함수
function saveTasks(){
    localStorage.setItem('tasklist', JSON.stringify(tasks));
}

// 초기에 로컬 스토리지에 저장된 데이터를 기반으로 li 목록 생성하기
if(tasks){
    tasks.forEach((task)=>{
        genItem(task.value, task.checked);
    })
    showDownload();
}

function createListItem() {
    const value = userTask.value;
    // 예외처리
    if(value){
        //myObj 객체 생성
        const myObj = {
            value: genItem(value, false), // boolean 값은 todo 수행 완료 여부
            checked: false,
        }

        // myObj 객체를 할일 배열에 저장
        tasks.push(myObj);

        // 할일 데이터를 localStorage에 저장하는 함수
        saveTasks();

        // 다운로드 버튼 노출 판단 함수
        showDownload();
    }else{
        errorMsg('내용을 작성해 주세요!');
    }
}

// 리스트 아이템을 생성하는 함수
function genItem(value, complete){
    const li = document.createElement('li');
    li.textContent = value;
    listTodo.append(li);

    //인풋 초기화
    userTask.value='';

    if(complete){
        li.classList.add('done');
    }

    li.addEventListener('click', () => {
        li.classList.toggle('done');
        buildTasks();
    })

    // 삭제버튼 만들기
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    li.append(btn);
    btn.addEventListener('click', () => {
        li.remove();
        showDownload();
        buildTasks();
    })
    return value;
}

// 할일 목록 데이터를 업데이트 하는 함수
function buildTasks(){
    // 테스트 목록의 정보를 업데이트 하기 위해서 기존 데이터를 초기화
    tasks.length = 0; // 빈배열
    const curList = listTodo.querySelectorAll('li');
    curList.forEach((el)=>{
        const tempTask = {
            value: el.textContent,
            checked: false,
        };

        // done 클래스가 있는지 확인하고 있다면 checked 정보 변경
        if(el.classList.contains('done')){
            tempTask.checked = true;
        }
        tasks.push(tempTask);
    })
    saveTasks();
}

function showDownload(){
    const curList = listTodo.querySelectorAll('li');
    if(curList.length > 0){
        downloadBtn.style.display = 'block';
    }else{
        downloadBtn.style.display = 'none';
    }
}

const message = document.createElement('strong');
message.style.display = 'none';
message.style.color = 'red';
main.append(message); //
userTask.addEventListener('input', () => {
    message.style.display='none';
})

function errorMsg(msg){
    message.style.display = 'block';
    message.textContent = msg;
    userTask.focus();
}

// 할일 목록 다운로드
function downloadFile(){
    // 다운로드 받을 텍스트를 생성합니다
    let temp = '<나의 할일 목록>\n\n';

    const curList = listTodo.querySelectorAll('li');
    curList.forEach((el)=>{
        // 완료한 한일 앞에는 '완료'라는 텍스트 붙이기
        if(el.classList.contains('done')){
            temp += '완료-';
        }
        temp += `${el.textContent}\n`;
    })
        let element = document.createElement('a'); 
        // 나중에 삭제할 예정 -> let으로 선언

        // data URI scheme을 이용해서 데이터를 a안에 임베드 시킨
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + temp); 
        element.setAttribute('download', 'todoList');
        element.click();
        element = null; 
        //클릭을 했으면 더 이상 존재하지 않아야함 -> null로 만들어서 가비지 컬렉터가 수거 
}
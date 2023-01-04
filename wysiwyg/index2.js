const editor = document.querySelector('.editor');
document.querySelectorAll('.options button').forEach(item => item.addEventListener('click', ()=>{
    const command = item.dataset.command;
    const selectedTxt= window.getSelection(); // 사용자가 선택한 텍스트 범위 또는 캐럿(커서)의 현재 위치를 나타내는 객체 반환
    const parentEl = selectedTxt.anchorNode.parentElement; 
    //일부분 선택해도 전체 선택하기 때문에 parentElement 사용
    // 선택시작한 부분이 어느 노드에 속하는지 앵커노드에 저장되어 있음

    // css style로 바꾸는 경우
    if(command.includes('style')){
        parentEl.style.textAlign = command.slice(6);
        
    // html 요소를 이용해서 바꾸는 경우
    }else{
        const createEl = document.createElement(command);
        
        if(command === "h1" || command === "h2" || command === "h3" ||command === "p"){
            createEl.textContent = parentEl.textContent;

            editor.replaceChild(createEl, parentEl); // parentEl를 createEl로 교체
        }else{
            const selectedTxtRange = selectedTxt.getRangeAt(0); // 보통 0 전달 됨. //현재 선택된 범위 중 하나를 나타내는 범위 객체를 반환
            //selection 객체를 range 객체로 바꿈
            selectedTxtRange.surroundContents(createEl); 
        }
    }
}));
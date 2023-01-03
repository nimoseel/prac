document.querySelectorAll('.options button').forEach(item => item.addEventListener('click', ()=>{
    const command = item.dataset.command;
    if (command === "h1" || command === "h2" || command === "h3" ||command === "p"){
        document.execCommand('formatBlock', false, command); 
    } else {
        document.execCommand(command);
    }
}));

// execCommand
    // 문서의 편집 가능한 영역에 명령을 내릴 수 있음
// formatBlock
    // 현재 선택 항목을 포함하는 줄 주위에 HTML 블록 수준 요소를 추가하고 해당 줄이 있는 경우 해당 줄을 포함하는 블록 요소를 대체. 값 인수로 태그 이름 문자열 필요. 거의 모든 블록 수준 요소 사용 가능. 

// 하지만 execCommand()는 더이상 브라우저에서 지원하지 않음.

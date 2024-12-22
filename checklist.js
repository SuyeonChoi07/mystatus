function saveChecklistState() {
    const tasks = document.querySelectorAll('.task');  // 모든 체크박스를 선택
    const taskStates = {};  // 체크박스 상태를 저장할 객체

    tasks.forEach(task => {
        taskStates[task.id] = task.checked;  // 각 체크박스의 상태를 객체에 저장
    });

    // 로컬 저장소에 상태 객체를 JSON 형식으로 저장
    localStorage.setItem('checklistState', JSON.stringify(taskStates));
}

// 체크리스트 상태를 로드하는 함수
function loadChecklistState() {
    const savedState = localStorage.getItem('checklistState');  // 로컬 저장소에서 상태 가져오기

    if (savedState) {
        const taskStates = JSON.parse(savedState);  // JSON 문자열을 객체로 변환

        Object.keys(taskStates).forEach(taskId => {
            const task = document.getElementById(taskId);  // 해당 체크박스를 찾기
            if (task) {
                task.checked = taskStates[taskId];  // 로드된 상태에 맞게 체크박스를 설정
            }
        });
    }
}

// 체크박스 상태가 변경될 때마다 저장
document.querySelectorAll('.task').forEach(task => {
    task.addEventListener('change', saveChecklistState);  // 상태 변경 시 저장
});

// 페이지 로드 시 상태를 로드
window.addEventListener('load', loadChecklistState);
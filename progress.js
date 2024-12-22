// 각 progress bar의 값을 로컬 저장소에 저장하는 함수
function saveProgress(id) {
    const progressBar = document.getElementById(id);
    const progressValue = progressBar.value;
    localStorage.setItem(id, progressValue);  // 진행 상태를 로컬 저장소에 저장
}

// 각 progress bar의 값을 로컬 저장소에서 불러오는 함수
function loadProgress(id) {
    const savedProgress = localStorage.getItem(id);
    if (savedProgress !== null) {
        const progressBar = document.getElementById(id);
        progressBar.value = parseInt(savedProgress, 10);  // 저장된 값으로 progress 값 설정
    }
}

// 버튼 클릭 시 + 버튼과 - 버튼에 해당하는 기능을 처리하는 함수
function handleButtonClick(event) {
    const target = event.target;
    const action = target.dataset.target;
    const progressId = action.split('-')[0];  // progress id 추출
    const progressBar = document.getElementById(progressId);

    if (action.includes('increase') && progressBar.value < progressBar.max) {
        progressBar.value += 10;
    } else if (action.includes('decrease') && progressBar.value > 0) {
        progressBar.value -= 10;
    }

    saveProgress(progressId);  // 진행 상태 저장
}

// +, - 버튼에 클릭 이벤트 리스너 추가
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

// 페이지 로드 시 각 progress bar의 상태를 로컬 저장소에서 불러오기
window.addEventListener('load', () => {
    loadProgress('progress1');
    loadProgress('progress2');
    loadProgress('progress3');
    loadProgress('progress4');
});
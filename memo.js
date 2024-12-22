let memo = JSON.parse(localStorage.getItem('memo')) || [];

    // 일기를 화면에 표시하는 함수
    function displaymemo() {
      const memoList = document.getElementById('memoList');
      memoList.innerHTML = 'Memo list';

      if (memo.length === 0) {
        memoList.innerHTML += '<p>작성한 메모가 없습니다.</p>';
        return;
      }

      memo.forEach(memo => {
        const memoEntry = document.createElement('div');
        memoEntry.classList.add('memo-entry');
        memoEntry.innerHTML = `
          <p>${memo.content}</p>
        `;
        memoList.appendChild(memoEntry);
      });
    }

    // 일기를 저장하는 함수
    function saveMemo() {
      const content = document.getElementById('content').value;

      // 새로운 일기 추가
      const newmemo = { content };
      memo.push(newmemo);

      // 로컬 스토리지에 저장
      localStorage.setItem('memo', JSON.stringify(memo));

      // 입력란 초기화
      document.getElementById('content').value = '';

      // 화면에 업데이트된 일기 목록 표시
      displaymemo();
    }

    // 페이지 로드 시 일기 목록 표시
    displaymemo();
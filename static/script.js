document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("searchForm");
  const resultId = document.getElementById("resultId");
  const resultPw = document.getElementById("resultPw");

  // 예시용 데이터베이스 (실제로는 서버에서 받아와야 함)
  const userData = [
    { id: "202301", name: "홍길동", email: "202301@school.edu", password: "gildong123" },
    { id: "202302", name: "김민수", email: "202302@school.edu", password: "minsu456" },
    { id: "202303", name: "이영희", email: "202303@school.edu", password: "younghee789" }
  ];

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지

    const inputId = document.getElementById("studentId").value.trim();
    const inputName = document.getElementById("studentName").value.trim();

    const user = userData.find(u => u.id === inputId && u.name === inputName);

    if (user) {
      resultId.textContent = user.email;
      resultPw.textContent = user.password;
    } else {
      resultId.textContent = "일치하는 계정이 없습니다.";
      resultPw.textContent = "-";
    }
  });
});

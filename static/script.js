const studentData = [
  { studentId: "202300",name: "홍길동", googleId: "chulsoo.kim@g.school.com",password: "pass1234"},
  {
    studentId: "202301",
    name: "김철수",
    googleId: "chulsoo.kim@g.school.com",
    password: "pass1234"
  },
  {
    studentId: "202302",
    name: "이영희",
    googleId: "younghee.lee@g.school.com",
    password: "secure5678"
  },
  {
    studentId: "202303",
    name: "박민수",
    googleId: "minsoo.park@g.school.com",
    password: "pw2023!"
  }
];

// 폼 제출 시 검색 기능
document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault(); // 폼 기본 동작 방지

  const inputId = document.getElementById("studentId").value.trim();
  const inputName = document.getElementById("studentName").value.trim();

  const result = studentData.find(
    (student) => student.studentId === inputId && student.name === inputName
  );

  const googleIdField = document.getElementById("googleId");
  const googlePwField = document.getElementById("googlePw");

  if (result) {
    googleIdField.textContent = result.googleId;
    googlePwField.textContent = result.password;
  } else {
    googleIdField.textContent = "정보 없음";
    googlePwField.textContent = "정보 없음";
  }
});

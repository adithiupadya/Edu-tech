function goStudent(){
  window.location = "studentlogin.html";
}

function goTeacher(){
  window.location = "teachlogin.html";
}

function login(){
  const name = document.getElementById("name").value;
  localStorage.setItem("studentName", name);
  window.location = "studashboard.html";
}

if(document.getElementById("welcome")){
  const name = localStorage.getItem("studentName");
  document.getElementById("welcome").innerText =
    "Welcome " + name + " 😊";
}
const studentsData = [
    { name: "Alice Smith", streak: 12, score: 850, activity: "Very Active", time: "14h", badges: "Quiz Master" },
    { name: "John Doe", streak: 5, score: 420, activity: "Moderate", time: "6h", badges: "Fast Learner" },
    { name: "Sarah Connor", streak: 20, score: 1200, activity: "Exceptional", time: "22h", badges: "Top Performer" }
];

// Navigation Function
function navigateTo(pageId) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    
    if(pageId === 'teacherdashboard') {
        renderStudentList();
    }

function login(){
  window.location.href = "teacherdashboard.html";
}



const students = [
  {name:"Shiva", streak:12, score:850, time:"14h", badges:"Quiz Master", activity:"High"},
  {name:"Rahul", streak:5, score:420, time:"6h", badges:"Fast Learner", activity:"Medium"},
  {name:"Sneha", streak:20, score:1200, time:"22h", badges:"Top Performer", activity:"Very High"}
];

// IGNORE THIS COMMENT
// Load student list
// const list = document.getElementById("studentlist");

// students.forEach((s, index)=>{
//   const li = document.createElement("li");
//   li.innerText = s.name;
//   li.onclick = ()=>showStudent(index);
//   list.appendChild(li);
// });

// Show student details
// function showStudent(i){
//   const s = students[i];

//   document.getElementById("detailName").innerText = s.name;
//   document.getElementById("streak").innerText = s.streak;
//   document.getElementById("score").innerText = s.score;
//   document.getElementById("time").innerText = s.time;
//   document.getElementById("badges").innerText = s.badges;
//   document.getElementById("activity").innerText = s.activity;

//   document.getElementById("teacherdashboard").classList.remove("active");
//   document.getElementById("studentdetailview").classList.add("active");
// } ignore this comment please.

// Back button
function goBack(){
  document.getElementById("studentdetailview").classList.remove("active");
  document.getElementById("teacherdashboard").classList.add("active");
}


/* NAVIGATION */
function navigateTo(pageId){
  document.querySelectorAll(".view").forEach(v=>{
    v.style.display = "none";
  });

  document.getElementById(pageId).style.display = "block";

  if(pageId === "teacherdashboard"){
    renderStudentList();
  }
}

/* RENDER LIST */
function renderStudentList(){
  const list = document.getElementById("studentlist");
  if(!list) return;

  list.innerHTML = "";

  studentsData.forEach(student=>{
    const li = document.createElement("li");
    li.innerText = student.name;
    li.style.cursor = "pointer";

    li.onclick = ()=>{
      showDetails(student);
    };

    list.appendChild(li);
  });
}

/* SHOW DETAILS */
function showDetails(student){
  document.getElementById("detail-student-name").innerText =
    student.name + " Progress";

  document.getElementById("stat-streak").innerText = student.streak;
  document.getElementById("stat-score").innerText = student.score;
  document.getElementById("stat-activity").innerText = student.activity;
  document.getElementById("stat-time").innerText = student.time;
  document.getElementById("stat-badges").innerText = student.badges;

  navigateTo("studentdetailview");
}

/* INIT */
document.addEventListener("DOMContentLoaded", ()=>{
  renderStudentList();
})}

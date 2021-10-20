let ListTrue = $("#ListTrue");
let ListFalse = $("#ListFalse")
function getTeacherList() {
    $.ajax({
        url: "https://realibi.kz/teachers",
        method: "get",
        success: (response) => {
            response.map(item => {
                if (item.approved) {
                    ListTrue.append(
                        `
                        <div class="teachercard">
                            <p>${item.course_id}</p>
                            <div class="fullname">${item.fullname}</div>
                            <div class="description">${item.description}</div>
                            <div class="imgcard">
                                <img class="teacherImg" src="${item.img_url}" alt="img" width="100px">
                            </div>
                        </div>
                        `
                    )
                }
            })


            let teacherCards = document.querySelectorAll(".teachercard");

            for(let i = 0; i < teacherCards.length; i++){
                teacherCards[i].addEventListener('click', (event) => {
                    let courseId = event.currentTarget.children[0].innerText;
                    localStorage.setItem("currentCourseId", courseId);
                    location.href = "infoTeacher.html";
                })
            }

        },
        error: (response) => {
            console.log("Error!");
            console.log(response);
        }
    });
}


getTeacherList();
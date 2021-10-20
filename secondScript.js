let currentCourseId = localStorage.getItem("currentCourseId");
let div = document.querySelector("#center_info");

$.ajax({
    url: "https://realibi.kz/courses/" + currentCourseId,
    method: "get",
    success: (response) => {
        div.append(response[0].title);
    },
    error: (response) => {
        console.log("Error!");
        console.log(response);
    }
});
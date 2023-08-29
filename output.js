fetch('/notices')
    .then(response => response.json())
    .then(data => {
        var noticesContainer = document.getElementById("notices");
        data.notices.forEach(notice => {
            var noticeDiv = document.createElement("div");
            noticeDiv.textContent = notice;
            noticesContainer.appendChild(noticeDiv);
        });
    });

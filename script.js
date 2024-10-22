let searchInputEl = document.getElementById('searchInput');
let mainDivContainerEl = document.getElementById('searchResults');


function getRedirectLink(mainSource) {
    for (let source of mainSource) {
        let resultItemEl = document.createElement("div");
        resultItemEl.classList.add("result-item");
        console.log(source);

        let titleEl = document.createElement('a');
        titleEl.href = source.link;
        titleEl.target = "_blank";
        titleEl.classList.add('result-title');
        titleEl.textContent = source.title;
        resultItemEl.appendChild(titleEl);

        let titleBreakEl = document.createElement("br");
        resultItemEl.appendChild(titleBreakEl);

        let linkParaEl = document.createElement('a');
        linkParaEl.href = source.link;
        linkParaEl.target = "_blank";
        linkParaEl.classList.add('result-url');
        linkParaEl.textContent = source.link;
        resultItemEl.appendChild(linkParaEl);

        let linkBreakEl = document.createElement("br");
        resultItemEl.appendChild(linkBreakEl);

        let descriptionEl = document.createElement('p');
        descriptionEl.classList.add('link-description');
        descriptionEl.textContent = source.description;
        resultItemEl.appendChild(descriptionEl);

        mainDivContainerEl.appendChild(resultItemEl);

    }
}


function CheckInput(event) {
    if (event.key === "Enter") {
        let InputData = searchInputEl.value;

        let URL = "https://apis.ccbp.in/wiki-search?search=" + InputData;
        let option = {
            methods: 'GET'
        };
        fetch(URL, option)
            .then(function(response) {
                return response.json();
            })
            .then(function(status) {
                console.log(status);
                getRedirectLink(status.search_results);
            });
    }
}

searchInputEl.addEventListener('keydown', CheckInput)
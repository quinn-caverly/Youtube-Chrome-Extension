/* 
referenced this video: https://www.youtube.com/watch?v=xsZ297Bw9EY
*/

let lastUrl = location.href;
new MutationObserver(() => {
	const url = location.href;
	if (url !== lastUrl) {
		lastUrl = url;
		urlChanged();
	}
}).observe(document, { subtree: true, childList: true });

function urlChanged() {
	var pageManager = document.getElementById("page-manager");

	if (location.href == "https://www.youtube.com/") {
        pageManager = document.getElementById("page-manager");
        pageManager.style.display = "none";
	}

	//the url wil contain "watch" if it is a video, thus is will have a recommended page
	else if (location.href.toString().includes("watch")) {

		resetPageManagerStyle(pageManager);

		var contents = document.getElementsByClassName(
			"style-scope ytd-watch-next-secondary-results-renderer"
		);

		for (let i = 0; i < contents.length; i++) {
			contents[i].style.display = "none";
		}
	} else {
		pageManager.style.display = "flex";
	}
}

function resetPageManagerStyle(pageManager) {
	if (pageManager != null) {
		pageManager.style.display = "flex";
	}
}

urlChanged();

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

		//var pageManager = document.getElementById("page-manager");
        console.log("this was run");
        pageManager = document.getElementById("page-manager");
        pageManager.style.display = "none";

		//pageManager.parentElement.removeChild(pageManager);
	}
	//the url wil contain "watch" if it is a video, thus is will have a recommended page
	else if (location.href.toString().includes("watch")) {
		console.log("ran");
		resetPageManagerStyle(pageManager);
		console.log("ran2");

		var contents = document.getElementsByClassName(
			"style-scope ytd-watch-next-secondary-results-renderer"
		);

		console.log("ran3");

		for (let i = 0; i < contents.length; i++) {
			console.log("attempting to remove");
			contents[i].style.display = "none";
			console.log("removed successfully");
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

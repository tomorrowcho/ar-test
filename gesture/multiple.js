var loadOnce = true;

setTimeout(function () {
	$("#loader").fadeOut("slow");
}, 4000);

AFRAME.registerComponent("markerhandler", {
	init: function () {
		this.el.sceneEl.addEventListener("markerFound", () => {
			if (loadOnce) {
				document.getElementById("bowser-model").setAttribute("visible", "true");
				document.getElementById("bowser-model").setAttribute("gesture-handler", "enabled: true");

				document.getElementById("bowser-model2").setAttribute("visible", "true");
				document.getElementById("bowser-model2").setAttribute("gesture-handler", "enabled: true");
				loadOnce = false;
			}
		});
	},
});

AFRAME.registerComponent("clicklistenerblack", {
	init: function () {
		this.el.addEventListener("click", () => {
			removeEverything();
			document.getElementById("bowser-model2").setAttribute("visible", "true");
			document.getElementById("bowser-model2").setAttribute("gesture-handler", "enabled: true");
		});
	},
});

function removeEverything() {
	document.getElementById("bowser-model").setAttribute("visible", "false");
	document.getElementById("bowser-model").setAttribute("gesture-handler", "enabled: false");
}

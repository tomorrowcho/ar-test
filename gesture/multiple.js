AFRAME.registerComponent("markerhandler", {
	init: function () {
		this.el.sceneEl.addEventListener("markerFound", () => {
			document.getElementById("bowser-model").setAttribute("visible", "true");
			document.getElementById("bowser-model").setAttribute("gesture-handler", "enabled: true");

			document.getElementById("bowser-model2").setAttribute("visible", "true");
			document.getElementById("bowser-model2").setAttribute("gesture-handler", "enabled: true");
			loadOnce = false;
		});
	},
});

function removeEverything() {
	document.getElementById("bowser-model").setAttribute("visible", "false");
	document.getElementById("bowser-model").setAttribute("gesture-handler", "enabled: false");
	document.getElementById("bowser-model2").setAttribute("visible", "false");
	document.getElementById("bowser-model2").setAttribute("gesture-handler", "enabled: false");
}

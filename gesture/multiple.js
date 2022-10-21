var loadOnce = true;

setTimeout(function () {
	$("#loader").fadeOut("slow");
}, 4000);

AFRAME.registerComponent("markerhandler", {
	init: function () {
		this.el.sceneEl.addEventListener("markerFound", () => {
			if (loadOnce) {
				document.getElementById("bowser-model").setAttribute("animation-mixer", "clampWhenFinished: true; loop: once;");
				document.getElementById("bowser-model").setAttribute("visible", "true");
				document.getElementById("bowser-model").setAttribute("gesture-handler", "enabled: true");

				document.getElementById("bowser-model2").setAttribute("animation-mixer", "clampWhenFinished: true; loop: once;");
				document.getElementById("bowser-model2").setAttribute("visible", "true");
				document.getElementById("bowser-model2").setAttribute("gesture-handler", "enabled: true");
				loadOnce = false;
			}
		});
	},
});

AFRAME.registerComponent("clicklisteneranimated", {
	init: function () {
		this.el.addEventListener("click", () => {
			removeEverything();
			document.getElementById("redShoeEntity").setAttribute("visible", "true");
			document.getElementById("redShoeEntity").setAttribute("gesture-handler", "enabled: true");
		});
	},
});

AFRAME.registerComponent("clicklistenerred", {
	init: function () {
		this.el.addEventListener("click", () => {
			removeEverything();
			document.getElementById("blueShoeEntity").setAttribute("visible", "true");
			document.getElementById("blueShoeEntity").setAttribute("gesture-handler", "enabled: true");
		});
	},
});

AFRAME.registerComponent("clicklistenerblue", {
	init: function () {
		this.el.addEventListener("click", () => {
			removeEverything();
			document.getElementById("blackShoeEntity").setAttribute("visible", "true");
			document.getElementById("blackShoeEntity").setAttribute("gesture-handler", "enabled: true");
		});
	},
});

AFRAME.registerComponent("clicklistenerblack", {
	init: function () {
		this.el.addEventListener("click", () => {
			removeEverything();
			document.getElementById("animatedShoeEntity").setAttribute("visible", "true");
			document.getElementById("animatedShoeEntity").setAttribute("gesture-handler", "enabled: true");
		});
	},
});

function removeEverything() {
	document.getElementById("animatedBoxEntity").setAttribute("visible", "false");
	document.getElementById("animatedBoxEntity").setAttribute("gesture-handler", "enabled: false");
}

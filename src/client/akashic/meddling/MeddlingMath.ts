var MeddlingMath;

(function (): void {
	// ieではProxy未対応なので差し替えない
	var agent = window.navigator.userAgent;
	if ((agent.indexOf("msie 9.") !== -1) || (agent.indexOf("trident/7") !== -1)) {
		MeddlingMath = Math;
	} else {
		MeddlingMath = new Proxy(Math, {
			get: (target, prop, receiver) => {
				if (prop === "random") {
					console.warn("Math.random()が実行されました。Akashicコンテンツではこの機能に依存してゲームの実行状態が変わらないようにしてください。");
					window.dispatchEvent(new ErrorEvent("akashicWarning", {
						error: {
							message: "Math.random()が実行されました。Akashicコンテンツではこの機能に依存してゲームの実行状態が変わらないようにしてください。",
							referenceUrl: "https://akashic-games.github.io/guide/common-pitfalls.html"
								+ "#Math.random()%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%97%E3%81%BE%E3%81%86"
						}
					}));
				}
				return (target as any)[prop];
			}
		});
	}
})();

(window as any).MeddlingMath = MeddlingMath;

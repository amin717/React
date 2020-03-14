/**
 * @author m-saffari
 */

/**
 * 
 */
class FilmgardiPlayer {
	changeDomPosition(mainNode, targetNode) {
		if (document) {
			const mainNodeEl = document.getElementsByClassName(mainNode)[0];
			const targetNodeEl = document.getElementsByClassName(targetNode)[0];
			if (mainNodeEl && targetNodeEl) {
				const parentNodeEl = targetNodeEl.parentNode;
				parentNodeEl.insertBefore(mainNodeEl, targetNodeEl);
			}
		}
	}
	changeTimeDom() {
		if (document) {
			const parentNodeEl = document.getElementsByClassName("vjs-progress-control vjs-control")[0];
			const currentTimeNodeEl = document.getElementsByClassName("vjs-current-time vjs-control")[0];
			const durationNodeEl = document.getElementsByClassName("vjs-duration vjs-control")[0];
			if (parentNodeEl && currentTimeNodeEl && durationNodeEl) {
				parentNodeEl.insertBefore(currentTimeNodeEl, parentNodeEl.firstChild);
				parentNodeEl.insertBefore(durationNodeEl, null);
			}
		}
	}
}
export default FilmgardiPlayer;
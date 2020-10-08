import Overlay from "../components/Overlay.svelte";
import { storage } from "../storage";
import "./styles.css";

let overlayInstance: any;

// Function to manage Overlay lifecycle
function manageOverlay(isActive: boolean): void {
    if (isActive) {
        // If active and overlay doesn't exist, create it
        if (!overlayInstance) {
            overlayInstance = new Overlay({ target: document.body });
        }
    } else {
        // If not active and overlay exists, destroy it
        if (overlayInstance) {
            overlayInstance.$destroy();
            overlayInstance = null;
        }
    }
}

// Initialize: Check storage value and show/hide overlay accordingly
storage.get().then(data => {
    manageOverlay(data.isActive);
});

// Listen to storage changes to reactively manage Overlay
chrome.storage.onChanged.addListener(changes => {
    storage.get().then(data => {
        manageOverlay(data.isActive);
    });
});

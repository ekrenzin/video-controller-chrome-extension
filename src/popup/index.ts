import { storage } from "../storage";
import Popup from "./Popup.svelte";
import '../content/styles.css'
// Action popup
// https://developer.chrome.com/docs/extensions/reference/action/

function render() {
    const target = document.getElementById("app");
    console.log({target})
    if (target) {
        new Popup({ target });
    }
}

document.addEventListener("DOMContentLoaded", render);

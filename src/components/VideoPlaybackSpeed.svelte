<script lang="ts">
    export let video: HTMLVideoElement;
    let videoSpeed = 1;
    /**
     * Handles playback speed change for a video element.
     * @param {Event} event - The change event
     * @param {HTMLVideoElement} video - The target video element
     */
    function handleSpeedChange(event: Event, video: HTMLVideoElement) {
        const newSpeed = parseFloat((event.target as HTMLSelectElement).value);
        video.playbackRate = newSpeed;
    }
    
</script>

<label>
    Playback Speed
    <select on:change={(e) => handleSpeedChange(e, video)} bind:value={videoSpeed}>
        <option value={0.5}>0.5</option>
        <option value={0.75}>0.75</option>
        <option value={1}>1</option>
        <option value={1.25}>1.25</option>
        <option value={1.5}>1.5</option>
        <option value={2}>2</option>
        <option value={2.5}>2.5</option>
        <option value={3}>3</option>
    </select>
</label>

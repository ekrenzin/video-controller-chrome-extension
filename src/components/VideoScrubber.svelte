<script lang="ts">
    import { onMount } from "svelte";
    export let video: HTMLVideoElement;
    let hoursInput: HTMLInputElement;
    let minutesInput: HTMLInputElement;
    let secondsInput: HTMLInputElement;
    let rangeInput: HTMLInputElement;

    /**
     * Generates a key based on video's src to store its timestamp.
     */
    function generateKey(): string {
        const url = new URL(video.src);
        const cleanUrl = `${url.protocol}//${url.host}${url.pathname}`;
        return `video_${encodeURIComponent(cleanUrl)}_timestamp`;
    }

    /**
     * Synchronizes time inputs and range input with the video's current time.
     */
    function syncTimeInputs() {
        const totalSeconds = video.currentTime;
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);

        hoursInput.value = String(hours);
        minutesInput.value = String(minutes);
        secondsInput.value = String(seconds);
        rangeInput.value = String(totalSeconds);

        // Save current timestamp to localStorage
        localStorage.setItem(generateKey(), String(totalSeconds));
    }

    /**
     * Sets the video's current time based on scrubber input.
     * @param {Event} event - The input event from the scrubber.
     */
    function handleScrub(event: Event) {
        const newTime = parseFloat((event.target as HTMLInputElement).value);
        video.currentTime = newTime;
    }

    /**
     * Sets the video's current time based on time inputs.
     */
    function handleTimeInput() {
        const hours = parseInt(hoursInput.value) || 0;
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;

        video.currentTime = totalSeconds;
    }

    onMount(() => {
        // Initialize the range input's maximum value
        rangeInput.max = String(video.duration);
        const videoKey = generateKey();
        // Try to set the video to its last known timestamp
        const savedTime = localStorage.getItem(videoKey);
        console.log({videoKey, savedTime})
        if (savedTime !== null) {
            //add event listener to video to update the playback time when the playbutton is pressed
            video.addEventListener("play", () => {
                video.currentTime = parseFloat(savedTime);
            });            
        }

        video.addEventListener("timeupdate", syncTimeInputs);
    });
</script>

<div class="flex-column">
    <input
        type="range"
        min="0"
        max={video?.duration || 0}
        step="0.1"
        bind:this={rangeInput}
        on:input={handleScrub}
    />
    <label>
        Hours:
        <input
            type="number"
            min="0"
            bind:this={hoursInput}
            on:input={handleTimeInput}
        />
    </label>
    <label>
        Minutes:
        <input
            type="number"
            min="0"
            max="59"
            bind:this={minutesInput}
            on:input={handleTimeInput}
        />
    </label>
    <label>
        Seconds:
        <input
            type="number"
            min="0"
            max="59"
            bind:this={secondsInput}
            on:input={handleTimeInput}
        />
    </label>
</div>

<script lang="ts">
    export let video: HTMLVideoElement;
    let isPaused = true; // Initially set to true

    /**
     * Toggles play and pause state of the video.
     */
    function togglePlayPause(): void {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
        isPaused = video.paused;
    }

    /**
     * Advances the video by 15 seconds.
     */
    function fastForward(): void {
        video.currentTime += 15;
    }

    /**
     * Rewinds the video by 15 seconds.
     */
    function rewind(): void {
        video.currentTime -= 15;
    }

    // Reactive statement to update isPaused based on video state
    $: if (video) {
        isPaused = video.paused;
    }
</script>

<button class="icon-button" on:click={togglePlayPause}>
    {#if isPaused}
        <i class="fas fa-play" />
    {:else}
        <i class="fas fa-pause" />
    {/if}
</button>
<button class="icon-button" on:click={fastForward}>
    <i class="fas fa-forward" />
</button>
<button class="icon-button" on:click={rewind}
    ><i class="fas fa-backward" />
</button>

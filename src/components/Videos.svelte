<script lang="ts">
  import { onMount } from "svelte";
  import VideoScrubber from "./VideoScrubber.svelte";
  import VideoPlaybackSpeed from "./VideoPlaybackSpeed.svelte";
  import VideoControls from "./VideoControls.svelte";
  import VideoSize from "./VideoSize.svelte";
    import VideoEffects from "./VideoEffects.svelte";

  let videos: HTMLVideoElement[] = [];

  // Initialize on page load
  onMount(() => {
    manageVideos();
    const syncInterval = setInterval(manageVideos, 1000);
    return () => clearInterval(syncInterval);
  });

  /**
   * Finds all video elements on a page and allows playback speed adjustment.
   */
  function manageVideos() {
    console.log("manageVideos");
    // Step 1: Detect all video elements
    const videoElements = Array.from(document.querySelectorAll("video"));
    // Update the Svelte state
    videos = [...videoElements];
  }
</script>

{#if videos.length === 0}
  <p>No videos found.</p>
{:else}
  <div class="container">
    <h1>Videos</h1>
    <div class="flex-column">
      {#each videos as video}
        <div class="video-container">
          <VideoPlaybackSpeed {video} />
          <VideoScrubber {video} />
          <VideoEffects {video} />
          <div class="flex-row">
            <VideoControls {video} />
            <VideoSize {video} />
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}

<style>
  h1 {
    color: white !important;
    margin: 0;
  }
  .container {
    margin-top: 0.25rem;
    min-width: 250px;
    color: white !important;
    padding: 1rem;
  }

  .video-container {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 0.5rem;
    gap: 0.25rem;
  }

  .flex-row,
  .flex-column {
    gap: 0.5rem;
  }
</style>

<script lang="ts">
    export let video: HTMLVideoElement;

    /**
     * Enlarges a given HTMLVideoElement to cover the full viewport.
     *
     * @param {HTMLVideoElement} video - The video element to be enlarged.
     */
    function enlargeVideo(video: HTMLVideoElement) {
        const enlargeVideoClass = "enlarge-video"; // Class name
        video.classList.add(enlargeVideoClass); // Add the class to the video element
    }

    /**
     * Shrinks a given HTMLVideoElement to its original size.
     *
     * @param {HTMLVideoElement} video - The video element to be shrunk.
     */
    function shrinkVideo(video: HTMLVideoElement) {
        const enlargeVideoClass = "enlarge-video"; // Class name
        video.classList.remove(enlargeVideoClass); // Remove the class from the video element
    }
</script>


    <button class="icon-button" on:click={() => enlargeVideo(video)}><i class="fas fa-expand"></i></button>
    <button class="icon-button" on:click={() => shrinkVideo(video)}><i class="fas fa-compress"></i></button>
<script lang="ts">
    import Videos from "./Videos.svelte";
    let isOpen = true; // Initially, the component is open

    /**
     * Toggles the component between open and closed states.
     */
    function toggleComponent(): void {
        isOpen = !isOpen;
    }
</script>

<svelte:head>
    <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        rel="stylesheet"
    />
</svelte:head>

<div class={`overlay ${isOpen ? "open" : "closed"}`}>
    <button on:click={toggleComponent}>
        {#if isOpen}
            <i class="fas fa-window-minimize" />
        {:else}
            <i class="fas fa-plus" />
        {/if}
    </button>
    {#if isOpen}
        <Videos />
    {/if}
</div>

<style>

    /* When Closed */
    .overlay.closed {
        width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 50%;
        display: flex; /* Flexbox to center the button */
        justify-content: center;
        align-items: center;
    }

    /* Button styles */
    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    i {
        color: white;
    }
</style>

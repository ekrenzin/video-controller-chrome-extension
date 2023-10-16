<script>
    import { onMount } from "svelte";
    import { storage } from "../storage";
    let isActive = false;
  
    /** 
     * Initialize the state from storage and set cleanup.
     */
    onMount(() => {
      storage.set({ isActive });
    });
  
    /** 
     * Toggle the `isActive` state.
     */
    function toggleActivation() {
      isActive = !isActive;
      storage.set({ isActive });
    }
  </script>
  
  <div>
    <!-- Single button to toggle activation status -->
    <button on:click={toggleActivation}>
      {isActive ? 'Hide' : 'Show'}
    </button>
  </div>

  <style>
    div {
        background-color: black;
        color: white;
    }

    button {
        background-color: transparent;
        color: white;
        border: 1px solid;
        outline: none;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 0.25rem;
    }
  </style>
  
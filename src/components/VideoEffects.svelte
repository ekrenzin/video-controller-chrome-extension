<script lang="ts">
    export let video: HTMLVideoElement;
    let selectedFilter = 'none'; // Default value
    
    const filters = [
      { name: 'Normal', value: 'none' },
      { name: 'Grayscale', value: 'grayscale(100%)' },
      { name: 'Sepia', value: 'sepia(100%)' },
      { name: 'Invert', value: 'invert(100%)' }
    ];
  
    /**
     * Applies the selected filter to the video.
     * 
     * @param {Event} event - The change event from the filter dropdown.
     */
    function handleFilterChange(event: Event) {
      selectedFilter = (event.target as HTMLSelectElement).value;
      video.style.filter = selectedFilter;
    }
  </script>
  
  <label>
    Video Effects
    <select on:change={handleFilterChange}>
      {#each filters as filter}
        <option value={filter.value}>{filter.name}</option>
      {/each}
    </select>
  </label>
  
  <style>
    /* You can put any common styles for this component here */
  </style>
  
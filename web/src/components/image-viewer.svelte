<script context="module">
  import { urlFor } from "../../utilities/urlForImage-client";
</script>

<script>
  import { onMount } from "svelte";
  export let images;
  let imageIndex = 0;
  let isMobile = false;

  onMount(() => {
    isMobile = window.innerWidth < 600;
  });

  const nextImage = () => {
    imageIndex = imageIndex === images.length - 1 ? 0 : imageIndex + 1;
  };

  const previousImage = () => {
    imageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
  };
</script>

{#if isMobile}
  <button on:click={() => nextImage()}>
    <img
      src={urlFor(images[imageIndex]?.asset).width(600).url()}
      alt={images[imageIndex]?.alt}
    />
  </button>
{:else}
  <img
    src={urlFor(images[imageIndex]?.asset).width(1200).url()}
    alt={images[imageIndex]?.alt}
  />
  <div class="buttons">
    <button on:click={() => previousImage()}>
      <span class="material-symbols-outlined"> arrow_back </span>
    </button>
    <button on:click={() => nextImage()}>
      <span class="material-symbols-outlined"> arrow_forward </span>
    </button>
  </div>
{/if}

<style>
  button {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    color: inherit;
    font-size: inherit;
  }

  img {
    max-height: 40svh;
    height: 100;
    width: 100%;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
</style>

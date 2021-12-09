<script>
  let url = 'https://spotify.com';
  let fullscreen;
  let width = 1600;
  let height = 1200;
  let imgBase64;
  let fetching = false;

  async function onSubmit() {
    fetching = true;
    try {
      new URL(url);
    } catch (error) {
      alert('try entering a valid URL');
    }
    try {
      const res = await fetch(
        '.netlify/functions/' +
          `capture?url=${encodeURIComponent(
            url
          )}&fullscreen=${fullscreen}&width=${width}&height=${height}`
      );
      const body = await res.json();
      imgBase64 = body.img || null;
    } catch (error) {
      alert('something bad happened! try again...');
    }
    fetching = false;
  }
</script>

<form on:submit|preventDefault={onSubmit}>
  <label style="display:block">
    URL
    <input type="text" bind:value={url} />
  </label>

  <label style="display:block">
    Full Screen?
    <input type="checkbox" bind:checked={fullscreen} />
  </label>

  <label style="display:block">
    Viewport Width
    <input type="number" bind:value={width} />
  </label>
  <label style="display:block">
    Viewport Height
    <input type="number" bind:value={height} />
  </label>

  <button disabled={fetching}>Submit</button>
  {#if fetching}
    <span>taking a screenshot of your junk...</span>
  {/if}
</form>

{#if imgBase64}
  <img src="data:image/png;base64,{imgBase64}" alt={url} />
{/if}

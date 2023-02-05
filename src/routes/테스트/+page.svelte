<script>
import ToJson from '$lib/ToJson.svelte'

export let data
</script>

<ToJson target={data} />

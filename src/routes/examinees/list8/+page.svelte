<script>
import ToJson from '~/lib/ToJson.svelte'
/** @type {import('./$types').PageData} */
export let data
</script>

<div>
    {#each data.users as user}
        <div>{user.id} {user.name} {user.birthday}</div>
    {/each}
</div>

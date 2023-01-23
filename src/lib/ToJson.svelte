<script>
export let target
export let type = 1
</script>

{#if type === 1}
    <div class="text-0.6rem bg-gray-100 rounded p-2">
        <pre>{JSON.stringify(target, null, 2)}</pre>
    </div>
{:else if type === 2}
    <div class="text-0.6rem bg-gray-200 rounded p-2">
        {JSON.stringify(target, null, 2)}
    </div>
{/if}

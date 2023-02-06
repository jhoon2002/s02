<script>
import { fly, fade, blur } from 'svelte/transition'
export let refresh = ''
export let type = 'fly'
</script>

<!-- fade 를 이용할 경우 반드시 x: 0 값을 포함할 것-->
{#key refresh}
    {#if type === 'blur'}
        <div
            in:blur={{
                duration: 200,
                delay: 200,
            }}
            out:blur={{ duration: 200 }}
        >
            <slot />
        </div>
    {:else if type === 'fly'}
        <div
            in:fly={{
                x: -10,
                duration: 200,
                delay: 200,
            }}
            out:fade={{ duration: 50 }}
        >
            <slot />
        </div>
    {:else if type === 'fade'}
        <div
            in:fade={{
                x: 0,
                duration: 200,
                delay: 200,
            }}
            out:fade={{ duration: 50 }}
        >
            <slot />
        </div>
    {/if}
{/key}

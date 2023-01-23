<script>
import { fly, fade, blur } from 'svelte/transition'
export let refresh = ''
const pageTransitionDuration = 200
</script>

<!-- fade 를 이용할 경우 반드시 x: 0 값을 포함할 것-->
{#key refresh}
    <div
        in:blur={{
            duration: pageTransitionDuration,
            delay: pageTransitionDuration,
        }}
        out:blur={{ duration: pageTransitionDuration }}
    >
        <slot />
    </div>
{/key}

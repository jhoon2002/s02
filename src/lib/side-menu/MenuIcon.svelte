<script>
import Icon from '@iconify/svelte'
export let name
export let isOver = false
</script>

<div class="duration-300" class:scale-110%={!isOver} class:scale-140%={isOver}>
    <Icon icon={name} />
</div>
<!-- <div class="{name} duration-300 bg-gray-900" class:scale-110%={!isOver} class:scale-140%={isOver} /> -->

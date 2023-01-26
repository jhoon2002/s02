<script>
export let name
export let isOver = false
</script>

<div class="{name} duration-300 bg-gray-900" class:scale-110%={!isOver} class:scale-140%={isOver} />

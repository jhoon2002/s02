<script>
export let name
export let isOver = false
</script>

<!-- <div
    class="{name} text-1.2rem duration-300"
    class:text-1.4rem={isOver}
/> -->
<div
    class="{name} duration-300"
    class:scale-110%={!isOver}
    class:scale-140%={isOver}
/>

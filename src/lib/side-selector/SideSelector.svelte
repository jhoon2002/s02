<script>
// import { applyAction, deserialize } from '$app/forms'
import { createForm } from 'svelte-forms-lib'

// const { form, errors, handleSubmit } = createForm({
//     onSubmit: (values) => {
//         alert(JSON.stringify(values))
//     },
// })

import { applyAction, deserialize } from '$app/forms'
/*async function handleSubmit(event) {
    const data = new FormData(this)
    const response = await fetch(this.action, {
        method: 'POST',
        body: data,
    })
    const result = deserialize(await response.text())
    console.log(result.data.items)
    await applyAction(result.data.items)
}*/

import { goto } from '$app/navigation'
import { onMount } from 'svelte'
let disqualified, targets
let category = []
let season = []
let degrees = []
let majors = []
async function handleSubmit() {
    let params = []
    disqualified ? params.push('disqualified=true') : false
    targets ? params.push('targets=true') : false
    category.length > 0 ? params.push('category=' + category.join('&category=')) : ''
    season.length > 0 ? params.push('season=' + season.join('&season=')) : ''
    degrees.length > 0 ? params.push('degrees=' + degrees.join('&degrees=')) : ''
    majors.length > 0 ? params.push('majors=' + majors.join('&majors=')) : ''

    const parameters = (params.length > 0 ? '?' : '') + params.join('&')

    console.log('parameters', parameters)
    // goto('/전체/전체' + parameters)
}
onMount(() => {
    $: handleSubmit(disqualified, targets, category, season, degrees, majors)
})
</script>

<form on:submit|preventDefault={handleSubmit}>
    <div class="p-4 flex flex-col gap-y-4 text-1rem">
        <input type="submit" value="확인" />
        <div class="flex flex-col gap-y-1">
            <div class="flex gap-x-3">
                <label>
                    <input type="checkbox" bind:checked={disqualified} /> 지원 자격 탈락자
                </label>
                <label>
                    <input type="checkbox" bind:checked={targets} /> 대상자
                </label>
            </div>
        </div>
        <div>
            <label>
                <input
                    type="checkbox"
                    name="category"
                    value="예술사"
                    bind:group={category}
                    on:change={handleSubmit}
                /> 예술사
            </label>
            <label>
                <input type="checkbox" name="category" value="예술전문사" bind:group={category} />
                예술전문사
            </label>
        </div>
        <div class="flex flex-col gap-y-1">
            <label>
                <input type="checkbox" value="8월입시" bind:group={season} /> 8월입시
            </label>
            <label>
                <input type="checkbox" value="10월입시" bind:group={season} /> 10월입시
            </label>
            <label>
                <input type="checkbox" value="11월입시" bind:group={season} /> 11월입시
            </label>
        </div>
        <div class="flex flex-col gap-y-1">
            <label>
                <input type="checkbox" value="일반전형" bind:group={degrees} /> 일반전형
            </label>
            <label>
                <input type="checkbox" value="교육기회균등전형" bind:group={degrees} /> 교육기회균등전형
            </label>
            <label>
                <input type="checkbox" value="재외국민및외국인전형" bind:group={degrees} /> 재외국민및외국인전형
            </label>
            <label>
                <input type="checkbox" value="특수교육대상자전형" bind:group={degrees} /> 특수교육대상자전형
            </label>
        </div>
        <div class="flex flex-col gap-y-1">
            <label>
                <input type="checkbox" value="연기과(여자)" bind:group={majors} /> 연기과(여자)
            </label>
            <label>
                <input type="checkbox" value="연기과(남자)" bind:group={majors} /> 연기과(남자)
            </label>
            <label>
                <input type="checkbox" value="무대미술과" bind:group={majors} /> 무대미술과
            </label>
            <label>
                <input type="checkbox" value="연출과" bind:group={majors} /> 연출과
            </label>
            <label>
                <input type="checkbox" value="극작과(극작)" bind:group={majors} /> 극작과(극작)
            </label>
            <label>
                <input type="checkbox" value="극작과(서사창작)" bind:group={majors} /> 극작과(서사창작)
            </label>
            <label>
                <input type="checkbox" value="연극학과(연극학)" bind:group={majors} /> 연극학과(연극학)
            </label>
            <label>
                <input type="checkbox" value="연극학과(예술경영)" bind:group={majors} /> 연극학과(예술경영)
            </label>
        </div>
    </div>
</form>

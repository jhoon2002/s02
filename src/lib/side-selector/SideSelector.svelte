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
let type = []
let majors = []
async function handleSubmit() {
    let params = []
    disqualified ? params.push('disqualified=true') : false
    targets ? params.push('targets=true') : false
    category.length > 0 ? params.push('category=' + category.join('&category=')) : ''
    season.length > 0 ? params.push('season=' + season.join('&season=')) : ''
    type.length > 0 ? params.push('type=' + type.join('&type=')) : ''
    majors.length > 0 ? params.push('majors=' + majors.join('&majors=')) : ''

    const parameters = (params.length > 0 ? '?' : '') + params.join('&')

    // console.log('parameters', parameters)
    goto('/전체/전체' + parameters)
}
</script>

<form on:submit|preventDefault={handleSubmit}>
    <div class="p-4 flex flex-col gap-y-4 text-1rem">
        <input type="submit" value="확인" />
        <div class="flex flex-col gap-y-1">
            <div class="flex gap-x-3">
                <label>
                    <input type="checkbox" bind:checked={disqualified} on:change={handleSubmit} /> 지원
                    자격 탈락자
                </label>
                <label>
                    <input type="checkbox" bind:checked={targets} on:change={handleSubmit} /> 대상자
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
                <input
                    type="checkbox"
                    name="category"
                    value="예술전문사"
                    bind:group={category}
                    on:change={handleSubmit}
                />
                예술전문사
            </label>
        </div>
        <div class="flex flex-col gap-y-1">
            <label>
                <input
                    type="checkbox"
                    value="8월입시"
                    bind:group={season}
                    on:change={handleSubmit}
                /> 8월입시
            </label>
            <label>
                <input
                    type="checkbox"
                    value="10월입시"
                    bind:group={season}
                    on:change={handleSubmit}
                /> 10월입시
            </label>
            <label>
                <input
                    type="checkbox"
                    value="11월입시"
                    bind:group={season}
                    on:change={handleSubmit}
                /> 11월입시
            </label>
        </div>
        <div class="flex flex-col gap-y-1">
            <label>
                <input type="checkbox" value="일반" bind:group={type} on:change={handleSubmit} /> 일반
            </label>
            <label>
                <input
                    type="checkbox"
                    value="교육기회균등"
                    bind:group={type}
                    on:change={handleSubmit}
                /> 교육기회균등
            </label>
            <label>
                <input type="checkbox" value="외국인" bind:group={type} on:change={handleSubmit} /> 재외국민및외국인
            </label>
            <label>
                <input
                    type="checkbox"
                    value="특수교육대상"
                    bind:group={type}
                    on:change={handleSubmit}
                /> 특수교육대상자
            </label>
        </div>
        <div class="flex flex-col gap-y-1">
            <label>
                <input
                    type="checkbox"
                    value="연기과(여자)"
                    bind:group={majors}
                    on:change={handleSubmit}
                /> 연기과(여자)
            </label>
            <label>
                <input
                    type="checkbox"
                    value="연기과(남자)"
                    bind:group={majors}
                    on:change={handleSubmit}
                /> 연기과(남자)
            </label>
            <label>
                <input
                    type="checkbox"
                    value="무대미술과"
                    bind:group={majors}
                    on:change={handleSubmit}
                /> 무대미술과
            </label>
            <label>
                <input
                    type="checkbox"
                    value="연출과"
                    bind:group={majors}
                    on:change={handleSubmit}
                /> 연출과
            </label>
            <label>
                <input
                    type="checkbox"
                    value="극작과(극작)"
                    bind:group={majors}
                    on:change={handleSubmit}
                /> 극작과(극작)
            </label>
            <label>
                <input
                    type="checkbox"
                    value="극작과(서사창작)"
                    bind:group={majors}
                    on:change={handleSubmit}
                /> 극작과(서사창작)
            </label>
            <label>
                <input
                    type="checkbox"
                    value="연극학과(연극학)"
                    bind:group={majors}
                    on:change={handleSubmit}
                /> 연극학과(연극학)
            </label>
            <label>
                <input
                    type="checkbox"
                    value="연극학과(예술경영)"
                    bind:group={majors}
                    on:change={handleSubmit}
                /> 연극학과(예술경영)
            </label>
        </div>
    </div>
</form>

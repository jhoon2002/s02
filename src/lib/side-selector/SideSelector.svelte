<script>
// import { applyAction, deserialize } from '$app/forms'
import { createForm } from 'svelte-forms-lib'

// const { form, errors, handleSubmit } = createForm({
//     onSubmit: (values) => {
//         alert(JSON.stringify(values))
//     },
// })

import { applyAction, deserialize } from '$app/forms'
async function handleSubmit(event) {
    const data = new FormData(this)
    const response = await fetch(this.action, {
        method: 'POST',
        body: data,
    })
    const result = deserialize(await response.text())
    console.log(result.data.items)
    await applyAction(result.data.items)
}
</script>

<form method="POST" action="/전체/전체?/hello" on:submit|preventDefault={handleSubmit}>
    <div class="p-4 flex flex-col gap-y-4 text-1rem">
        <input type="submit" value="확인" />
        <div class="flex flex-col gap-y-1">
            <div class="flex gap-x-3">
                <label>
                    <input type="checkbox" name="aaa" value="zzzz" /> 지원자
                </label>
                <label>
                    <input type="checkbox" /> 지원 자격 탈락자
                </label>
            </div>
            <label>
                <input type="checkbox" /> 대상자
            </label>
        </div>
        <div>
            <label>
                <input type="checkbox" name="category" value="예술사~~" on:change={handleSubmit} /> 예술사
            </label>
            <label>
                <input type="checkbox" /> 예술전문사
            </label>
        </div>
        <div class="flex flex-col gap-y-1">
            <label>
                <input type="checkbox" /> 8월입시
            </label>
            <label>
                <input type="checkbox" /> 10월입시
            </label>
            <label>
                <input type="checkbox" /> 11월입시
            </label>
        </div>
        <div class="flex flex-col gap-y-1">
            <label>
                <input type="checkbox" /> 일반전형
            </label>
            <label>
                <input type="checkbox" /> 교육기회균등전형
            </label>
            <label>
                <input type="checkbox" /> 재외국민및외국인전형
            </label>
            <label>
                <input type="checkbox" /> 특수교육대상자전형
            </label>
        </div>
        <div class="flex flex-col gap-y-1">
            <label>
                <input type="checkbox" /> 연기과
            </label>
            <label>
                <input type="checkbox" /> 무대미술과
            </label>
            <label>
                <input type="checkbox" /> 연출과
            </label>
            <label>
                <input type="checkbox" /> 극작과(극작)
            </label>
            <label>
                <input type="checkbox" /> 극작과(서사창작)
            </label>
            <label>
                <input type="checkbox" /> 연극학과(연극학)
            </label>
            <label>
                <input type="checkbox" /> 연극학과(예술경영)
            </label>
        </div>
    </div>
</form>

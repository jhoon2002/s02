<script>
import { Button, Input, Form } from 'sveltestrap'
import ToJson from '../../../lib/ToJson.svelte'
export let form
export let inputFile
export let degrees, season

const findDegrees = (inputFile) => {
    const 예술사 = /예술사/.test(inputFile)
    const 전문사 = /전문사/.test(inputFile)
    const 이년 = /2년/.test(inputFile)
    const 삼년 = /3년/.test(inputFile)

    if (예술사 && !(전문사 || 이년 || 삼년)) {
        return '예술사과정'
    }

    if (!예술사 && 전문사 && (이년 || 삼년) && !(이년 && 삼년)) {
        return '예술전문사' + (이년 ? '2년' : '') + (삼년 ? '3년' : '') + '과정'
    }

    return false
}

const findSeason = (inputFile) => {
    const 팔월 = /8월/.test(inputFile)
    const 시월 = /10월/.test(inputFile)
    const 십일월 = /11월/.test(inputFile)

    if (팔월 && !(시월 || 십일월)) {
        return '8월입시'
    }

    if (시월 && !(팔월 || 십일월)) {
        return '10월입시'
    }

    if (십일월 && !(팔월 || 시월)) {
        return '11월입시'
    }

    return false
}

$: degrees = findDegrees(inputFile)
$: season = findSeason(inputFile)

export let some
</script>

<div class="text-1.8rem mb-4">대상자 입력</div>
<Form method="POST" enctype="multipart/form-data" class="flex flex-col items-start gap-3">
    <Input type="file" name="file" bind:value={inputFile} />
    <div class="flex flex-row">
        <div class="w-150px flex-none">
            <Input name="season" type="radio" bind:group={season} value="8월입시" label="8월입시" />
            <Input
                name="season"
                type="radio"
                bind:group={season}
                value="10월입시"
                label="10월입시"
            />
            <Input
                name="season"
                type="radio"
                bind:group={season}
                value="11월입시"
                label="11월입시"
            />
        </div>
        <div class="flex-auto">
            <Input
                name="degrees"
                type="radio"
                bind:group={degrees}
                value="예술사과정"
                label="예술사과정"
            />
            <Input
                name="degrees"
                type="radio"
                bind:group={degrees}
                value="예술전문사2년과정"
                label="예술전문사2년과정"
            />
            <Input
                name="degrees"
                type="radio"
                bind:group={degrees}
                value="예술전문사3년과정"
                label="예술전문사3년과정"
            />
        </div>
    </div>
    <Button>확인</Button>
</Form>
{#if form?.errors?.length > 0}
    <ul class="p-0 mt-5">
        {#each form.errors as error}
            <li>{error.message}</li>
        {/each}
    </ul>
{/if}

{#if form?.count}
    <div class="mt-3 text-rose-600">총 {form.count}건을 데이터베이스에 입력하였습니다.</div>
{:else if form?.count === 0}
    <div class="mt-3 text-rose-600">예외가 발생하여 서버에 입력하지 못했습니다.</div>
{/if}

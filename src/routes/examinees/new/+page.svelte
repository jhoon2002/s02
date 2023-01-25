<script>
import { Button, Input, Form } from 'sveltestrap'
import ToJson from '~/lib/ToJson.svelte'

export let form
export let inputFile

export let degrees

export const findDegrees = (inputFile) => {
    const 예술사 = /예술사/.test(inputFile)
    const 전문사 = /전문사|예술전문사/.test(inputFile)
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

$: degrees = findDegrees(inputFile)

</script>

<Form method="POST" enctype="multipart/form-data" class="flex flex-col items-start gap-3">
    <Input type="file" name="file" bind:value={inputFile} />

    <Input type="radio" bind:group={degrees} value="예술사과정" label="예술사과정" />
    <Input type="radio" bind:group={degrees} value="예술전문사2년과정" label="예술전문사2년과정" />
    <Input type="radio" bind:group={degrees} value="예술전문사3년과정" label="예술전문사3년과정" />

    <Button>확인</Button>
</Form>
<br />
{#if form?.count}
    <div class="mt-3 text-rose-600">총 {form.count}건을 데이터베이스에 입력하였습니다.</div>
{:else if form?.count === 0}
    <div class="mt-3 text-rose-600">예외가 발생하여 서버에 입력하지 못했습니다.</div>
{/if}

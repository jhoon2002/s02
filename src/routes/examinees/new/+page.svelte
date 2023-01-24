<script>
import { Button, Input, Form } from 'sveltestrap'
import ToJson from '../../../lib/ToJson.svelte'

/** @type {import('./$types').ActionData} */
export let form
</script>

<Form method="POST" enctype="multipart/form-data" class="flex flex-col items-start gap-3">
    <Input type="file" name="file" />
    <Button>확인</Button>
</Form>
{#if form?.count}
    <div class="mt-3 text-rose-600">총 {form.count}건을 데이터베이스에 입력하였습니다.</div>
{:else if form?.count === 0}
    <div class="mt-3 text-rose-600">예외가 발생하여 서버에 입력하지 못했습니다.</div>
{/if}

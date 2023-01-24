import PrismaClient from '$lib/prisma'
const prisma = new PrismaClient()
import * as XLSX from 'xlsx/xlsx.mjs'
import * as fs from 'fs'
import path from 'path'
import fields from '$lib/fields'
import { toDate } from '$lib/utils/date'

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData()
        const file = data.get('file')
        let filename

        try {
            if (file) {
                let fileArr = file.name.split('.')
                const ext = fileArr.pop()
                const body = fileArr.join('.')
                filename = body + '(' + Date.now().toString() + ').' + ext

                let ab = await file.arrayBuffer()
                // console.log(Array.from(ab))

                fs.writeFileSync(
                    path.resolve() + '\\files\\' + filename,
                    Buffer.from(ab, (e) => {
                        // console.log(e)
                    }),
                )
            }

            const buf = fs.readFileSync(path.resolve() + '\\files\\' + filename)
            const workbook = XLSX.read(buf)
            const sheet = workbook.Sheets['Sheet1']
            const jsa = XLSX.utils.sheet_to_json(sheet)
            let rows = []
            for (let ex of jsa) {
                rows.push({
                    [fields['수험번호']]: ex['수험번호'],
                    [fields['군']]: ex['군'],
                    [fields['캠퍼스']]: ex['캠퍼스'],
                    [fields['전형']]: ex['전형'],
                    [fields['모집단위']]: ex['모집단위'],
                    [fields['모집단위코드']]: ex['모집단위코드'],
                    [fields['주야']]: ex['주야'],
                    [fields['이름']]: ex['이름'],
                    [fields['주민등록번호']]: ex['주민등록번호'],
                    [fields['전화']]: ex['전화'],
                    [fields['핸드폰']]: ex['핸드폰'],
                    [fields['이메일']]: ex['이메일'],
                    [fields['고교명']]: ex['고교명'],
                    [fields['고교코드']]: ex['고교코드'],
                    [fields['고교졸업일']]: ex['고교졸업일'],
                    [fields['졸업상태']]: ex['졸업상태'],
                    [fields['UseHsb']]: ex['UseHsb'],
                    [fields['접수시간']]: new Date(toDate(ex['접수시간'])),
                })
            }

            const result = await prisma.examinees.createMany({
                data: rows,
                skipDuplicates: false,
            })
            return result
        } catch (e) {
            return {
                count: 0,
            }
        }
    },
}

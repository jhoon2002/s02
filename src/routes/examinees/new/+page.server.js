import PrismaClient from '$lib/prisma'
const prisma = new PrismaClient()
import * as XLSX from 'xlsx/xlsx.mjs'
import * as fs from 'fs'
import path from 'path'
import fields from '$lib/fields'
import { replaceToBlank as rtb } from '$lib/utils/string'
import { pipe, page } from 'iter-ops'


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
            const sheet = workbook.Sheets[workbook.SheetNames[0]]
            const jsa = XLSX.utils.sheet_to_json(sheet)
            let rows = []
            for (let ex of jsa) {
                rows.push({
                    [fields['순번']]: rtb(ex['순번']),
                    [fields['전형구분']]: rtb(ex['전형구분']),
                    [fields['원']]: rtb(ex['원']),
                    [fields['학과']]: rtb(ex['학과']),
                    [fields['세부모집']]: rtb(ex['세부모집']),
                    [fields['수험번호']]: rtb(ex['수험번호']),
                    [fields['이름']]: rtb(ex['이름']),
                    [fields['학력구분']]: rtb(ex['학력구분']),
                    [fields['특별타입']]: rtb(ex['특별타입']),
                    [fields['생년월일']]: rtb(ex['생년월일']),
                    [fields['성별']]: rtb(ex['성별']),
                    [fields['졸업년도']]: rtb(ex['졸업년도']),
                    [fields['학교코드']]: rtb(ex['학교코드']),
                    [fields['학교명']]: rtb(ex['학교명']),
                    [fields['학과명']]: rtb(ex['학과명']),
                    [fields['전화번호']]: rtb(ex['전화번호']),
                    [fields['핸드폰']]: rtb(ex['핸드폰']),
                    [fields['이메일']]: rtb(ex['이메일']),
                    [fields['우편번호']]: rtb(ex['우편번호']),
                    [fields['주소1']]: rtb(ex['주소1']),
                    [fields['세부주소']]: rtb(ex['세부주소']),
                    [fields['국적']]: rtb(ex['국적']),
                    [fields['보호자전화번호']]: rtb(ex['보호자전화번호']),
                    [fields['보호자핸드폰']]: rtb(ex['보호자핸드폰']),
                    [fields['보호자이메일']]: rtb(ex['보호자이메일']),
                    [fields['보호자명']]: rtb(ex['보호자명']),
                    [fields['병역사항']]: rtb(ex['병역사항']),
                    [fields['동의영부']]: rtb(ex['동의영부']),
                    [fields['졸업예정일']]: rtb(ex['졸업예정일']),
                    [fields['졸업구분']]: rtb(ex['졸업구분']),
                    [fields['보호자관계']]: rtb(ex['보호자관계']),
                    [fields['접수일자']]: rtb(ex['접수일자']),
                    [fields['한자']]: rtb(ex['한자']),
                    [fields['특이사항']]: rtb(ex['특이사항']),
                    [fields['비고']]: rtb(ex['비고']),
                    [fields['제외여부']]: rtb(ex['제외여부']),
                    [fields['입학원서출력']]: rtb(ex['입학원서출력']),
                })
            }
            // console.log('rows[2020]', rows[2020])
            /**
             * chunk (for 8월입시 연기과)
             */
            const i = pipe(rows, page(3000))

            let count = 0

            // console.log('i.length', i)
            for (const chunks of i) {
                const result = await prisma.examinees.createMany({
                    data: chunks,
                    skipDuplicates: false,
                })
                count += result.count
            }

            /*const result = await prisma.examinees.createMany({
                data: rows,
                skipDuplicates: false,
            })*/
            return {
                count: count
            }
        } catch (e) {
            console.log(e)
            return {
                count: 0,
            }
        }
    },
}

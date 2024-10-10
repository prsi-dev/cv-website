import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
    const filePath = path.join(process.cwd(), 'src', 'public', 'pedro-rodriguez-cv-2024.pdf')
    const fileBuffer = fs.readFileSync(filePath)

    return new NextResponse(fileBuffer, {
        headers: {
            'Content-Disposition': 'attachment; filename="pedro-rodriguez-cv-2024.pdf"',
            'Content-Type': 'application/pdf',
        },
    })
}
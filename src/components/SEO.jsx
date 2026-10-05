import { useEffect } from 'react'
import { company } from '../data/company.js'

export default function SEO({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | ${company.name}` : `${company.name} — Pipe Processing & Testing Machinery`
    const d = description || 'Pipe threading, roll grooving, cutting, bending, butt jointing machines, pressure test pumps and spare parts.'
    let m = document.querySelector('meta[name="description"]')
    if (!m) { m = document.createElement('meta'); m.name = 'description'; document.head.appendChild(m) }
    m.content = d
  }, [title, description])
  return null
}

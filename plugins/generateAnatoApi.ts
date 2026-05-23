import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import type { Plugin } from 'vite'

function writeJson(path: string, data: unknown) {
  mkdirSync(join(path, '..'), { recursive: true })
  writeFileSync(path, `${JSON.stringify(data, null, 2)}\n`, 'utf8')
}

export function generateAnatoApiPlugin(): Plugin {
  return {
    name: 'generate-anato-api',
    async buildStart() {
      const api = await import('../src/api/anatoApi.ts')
      const outDir = join(process.cwd(), 'public', 'api', 'v1')

      const meta = api.getMeta()
      const systems = api.listSystems()
      const allStructures = api.listAllStructures()

      writeJson(join(outDir, 'index.json'), meta)
      writeJson(join(outDir, 'systems.json'), systems)
      writeJson(join(outDir, 'structures.json'), allStructures)

      for (const summary of systems.results) {
        const system = api.getSystem(summary.slug)
        if (!system) continue
        const systemDir = join(outDir, 'systems', summary.slug)
        mkdirSync(systemDir, { recursive: true })
        writeJson(join(systemDir, 'index.json'), system)
        const structures = api.listStructures(summary.slug)
        if (structures) writeJson(join(systemDir, 'structures.json'), structures)

        const systemFull = api.getSystem(summary.slug)
        if (systemFull) {
          const structDir = join(systemDir, 'structures')
          mkdirSync(structDir, { recursive: true })
          for (const s of systemFull.structures) {
            const detail = api.getStructure(summary.slug, s.id)
            if (detail) writeJson(join(structDir, `${s.id}.json`), detail)
          }
        }
      }
    },
  }
}

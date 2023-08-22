# Сборка

Перед сборкой должен быть установлен глобально TypeScript

### Windows сборка

Удалить dist каталог

```bash
tsc -p tsconfig.cjs.json
```

```bash
tsc -p tsconfig.esm.json
```

```bash
tsc -p tsconfig.types.json
```

```bash
cp package.json dist/package.json
```

### Linux/MacOS

```bash
npm run build
```

### Публикация

Для публикации пакеты необходимо перейти в папку dist

```bash
cd dist
```

```bash
npm publish
```

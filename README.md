# 🚀 Mi Aplicación React + TypeScript

Este repositorio contiene una aplicación desarrollada con **React** + **TypeScript** y diseñada con **Tailwind CSS**. Aquí encontrarás instrucciones para ejecutar la aplicación en local, instalar dependencias (incluyendo `react-router-dom`) y cómo desplegarla públicamente en **Vercel**.

---

## 🧰 Tecnologías

* React
* TypeScript
* Tailwind CSS
* react-router-dom 

---

## 🔎 Requisitos previos

* Node.js (recomendado >= 16.x)
* npm (recomendado >= 8.x) o yarn/pnpm
* Cuenta en GitHub
* Cuenta en Vercel (para despliegue)

---

## 📦 Instalación (local)

1. Clona el repositorio:

```bash
git clone https://github.com/mahecha08/Sistema-de-Reconocimiento-de-D-gitos
cd Sistema-de-Reconocimiento-de-D-gitos
```


2. Instala dependencias:

```bash
npm install
```

3. Instala `react-router-dom`

```bash
npm install react-router-dom
npm install --save-dev @types/react-router-dom
```

-

---

## 🛠️ Ejecutar en desarrollo

Ejecutar:

```bash
npm run dev
```

Abre en el navegador (por defecto):

```
http://localhost:5173
```
---

## 📦 Generar build de producción

```bash
npm run build
```

* En **Vite** la carpeta de salida por defecto es `dist`.
* En **CRA** la carpeta de salida por defecto es `build`.

Puedes previsualizar el build (Vite):

```bash
npm run preview
```
---

## 🚀 Despliegue en Vercel (paso a paso)

A continuación tienes los pasos necesarios para que tu aplicación esté disponible en una URL pública mediante **Vercel**.

### 1) Subir tu código a GitHub

**Opción A — CLI (terminal):**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/mahecha08/Sistema-de-Reconocimiento-de-D-gitos.git
git push -u origin main
```

### ) Crear cuenta en Vercel y conectar GitHub

1. Ve a [https://vercel.com]
ahi crea la cuenta. 

### ) Importar el proyecto en Vercel

1. Haz clic en **"New Project"** → **"Import Git Repository"**.
2. Selecciona el repositorio que acabas de subir.


### ) Despliegue y URL pública

* Pulsa **Deploy** y Vercel empieza a instalar dependencias 
* al momento de terminar dara un link
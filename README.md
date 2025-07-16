#  MendoAPI

**MendoAPI** es una API pública que brinda información sobre los 18 departamentos de la provincia de Mendoza, Argentina.

## 🌐 URL base

> https://mendoapi.up.railway.app

## 📡 Endpoints disponibles

### 🔹 Obtener todos los departamentos
[https://mendoapi.up.railway.app/api/departamentos](https://mendoapi.up.railway.app/api/departamentos)

### 🔹 Obtener un departamento por ID
[https://mendoapi.up.railway.app/api/departamentos/5](https://mendoapi.up.railway.app/api/departamentos/5)

## Datos  de departamentos
Actualmente devuelve los siguientes datos de cada departamento:
- ID (Número identificador dentro de MendoAPI)
- Nombre
- Región
- Superficie
- Población aproximada (Según ultimo censo)
- Capital departamental
- Coordenadas geográficas


## 🔁 Ejemplo de respuesta

```json
{
  "id": 5,
  "nombre": "Luján de Cuyo",
  "region": "Centro",
  "superficie_km2": 4277,
  "poblacion": 121000,
  "capital": "Luján de Cuyo",
  "coordenadas": {
    "lat": -33.0417,
    "lng": -68.9333
  }
}

## Próximamente
- Intendente actual
- Atracciones turísticas
- Producto



## Licencia

Este proyecto está bajo la Licencia [Creative Commons Atribución-NoComercial 4.0 Internacional](https://creativecommons.org/licenses/by-nc/4.0/).

Esto significa que podés usarlo, compartirlo y adaptarlo con fines no comerciales, siempre mencionando al autor original: [liobarrozo](https://github.com/liobarrozo).

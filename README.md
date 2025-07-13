#  MendoAPI

**MendoAPI** es una API pública que brinda información sobre los 18 departamentos de la provincia de Mendoza, Argentina.

## 📡 Endpoints disponibles

- `GET /api/departamentos` → Lista completa
- `GET /api/departamentos/:id` → Información completa de un departamento por ID

## Datos  de departamentos
Actualmente devuelve los siguientes datos de cada departamento:
- ID (Número identificador dentro de MendoAPI)
- Nombre
- Región
- Superficie
- Población aproximada (Según ultimo censo)
- Capital
- Coordenadas


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
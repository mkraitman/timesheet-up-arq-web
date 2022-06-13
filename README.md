# Timesheet - Arquitectura WEB 1 Cuatrimestre 2022 - UP

## Objetivo del proyecto:
Armar una API que exponga un servicio de carga de horas para una consultora con diferentes proyectos.

## Entidades:
Van a existir diferentes entidades para poder cumplir el requerimiento.
- Empleado / Employee:  
Carga las horas de trabajo realizadas, las elimina o acualiza.
- Manager:  
El encargado de revisr las horas, obtener un "reporte" o cierta informacion y validar la correcta carga del empleado.
- Item:  
El conjunto con la cantidad de horas cargadas para ese dia, el proyecto al cual pertenece y el empleado que carga las horas.
- Consulta de horas cargadas por periodo de tiempo y/o proyecto y/o empleado:  
Tiene toda la informacion cargada del tablero, todos los items de un mes cargado mas la informacion general de un periodo determinado de dias.

## Requerimientos:
Estos seran las caracteristicas en general que debe tener la interface para poder intergrarse correctamente con un front-end.
- Carga de horas por mes.
- Validacion de carga de horas.
- Edicion o eliminacion de horas cargadas.
- Historico de horas cargadas.


## Endpoints:
Estaran en una documentacion con Swagger a medida que se desarrolle que se vaya desarrollando la API.

*Tanto los requerimientos como las entidades son para comenzar la aplicacion, muy posiblemente se agregen mas.*

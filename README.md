# Arquitectura WEB 1 Cuatrimestre 2022 - Universidad de Palermo

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
- Carga mensual / Montly Load:  
Tiene toda la informacion cargada del tablero, todos los items de un mes cargado mas la informacion general de cada mes.
- Holidays:  
Todos los feriados existenetes. Mediante los datos enviados se calcularan los feriados.
- ...

## Requerimientos:
Estos seran las caracteristicas en general que debe tener la interface para poder intergrarse correctamente con un front-end.
- Carga de horas por mes.
- Validacion de carga de horas.
- Consulta de feriados.
- Edicion o eliminacion de horas cargadas.
- Historico de horas cargadas.
- Cierre de horas mensual.
- ...

*Tanto los requerimientos como las entidades son para comenzar la aplicacion, muy posiblemente se agregen mas.*

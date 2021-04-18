---
title: SAP Digital Access
layout: post
date: 2021-04-18 15:00
modified_date: 2021-04-18 15:00
author: TMorales
tag: SAP
---
#### Que es el SAP Digital Access?  

Es un nuevo esquema de licenciamiento de SAP, que tomó auge a raíz del aumento en la interconectividad con sistemas **CORE** de SAP en las empresas tales como **ECC** y **S/4HANA**, lo cual a su vez trajo que ésta conectividad promueva voluntaria o involuntariamente el uso de **accesos indirectos**, y según especificado por SAP, en este esquema de licenciamiento ayudará a las empresas a normalizar su licenciamiento sobre todo si consideran que están en riesgo de cobro adicional por el uso de **accesos indirectos** dentro de su ecosistema SAP.  

> 💡 **Accesos indirectos** se refiere a los movimientos generados por procesos automáticos tales como RPA (Robotic Process Automation), IoT, interfases, aplicaciones de terceros (así como las hechas en casa), soluciones Cloud que no sean de SAP entre otros.  

#### Consideraciones de este esquema.  

SAP establece que son 9 los tipos de documento involucrados que son sujetos a medición, de los cuales tenemos que:  
- Son 3 tipos que su métrica de cobro es a nivel detalle de documento (item level).  
- 7 tipos se calculan con un multiplicador de 1.0x.  
- 2 tipos relacionados con Finanzas y que se calculan a una quinta parte 0.2x, pero a nivel detalle de documento (item level).  

Esta métrica de licenciamiento solo aplica para la creación de documentos, por lo tanto, las acciones de: lectura, actualización o borrado de documentos no se toman en cuenta.  

Para esquematizar lo mencionado anteriormente, podemos resumirlo de la siguiente manera:  

| Tipos de documentos | Multiplicador |  
| ------------------- | ------------- |  
| Documentos de ventas *️⃣ | 1.0x |  
| Documentos de facturas *️⃣ | 1.0x |  
| Documentos de compras *️⃣ | 1.0x |  
| Documentos de servicio y mantenimiento | 1.0x |  
| Documentos de manufactura | 1.0x |  
| Documentos de gestión de calidad | 1.0x |  
| Documentos de gestión de tiempo | 1.0x |  
| Documentos de finanzas *️⃣ | 0.2x |  
| Documentos de materiales *️⃣ | 0.2x |  

> 💡 *️⃣ Son los tipos de documento que se miden a nivel detalle.  

Para aplicar la métrica por tipo de documento, se tiene la siguiente fórmula:

```
   (Tipo de Documento (#) * Multiplicador) + … + (Tipo de Documento (#) * Multiplicador)
```  

Bajo esta fórmula, pudieras realizar un cálculo estimado por cada tipo de documento, siempre y cuando conocieras tu volumetría de cada uno, pero realmente solo tendrías un estimado y lo que no te especifican es vs que mides, es decir si estás bien o mal (pequeño detalle ¿no?), entonces sin temor a equivocarme el resultado de la fórmula tendrías que multiplicarlo por un precio de lista y ese sería tu costo.  

Lo que SAP te recomienda es inclinarte con su programa de adopción de este tipo de licenciamiento, el cual lo ha llamado **SAP Digital Access Adoption Program (DAAP)** y como paso inicial ofrece un servicio llamado **SAP Digital Access evaluation service** el cual especifica es sin costo adicional. Cabe mencionar que la fecha de vigencia del **DAAP** fue extendida al **31-dic-2021**, posterior a esa fecha ya no estará disponible este programa de adopción.  

#### ¿Debería adoptar el DAAP?  
SAP especifica que este modelo NO es obligatorio, por lo tanto, puedes decidir no adoptar este programa, pero corriendo el riesgo de no estar en cumplimiento ante alguna auditoría de SAP, al menos que estés 100% seguro(a) de que no saldrás con alguna diferencia ante un evento de auditoría.  

Por otro lado, lo que yo te recomendaría es SI dar el paso inicial a realizar el servicio de evaluación que te ofrece SAP, y ya con esto tendrías una certeza de conocer realmente como te encuentras ante este escenario de adopción del **DAAP**, y tomar una decisión final que se adapte a tu escenario.  

En el siguiente enlace, podrás encontrar la información oficial del [SAP Digital Access evaluation service](https://support.sap.com/en/my-support/systems-installations/system-measurement/digital-access-evaluation-service.html).  

#### Información adicional.  
SAP provee un proceso de estimación de volumen de documentos (los 9 mencionados), a través de un programa ABAP estándar, el cual viene desplegado dentro de las notas:  
- SAP S/4HANA - [2999672](https://launchpad.support.sap.com/#/notes/2999672)  
- SAP ECC – [2992090](https://launchpad.support.sap.com/#/notes/2992090)

> 💡 Las notas mencionadas en este post son las más recientes al mes de abril 2021.  

Como en toda nota de SAP, primero es leer detenidamente la documentación dentro del portal oficial [SAP LaunchPad](https://launchpad.support.sap.com/) y posteriormente continuar con lo siguiente:  
1. Identificar los sistemas relevantes o mejor dicho tus sistemas **CORE**: **S/4HANA** o **ECC**.  
2. Implementar la nota a través de la SNOTE típicamente en ambiente de desarrollo, claro de acuerdo con tu versión y validando bien los prerrequisitos.  
3. Identificar las interfases y procesos, así como los usuarios técnicos que los ejecutan.  
4. Ejecutar el reporte ABAP en el ambiente a realizar la medición (debería ser tu ambiente productivo) y claro previamente haber realizado el transporte en este ambiente.  

#### Conclusión.  
Este esquema de licenciamiento realmente no suena ni fácil ni amigable para las empresas, pero realmente si planeas continuar operando con tu sistema(s) SAP, si es recomendable evaluar lo que esta impulsando SAP en este programa, esto para mitigar el riesgo de que posteriormente puedas caer en algún incumplimiento que pueda detonar un costo adicional.  

Para más información puedes visitar el sitio oficial de [SAP Digital Access](https://discover.sap.com/digital-access/en-us/index.html).  

Gracias por leer! **TM**  
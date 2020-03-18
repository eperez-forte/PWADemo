import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  encuestas = [
    {
      id : 1,
      nombre : 'Nutrición',
      foto: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=631&q=80',
      preguntas : [
        {
          id : 1,
          pregunta : '¿Haz contratado alguna vez los servicios de un nutriólogo profesional para asesorar tu alimentación?',
          opciones : [
            {
              id : 1,
              opcion: 'Sí'
            },
            {
              id : 2,
              opcion: 'No'
            },
          ]
        },
        {
          id : 2,
          pregunta : '¿Crees que es necesario asesorarse con un nutriólogo profesional para obtener una mejor alimentación?',
          opciones : [
            {
              id : 1,
              opcion: 'Sí'
            },
            {
              id : 2,
              opcion: 'No'
            },
          ]
        },
        {
          id : 3,
          pregunta : '¿Te sientes cómodo siguiendo un plan de régimen alimentacio?',
          opciones : [
            {
              id : 1,
              opcion: 'Sí'
            },
            {
              id : 2,
              opcion: 'No'
            },
          ]
        },
        {
          id : 4,
          pregunta : '¿Haz pagado más de $500 mensuales en asesoramiento con un nutriólogo?',
          opciones : [
            {
              id : 1,
              opcion: 'Sí'
            },
            {
              id : 2,
              opcion: 'No'
            },
          ]
        },
        {
          id : 5,
          pregunta : '¿Estarías dispuesto(a) a pagar más de $500 mensuales en asesoramiento para tu alimentación?',
          opciones : [
            {
              id : 1,
              opcion: 'Sí'
            },
            {
              id : 2,
              opcion: 'No'
            },
          ]
        },
      ]
    },
    {
      id : 2,
      nombre : 'Odontología',
      foto: 'https://images.unsplash.com/photo-1445527815219-ecbfec67492e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      preguntas : [
        {
          id : 1,
          pregunta : '¿Cepillas tus dientes 3 veces (O más) al día?',
          opciones : [
            {
              id : 1,
              opcion: 'Sí'
            },
            {
              id : 2,
              opcion: 'No'
            },
          ]
        },
        {
          id : 2,
          pregunta : '¿Utilizas hilo dental para mayor limpieza dental?',
          opciones : [
            {
              id : 1,
              opcion: 'Sí'
            },
            {
              id : 2,
              opcion: 'No'
            },
          ]
        },
        {
          id : 3,
          pregunta : '¿Utilizas enjuague bucal para mayor limpieza dental?',
          opciones : [
            {
              id : 1,
              opcion: 'Sí'
            },
            {
              id : 2,
              opcion: 'No'
            },
          ]
        },
        {
          id : 4,
          pregunta : '¿Acudes 4 veces o más al año con tu dentista?',
          opciones : [
            {
              id : 1,
              opcion: 'Sí'
            },
            {
              id : 2,
              opcion: 'No'
            },
          ]
        },
        {
          id : 5,
          pregunta : '¿Estarías dispuesto(a) a pagar más de $500 mensuales en tu salud dental?',
          opciones : [
            {
              id : 1,
              opcion: 'Sí'
            },
            {
              id : 2,
              opcion: 'No'
            },
          ]
        }
      ]
    },
    {
      id : 3,
      nombre : 'Psicología',
      foto: 'https://cdn.pixabay.com/photo/2017/08/16/14/21/psychology-2647941_960_720.jpg',
      preguntas : [
        {
          id : 1,
          pregunta : '¿Haz tenido una consulta psicológica alguna vez en tu vida?',
          opciones : [
            {
              id : 1,
              opcion: 'Sí'
            },
            {
              id : 2,
              opcion: 'No'
            },
          ]
        },
        {
          id : 2,
          pregunta : '¿Estarías dispuesto a agendar una cita psicológica en caso de que sientas que necesitas ayuda?',
          opciones : [
            {
              id : 1,
              opcion: 'Sí'
            },
            {
              id : 2,
              opcion: 'No'
            },
          ]
        },
        {
          id : 3,
          pregunta : '¿Crees que es cierto que todos necesitamos acudir al psicólogo con frecuencia?',
          opciones : [
            {
              id : 1,
              opcion: 'Sí'
            },
            {
              id : 2,
              opcion: 'No'
            },
          ]
        },
        {
          id : 4,
          pregunta : '¿Haz tenido pensamientos negativos sobre tu vida durante el último mes?',
          opciones : [
            {
              id : 1,
              opcion: 'Sí'
            },
            {
              id : 2,
              opcion: 'No'
            },
          ]
        },
        {
          id : 5,
          pregunta : '¿Estarías dispuesto(a) a agendar una cita con tu psicólogo cada 15 días?',
          opciones : [
            {
              id : 1,
              opcion: 'Sí'
            },
            {
              id : 2,
              opcion: 'No'
            },
          ]
        }
      ]
    },
    {
      id : 4,
      nombre : 'Educación sexual',
      foto: 'https://images.unsplash.com/photo-1548377465-b4596450c828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80',
      preguntas : [
        {
          id : 1,
          pregunta : '¿Resultó satisfactoria la comunicación con sus padres acerca de temas sexuales?',
          opciones : [
            {
              id : 1,
              opcion: 'Sí'
            },
            {
              id : 2,
              opcion: 'No'
            },
          ]
        },
        {
          id : 2,
          pregunta : '¿Conoce usted que es un método anticonceptivo?',
          opciones : [
            {
              id : 1,
              opcion: 'Sí'
            },
            {
              id : 2,
              opcion: 'No'
            },
          ]
        },
        {
          id : 3,
          pregunta : '¿Conoce usted uno o más métodos anticonceptivos?',
          opciones : [
            {
              id : 1,
              opcion: 'Sí'
            },
            {
              id : 2,
              opcion: 'No'
            },
          ]
        },
        {
          id : 4,
          pregunta : '¿Conoce usted que es y consecuencias tiene en la salud una enfermedad de transmisión sexual?',
          opciones : [
            {
              id : 1,
              opcion: 'Sí'
            },
            {
              id : 2,
              opcion: 'No'
            },
          ]
        },
        {
          id : 5,
          pregunta : '¿Reconoces la importancia de los métodos anticonceptivos para evitar la transmisión de un ETS?',
          opciones : [
            {
              id : 1,
              opcion: 'Sí'
            },
            {
              id : 2,
              opcion: 'No'
            },
          ]
        }
      ]
    }
  ];


  constructor() { }

  getAllEncuestas() {
    return JSON.stringify(this.encuestas);
  }
}

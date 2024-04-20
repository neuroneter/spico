import type { Schema, Attribute } from '@strapi/strapi';

<<<<<<< HEAD
export interface ActividadesAlarma extends Schema.Component {
  collectionName: 'components_actividades_alarmas';
  info: {
    displayName: 'Alarma';
    icon: 'clock';
    description: '';
  };
  attributes: {
    Accion: Attribute.String & Attribute.Required;
    Alarma: Attribute.Time;
    Ciclo_Alarma: Attribute.Boolean & Attribute.DefaultTo<true>;
    Fecha: Attribute.Date;
    Ciclo_Fecha: Attribute.Boolean & Attribute.DefaultTo<true>;
    Ciclos: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<5>;
  };
}

export interface ActividadesAnimado extends Schema.Component {
  collectionName: 'components_actividades_animados';
  info: {
    displayName: 'Animado';
    icon: 'emotionHappy';
  };
  attributes: {
    Accion: Attribute.Text;
    Imagen: Attribute.Media;
    Color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Ciclo: Attribute.Component<'actividades.alarma'>;
  };
}

export interface ActividadesCFrases extends Schema.Component {
  collectionName: 'components_actividades_c_frases';
  info: {
    displayName: 'CFrases';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Ciclo: Attribute.Component<'actividades.alarma'>;
    categorias_frase: Attribute.Relation<
      'actividades.c-frases',
      'oneToOne',
      'api::categorias-frase.categorias-frase'
    >;
  };
}

export interface ActividadesEstadoEmoji extends Schema.Component {
  collectionName: 'components_actividades_estado_emojis';
  info: {
    displayName: 'Estado_emoji';
    icon: 'cloud';
    description: '';
  };
  attributes: {
    estado_de_animos: Attribute.Relation<
      'actividades.estado-emoji',
      'oneToMany',
      'api::estado-de-animo.estado-de-animo'
    >;
    Pregunta: Attribute.String;
  };
}

export interface FormulariosPregunta extends Schema.Component {
  collectionName: 'components_formularios_preguntas';
  info: {
    displayName: 'Pregunta';
    icon: 'file';
    description: '';
  };
  attributes: {
    Enunciado: Attribute.Text & Attribute.Required;
    Respuestas: Attribute.Component<'formularios.respuesta', true>;
    tipo_de_respuesta: Attribute.Relation<
      'formularios.pregunta',
      'oneToOne',
      'api::tipo-de-respuesta.tipo-de-respuesta'
    >;
    Unica_Respuesta: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface FormulariosRespuesta extends Schema.Component {
  collectionName: 'components_formularios_respuestas';
  info: {
    displayName: 'Respuesta';
    icon: 'chartBubble';
  };
  attributes: {
    Opcion: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'actividades.alarma': ActividadesAlarma;
      'actividades.animado': ActividadesAnimado;
      'actividades.c-frases': ActividadesCFrases;
      'actividades.estado-emoji': ActividadesEstadoEmoji;
      'formularios.pregunta': FormulariosPregunta;
      'formularios.respuesta': FormulariosRespuesta;
    }
  }
=======
declare module '@strapi/types' {
  export module Shared {}
>>>>>>> 54cd1e6d233d70ab41d6ca813b8b9d8081a1c5bf
}

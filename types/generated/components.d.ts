import type { Schema, Attribute } from '@strapi/strapi';

export interface ActividadesAlarma extends Schema.Component {
  collectionName: 'components_actividades_alarmas';
  info: {
    displayName: 'Alarma';
    icon: 'clock';
    description: '';
  };
  attributes: {
    Alarma: Attribute.Time;
    Ciclo_Alarma: Attribute.Boolean & Attribute.DefaultTo<true>;
    Ciclos: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<5>;
  };
}

export interface ActividadesAnimado extends Schema.Component {
  collectionName: 'components_actividades_animados';
  info: {
    displayName: 'Animado';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    Accion: Attribute.Text;
    Imagen: Attribute.Media;
    Color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Ciclo: Attribute.Component<'actividades.alarma'>;
    Nombre: Attribute.String & Attribute.Required;
  };
}

export interface ActividadesCFrases extends Schema.Component {
  collectionName: 'components_actividades_c_frases';
  info: {
    displayName: 'Ciclos';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Ciclo: Attribute.Component<'actividades.alarma'>;
    categoria: Attribute.Relation<
      'actividades.c-frases',
      'oneToOne',
      'api::categoria.categoria'
    >;
    Nombre: Attribute.String & Attribute.Required;
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

export interface ActividadesPasoAPaso extends Schema.Component {
  collectionName: 'components_actividades_paso_a_pasos';
  info: {
    displayName: 'Paso a Paso';
    icon: 'grid';
    description: '';
  };
  attributes: {
    Nombre: Attribute.String;
    Lista_de_pasos: Attribute.Component<'actividades.paso', true>;
  };
}

export interface ActividadesPaso extends Schema.Component {
  collectionName: 'components_actividades_pasos';
  info: {
    displayName: 'Paso';
    icon: 'check';
    description: '';
  };
  attributes: {
    Actividad: Attribute.String & Attribute.Required;
    Imagen: Attribute.Media;
    Audio: Attribute.Media;
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
      'actividades.paso-a-paso': ActividadesPasoAPaso;
      'actividades.paso': ActividadesPaso;
      'formularios.pregunta': FormulariosPregunta;
      'formularios.respuesta': FormulariosRespuesta;
    }
  }
}
